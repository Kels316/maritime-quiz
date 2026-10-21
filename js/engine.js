/* Maritime Quiz – engine: deterministic daily selection + question helpers */
(function () {
  'use strict';

  /* ---------- topics ---------- */
  const TOPICS = {
    encounter:  { label: 'COLREGS situation',            short: 'Situation', color: '#4aa3ff' },
    rules:      { label: 'COLREGS rules',                short: 'Rules',     color: '#5b8def' },
    lights:     { label: 'Lights, shapes & signals',     short: 'Lights',    color: '#f5c542' },
    marks:      { label: 'Buoyage & light characters',   short: 'Marks',     color: '#ef6a5b' },
    nav:        { label: 'Navigation & chartwork',       short: 'Nav',       color: '#3fc1a5' },
    plan:       { label: 'Passage planning & checks',    short: 'Planning',  color: '#2fa58c' },
    tides:      { label: 'Tides & tidal streams',        short: 'Tides',     color: '#46b6d9' },
    weather:    { label: 'Weather',                      short: 'Weather',   color: '#8c9bd6' },
    seamanship: { label: 'Seamanship & deck work',       short: 'Seamanship',color: '#e1a15b' },
    fire:       { label: 'Fire safety',                  short: 'Fire',      color: '#f0743c' },
    whs:        { label: 'WHS, crew & emergencies',      short: 'WHS',       color: '#c98ad6' },
    engines:    { label: 'Engines, electrics & upkeep',  short: 'Engines',   color: '#9aa7b4' },
    sar:        { label: 'SAR, radio & beacons',         short: 'SAR',       color: '#e86a8f' },
    towing:     { label: 'Towing',                       short: 'Towing',    color: '#b0b84a' }
  };

  /* one entry per daily slot; a slot with several topics rotates through them day by day */
  const SLOTS = [
    ['encounter'],
    ['encounter'],
    ['rules'],
    ['lights'],
    ['marks'],
    ['nav'],
    ['tides', 'weather', 'plan'],
    ['seamanship', 'engines'],
    ['fire', 'whs'],
    ['sar', 'towing']
  ];

  const EPOCH_DAY = Date.UTC(2026, 0, 1) / 86400000;

  /* ---------- utilities ---------- */
  function pad(n) { return String(n).padStart(2, '0'); }
  function todayStr() {
    const d = new Date();
    return d.getFullYear() + '-' + pad(d.getMonth() + 1) + '-' + pad(d.getDate());
  }
  function dayNumber(dateStr) {
    const p = dateStr.split('-').map(Number);
    return Math.round(Date.UTC(p[0], p[1] - 1, p[2]) / 86400000) - EPOCH_DAY;
  }
  function addDays(dateStr, n) {
    const p = dateStr.split('-').map(Number);
    const d = new Date(Date.UTC(p[0], p[1] - 1, p[2] + n));
    return d.getUTCFullYear() + '-' + pad(d.getUTCMonth() + 1) + '-' + pad(d.getUTCDate());
  }
  function hash(str) {
    let h = 2166136261;
    for (let i = 0; i < str.length; i++) { h ^= str.charCodeAt(i); h = Math.imul(h, 16777619); }
    return h >>> 0;
  }
  function mulberry32(a) {
    return function () {
      a |= 0; a = (a + 0x6D2B79F5) | 0;
      let t = Math.imul(a ^ (a >>> 15), 1 | a);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }
  function rngFor() { return mulberry32(hash(Array.prototype.join.call(arguments, '|'))); }
  function shuffle(arr, rng) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(rng() * (i + 1));
      const t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }
  function pick(arr, rng) { return arr[Math.floor(rng() * arr.length)]; }
  function randInt(rng, lo, hi) { return lo + Math.floor(rng() * (hi - lo + 1)); }

  /* ---------- question bank ---------- */
  const BANK = {};          // topic -> [question]
  const GENS = {};          // gen name -> {topic, weight, fn}
  Object.keys(TOPICS).forEach(function (t) { BANK[t] = []; });

  /* Q(topic, text, correct, [wrong x3], why, src, vis) */
  function Q(topic, q, correct, wrongs, why, src, vis) {
    if (!BANK[topic]) throw new Error('bad topic ' + topic);
    const item = { id: 's' + hash(topic + q + '|' + correct).toString(36), topic: topic, q: q, correct: correct, wrongs: wrongs, why: why || '', src: src || '' };
    if (vis) item.vis = vis;
    BANK[topic].push(item);
    return item;
  }
  /* add(topic, [{q, a, w:[3 wrong], why, src, vis}]) – data-file friendly wrapper */
  function add(topic, list) { list.forEach(function (o) { Q(topic, o.q, o.a, o.w, o.why, o.src, o.vis); }); }
  function registerGen(name, topic, weight, fn) { GENS[name] = { topic: topic, weight: weight || 1, fn: fn }; }

  /* turn {correct, wrongs} into a presentable question with shuffled options */
  function present(item, rng) {
    const opts = [{ t: item.correct, ok: true }].concat(item.wrongs.map(function (w) { return { t: w, ok: false }; }));
    const sh = shuffle(opts, rng);
    return {
      id: item.id, topic: item.topic, q: item.q, vis: item.vis || null,
      options: sh.map(function (o) { return o.t; }),
      answer: sh.findIndex(function (o) { return o.ok; }),
      why: item.why, src: item.src
    };
  }

  function genInstance(name, seedParts) {
    const g = GENS[name];
    const rng = rngFor.apply(null, ['gen', name].concat(seedParts));
    let item = g.fn(rng);
    item.topic = g.topic;
    item.id = 'g-' + name + '-' + hash(item.q + '|' + item.correct).toString(36);
    return present(item, rng);
  }

  /* ---------- deck handling ---------- */
  function deckEntries(topic) {
    const list = BANK[topic].map(function (q) { return { s: q }; });
    Object.keys(GENS).forEach(function (n) {
      if (GENS[n].topic === topic) for (let i = 0; i < GENS[n].weight; i++) list.push({ g: n, k: i });
    });
    return list;
  }
  const deckCache = {};
  function deckFor(topic, cycle) {
    const key = topic + '#' + cycle;
    if (!deckCache[key]) {
      const entries = deckEntries(topic);
      /* fixed ordering before shuffling so the deck is stable for a given bank */
      entries.sort(function (a, b) {
        const ka = a.s ? a.s.id : 'g:' + a.g + a.k, kb = b.s ? b.s.id : 'g:' + b.g + b.k;
        return ka < kb ? -1 : ka > kb ? 1 : 0;
      });
      deckCache[key] = shuffle(entries, rngFor('deck', topic, cycle));
    }
    return deckCache[key];
  }

  /* the 10 questions for a calendar date – identical on every device */
  function dailySet(dateStr) {
    const dn = dayNumber(dateStr);
    const ptr = {};
    const lens = {};
    Object.keys(TOPICS).forEach(function (t) { lens[t] = deckEntries(t).length; });
    let result = [];
    for (let d = 0; d <= Math.max(dn, 0); d++) {
      const todays = [];
      for (let s = 0; s < SLOTS.length; s++) {
        const topic = SLOTS[s][(d + s) % SLOTS[s].length];
        if (!lens[topic]) continue;
        const p = ptr[topic] || 0; ptr[topic] = p + 1;
        if (d === dn) todays.push({ topic: topic, p: p, slot: s });
      }
      if (d === dn) result = todays;
    }
    return result.map(function (r) {
      const n = lens[r.topic];
      const e = deckFor(r.topic, Math.floor(r.p / n))[r.p % n];
      if (e.g) return genInstance(e.g, [dateStr, r.slot]);
      return present(e.s, rngFor('opts', e.s.id, dateStr));
    });
  }

  /* practice: weighted random from chosen topics, favouring never-seen / often-missed questions */
  function practiceSet(topics, count, qstats) {
    const pool = [];
    topics.forEach(function (t) {
      BANK[t].forEach(function (q) {
        const st = qstats[q.id];
        let w = 3;
        if (st) { w = st.lastOk ? 1 : 5; if (st.n > 4 && st.ok / st.n > 0.9) w = 0.5; }
        pool.push({ q: q, w: w });
      });
      Object.keys(GENS).forEach(function (n) { if (GENS[n].topic === t) pool.push({ g: n, w: 2 * GENS[n].weight }); });
    });
    const out = [], used = {};
    let guard = 0;
    while (out.length < count && pool.length && guard++ < 2000) {
      let tot = 0; pool.forEach(function (p) { tot += p.w; });
      let r = Math.random() * tot, chosen = pool[0];
      for (let i = 0; i < pool.length; i++) { r -= pool[i].w; if (r <= 0) { chosen = pool[i]; break; } }
      const rng = rngFor('practice', Date.now(), guard);
      if (chosen.g) {
        const inst = genInstance(chosen.g, ['practice', Date.now(), guard]);
        if (!used[inst.id]) { used[inst.id] = 1; out.push(inst); }
      } else if (!used[chosen.q.id]) {
        used[chosen.q.id] = 1; out.push(present(chosen.q, rng));
      }
    }
    return out;
  }

  function counts() {
    const c = {}; let total = 0;
    Object.keys(BANK).forEach(function (t) { c[t] = BANK[t].length; total += BANK[t].length; });
    return { byTopic: c, total: total };
  }

  window.MQ = {
    TOPICS: TOPICS, SLOTS: SLOTS, BANK: BANK, GENS: GENS,
    Q: Q, add: add, registerGen: registerGen, present: present, genInstance: genInstance,
    dailySet: dailySet, practiceSet: practiceSet, counts: counts,
    util: { pad: pad, todayStr: todayStr, dayNumber: dayNumber, addDays: addDays, hash: hash, rngFor: rngFor, shuffle: shuffle, pick: pick, randInt: randInt }
  };
})();

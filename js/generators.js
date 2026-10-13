/* Maritime Quiz – generated questions (fresh numbers / diagrams each time) */
(function () {
  'use strict';
  const MQ = window.MQ, U = MQ.util;
  const R = U.randInt, P = U.pick;

  function norm(a) { a = a % 360; return a < 0 ? a + 360 : a; }
  function b3(n) { return String(Math.round(norm(n)) % 360).padStart(3, '0') + '°'; }
  function r1(x) { return (Math.round(x * 10) / 10).toFixed(1); }
  function uniq(correct, cands, n) {
    const out = [], seen = {}; seen[correct] = 1;
    cands.forEach(function (c) { if (c != null && !seen[c] && out.length < n) { seen[c] = 1; out.push(c); } });
    return out;
  }
  function ew(x) { return x === 0 ? '0°' : Math.abs(x) + '°' + (x > 0 ? 'E' : 'W'); }
  function hhmm(mins) { mins = ((mins % 1440) + 1440) % 1440; return String(Math.floor(mins / 60)).padStart(2, '0') + String(mins % 60).padStart(2, '0'); }

  /* =====================================================================
     COLREGS encounter geometry
     ===================================================================== */
  function solveHeading(b, vo, vx, root) {
    const rad = b * Math.PI / 180, c = Math.cos(rad);
    const disc = vo * vo * c * c - vo * vo + vx * vx;
    if (disc < 0) return null;
    const s = Math.sqrt(disc);
    const k = root === 'hi' ? vo * c + s : vo * c - s;
    if (k < 0.8) return null;
    return norm(Math.atan2(-k * Math.sin(rad), vo - k * c) * 180 / Math.PI);
  }
  function near(x, t, m) { return Math.abs(x - t) < m; }
  /* b = bearing of other from you (relative, clockwise); h = other's heading relative to yours */
  function classify(b, h) {
    b = norm(b);
    const a = norm(b + 180 - h);              // where YOU lie relative to the OTHER's bow
    if (b > 112.5 && b < 247.5) return { kind: 'over_other', a: a };
    if (a > 112.5 && a < 247.5) return { kind: 'over_me', a: a };
    if ((b <= 10 || b >= 350) && (a <= 10 || a >= 350)) return { kind: 'head', a: a };
    return { kind: b < 180 ? 'cross_give' : 'cross_stand', a: a };
  }
  function borderline(b, a) {
    return near(b, 112.5, 7) || near(b, 247.5, 7) || near(a, 112.5, 7) || near(a, 247.5, 7);
  }
  function sideDesc(b) {
    b = norm(b);
    if (b <= 10 || b >= 350) return 'almost dead ahead';
    const side = b < 180 ? 'starboard' : 'port';
    const d = b < 180 ? b : 360 - b;
    if (d <= 45) return 'fine on your ' + side + ' bow';
    if (d <= 80) return 'on your ' + side + ' bow';
    if (d <= 100) return 'abeam on your ' + side + ' side';
    if (d <= 157.5) return 'on your ' + side + ' quarter';
    return 'almost astern';
  }
  const STATEMENTS = {
    over_me:     'Overtaking (Rule 13): you are overtaking, so keep well clear until finally past and clear',
    over_other:  'Overtaking (Rule 13): you are being overtaken, so stand on (Rule 17) and hold course and speed',
    head:        'Head-on (Rule 14): both vessels alter course to starboard and pass port side to port side',
    cross_give:  'Crossing (Rule 15): the other vessel is on your starboard side, so you give way and avoid crossing ahead of it',
    cross_stand: 'Crossing (Rule 15): the other vessel is on your port side, so you stand on (Rule 17) and hold course and speed',
    prio:        null
  };
  function sample(rng, want) {
    for (let i = 0; i < 80; i++) {
      const vo = R(rng, 8, 14);
      let b, vx, root = 'hi';
      switch (want) {
        case 'cross_give':  b = R(rng, 25, 100); vx = R(rng, 6, 16); break;
        case 'cross_stand': b = R(rng, 260, 335); vx = R(rng, 6, 16); break;
        case 'head':        b = R(rng, -7, 7); vx = R(rng, 6, 14); break;
        case 'over_other':  b = R(rng, 140, 220); vx = vo + R(rng, 3, 8); break;
        case 'over_me':     b = R(rng, -22, 22); vx = vo - R(rng, 3, 6); root = 'lo'; break;
      }
      const h = solveHeading(b, vo, vx, root);
      if (h == null) continue;
      const c = classify(b, h);
      if (c.kind !== want || borderline(norm(b), c.a)) continue;
      return { b: norm(b), h: Math.round(h), a: c.a, vo: vo, vx: vx };
    }
    return null;
  }
  function explain(want, s) {
    const bd = b3(s.b), hd = b3(s.h);
    const tail = ' A steady bearing with closing range means risk of collision exists (Rule 7).';
    switch (want) {
      case 'cross_give':  return 'The other vessel bears ' + bd + ' relative – on your starboard side – and its heading (' + hd + ' relative) takes it across your bow. Rule 15: the vessel that has the other on her own starboard side gives way. Take early, substantial action and avoid crossing ahead (Rules 8 and 16).' + tail;
      case 'cross_stand': return 'The other vessel bears ' + bd + ' relative – on your port side – so it has you on its starboard side and must give way. You are the stand-on vessel (Rule 17): hold course and speed, but be ready to act alone if it does not keep clear.' + tail;
      case 'head':        return 'Nearly reciprocal courses with the other vessel almost dead ahead: Rule 14. Each vessel alters course to starboard so they pass port-to-port. If in any doubt whether it is head-on, assume it is.' + tail;
      case 'over_other':  return 'The other vessel is ' + bd + ' relative – more than 22.5° abaft your beam (anywhere from 112.5° to 247.5°) – so it is overtaking you. Rule 13 makes the overtaking vessel keep clear until finally past; you stand on. By night it would see only your stern light.' + tail;
      case 'over_me':     return 'You are coming up on the other vessel from more than 22.5° abaft its beam (it would see only your stern light at night), so you are the overtaking vessel (Rule 13). You must keep clear until finally past and clear – even if the bearing later changes.' + tail;
    }
    return '';
  }
  function optionsFor(want, rng) {
    const all = ['over_me', 'over_other', 'head', 'cross_give', 'cross_stand'];
    const wrong = U.shuffle(all.filter(function (k) { return k !== want; }), rng).slice(0, 3);
    return { correct: STATEMENTS[want], wrongs: wrong.map(function (k) { return STATEMENTS[k]; }) };
  }

  /* 1. COLREGS situation, daytime, power vs power or vs vessel with priority */
  MQ.registerGen('encounter', 'encounter', 6, function (rng) {
    const special = rng() < 0.3;
    if (!special) {
      const want = P(['cross_give', 'cross_stand', 'cross_give', 'cross_stand', 'head', 'over_other', 'over_me'], rng);
      const s = sample(rng, want) || sample(rng, 'cross_give');
      const wk = classify(s.b, s.h).kind;
      const o = optionsFor(wk, rng);
      return {
        q: 'You are the blue vessel: power-driven, heading up the page at ' + s.vo + ' kn, in open water by day. The other power-driven vessel is ' + sideDesc(s.b) + ' (' + b3(s.b) + ' relative), heading ' + b3(s.h) + ' relative at ' + s.vx + ' kn. Its bearing is steady and the range is closing. What applies?',
        correct: o.correct, wrongs: o.wrongs, why: explain(wk, s),
        src: 'COLREGS Rules 7, 13–17 · MARI003',
        vis: { k: 'enc', b: s.b, h: s.h, label: 'POWER-DRIVEN', alt: 'Two vessels, you heading up the page' }
      };
    }
    /* vessel with priority under Rule 18 */
    const types = [
      { label: 'SAILING (no engine)', say: 'a sailing vessel under sail alone', sail: true, vx: [3, 7], why: 'A power-driven vessel underway must keep out of the way of a sailing vessel (Rule 18(a)).' },
      { label: 'FISHING (nets out)', say: 'a vessel engaged in fishing (two black cones, apexes together)', vx: [2, 5], why: 'A power-driven vessel underway must keep out of the way of a vessel engaged in fishing (Rule 18(a)). The two cones apex-to-apex are the day shape for fishing.' },
      { label: 'NOT UNDER COMMAND', say: 'a vessel showing two black balls in a vertical line', still: true, why: 'Two balls = vessel not under command. A power-driven vessel must keep out of her way (Rule 18(a)) – she cannot manoeuvre as the rules require.' },
      { label: 'RESTRICTED (RAM)', say: 'a vessel showing a ball, diamond, ball in a vertical line', still: true, why: 'Ball–diamond–ball = vessel restricted in her ability to manoeuvre. A power-driven vessel must keep out of her way (Rule 18(a)).' }
    ];
    const t = P(types, rng);
    let b, h = 0, vo = R(rng, 8, 14);
    if (t.still) { b = P([-1, 1], rng) * R(rng, 10, 40); h = R(rng, 0, 359); b = norm(b); }
    else {
      for (let i = 0; i < 60; i++) {
        const side = rng() < 0.6 ? -1 : 1;           // 60% port side, where you would normally stand on
        const bb = norm(side * R(rng, 25, 95));
        const vx = R(rng, t.vx[0], t.vx[1]);
        const hh = solveHeading(bb, vo, vx, 'hi');
        if (hh == null) continue;
        const c = classify(bb, hh);
        if (c.kind === 'over_other' || borderline(bb, c.a)) continue;
        b = bb; h = Math.round(hh); break;
      }
      if (b == null) { b = 300; h = 70; }
    }
    const portSide = b > 180;
    const stmt = 'Rule 18: you are a power-driven vessel and must keep out of the way of ' + (t.sail ? 'a sailing vessel' : t.label.indexOf('FISH') === 0 ? 'a vessel engaged in fishing' : t.label.indexOf('NOT') === 0 ? 'a vessel not under command' : 'a vessel restricted in her ability to manoeuvre');
    const wrongs = [STATEMENTS.cross_stand, STATEMENTS.head, STATEMENTS.over_other];
    return {
      q: 'You are the blue vessel: power-driven, heading up the page at ' + vo + ' kn, in open water by day. Ahead of you is ' + t.say + ', ' + sideDesc(b) + ' (' + b3(b) + ' relative)' + (t.still ? ', making no way' : ', heading ' + b3(h) + ' relative') + '. The range is closing. Which statement is correct?',
      correct: stmt, wrongs: wrongs,
      why: t.why + (portSide ? ' It is on your port side, but the “vessel on the port side stands on” idea only applies between two power-driven vessels crossing.' : ''),
      src: 'COLREGS Rule 18 · MARI003',
      vis: { k: 'enc', b: b, h: h, label: t.label, sail: !!t.sail, moving: !t.still, alt: 'Two vessels, you heading up the page' }
    };
  });

  /* 2. Lights seen at night */
  MQ.registerGen('aspect', 'encounter', 4, function (rng) {
    const want = P(['cross_give', 'cross_stand', 'head', 'over_other', 'over_me', 'cross_give', 'cross_stand'], rng);
    const s = sample(rng, want) || sample(rng, 'cross_give');
    const wk = classify(s.b, s.h).kind;
    const a = s.a, ap = a > 180 ? a - 360 : a;           // signed aspect, + = you are on its starboard side
    const big = rng() < 0.3;
    const items = [];
    const mast = Math.abs(ap) <= 112.5;
    if (mast) { items.push({ c: 'white', x: 100, y: big ? 56 : 52 }); if (big) items.push({ c: 'white', x: 100, y: 36 }); }
    let note;
    if (!mast) { items.push({ c: 'white', x: 100, y: 84 }); note = 'only a white stern light'; }
    else if (Math.abs(ap) <= 4) { items.push({ c: 'red', x: 124, y: 84 }, { c: 'green', x: 76, y: 84 }); note = 'masthead light(s) with red and green sidelights together'; }
    else if (ap > 0) { items.push({ c: 'green', x: 100, y: 84 }); note = 'masthead light(s) with a green sidelight only'; }
    else { items.push({ c: 'red', x: 100, y: 84 }); note = 'masthead light(s) with a red sidelight only'; }
    const o = optionsFor(wk, rng);
    const lightWhy = {
      cross_give:  'You see its RED (port) sidelight, so you are on its port side and it is on yours: crossing, and you give way.',
      cross_stand: 'You see its GREEN (starboard) sidelight, so you are on its starboard side – it must give way and you stand on.',
      head:        'Red and green together with the masthead lights open means you are looking at its bow: head-on, both alter to starboard.',
      over_other:  'It is astern of you, within the sector where a vessel is overtaking (more than 22.5° abaft your beam). The overtaking vessel keeps clear; you stand on.',
      over_me:     'Only a white stern light is visible, so you are astern of it, in the 135° stern-light arc: you are the overtaking vessel and must keep clear.'
    };
    return {
      q: 'At night you are heading up the page. Another power-driven vessel bears ' + b3(s.b) + ' relative (' + sideDesc(s.b) + '). The bearing is steady and the range is closing. You see the lights shown (' + note + '). What applies?',
      correct: o.correct, wrongs: o.wrongs,
      why: lightWhy[wk] + ' (Masthead light 225°, sidelights 112.5° each, stern light 135°.)',
      src: 'COLREGS Rules 13–15, 21–23 · MARI003',
      vis: { k: 'lights', items: items, alt: 'Lights of another vessel seen at night' }
    };
  });

  /* =====================================================================
     Navigation arithmetic
     ===================================================================== */
  function signed(rng) { let v = R(rng, 1, 14); return rng() < 0.5 ? v : -v; }
  function signedD(rng) { let v = R(rng, 1, 5); return rng() < 0.5 ? v : -v; }

  MQ.registerGen('compass_t2c', 'nav', 3, function (rng) {
    const V = signed(rng), D = signedD(rng), T = 5 * R(rng, 2, 70);
    const C = T - V - D;
    const cand = [T + V - D, T - V + D, T + V + D, T - V, T + V];
    const ok = b3(C);
    return {
      q: 'Your chart track is ' + b3(T) + 'T. Variation is ' + ew(V) + ' and the deviation card gives ' + ew(D) + ' on this heading. What do you steer by the steering compass?',
      correct: ok, wrongs: uniq(ok, cand.map(b3), 3),
      why: 'True → Magnetic → Compass (variation, then deviation): subtract easterly errors, add westerly ones. ' + b3(T) + ' ' + (V > 0 ? '−' : '+') + ' ' + Math.abs(V) + '° = ' + b3(T - V) + 'M; then ' + (D > 0 ? '−' : '+') + ' ' + Math.abs(D) + '° = ' + ok + 'C. Check the other way: compass + deviation + variation must give back ' + b3(T) + 'T.',
      src: 'Passage Planning Guide – Compass errors'
    };
  });
  MQ.registerGen('compass_c2t', 'nav', 3, function (rng) {
    const V = signed(rng), D = signedD(rng), C = 5 * R(rng, 2, 70);
    const T = C + D + V;
    const cand = [C - D + V, C + D - V, C - D - V, C + V, C + D];
    const ok = b3(T);
    return {
      q: 'You take a bearing of a charted tower using the azimuth ring on the steering compass: ' + b3(C) + 'C, with the ship\'s head on a heading where deviation is ' + ew(D) + '. Variation is ' + ew(V) + '. What true bearing do you plot?',
      correct: ok, wrongs: uniq(ok, cand.map(b3), 3),
      why: 'Compass → Magnetic → True (deviation, then variation): add easterly errors, subtract westerly. ' + b3(C) + ' ' + (D > 0 ? '+' : '−') + ' ' + Math.abs(D) + '° = ' + b3(C + D) + 'M; ' + (V > 0 ? '+' : '−') + ' ' + Math.abs(V) + '° = ' + ok + 'T. (With a hand-bearing compass held clear of ironwork you would apply variation only.)',
      src: 'Passage Planning Guide – Compass errors'
    };
  });
  MQ.registerGen('compass_err', 'nav', 2, function (rng) {
    let V, D, E;
    do { V = signed(rng); D = signedD(rng); E = V + D; } while (E === 0);
    const ok = ew(E);
    return {
      q: 'Variation is ' + ew(V) + ' and deviation on your heading is ' + ew(D) + '. What is the total compass error?',
      correct: ok, wrongs: uniq(ok, [ew(-E), ew(Math.abs(V) + Math.abs(D)), ew(-(Math.abs(V) + Math.abs(D))), ew(V - D), ew(D - V), ew(Math.abs(V) - Math.abs(D)), ew(E + 1), ew(E - 1), ew(-E + 2), ew(E + 3)], 3),
      why: 'Same names add; opposite names subtract and take the name of the larger. ' + ew(V) + ' and ' + ew(D) + ' give ' + ok + '.',
      src: 'Passage Planning Guide – Compass errors'
    };
  });
  MQ.registerGen('sdt', 'nav', 3, function (rng) {
    const kind = R(rng, 1, 4);
    if (kind === 1) {
      const S = P([6, 8, 9, 10, 12, 15, 18, 20, 22], rng), mins = R(rng, 12, 150);
      const d = Math.round(S * mins / 6) / 10, dep = R(rng, 5 * 60, 17 * 60), t = Math.ceil(d / S * 60);
      const ok = hhmm(dep + t);
      return {
        q: 'A leg measures ' + d.toFixed(1) + ' nm. You expect to make good ' + S + ' kn and leave the waypoint at ' + hhmm(dep) + '. What is your ETA at the next waypoint (rounded up to the minute)?',
        correct: ok, wrongs: uniq(ok, [hhmm(dep + Math.floor(d / S * 100)), hhmm(dep + t + 10), hhmm(dep + Math.max(1, t - 10)), hhmm(dep + Math.round(d * S))], 3),
        why: 'Time = distance ÷ speed = ' + d.toFixed(1) + ' ÷ ' + S + ' = ' + (d / S).toFixed(3) + ' h = ' + t + ' min. ' + hhmm(dep) + ' + ' + t + ' min = ' + ok + '. Convert hours to minutes by ×60 – don\'t read decimal hours as minutes.',
        src: 'Passage Planning Guide – Speed, distance, time'
      };
    }
    if (kind === 2) {
      const S = P([6, 8, 10, 12, 15], rng), mins = P([15, 20, 30, 40, 45, 60, 90], rng), d = Math.round(S * mins / 60 * 10) / 10;
      const sm = d * 60 / mins, ok = r1(sm) + ' kn';
      return {
        q: 'Between two fixes ' + mins + ' minutes apart you cover ' + d.toFixed(1) + ' nm over the ground. What is your speed made good?',
        correct: ok, wrongs: uniq(ok, [r1(d / mins) + ' kn', r1(d * mins / 60) + ' kn', r1(sm + 2) + ' kn', r1(Math.max(1, sm - 2)) + ' kn'], 3),
        why: 'Speed = distance × 60 ÷ minutes = ' + d.toFixed(1) + ' × 60 ÷ ' + mins + ' = ' + ok + '. Recalculate remaining ETAs on speed made good, not intended speed.',
        src: 'Passage Planning Guide – Speed made good'
      };
    }
    if (kind === 3) {
      const S = P([8, 10, 12, 15, 18, 20, 24, 30], rng), ok = r1(S / 10) + ' nm';
      return {
        q: 'Using the 6-minute rule, how far do you travel in 6 minutes at ' + S + ' knots?',
        correct: ok, wrongs: uniq(ok, [r1(S / 6) + ' nm', r1(S) + ' nm', r1(S / 100) + ' nm', r1(S * 0.6) + ' nm'], 3),
        why: '6 minutes is one tenth of an hour, so you cover one tenth of your speed in nautical miles: ' + S + ' ÷ 10 = ' + ok + '.',
        src: 'Passage Planning Guide – The 6-minute rule'
      };
    }
    const dep = R(rng, 21 * 60, 23 * 60 + 45), t = R(rng, 3 * 60, 6 * 60);
    const ok = hhmm(dep + t);
    return {
      q: 'You leave at ' + hhmm(dep) + ' and the passage will take ' + Math.floor(t / 60) + ' h ' + (t % 60) + ' min. What time do you arrive?',
      correct: ok + ' (next day)', wrongs: uniq(ok + ' (next day)', [hhmm(dep + t) + ' (same day)', hhmm(dep + t + 60) + ' (next day)', hhmm(dep + t - 60) + ' (next day)', hhmm(dep + Math.round((Math.floor(t / 60) + (t % 60) / 100) * 60)) + ' (next day)'], 3),
      why: hhmm(dep) + ' + ' + Math.floor(t / 60) + ':' + String(t % 60).padStart(2, '0') + ' goes past 2400, so carry into the next day: arrival ' + ok + '. Carry in sixties for minutes and twenty-fours for hours.',
      src: 'Passage Planning Guide – Days, hours and minutes'
    };
  });
  MQ.registerGen('dlat', 'nav', 2, function (rng) {
    const d1 = R(rng, 28, 36), m1 = R(rng, 5, 58), d2 = d1 - R(rng, 1, 3), m2 = R(rng, 3, 58);
    const north = rng() < 0.5;
    const lat1 = north ? [d1, m1] : [d2, m2], lat2 = north ? [d2, m2] : [d1, m1];
    const from = lat1[0] * 60 + lat1[1], to = lat2[0] * 60 + lat2[1];
    const dist = Math.abs(from - to), dir = to < from ? 'north' : 'south';
    const opp = dir === 'north' ? 'south' : 'north';
    const dd = Math.abs(lat1[0] - lat2[0]), dm = Math.abs(lat1[1] - lat2[1]);
    const ok = dist + ' nm ' + dir;
    return {
      q: 'A vessel stays on one meridian and changes latitude from ' + lat1[0] + '°' + String(lat1[1]).padStart(2, '0') + '′ S to ' + lat2[0] + '°' + String(lat2[1]).padStart(2, '0') + '′ S. How far has it gone, and in what direction?',
      correct: ok, wrongs: uniq(ok, [dist + ' nm ' + opp, Math.round((dd + dm / 100) * 60) + ' nm ' + dir, (dist + 60) + ' nm ' + dir, Math.abs(dist - 60) + ' nm ' + dir], 3),
      why: 'Southern-hemisphere latitude getting smaller means moving towards the equator, i.e. north. Difference of latitude in minutes = ' + dist + '′, and 1′ of latitude = 1 nm, so ' + dist + ' nm ' + dir + '. Borrow 60′ per degree – don\'t treat the minutes as decimals.',
      src: 'Passage Planning Guide – Latitude and distance'
    };
  });

  /* =====================================================================
     Tides
     ===================================================================== */
  MQ.registerGen('tide_depth', 'tides', 3, function (rng) {
    const ch = R(rng, 8, 30) / 10, tide = R(rng, 3, 22) / 10, dr = R(rng, 6, 15) / 10, cl = P([0.5, 0.8, 1.0], rng);
    if (rng() < 0.5) {
      const actual = ch + tide, ukc = actual - dr, ok = r1(ukc) + ' m';
      return {
        q: 'A bar has a charted depth of ' + r1(ch) + ' m. The height of tide is ' + r1(tide) + ' m and your vessel draws ' + r1(dr) + ' m. What is the clearance under the keel?',
        correct: ok, wrongs: uniq(ok, [r1(ch - tide - dr) + ' m', r1(actual) + ' m', r1(Math.abs(ch - dr)) + ' m', r1(actual + dr) + ' m'], 3),
        why: 'Actual depth = charted depth + height of tide = ' + r1(ch) + ' + ' + r1(tide) + ' = ' + r1(actual) + ' m. Under-keel clearance = actual depth − draught = ' + r1(actual) + ' − ' + r1(dr) + ' = ' + ok + '.',
        src: 'Passage Planning Guide – Tidal variation and charted depths'
      };
    }
    const need = dr + cl - ch, ok = r1(need) + ' m';
    return {
      q: 'A bar is charted at ' + r1(ch) + ' m. You draw ' + r1(dr) + ' m and need ' + r1(cl) + ' m under the keel. What minimum height of tide do you need to cross?',
      correct: ok, wrongs: uniq(ok, [r1(dr + cl + ch) + ' m', r1(ch + cl - dr) + ' m', r1(dr + cl) + ' m', r1(ch - dr - cl) + ' m'], 3),
      why: 'Water needed = draught + clearance = ' + r1(dr) + ' + ' + r1(cl) + ' = ' + r1(dr + cl) + ' m. Height of tide needed = water needed − charted depth = ' + r1(dr + cl) + ' − ' + r1(ch) + ' = ' + ok + '.',
      src: 'Passage Planning Guide – Tidal variation and charted depths'
    };
  });
  MQ.registerGen('twelfths', 'tides', 3, function (rng) {
    const cum = [0, 1, 3, 6, 9, 11, 12];
    const lw = R(rng, 2, 8) / 10, step = P([0.1, 0.2, 0.3], rng), range = step * 12, hw = lw + range;
    const n = R(rng, 1, 5), rising = rng() < 0.6;
    const h = rising ? lw + step * cum[n] : hw - step * cum[n];
    const ok = r1(h) + ' m';
    const lin = rising ? lw + range * n / 6 : hw - range * n / 6;
    const alt = rising ? lw + step * cum[n - 1] : hw - step * cum[n - 1];
    const alt2 = rising ? lw + step * cum[n + 1] : hw - step * cum[n + 1];
    return {
      q: 'Low water is ' + r1(lw) + ' m and the next high water is ' + r1(hw) + ' m (a range of ' + r1(range) + ' m). Using the rule of twelfths, estimate the height of tide ' + n + ' hour' + (n > 1 ? 's' : '') + ' after ' + (rising ? 'low' : 'high') + ' water (' + (rising ? 'rising' : 'falling') + ').',
      correct: ok, wrongs: uniq(ok, [r1(lin) + ' m', r1(alt) + ' m', r1(alt2) + ' m', r1(rising ? lw + step * n : hw - step * n) + ' m', r1(h + 0.3) + ' m', r1(Math.max(0.1, h - 0.3)) + ' m', r1(h + 0.6) + ' m', r1(h + 0.1) + ' m'], 3),
      why: 'One twelfth = ' + r1(range) + ' ÷ 12 = ' + step.toFixed(2) + ' m. Cumulative twelfths by hour: 1, 3, 6, 9, 11, 12. After ' + n + ' h: ' + cum[n] + ' twelfths = ' + (cum[n] * step).toFixed(2) + ' m ' + (rising ? 'above LW' : 'below HW') + ' → ' + ok + '. The tide moves slowest in the first and last hours and fastest in the middle two.',
      src: 'Passage Planning Guide – The rule of twelfths'
    };
  });

  /* =====================================================================
     Passage planning – fuel
     ===================================================================== */
  MQ.registerGen('fuel_third', 'plan', 3, function (rng) {
    if (rng() < 0.5) {
      const B = P([20, 30, 40, 45, 60], rng), S = P([10, 12, 15, 18, 20], rng), t = P([1, 1.5, 2, 2.5, 3], rng);
      const F = 3 * B * t, d = t * S, ok = d + ' nm';
      return {
        q: 'Your vessel has ' + F + ' L usable fuel and burns ' + B + ' L/h at ' + S + ' kn. Using the one-third rule (one third out, one third back, one third reserve), what is the greatest distance you can plan to go out?',
        correct: ok, wrongs: uniq(ok, [Math.round(F / B * S) + ' nm', Math.round(F / B * S / 2) + ' nm', Math.round(d * 1.5) + ' nm', Math.round(d / 2) + ' nm'], 3),
        why: 'One third of ' + F + ' L = ' + F / 3 + ' L for the outbound leg; ' + F / 3 + ' ÷ ' + B + ' L/h = ' + t + ' h; at ' + S + ' kn that is ' + d + ' nm. The rule assumes the return costs the same – calculate in full if you will be towing or heading into a sea.',
        src: 'Passage Planning Guide – Fuel and reserve'
      };
    }
    const S = P([10, 12, 15, 18, 20], rng), B = P([20, 30, 40, 45, 60], rng), d = S * R(rng, 1, 3);
    const req = 2 * d / S * B, tot = req * 4 / 3, ok = Math.round(tot) + ' L';
    return {
      q: 'A tasking is ' + d + ' nm each way at ' + S + ' kn, burning ' + B + ' L/h. Allowing a reserve of one third of the calculated requirement, how much fuel should you carry (at minimum)?',
      correct: ok, wrongs: uniq(ok, [Math.round(req) + ' L', Math.round(req / 2 * 4 / 3) + ' L', Math.round(req + req / 2) + ' L', Math.round(req * 2) + ' L'], 3),
      why: 'Out and back = ' + 2 * d + ' nm ÷ ' + S + ' kn = ' + (2 * d / S) + ' h × ' + B + ' L/h = ' + Math.round(req) + ' L. Add a reserve of one third (' + Math.round(req / 3) + ' L) = ' + ok + '.',
      src: 'Passage Planning Guide – Calculating fuel consumption and reserve'
    };
  });

  /* =====================================================================
     Weather
     ===================================================================== */
  const BEAUFORT = [[0, 0, 'Calm'], [1, 3, 'Light air'], [4, 6, 'Light breeze'], [7, 10, 'Gentle breeze'], [11, 16, 'Moderate breeze'], [17, 21, 'Fresh breeze'], [22, 27, 'Strong breeze'], [28, 33, 'Near gale'], [34, 40, 'Gale'], [41, 47, 'Strong gale'], [48, 55, 'Storm'], [56, 63, 'Violent storm'], [64, 99, 'Hurricane']];
  MQ.registerGen('beaufort', 'weather', 2, function (rng) {
    const f = R(rng, 2, 11), lo = BEAUFORT[f][0], hi = BEAUFORT[f][1], kn = R(rng, lo, hi);
    const ok = 'Force ' + f + ' – ' + BEAUFORT[f][2];
    return {
      q: 'A wind of ' + kn + ' knots is which Beaufort force?',
      correct: ok, wrongs: uniq(ok, [f - 1, f + 1, f + 2, f - 2].filter(function (x) { return x >= 1 && x <= 12; }).map(function (x) { return 'Force ' + x + ' – ' + BEAUFORT[x][2]; }), 3),
      why: 'Force ' + f + ' covers ' + lo + '–' + hi + ' knots (' + BEAUFORT[f][2] + '). Marine wind warnings: strong wind 26–33 kn, gale 34–47, storm 48–63, hurricane force 64+.',
      src: 'Passage Planning Guide – Beaufort scale'
    };
  });
  MQ.registerGen('wind_conv', 'weather', 2, function (rng) {
    if (rng() < 0.5) {
      const kn = P([15, 20, 25, 30, 35, 40, 50], rng), kmh = Math.round(kn * 1.852), ok = '≈ ' + kmh + ' km/h';
      return {
        q: 'A marine forecast says ' + kn + ' knots. About how fast is that in km/h?',
        correct: ok, wrongs: uniq(ok, ['≈ ' + Math.round(kn / 1.852) + ' km/h', '≈ ' + Math.round(kn * 1.15) + ' km/h', '≈ ' + Math.round(kn * 2.5) + ' km/h'], 3),
        why: '1 knot = 1.852 km/h, so ' + kn + ' kn ≈ ' + kmh + ' km/h. (To go the other way, divide km/h by 1.852.)', src: 'Passage Planning Guide – Weather reports'
      };
    }
    const kmh = P([62, 90, 125, 170, 225], rng), kn = Math.round(kmh / 1.852), ok = '≈ ' + kn + ' kn';
    return {
      q: 'A land-based severe weather warning quotes gusts of ' + kmh + ' km/h. Roughly how many knots is that?',
      correct: ok, wrongs: uniq(ok, ['≈ ' + Math.round(kmh * 1.852) + ' kn', '≈ ' + Math.round(kmh * 0.5) + ' kn', '≈ ' + Math.round(kmh / 3) + ' kn'], 3),
      why: 'Knots = km/h ÷ 1.852, so ' + kmh + ' km/h ≈ ' + kn + ' kn.', src: 'Passage Planning Guide – Weather reports'
    };
  });
  MQ.registerGen('wave_sig', 'weather', 2, function (rng) {
    if (rng() < 0.5) {
      const h = P([1.5, 2, 2.5, 3], rng), ok = 'About ' + r1(h * 2) + ' m';
      return {
        q: 'The forecast gives a swell of ' + r1(h) + ' m (significant wave height). What is the largest wave you might occasionally meet over a few hours?',
        correct: ok, wrongs: uniq(ok, ['About ' + r1(h) + ' m', 'About ' + r1(h * 1.2) + ' m', 'About ' + r1(h * 3) + ' m'], 3),
        why: 'Significant height is the average of the highest third of waves. The largest individual wave can be about twice that (the Bureau says maximum waves can be twice the forecast height).', src: 'Passage Planning Guide – Wave height, sea and swell'
      };
    }
    const w = P([15, 20, 25, 30], rng), g = Math.round(w * 1.4), ok = 'About ' + g + ' kn';
    return {
      q: 'The forecast is for winds averaging ' + w + ' knots. Allowing for gusts up to 40% stronger than the mean, what gust should you plan for?',
      correct: ok, wrongs: uniq(ok, ['About ' + w + ' kn', 'About ' + Math.round(w * 1.1) + ' kn', 'About ' + Math.round(w * 2) + ' kn'], 3),
      why: w + ' × 1.4 ≈ ' + g + ' knots. Plan against the gust, not the average – it is the gust that knocks a small vessel down.', src: 'Passage Planning Guide – Wind strength'
    };
  });

  /* =====================================================================
     Marks – light character decoding
     ===================================================================== */
  MQ.registerGen('lightchar', 'marks', 4, function (rng) {
    const rh = P([['Fl', 'flashing (single flashes, dark longer than light)'], ['Fl(2)', 'group flashing, 2 flashes per group'], ['Fl(3)', 'group flashing, 3 flashes per group'], ['Oc', 'occulting (light longer than dark)'], ['Oc(2)', 'group occulting, 2 eclipses per group'], ['Iso', 'isophase (equal light and dark)'], ['Q(3)', 'quick flashing, 3-flash groups']], rng);
    const col = P([['R', 'red'], ['G', 'green'], ['Y', 'yellow'], ['W', 'white']], rng);
    const per = P([4, 5, 6, 8, 10, 12, 15], rng), el = R(rng, 4, 20), rg = R(rng, 3, 12);
    const code = rh[0] + (col[0] === 'W' ? '' : col[0] + '.') + per + 's' + el + 'm' + rg + 'M';
    const kind = R(rng, 1, 5);
    const nums = function (v, unit, lo, hi) { return uniq(v + unit, [(v + 2) + unit, (v - 2 > 0 ? v - 2 : v + 4) + unit, (v + 5) + unit, (v * 2) + unit], 3); };
    const q0 = 'Decode the light description ' + code + '. ';
    if (kind === 1) return { q: q0 + 'What is the period of the light?', correct: per + ' seconds', wrongs: nums(per, ' seconds'), why: 'The figure followed by “s” is the period: the time for one full cycle, ' + per + ' s. Time it from the start of one cycle to the start of the next.', src: 'Passage Planning Guide – Light characteristics' };
    if (kind === 2) return { q: q0 + 'What is the height of the light?', correct: el + ' m above mean high water springs', wrongs: [el + ' m above chart datum', (el + 3) + ' m above mean high water springs', Math.max(1, el - 3) + ' m above chart datum'], why: 'The figure followed by “m” is elevation above MHWS – not above chart datum.', src: 'Passage Planning Guide – Light characteristics' };
    if (kind === 3) return { q: q0 + 'What is the nominal range?', correct: rg + ' nautical miles', wrongs: nums(rg, ' nautical miles'), why: 'The figure followed by “M” is the nominal range in nautical miles, in 10 nm meteorological visibility. Your actual sight of it also depends on geographic range and the weather.', src: 'Passage Planning Guide – Light characteristics' };
    if (kind === 4) {
      const cols = [['red', 'green', 'yellow', 'white']];
      return { q: q0 + 'What colour is the light?', correct: col[1], wrongs: ['red', 'green', 'yellow', 'white'].filter(function (c) { return c !== col[1]; }).slice(0, 3), why: 'The colour letter follows the rhythm. If no colour is shown the light is white (e.g. Fl 5s is white).', src: 'Passage Planning Guide – Light characteristics' };
    }
    return { q: q0 + 'Which rhythm does it show?', correct: rh[1], wrongs: uniq(rh[1], ['flashing (single flashes, dark longer than light)', 'occulting (light longer than dark)', 'isophase (equal light and dark)', 'group flashing, 3 flashes per group', 'quick flashing, 3-flash groups', 'group occulting, 2 eclipses per group'], 3), why: rh[0] + ' = ' + rh[1] + '.', src: 'Passage Planning Guide – Light characteristics' };
  });

  /* =====================================================================
     Seamanship / towing
     ===================================================================== */
  MQ.registerGen('wll', 'seamanship', 2, function (rng) {
    const mbs = P([10, 15, 20, 25, 30, 40, 50], rng), w = mbs / 5;
    return {
      q: 'A shackle has a minimum breaking strength of ' + mbs + ' kN. Applying a factor of safety of 5, what is its working load limit?',
      correct: w + ' kN', wrongs: uniq(w + ' kN', [mbs * 5 + ' kN', mbs / 10 + ' kN', (mbs - 5) + ' kN', mbs / 2 + ' kN'], 3),
      why: 'WLL = MBS ÷ FOS = ' + mbs + ' ÷ 5 = ' + w + ' kN (roughly ' + w * 100 + ' kg for a static load, as 1 kN ≈ 100 kg). Never load rigging beyond its marked WLL.', src: 'GPH Part 1 – Snap-back zones and WLL'
    };
  });
  MQ.registerGen('scope', 'seamanship', 2, function (rng) {
    const depth = R(rng, 3, 12), bow = P([0.5, 1, 1.5, 2], rng), ratio = P([3, 5], rng);
    const ok = r1(ratio * (depth + bow)) + ' m';
    return {
      q: 'You anchor in ' + depth + ' m of water with the bow roller ' + r1(bow) + ' m above the surface. How much rode should be out for a ' + ratio + ':1 scope?',
      correct: ok, wrongs: uniq(ok, [r1(ratio * depth) + ' m', r1(ratio * (depth - bow)) + ' m', r1((ratio + 2) * (depth + bow)) + ' m', r1(depth + bow + ratio) + ' m'], 3),
      why: 'Scope is measured from the bow roller to the seabed: ' + depth + ' + ' + r1(bow) + ' = ' + r1(depth + bow) + ' m × ' + ratio + ' = ' + ok + '. About 3:1 in good weather, 5:1 or more in heavy weather, and allow for the rise of the tide.', src: 'GPH Part 2 – Anchoring: scope'
    };
  });
  MQ.registerGen('hullspeed', 'towing', 2, function (rng) {
    const m = P([4, 5, 6, 7, 8, 9, 10], rng), ft = m * 3.281, hs = 1.34 * Math.sqrt(ft), ok = r1(hs) + ' kn';
    return {
      q: 'A displacement vessel has a waterline length of ' + m + ' m. What is its approximate hull speed (1.34 × √LWL in feet)?',
      correct: ok, wrongs: uniq(ok, [r1(1.34 * Math.sqrt(m)) + ' kn', r1(hs * 1.852) + ' kn', r1(hs / 2) + ' kn'], 3),
      why: ft.toFixed(1) + ' ft → √' + ft.toFixed(1) + ' = ' + Math.sqrt(ft).toFixed(2) + ' × 1.34 = ' + ok + '. Convert metres to feet (×3.281) first. Towing a displacement hull faster than this makes it climb its own bow wave, load the towline and risk swamping.', src: 'NATRAC002 Towing – Towing physics'
    };
  });
  MQ.registerGen('ropembs', 'towing', 2, function (rng) {
    const mats = [['polyamide (nylon) under 32 mm', 50], ['polyester under 32 mm', 64], ['polypropylene', 77], ['polyethylene', 106]];
    const m = P(mats, rng), d = P([12, 16, 18, 20, 24], rng), mbs = d * d / m[1];
    if (rng() < 0.5) {
      const ok = mbs.toFixed(1) + ' tonnes';
      return {
        q: 'Using the BR67 rule of thumb (MBS = d² ÷ divisor), the divisor for ' + m[0] + ' is ' + m[1] + '. What is the MBS of a ' + d + ' mm line?',
        correct: ok, wrongs: uniq(ok, [(d * d / 200).toFixed(1) + ' tonnes', (d / m[1]).toFixed(1) + ' tonnes', (d * d / m[1] / 6).toFixed(1) + ' tonnes', (d * d * m[1] / 1000).toFixed(1) + ' tonnes'], 3),
        why: d + ' × ' + d + ' = ' + d * d + '; ÷ ' + m[1] + ' = ' + ok + '. That is the minimum breaking strength – the safe working load is a fraction of it (MBS ÷ 6 or more, and less again for knotted or damaged line).', src: 'NATRAC002 Towing – Tow line loads'
      };
    }
    const swl = mbs / 6, ok = swl.toFixed(2) + ' tonnes';
    return {
      q: 'A ' + d + ' mm ' + m[0] + ' line has an MBS of ' + mbs.toFixed(1) + ' tonnes. Using the towing guide\'s safety factor of 6, what is its safe working load?',
      correct: ok, wrongs: uniq(ok, [(mbs * 6).toFixed(2) + ' tonnes', (mbs / 2).toFixed(2) + ' tonnes', (mbs / 60).toFixed(2) + ' tonnes', (mbs / 12).toFixed(2) + ' tonnes'], 3),
      why: mbs.toFixed(1) + ' ÷ 6 = ' + ok + '. For knotted lines, lines with run damage or unknown condition, reduce the rating a further 50%.', src: 'NATRAC002 Towing – Tow line loads'
    };
  });

  /* =====================================================================
     Engines / electrics
     ===================================================================== */
  MQ.registerGen('battery', 'engines', 2, function (rng) {
    const V = P([12, 12, 6], rng), Ah = P([80, 100, 120, 200], rng), mode = R(rng, 1, 4);
    let q, v, ah, why;
    if (mode === 1) { q = 'Two ' + V + ' V ' + Ah + ' Ah batteries are wired in series. What is the bank?'; v = 2 * V; ah = Ah; why = 'Series adds the voltages; the amp-hour capacity stays the same.'; }
    else if (mode === 2) { q = 'Two ' + V + ' V ' + Ah + ' Ah batteries are wired in parallel. What is the bank?'; v = V; ah = 2 * Ah; why = 'Parallel adds the capacity; the voltage stays the same.'; }
    else if (mode === 3) { q = 'Three ' + V + ' V ' + Ah + ' Ah batteries are wired in parallel. What is the bank?'; v = V; ah = 3 * Ah; why = 'Parallel adds the amp-hours (3 × ' + Ah + '); the voltage stays at ' + V + ' V.'; }
    else { q = 'Four ' + V + ' V ' + Ah + ' Ah batteries are wired as two series pairs, and the two pairs are then connected in parallel. What is the bank?'; v = 2 * V; ah = 2 * Ah; why = 'Each series pair gives ' + 2 * V + ' V at ' + Ah + ' Ah; paralleling two pairs doubles the capacity to ' + 2 * Ah + ' Ah.'; }
    const ok = v + ' V, ' + ah + ' Ah';
    return {
      q: q, correct: ok, wrongs: uniq(ok, [ah / (mode === 1 ? 1 : 1) + ' V, ' + v + ' Ah', V + ' V, ' + Ah + ' Ah', (v * 2) + ' V, ' + (ah * 2) + ' Ah', V + ' V, ' + (ah * 2) + ' Ah', (V * 2) + ' V, ' + (Ah * 2) + ' Ah', v + ' V, ' + Ah * 3 + ' Ah'], 3),
      why: why + ' Batteries in a bank should always be matched (same voltage and Ah rating).', src: 'Propulsion Guide – Battery banks'
    };
  });

  /* =====================================================================
     SAR arithmetic
     ===================================================================== */
  MQ.registerGen('sar_cov', 'sar', 3, function (rng) {
    const kind = R(rng, 1, 3);
    if (kind === 1) {
      const W = P([0.4, 0.5, 0.6, 0.8, 1.0], rng), S = P([0.4, 0.5, 0.8, 1.0, 1.2, 1.6, 2.0], rng), C = W / S, ok = C.toFixed(2);
      return {
        q: 'Your sweep width is ' + W.toFixed(1) + ' nm and your track spacing is ' + S.toFixed(1) + ' nm. What is the coverage factor?',
        correct: ok, wrongs: uniq(ok, [(S / W).toFixed(2), (W * S).toFixed(2), (W + S).toFixed(2), (W / 2 / S).toFixed(2), (C * 2).toFixed(2), (C / 2).toFixed(2), (C + 0.5).toFixed(2)], 3),
        why: 'C = W ÷ S = ' + W.toFixed(1) + ' ÷ ' + S.toFixed(1) + ' = ' + ok + '. C = 1.0 is ideal; below 0.5 is unsatisfactory except in extreme circumstances.', src: 'Marine SAR Guide – Coverage factor'
      };
    }
    if (kind === 2) {
      const W = P([0.2, 0.3, 0.4, 0.6, 0.8, 1.0, 1.4], rng), ok = (W / 2).toFixed(2) + ' nm';
      return {
        q: 'Your calculated sweep width (W) is ' + W.toFixed(1) + ' nm. What is the beam sighting distance (BSD) on each side?',
        correct: ok, wrongs: uniq(ok, [W.toFixed(2) + ' nm', (W * 2).toFixed(2) + ' nm', (W / 4).toFixed(2) + ' nm'], 3),
        why: 'BSD = W ÷ 2 = ' + ok + ' – the sweep width applied to one side of the vessel.', src: 'Marine SAR Guide – Sweep width'
      };
    }
    const A = P([16, 36, 64, 100, 144], rng), W = P([0.5, 1, 2], rng), S = P([6, 8, 10, 12], rng), t = A / (W * S), ok = r1(t) + ' h';
    return {
      q: 'You must search an area of ' + A + ' nm² with a sweep width of ' + W + ' nm at ' + S + ' kn. How long will the search take (search time = area ÷ (W × speed))?',
      correct: ok, wrongs: uniq(ok, [r1(A / S) + ' h', r1(A * W / S) + ' h', r1(A / W) + ' h', r1(t * 2) + ' h', r1(t / 2) + ' h', r1(t + 1) + ' h', r1(t * 3) + ' h'], 3),
      why: A + ' ÷ (' + W + ' × ' + S + ') = ' + A + ' ÷ ' + (W * S) + ' = ' + ok + '. If time required exceeds time available, the SMC must accept lower coverage, widen spacing, or add assets.', src: 'Marine SAR Guide – Calculating search time'
    };
  });
  MQ.registerGen('sar_E', 'sar', 2, function (rng) {
    const t = P([[1, 2, 2, 3], [2, 3, 6, 7], [2, 4, 4, 6], [2, 6, 9, 11], [4, 4, 7, 9], [3, 4, 0, 5], [6, 6, 7, 11]], rng);
    const x = t[0], y = t[1], de = t[2], E = t[3];
    return {
      q: 'The initial position error (x) is ' + x + ' nm, the search asset\'s navigation error (y) is ' + y + ' nm and the drift error (De) is ' + de + ' nm. What is the total probable error of position E = √(x² + y² + De²)?',
      correct: E + ' nm', wrongs: uniq(E + ' nm', [(x + y + de) + ' nm', (E + 2) + ' nm', Math.max(1, E - 2) + ' nm', (x * x + y * y + de * de) + ' nm'], 3),
      why: x + '² + ' + y + '² + ' + de + '² = ' + (x * x + y * y + de * de) + '; √' + (x * x + y * y + de * de) + ' = ' + E + ' nm. The search radius is then E × a safety factor (1.1 for the initial search).', src: 'Marine SAR Guide – Total probable error'
    };
  });
  MQ.registerGen('sar_drift', 'sar', 2, function (rng) {
    if (rng() < 0.5) {
      const k = P([[0.3, 3], [1.3, 3], [0.29, 4], [1.0, 2.5], [0.5, 6]], rng), d = k[0] * k[1], ok = d.toFixed(2).replace(/\.?0+$/, '') + ' nm';
      return {
        q: 'A target has a leeway speed of ' + k[0] + ' kn. How far does leeway carry it in ' + k[1] + ' hours?',
        correct: ok, wrongs: uniq(ok, [(k[0] / k[1]).toFixed(2) + ' nm', (k[0] + k[1]).toFixed(2) + ' nm', (d * 2).toFixed(2) + ' nm'], 3),
        why: 'Distance = speed × time = ' + k[0] + ' × ' + k[1] + ' = ' + ok + '. Leeway is only one component of drift – add sea current and wind current to find the datum.', src: 'Marine SAR Guide – Drift: leeway'
      };
    }
    const t = P([[0.2, 12, 1], [0.3, 20, 0.9], [0.4, 24, 1], [0.5, 30, 1], [0.25, 15, 1]], rng), ok = r1(t[2]) + ' kn';
    return {
      q: 'A datum buoy has drifted ' + t[0] + ' nm in ' + t[1] + ' minutes. What is the drift rate?',
      correct: ok, wrongs: uniq(ok, [r1(t[0] * t[1] / 60) + ' kn', r1(t[0] / t[1]) + ' kn', r1(t[2] * 2) + ' kn', r1(t[2] / 2) + ' kn'], 3),
      why: 'Drift rate = distance × 60 ÷ minutes = ' + t[0] + ' × 60 ÷ ' + t[1] + ' = ' + ok + '. The set is the direction the buoy moved (reciprocal of the bearing from buoy to the original waypoint).', src: 'Marine SAR Guide – Measuring set and drift'
    };
  });
})();

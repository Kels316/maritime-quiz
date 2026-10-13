/* Maritime Quiz – UI and local progress */
(function () {
  'use strict';
  const MQ = window.MQ, U = MQ.util, esc = window.MQV.esc, T = MQ.TOPICS;
  const VERSION = '1.0.0';
  const $app = document.getElementById('app');

  /* ---------- storage ---------- */
  const store = {
    get: function (k, d) { try { const v = localStorage.getItem('mq.' + k); return v == null ? d : JSON.parse(v); } catch (e) { return d; } },
    set: function (k, v) { try { localStorage.setItem('mq.' + k, JSON.stringify(v)); } catch (e) { /* storage unavailable */ } }
  };
  const params = new URLSearchParams(location.search);
  function today() { const d = params.get('date'); return /^\d{4}-\d{2}-\d{2}$/.test(d || '') ? d : U.todayStr(); }

  /* ---------- derived data ---------- */
  function days() { return store.get('days', {}); }
  function streak() {
    const d = days(); let cur = today(), n = 0;
    if (!d[cur] || !d[cur].done) cur = U.addDays(cur, -1);
    while (d[cur] && d[cur].done) { n++; cur = U.addDays(cur, -1); }
    let best = 0, run = 0; const keys = Object.keys(d).filter(function (k) { return d[k].done; }).sort();
    for (let i = 0; i < keys.length; i++) {
      run = (i > 0 && U.addDays(keys[i - 1], 1) === keys[i]) ? run + 1 : 1; if (run > best) best = run;
    }
    return { current: n, best: Math.max(best, n) };
  }
  function misses() { return store.get('misses', {}); }

  /* ---------- recording ---------- */
  function record(q, ok) {
    const qs = store.get('qstats', {});
    const s = qs[q.id] || { n: 0, ok: 0 };
    s.n++; if (ok) s.ok++; s.lastOk = ok; s.last = Date.now(); qs[q.id] = s; store.set('qstats', qs);
    const ts = store.get('tstats', {});
    const t = ts[q.topic] || { n: 0, ok: 0 }; t.n++; if (ok) t.ok++; ts[q.topic] = t; store.set('tstats', ts);
    const m = misses();
    if (ok) { delete m[q.id]; } else { m[q.id] = q; }
    store.set('misses', m);
  }

  /* ---------- state ---------- */
  let quiz = null;   // {mode, date, qs, idx, answers[], title}
  let view = 'home';

  function toast(msg) {
    const el = document.getElementById('toast'); el.textContent = msg; el.hidden = false;
    clearTimeout(toast.t); toast.t = setTimeout(function () { el.hidden = true; }, 2600);
  }
  function go(v) { view = v; render(); window.scrollTo(0, 0); }

  /* ---------- screens ---------- */
  function header(title, backTo) {
    return '<div class="top"><div class="brand"><div class="logo" aria-hidden="true">⚓</div><div><b>' + esc(title || 'Maritime Quiz') + '</b><small>GPH · Coxswain 1 · Coxswain 2</small></div></div>' +
      (backTo ? '<button class="iconbtn" data-act="' + backTo + '">← Back</button>' : '') + '</div>';
  }
  function niceDate(s) {
    const p = s.split('-').map(Number); const d = new Date(p[0], p[1] - 1, p[2]);
    return d.toLocaleDateString('en-AU', { weekday: 'long', day: 'numeric', month: 'long' });
  }

  function homeView() {
    const dt = today(), rec = days()[dt], prog = store.get('progress', null);
    const st = streak(), mc = Object.keys(misses()).length;
    let status, label;
    if (rec && rec.done) { status = 'Done · ' + rec.score + '/' + rec.total; label = 'See today\'s results'; }
    else if (prog && prog.date === dt && prog.answers.length) { status = 'In progress · ' + prog.answers.length + '/10'; label = 'Continue today\'s quiz'; }
    else { status = '10 questions · about 5 minutes'; label = 'Start today\'s quiz'; }
    const ios = /iphone|ipad|ipod/i.test(navigator.userAgent) && !window.navigator.standalone;
    const standalone = window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone;
    const all = Object.keys(days()).filter(function (k) { return days()[k].done; }).length;
    return header() +
      '<div class="card hero fade"><div class="muted small">' + esc(niceDate(dt)) + '</div>' +
      '<div class="big">Today\'s quiz</div><p class="muted">' + esc(status) + '</p>' +
      '<button class="btn block" data-act="daily">' + esc(label) + '</button>' +
      (rec && rec.done ? '<button class="btn sec block" data-act="retake">↻ Retake today\'s quiz</button>' : '') + '</div>' +
      '<div class="card"><div class="stats3">' +
      '<div class="stat"><b>' + st.current + '</b><span>day streak</span></div>' +
      '<div class="stat"><b>' + st.best + '</b><span>best streak</span></div>' +
      '<div class="stat"><b>' + all + '</b><span>quizzes done</span></div></div></div>' +
      '<div class="btns">' +
      '<button class="btn sec" data-act="review"' + (mc ? '' : ' disabled') + '>🔁 Review missed questions' + (mc ? ' (' + mc + ')' : '') + '</button>' +
      '<button class="btn sec" data-act="practice">🎯 Practice by topic</button>' +
      '<button class="btn sec" data-act="stats">📊 Progress &amp; settings</button></div>' +
      (ios && !standalone ? '<div class="tip" style="margin-top:14px">Install on iPhone: tap <b>Share</b> → <b>Add to Home Screen</b>. It then opens full-screen and works offline.</div>' : '') +
      '<p class="muted small" style="text-align:center;margin-top:18px">' + MQ.counts().total + ' written questions + generated scenarios · v' + VERSION + '</p>';
  }

  function startQuiz(mode) {
    const dt = today();
    if (mode === 'retake') { quiz = { mode: 'retake', date: dt, qs: MQ.dailySet(dt), idx: 0, answers: [], title: 'Today\'s quiz (retake)', fresh: true }; go('quiz'); return; }
    if (mode === 'daily') {
      const rec = days()[dt];
      if (rec && rec.done) { quiz = { mode: 'daily', date: dt, qs: MQ.dailySet(dt), idx: 0, answers: rec.choices || [], done: true, title: 'Today\'s quiz' }; go('results'); return; }
      const qs = MQ.dailySet(dt), prog = store.get('progress', null);
      let answers = [];
      if (prog && prog.date === dt && prog.ids && prog.ids.join() === qs.map(function (q) { return q.id; }).join()) answers = prog.answers;
      quiz = { mode: 'daily', date: dt, qs: qs, idx: Math.min(answers.length, qs.length - 1), answers: answers, title: 'Today\'s quiz' };
    }
    quiz.fresh = true; go('quiz');
  }

  function quizView() {
    const q = quiz.qs[quiz.idx], n = quiz.qs.length;
    const chosen = quiz.answers[quiz.idx], revealed = chosen !== undefined && chosen !== null;
    const t = T[q.topic]; const fresh = quiz.fresh; quiz.fresh = false;
    let h = '<div class="qhead"><span class="chip" style="background:' + t.color + '">' + esc(t.label) + '</span>' +
      '<span class="muted small">' + (quiz.idx + 1) + ' / ' + n + ' &nbsp;<button class="iconbtn" data-act="quit" aria-label="Leave quiz">✕</button></span></div>' +
      '<div class="bar"><i style="width:' + Math.round((quiz.idx + (revealed ? 1 : 0)) / n * 100) + '%"></i></div>' +
      '<div class="card' + (fresh ? ' fade' : '') + '" id="qcard">' +
      (q.vis ? '<div class="vis">' + window.MQV.render(q.vis) + '</div>' : '') +
      '<div class="qtext">' + esc(q.q) + '</div><div class="opts" role="group" aria-label="Answer options">';
    q.options.forEach(function (o, i) {
      let cls = 'opt';
      if (revealed) { if (i === q.answer) cls += ' right'; else if (i === chosen) cls += ' wrong'; else cls += ' dim'; }
      h += '<button class="' + cls + '" data-opt="' + i + '"' + (revealed ? ' disabled' : '') + '><span class="k">' + 'ABCD'[i] + '</span><span>' + esc(o) + '</span></button>';
    });
    h += '</div>';
    if (revealed) {
      const ok = chosen === q.answer;
      h += '<div class="feedback ' + (ok ? 'ok' : 'no') + '"><div class="verdict">' + (ok ? '✓ Correct' : '✗ Not quite') + '</div><div>' + esc(q.why) + '</div>' +
        (q.src ? '<div class="src">Source: ' + esc(q.src) + '</div>' : '') + '</div>' +
        '<button class="btn block" style="margin-top:14px" data-act="next">' + (quiz.idx === n - 1 ? 'Finish' : 'Next question →') + '</button>';
    }
    return h + '</div>';
  }

  function answer(i) {
    const q = quiz.qs[quiz.idx];
    if (quiz.answers[quiz.idx] !== undefined && quiz.answers[quiz.idx] !== null) return;
    quiz.answers[quiz.idx] = i;
    record(q, i === q.answer);
    if (quiz.mode === 'daily') store.set('progress', { date: quiz.date, ids: quiz.qs.map(function (x) { return x.id; }), answers: quiz.answers });
    render();
    const f = document.querySelector('.feedback'); if (f) f.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
  }
  function next() {
    if (quiz.idx < quiz.qs.length - 1) { quiz.idx++; quiz.fresh = true; render(); window.scrollTo(0, 0); return; }
    finish();
  }
  function finish() {
    const score = quiz.qs.reduce(function (s, q, i) { return s + (quiz.answers[i] === q.answer ? 1 : 0); }, 0);
    if (quiz.mode === 'daily') {
      const d = days(); d[quiz.date] = { done: true, score: score, total: quiz.qs.length, choices: quiz.answers.slice(), topics: quiz.qs.map(function (q, i) { return [q.topic, quiz.answers[i] === q.answer ? 1 : 0]; }) };
      store.set('days', d); store.set('progress', null);
    }
    quiz.done = true; go('results');
  }

  function resultsView() {
    const n = quiz.qs.length;
    const marks = quiz.qs.map(function (q, i) { return quiz.answers[i] === undefined || quiz.answers[i] === null ? 'n' : quiz.answers[i] === q.answer ? 'g' : 'r'; });
    const score = marks.filter(function (m) { return m === 'g'; }).length;
    const msg = score === n ? 'Perfect – all ship-shape.' : score >= n * 0.8 ? 'Solid. Keep it fresh.' : score >= n * 0.6 ? 'Good effort – review the misses below.' : 'Worth another look – tap the misses to revisit them.';
    let h = header(quiz.title) + '<div class="card fade"><div class="score"><div class="num">' + score + '<span class="muted" style="font-size:1.6rem"> / ' + n + '</span></div><p>' + msg + '</p></div>' +
      '<div class="dots">' + marks.map(function (m, i) { return '<div class="dot ' + m + '">' + (i + 1) + '</div>'; }).join('') + '</div></div>';
    const wrong = quiz.qs.map(function (q, i) { return { q: q, i: i }; }).filter(function (x) { return marks[x.i] === 'r'; });
    if (wrong.length) {
      h += '<div class="card"><h3>Review your misses</h3>';
      wrong.forEach(function (x) {
        h += '<div style="margin:12px 0;padding-top:12px;border-top:1px solid var(--line)"><div class="small muted">' + esc(T[x.q.topic].label) + '</div><div><b>' + esc(x.q.q) + '</b></div>' +
          '<div class="small" style="margin-top:6px;color:var(--bad)">Your answer: ' + esc(x.q.options[quiz.answers[x.i]]) + '</div>' +
          '<div class="small" style="color:var(--good)">Correct: ' + esc(x.q.options[x.q.answer]) + '</div><div class="small muted" style="margin-top:4px">' + esc(x.q.why) + '</div></div>';
      });
      h += '</div>';
    }
    h += '<div class="btns">' + (quiz.mode === 'daily' || quiz.mode === 'retake' ? '<button class="btn sec" data-act="retake">↻ Retake today\'s quiz</button>' : '') + '<button class="btn" data-act="practice">Keep practising</button><button class="btn ghost" data-act="home">Home</button></div>';
    return h;
  }

  let pSel = null, pCount = 10;
  function practiceView() {
    if (!pSel) pSel = Object.keys(T).filter(function (k) { return MQ.BANK[k].length; });
    let h = header('Practice', 'home') + '<div class="card"><h3>Topics</h3><p class="muted small">Questions you have missed before come up more often.</p><div class="chips" style="margin-top:8px">';
    Object.keys(T).forEach(function (k) {
      h += '<button class="tchip' + (pSel.indexOf(k) >= 0 ? ' on' : '') + '" data-topic="' + k + '">' + esc(T[k].short) + '</button>';
    });
    h += '</div><div class="row" style="margin-top:10px"><button class="iconbtn" data-act="selall">All</button><button class="iconbtn" data-act="selnone">None</button></div></div>' +
      '<div class="card"><h3>How many?</h3><div class="seg" style="margin-top:8px">' +
      [5, 10, 20].map(function (c) { return '<button class="' + (pCount === c ? 'on' : '') + '" data-count="' + c + '">' + c + '</button>'; }).join('') + '</div></div>' +
      '<button class="btn block" data-act="startpractice"' + (pSel.length ? '' : ' disabled') + '>Start practice</button>';
    return h;
  }
  function startPractice() {
    const qs = MQ.practiceSet(pSel, pCount, store.get('qstats', {}));
    if (!qs.length) { toast('No questions for those topics yet'); return; }
    quiz = { mode: 'practice', qs: qs, idx: 0, answers: [], title: 'Practice', fresh: true };
    go('quiz');
  }
  function startReview() {
    const m = misses(), list = Object.keys(m).map(function (k) { return m[k]; });
    if (!list.length) { toast('Nothing to review – nice!'); return; }
    quiz = { mode: 'review', qs: U.shuffle(list, Math.random).slice(0, 10), idx: 0, answers: [], title: 'Review missed', fresh: true };
    go('quiz');
  }

  function statsView() {
    const ts = store.get('tstats', {}), d = days(), st = streak();
    let tot = 0, ok = 0; Object.keys(ts).forEach(function (k) { tot += ts[k].n; ok += ts[k].ok; });
    let h = header('Progress', 'home') + '<div class="card"><div class="stats3">' +
      '<div class="stat"><b>' + tot + '</b><span>answered</span></div><div class="stat"><b>' + (tot ? Math.round(ok / tot * 100) : 0) + '%</b><span>correct</span></div><div class="stat"><b>' + st.current + '</b><span>streak</span></div></div></div>';
    /* calendar – last 28 days */
    const t0 = today(); let cal = '';
    const start = new Date(t0 + 'T00:00:00'); const dow = (start.getDay() + 6) % 7;      // Monday-first
    for (let i = 28 + dow; i >= 0; i--) {
      const ds = U.addDays(t0, -i); const r = d[ds];
      const cls = r && r.done ? (r.score >= 10 ? 'd10' : r.score >= 7 ? 'd7' : r.score >= 4 ? 'd4' : 'd0') : '';
      cal += '<div class="' + cls + (ds === t0 ? ' today' : '') + '" title="' + ds + '">' + Number(ds.slice(8)) + '</div>';
    }
    h += '<div class="card"><h3>Last 4 weeks</h3><div class="cal">' + cal + '</div></div>';
    h += '<div class="card"><h3>By topic</h3>';
    const keys = Object.keys(T).filter(function (k) { return ts[k]; }).sort(function (a, b) { return ts[a].ok / ts[a].n - ts[b].ok / ts[b].n; });
    if (!keys.length) h += '<p class="muted">Answer a few questions and your strengths and weak spots appear here.</p>';
    keys.forEach(function (k) {
      const p = Math.round(ts[k].ok / ts[k].n * 100);
      h += '<div class="topicrow"><span>' + esc(T[k].label) + ' <span class="muted small">(' + ts[k].n + ')</span></span><span class="pct">' + p + '%</span><div class="meter"><i style="width:' + p + '%;background:' + T[k].color + '"></i></div></div>';
    });
    h += '</div><div class="card"><h3>Move progress between devices</h3><p class="muted small">Your streak and stats are stored on each device. Today\'s 10 questions are identical on every device. To carry progress across, copy the code below and paste it into the box on the other device.</p>' +
      '<textarea id="xfer" aria-label="Progress code"></textarea><div class="row" style="margin-top:8px"><button class="btn sec" data-act="export">Fill with my code</button><button class="btn sec" data-act="import">Import pasted code</button></div></div>' +
      '<div class="card"><h3>About</h3><p class="muted small">Questions are drawn from the GPH (MARG012, MARN016, MARB053, MARF028), Coxswain 1/2 (MARH013, MARB027/MARC038, MARC037, MARI003) and SAR/towing learner guides, plus the MRQ Vessel Crew Guide. It is a memory refresher – not a substitute for the guides, your SMS or current regulations.</p>' +
      '<button class="btn ghost" data-act="reset">Reset all progress</button></div>';
    return h;
  }

  function render() {
    let h = '';
    if (view === 'home') h = homeView();
    else if (view === 'quiz') h = quizView();
    else if (view === 'results') h = resultsView();
    else if (view === 'practice') h = practiceView();
    else if (view === 'stats') h = statsView();
    $app.innerHTML = h;
  }

  /* ---------- events ---------- */
  document.addEventListener('click', function (e) {
    const el = e.target.closest('[data-act],[data-opt],[data-topic],[data-count]'); if (!el) return;
    if (el.dataset.opt !== undefined) return answer(Number(el.dataset.opt));
    if (el.dataset.topic) { const k = el.dataset.topic, i = pSel.indexOf(k); if (i >= 0) pSel.splice(i, 1); else pSel.push(k); return render(); }
    if (el.dataset.count) { pCount = Number(el.dataset.count); return render(); }
    switch (el.dataset.act) {
      case 'daily': return startQuiz('daily');
      case 'retake': return startQuiz('retake');
      case 'practice': return go('practice');
      case 'stats': return go('stats');
      case 'home': return go('home');
      case 'review': return startReview();
      case 'next': return next();
      case 'quit': if (confirm('Leave this quiz? Daily progress is saved.')) go('home'); return;
      case 'selall': pSel = Object.keys(T).filter(function (k) { return MQ.BANK[k].length; }); return render();
      case 'selnone': pSel = []; return render();
      case 'startpractice': return startPractice();
      case 'export': {
        const data = { v: 1, days: store.get('days', {}), qstats: store.get('qstats', {}), tstats: store.get('tstats', {}) };
        document.getElementById('xfer').value = btoa(unescape(encodeURIComponent(JSON.stringify(data))));
        return toast('Code ready – copy it');
      }
      case 'import': {
        try {
          const raw = document.getElementById('xfer').value.trim();
          const data = JSON.parse(decodeURIComponent(escape(atob(raw))));
          if (data.v !== 1) throw new Error('version');
          const d = days(); Object.keys(data.days || {}).forEach(function (k) { if (!d[k] || !d[k].done) d[k] = data.days[k]; });
          store.set('days', d);
          const q = store.get('qstats', {}); Object.keys(data.qstats || {}).forEach(function (k) { if (!q[k] || (data.qstats[k].n > q[k].n)) q[k] = data.qstats[k]; });
          store.set('qstats', q);
          const t = store.get('tstats', {}); Object.keys(data.tstats || {}).forEach(function (k) { if (!t[k] || data.tstats[k].n > t[k].n) t[k] = data.tstats[k]; });
          store.set('tstats', t);
          toast('Progress imported'); return render();
        } catch (err) { return toast('That code did not work'); }
      }
      case 'reset':
        if (confirm('Erase all progress on this device?')) { ['days', 'qstats', 'tstats', 'misses', 'progress'].forEach(function (k) { try { localStorage.removeItem('mq.' + k); } catch (x) {} }); toast('Progress cleared'); go('home'); }
        return;
    }
  });
  document.addEventListener('keydown', function (e) {
    if (view !== 'quiz' || e.target.tagName === 'TEXTAREA') return;
    const q = quiz.qs[quiz.idx], revealed = quiz.answers[quiz.idx] !== undefined && quiz.answers[quiz.idx] !== null;
    if (!revealed && /^[1-4]$/.test(e.key) && Number(e.key) <= q.options.length) answer(Number(e.key) - 1);
    else if (!revealed && /^[a-dA-D]$/.test(e.key)) answer('abcd'.indexOf(e.key.toLowerCase()));
    else if (revealed && (e.key === 'Enter' || e.key === ' ' || e.key === 'ArrowRight')) { e.preventDefault(); next(); }
  });

  /* ---------- boot ---------- */
  window.MQ_APP = { go: go, startQuiz: startQuiz };
  render();
  if ('serviceWorker' in navigator && location.protocol !== 'file:') {
    navigator.serviceWorker.register('sw.js').then(function (reg) {
      reg.addEventListener('updatefound', function () {
        const nw = reg.installing; if (!nw) return;
        nw.addEventListener('statechange', function () { if (nw.state === 'installed' && navigator.serviceWorker.controller) toast('Update ready – reopen the app to use it'); });
      });
    }).catch(function () {});
  }
})();

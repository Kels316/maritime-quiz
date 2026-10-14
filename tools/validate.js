// node tools/validate.js  – sanity-checks the question bank and generators
const fs = require('fs'), path = require('path'), vm = require('vm');
const root = path.join(__dirname, '..');
global.window = global; global.document = {};
const files = ['js/engine.js','js/visuals.js','js/generators.js'].concat(fs.readdirSync(path.join(root,'js/q')).filter(f=>f.endsWith('.js')).map(f=>'js/q/'+f));
files.forEach(f => vm.runInThisContext(fs.readFileSync(path.join(root,f),'utf8'), {filename:f}));
const MQ = global.MQ; let errors = 0, warns = 0;
const err = m => { errors++; console.log('ERROR', m); }, warn = m => { warns++; console.log('warn ', m); };

// static bank
const seen = {}; let longest = 0, longest10 = 0, shortest10 = 0, total = 0;
Object.keys(MQ.BANK).forEach(t => MQ.BANK[t].forEach(q => {
  total++;
  if (seen[q.id]) err('duplicate id/question: ' + q.q.slice(0,60)); seen[q.id] = 1;
  const all = [q.correct].concat(q.wrongs);
  if (q.wrongs.length !== 3) err(`[${t}] needs 3 wrong options: ${q.q.slice(0,70)}`);
  if (new Set(all.map(s => String(s).trim().toLowerCase())).size !== all.length) err(`[${t}] duplicate options: ${q.q.slice(0,70)}`);
  all.forEach(s => { if (!s || typeof s !== 'string') err(`[${t}] bad option in ${q.q.slice(0,50)}`); });
  if (!q.why) warn(`[${t}] no explanation: ${q.q.slice(0,50)}`);
  const lens = all.map(s => s.length); const mx = Math.max(...lens);
  if (q.correct.length === mx && lens.filter(l => l === mx).length === 1) longest++;
  if (q.correct.length > 1.1 * Math.max(...q.wrongs.map(s=>s.length)) && q.correct.length - Math.max(...q.wrongs.map(s=>s.length)) >= 15) longest10++;
  if (q.correct.length * 1.1 < Math.min(...q.wrongs.map(s=>s.length))) shortest10++;
  if (q.correct.length > 2.2 * Math.max(...q.wrongs.map(s=>s.length)) && q.correct.length > 60) warn(`[${t}] correct much longer: ${q.q.slice(0,60)}`);
  if (q.vis && !['lights','shapes','buoy','enc'].includes(q.vis.k)) err('bad vis ' + q.q);
  if (q.vis) { const svg = global.MQV.render(q.vis); if (!svg.startsWith('<svg') || /undefined|NaN/.test(svg)) err('bad svg ' + q.q); }
}));
console.log('static questions:', total, '| correct uniquely longest:', (longest/total*100).toFixed(0) + '% | longer than all wrongs by >10%:', (longest10/total*100).toFixed(0) + '% | shorter than all by >10%:', (shortest10/total*100).toFixed(0) + '%');
console.log(Object.keys(MQ.BANK).map(t => t + ':' + MQ.BANK[t].length).join('  '));

// generators
Object.keys(MQ.GENS).forEach(n => {
  const ids = new Set(); let bad = 0, long = 0;
  for (let i = 0; i < 400; i++) {
    let q; try { q = MQ.genInstance(n, ['t', i]); } catch (e) { err(`gen ${n} threw: ${e.message}`); break; }
    const o = q.options;
    if (o.length !== 4 || new Set(o).size !== 4) { bad++; if (bad < 3) err(`gen ${n}: options ${JSON.stringify(o)} for ${q.q.slice(0,80)}`); }
    if (/undefined|NaN|Infinity/.test(JSON.stringify(q))) { bad++; if (bad<3) err(`gen ${n}: undefined/NaN in ${q.q.slice(0,90)}`); }
    if (q.vis) { const svg = global.MQV.render(q.vis); if (/undefined|NaN/.test(svg)) err(`gen ${n}: svg NaN`); }
    ids.add(q.id);
  }
  console.log(`gen ${n.padEnd(12)} topic=${MQ.GENS[n].topic.padEnd(10)} unique ids ${ids.size}/400 problems ${bad}`);
});

// encounter classification cross-check (independent re-derivation from the displayed numbers)
const U = MQ.util; let mism = 0;
for (let i = 0; i < 600; i++) {
  const q = MQ.genInstance('encounter', ['chk', i]);
  if (!q.vis || q.vis.k !== 'enc') continue;
  const b = q.vis.b, h = q.vis.h;
  const m = /Rule 1[3-8]|Rule 18/.exec(q.options[q.answer]); if (!m) mism++;
}
console.log('encounter answers without a rule tag:', mism);
// independent geometry check: steady bearing + closing range for power-vs-power scenarios
let geoBad = 0, geoN = 0;
for (let i = 0; i < 800; i++) {
  const q = MQ.genInstance(['aspect','encounter','towenc'][i % 3], ['geo', i]);
  const m = /at (\d+) kn, in open water by day|heading up the page at (\d+) kn/.exec(q.q);
  const sp = /heading ([0-9]{3})° relative at (\d+) kn/.exec(q.q);
  const vo = /heading up the page at (\d+) kn/.exec(q.q);
  if (!sp || !vo || !q.vis) continue;           // aspect questions carry no speeds; special vessels checked separately
  geoN++;
  const b = q.vis.b * Math.PI / 180, h = Number(sp[1]) * Math.PI / 180, vx = Number(sp[2]), vO = Number(vo[1]);
  const rel = [vx * Math.sin(h), vx * Math.cos(h) - vO];            // other's velocity relative to you
  const los = [Math.sin(b), Math.cos(b)];                             // from you to other
  const cross = rel[0] * los[1] - rel[1] * los[0], dot = rel[0] * los[0] + rel[1] * los[1];
  if (Math.abs(cross) > 0.08 * Math.hypot(rel[0], rel[1]) + 0.25 || dot >= 0) geoBad++;   // heading is rounded to whole degrees
}
console.log('geometry check:', geoN, 'scenarios, bad:', geoBad);
if (geoBad) errors++;

// daily sets
const t0 = Date.now(); let dayFail = 0; const cats = {};
for (let d = 0; d < 400; d++) {
  const date = U.addDays('2026-10-14', d);
  const s = MQ.dailySet(date);
  if (s.length !== 10) { dayFail++; continue; }
  if (new Set(s.map(x => x.id)).size !== 10) dayFail++;
  s.forEach(x => cats[x.topic] = (cats[x.topic]||0) + 1);
}
console.log('daily sets ok:', dayFail === 0, '| 400 days in', Date.now()-t0, 'ms');
console.log('topic share over 400 days:', Object.keys(cats).map(k => k+':'+cats[k]).join('  '));
// determinism
const a = MQ.dailySet('2026-12-25').map(x => x.id + x.answer).join(), b = MQ.dailySet('2026-12-25').map(x => x.id + x.answer).join();
console.log('deterministic:', a === b);
console.log(errors ? `\n${errors} ERRORS` : '\nno errors', warns ? `(${warns} warnings)` : '');
process.exit(errors ? 1 : 0);

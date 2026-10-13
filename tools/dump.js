// node tools/dump.js --write            rewrite js/q/*.js in canonical form
// node tools/dump.js --patch file.json  apply {"topic#N": [w1,w2,w3] | {a, w}} edits then rewrite
// node tools/dump.js [--list [topic]]   list questions whose correct option is noticeably the longest
const fs = require('fs'), path = require('path'), vm = require('vm');
const root = path.join(__dirname, '..');
global.window = global; global.document = {};
const files = ['js/engine.js','js/visuals.js','js/generators.js'].concat(fs.readdirSync(path.join(root,'js/q')).filter(f=>f.endsWith('.js')).map(f=>'js/q/'+f));
files.forEach(f => vm.runInThisContext(fs.readFileSync(path.join(root,f),'utf8'), {filename:f}));
const MQ = global.MQ;
const FILE = { rules:'rules', lights:'lights', marks:'marks', nav:'nav', plan:'plan', tides:'tides-weather', weather:'tides-weather', seamanship:'seamanship', fire:'fire-whs', whs:'fire-whs', engines:'engines', sar:'sar-towing', towing:'sar-towing' };
const J = JSON.stringify;
function fmt(q) {
  let s = '  {\n    q: ' + J(q.q) + ',\n    a: ' + J(q.correct) + ',\n    w: [\n' + q.wrongs.map(w => '      ' + J(w)).join(',\n') + '\n    ],\n    why: ' + J(q.why) + ',\n    src: ' + J(q.src);
  if (q.vis) s += ',\n    vis: ' + J(q.vis);
  return s + '\n  }';
}
function writeAll() {
  const byFile = {};
  Object.keys(MQ.BANK).forEach(t => { if (FILE[t]) (byFile[FILE[t]] = byFile[FILE[t]] || []).push(t); });
  Object.keys(byFile).forEach(f => {
    let out = '/* Question data – ' + f + '. Fields: q, a (correct), w (3 wrong options), why, src, vis (optional). */\n';
    byFile[f].forEach(t => { out += 'MQ.add(' + J(t) + ', [\n' + MQ.BANK[t].map(fmt).join(',\n') + '\n]);\n\n'; });
    fs.writeFileSync(path.join(root, 'js/q', f + '.js'), out);
  });
}
const arg = process.argv[2];
if (arg === '--write') { writeAll(); console.log('rewritten'); }
else if (arg === '--patch') {
  const patch = JSON.parse(fs.readFileSync(path.resolve(process.argv[3]), 'utf8')); let n = 0;
  Object.keys(patch).forEach(k => {
    const m = /^(\w+)#(\d+)$/.exec(k); const q = m && MQ.BANK[m[1]] && MQ.BANK[m[1]][Number(m[2]) - 1];
    if (!q) { console.log('no such question', k); return; }
    const p = patch[k];
    if (Array.isArray(p)) q.wrongs = p; else { if (p.q) q.q = p.q; if (p.a) q.correct = p.a; if (p.w) q.wrongs = p.w; if (p.why) q.why = p.why; if (p.s) Object.keys(p.s).forEach(i => { q.wrongs[Number(i)] = p.s[i]; }); }
    n++;
  });
  writeAll(); console.log('patched', n);
} else if (arg === '--tell') {
  const only = process.argv[3], minr = Number(process.argv[4] || 1.05);
  Object.keys(MQ.BANK).forEach(t => { if (only && t !== only) return;
    MQ.BANK[t].forEach((q, i) => { const L = q.wrongs.map(w => w.length); const mw = Math.max(...L); const mi = L.indexOf(mw);
      if (q.correct.length > mw * minr) console.log(`${t}#${i+1} [${mi}] A(${q.correct.length}): ${q.correct}\n      W${mi}(${mw}): ${q.wrongs[mi]}`); }); });
} else {
  const only = process.argv[3];
  Object.keys(MQ.BANK).forEach(t => {
    if (only && t !== only) return;
    MQ.BANK[t].forEach((q, i) => {
      const mw = Math.max(...q.wrongs.map(s => s.length));
      if (q.correct.length > mw * 1.2 && q.correct.length > 55) console.log(`${t}#${i+1} | ${q.q}\n  A(${q.correct.length}): ${q.correct}\n  W: ${q.wrongs.join(' || ')}`);
    });
  });
}

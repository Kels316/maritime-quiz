const fs=require('fs'),vm=require('vm');global.window=global;global.document={};
['js/engine.js','js/visuals.js','js/generators.js'].concat(fs.readdirSync('js/q').map(f=>'js/q/'+f)).forEach(f=>vm.runInThisContext(fs.readFileSync(f,'utf8')));
const r=Number(process.argv[3]||1.12);
process.argv[2].split(',').forEach(t=>MQ.BANK[t].forEach((q,i)=>{const L=q.wrongs.map(s=>s.length);const mw=Math.max(...L); if(q.correct.length>mw*r && q.correct.length-mw>=15) console.log(`${t}#${i+1} A(${q.correct.length}) W(${mw}): ${q.correct}\n      | ${q.wrongs.join(' | ')}`)}));

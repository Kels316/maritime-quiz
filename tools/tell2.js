const fs=require('fs'),vm=require('vm');global.window=global;global.document={};
['js/engine.js','js/visuals.js','js/generators.js'].concat(fs.readdirSync('js/q').map(f=>'js/q/'+f)).forEach(f=>vm.runInThisContext(fs.readFileSync(f,'utf8')));
const only=process.argv[2],r=Number(process.argv[3]||1.1);
MQ.BANK[only].forEach((q,i)=>{const mw=Math.max(...q.wrongs.map(s=>s.length)); if(q.correct.length>mw*r && q.correct.length-mw>=15) console.log(`${only}#${i+1} ${q.q}\n  A(${q.correct.length}): ${q.correct}\n  W: ${q.wrongs.join(' | ')}`)});

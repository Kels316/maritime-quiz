const fs=require('fs'),vm=require('vm');global.window=global;global.document={};
['js/engine.js','js/visuals.js','js/generators.js'].concat(fs.readdirSync('js/q').map(f=>'js/q/'+f)).forEach(f=>vm.runInThisContext(fs.readFileSync(f,'utf8')));
const t=process.argv[2];MQ.BANK[t].forEach((q,i)=>console.log(`${t}#${i+1} ${q.vis?'[pic] ':''}${q.q}\n  A: ${q.correct}\n  W: ${q.wrongs.join(' | ')}`));

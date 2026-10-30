import {mkdir,copyFile} from 'node:fs/promises';
await mkdir('dist',{recursive:true});for(const file of ['index.html','style.css','app.js','model.js','report.js','competitor_data.json'])await copyFile(file,'dist/'+file);await copyFile('.nojekyll','dist/.nojekyll');console.log('Static production build created in dist. No remote runtime dependencies.');

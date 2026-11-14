import fs from 'node:fs';
import {assemble} from './vendor/hairline/build.mjs';
const names=['assembly','fieldnotes'];
fs.mkdirSync('public/figures',{recursive:true});
const kernel=fs.readFileSync('artwork/vendor/hairline/kernel.js','utf8');
const license=fs.readFileSync('public/figures/LICENSE.txt','utf8');
for(const name of names){fs.writeFileSync('public/figures/hairline-'+name+'.html',assemble(fs.readFileSync('artwork/'+name+'.js','utf8')));}
const sources=names.map(name=>'(()=>{\n'+fs.readFileSync('artwork/'+name+'.js','utf8')+'\n})();').join('\n');
fs.writeFileSync('public/figures/portfolio-figures.js','/*! Hairline engine: '+license.replaceAll('*/','* /')+' */\n'+kernel+'\n;(function(){\nconst figures={};\nconst hairline=(figure)=>{figures[figure.name]=figure;};\n'+sources+'\nwindow.PortfolioHairline={HL,figures};\n})();\n','utf8');
console.log('Built two standalone figures and their browser integration bundle.');

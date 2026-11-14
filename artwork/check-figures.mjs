import fs from 'node:fs';
import path from 'node:path';
import {chromium} from 'playwright-core';
import {look} from './vendor/hairline/look.mjs';
// The official checker only selects Chrome/Chromium; use this machine's installed Edge.
const launch=chromium.launch.bind(chromium);
chromium.launch=(options={})=>launch({...options,channel:'msedge'});
process.env.HAIRLINE_LOOK_CACHE=process.cwd();
let failed=0;
for(const name of process.argv.slice(2)){
  const output=path.resolve('test-results/hairline-'+name);fs.mkdirSync(output,{recursive:true});
  const points=name==='assembly'?{answer:[194,215],edge:[[100,215],[285,215]]}:{answer:[174,187],edge:[[198,195],[162,181]]};
  failed|=await look('artwork/'+name+'.js',points,output);
}
process.exitCode=failed;

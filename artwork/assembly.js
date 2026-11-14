/** A desktop terminal opened into its interface, circuit deck, and foundation. */
const {Cam,clamp,facing,fit,proj,rings,rrect,prism,poly,ringAt,seg,solid,put,mk,disposer,pointer,register,tween,tset,tval,tdone}=HL;
const REST=[3,25,54], HEIGHT=[10,3,8], NAMES=["foundation","circuit","interface"];
function mount({stage,svg,read},value){
  const bag=disposer();let reach=value,active=-1;
  const C=Cam(45,.5,1.72);
  fit(C,[[-8,-8,0],[114,92,0],[-8,92,0],[114,-8,0],[-8,-8,124],[114,92,124]],200,166);
  const P=proj(C),front=facing(C),g=mk("g",{},svg);
  const footprints=[rings(-6,-4,110,90,9,1.8),rings(2,3,103,82,6,1.2),rings(-8,-8,100,78,8,1.7)];
  const layers=REST.map((z)=>({g:mk("g",{},g),z:tween(z),last:NaN}));
  layers.forEach((layer,i)=>{layer.body=solid(layer.g);layer.body.sil.classList.toggle("hi",i===2);});
  // Bottom enclosure: rounded front port and ventilation slots are real terminal features.
  const port=mk("path",{class:"nf lo"},layers[0].g),vents=mk("path",{class:"nf lo"},layers[0].g);
  // Middle deck: one chip, its perimeter pins, and two routed traces.
  const traces=mk("path",{class:"nf lo"},layers[1].g),chip=solid(layers[1].g),pins=mk("path",{class:"nf lo"},layers[1].g);
  const chipRings=rings(32,25,66,51,3.4,1.1);
  const socket=mk("path",{class:"nf lo"},layers[1].g);
  // Top shell: a recessed screen, a keyboard, and a long space bar.
  const screen=mk("path",{class:"nf"},layers[2].g),bezel=mk("path",{class:"nf lo"},layers[2].g);
  const keys=mk("path",{class:"nf lo"},layers[2].g),space=mk("path",{class:"nf lo"},layers[2].g);
  const screenRing=rrect(6,1,86,37,4,8),bezelRing=rrect(10,5,82,33,2,6);
  const keyRings=[];for(let row=0;row<3;row++)for(let col=0;col<7;col++)keyRings.push(rrect(8+col*11,45+row*7,16+col*11,50+row*7,1.2,4));
  const bodyPort=rrect(36,5,62,9,1.8,6),baseSlots=[];
  for(let i=0;i<5;i++)baseSlots.push([74+i*4,5,74+i*4,8]);
  function draw(i,z){
    const layer=layers[i];if(layer.last===z)return;layer.last=z;
    put(layer.body,prism(P,front,...footprints[i],z,z+HEIGHT[i]));
    if(i===0){
      port.setAttribute("d",poly(bodyPort.map(q=>P(q.u,90,z+q.v))));
      vents.setAttribute("d",baseSlots.map(q=>seg(P(q[0],90,z+q[1]),P(q[2],90,z+q[3]))).join(""));
    }else if(i===1){
      const top=z+HEIGHT[i];
      traces.setAttribute("d",seg(P(12,18,top),P(26,18,top))+seg(P(26,18,top),P(26,38,top))+seg(P(26,38,top),P(32,38,top))+seg(P(66,38,top),P(80,38,top))+seg(P(80,38,top),P(80,65,top))+seg(P(80,65,top),P(92,65,top)));
      put(chip,prism(P,front,...chipRings,top,top+4));
      let d="";for(let k=0;k<6;k++){const x=36+k*5;d+=seg(P(x,20,top),P(x,25,top))+seg(P(x,51,top),P(x,56,top));}
      pins.setAttribute("d",d);socket.setAttribute("d",poly(ringAt(P,rrect(13,59,61,69,2,6),top)));
    }else{
      const top=z+HEIGHT[i];screen.setAttribute("d",poly(ringAt(P,screenRing,top)));
      bezel.setAttribute("d",poly(ringAt(P,bezelRing,top)));
      keys.setAttribute("d",keyRings.map(r=>poly(ringAt(P,r,top))).join(""));
      space.setAttribute("d",poly(ringAt(P,rrect(22,68,70,72,1.5,5),top)));
    }
  }
  const centres=REST.map((z,i)=>P(49,43,z+HEIGHT[i]));
  function hit([x,y]){let chosen=-1,best=1;centres.forEach((c,i)=>{const d=((x-c[0])/118)**2+((y-c[1])/29)**2;if(d<best){best=d;chosen=i;}});return chosen;}
  function choose(a){
    if(a===active)return;const from=a>=0?a:active;active=a;const now=performance.now();
    layers.forEach((layer,i)=>{
      const lift=a<0?0:a===0?[.18,.65,1.3][i]*reach:a===1?[0,.6,1.5][i]*reach:[0,.2,1.2][i]*reach;
      tset(layer.z,REST[i]+clamp(lift,0,55),now,Math.abs(i-from)*42);
      layer.body.sil.classList.toggle("hi",i===(a<0?2:a));
    });
    read.textContent=a<0?"rest":NAMES[a];B.wake();
  }
  const B=register(stage,(_dt,now)=>{let moving=false;layers.forEach((layer,i)=>{draw(i,tval(layer.z,now));if(!tdone(layer.z,now))moving=true;});return moving;});
  layers.forEach((layer,i)=>draw(i,REST[i]));read.textContent="rest";
  bag.add(B.unregister);bag.add(pointer(stage,{move:p=>choose(hit(p)),leave:()=>choose(-1)}));bag.add(()=>svg.replaceChildren());
  return {set(v){reach=clamp(v,8,36);const old=active;active=-2;choose(old);},destroy:bag.dispose};
}
hairline({
  name:"assembly",
  means:"A desktop terminal opens into an interface, a circuit deck, and a foundation as each layer is inspected.",
  rules:[1,2,4,5,6,7,8,9,10],
  range:[8,24,36],
  tour:[[194,237],[194,215],[194,164],null],
  mount,
});

/** A desk organizer opens a fan of research sheets for close reading. */
const {Cam,clamp,facing,fit,proj,rings,rrect,prism,poly,ringAt,seg,rad,solid,put,mk,disposer,pointer,register,tween,tset,tval,tdone}=HL;
const ANGLES=[-11,-4,4,12], Z=[13,17,21,25], N=4;
function mount({stage,svg,read},value){
  const bag=disposer();let spread=value,active=-1,lastOrder="";
  const C=Cam(45,.5,1.65);
  fit(C,[[-28,-25,0],[130,135,0],[-28,135,0],[130,-25,0],[15,-5,84],[115,125,84]],200,166);
  const P=proj(C),front=facing(C),g=mk("g",{},svg),base=solid(g);
  put(base,prism(P,front,...rings(-10,-8,106,115,8,1.7),0,8));
  mk("path",{class:"nf lo",d:poly(ringAt(P,rrect(-4,-2,100,109,5,8),8))},g);
  mk("path",{class:"nf lo",d:poly(rrect(30,3,64,6,1.4,6).map(q=>P(q.u,115,q.v)))},g);
  const papers=mk("g",{},g),pageRings=rings(0,0,70,91,2.5,.6);
  const sheets=ANGLES.map((angle,i)=>{
    const group=mk("g",{},papers),body=solid(group),lines=mk("path",{class:"nf lo"},group),rule=mk("path",{class:"nf"},group);
    body.sil.classList.toggle("hi",i===N-1);
    return {group,body,lines,rule,a:tween(angle),x:tween(i*4),y:tween(i*2),z:tween(Z[i]),last:""};
  });
  function world(angle,dx,dy,z){
    const c=Math.cos(rad(angle)),s=Math.sin(rad(angle));
    return (u,v,h=0)=>P(15+dx+(u-35)*c-(v-12)*s,8+dy+(u-35)*s+(v-12)*c,z+h);
  }
  function draw(i,a,x,y,z){
    const sheet=sheets[i],key=[a,x,y,z].join("/");if(sheet.last===key)return;sheet.last=key;
    const Q=world(a,x,y,z);
    put(sheet.body,prism(Q,front,...pageRings,0,.8));
    let d=seg(Q(10,15,.8),Q(45,15,.8));
    for(let row=0;row<4;row++)d+=seg(Q(10,29+row*7,.8),Q(58-row%2*11,29+row*7,.8));
    d+=seg(Q(10,67,.8),Q(19,67,.8))+seg(Q(25,67,.8),Q(38,67,.8))+seg(Q(44,67,.8),Q(58,67,.8));
    sheet.lines.setAttribute("d",d);
    sheet.rule.setAttribute("d",poly(ringAt(Q,rrect(9,9,57,20,1.7,5),.8)));
  }
  const centres=ANGLES.map((a,i)=>world(a,i*4,i*2,Z[i])(65,73,.8));
  function hit([x,y]){let chosen=-1,best=1;centres.forEach((c,i)=>{const d=((x-c[0])/38)**2+((y-c[1])/46)**2;if(d<best){best=d;chosen=i;}});return chosen;}
  function choose(a){
    if(a===active)return;const from=a>=0?a:active;active=a;const now=performance.now();
    sheets.forEach((sheet,i)=>{
      const distance=Math.abs(i-from),delay=distance*44;
      const side=a<0?0:i<a?-1:i>a?1:0;
      tset(sheet.a,a<0?ANGLES[i]:ANGLES[i]+side*spread*.8,now,delay);
      tset(sheet.x,i*4+(a<0?0:side*spread*.65),now,delay);
      tset(sheet.y,i*2+(a===i?-spread*.32:0),now,delay);
      tset(sheet.z,Z[i]+(a<0?0:a===i?spread*1.1:spread*.12/(distance+1)),now,delay);
      sheet.body.sil.classList.toggle("hi",i===(a<0?N-1:a));
    });
    read.textContent=a<0?"rest":"sheet "+String(a+1).padStart(2,"0");B.wake();
  }
  const B=register(stage,(_dt,now)=>{
    let moving=false;const order=[];
    sheets.forEach((sheet,i)=>{const a=tval(sheet.a,now),x=tval(sheet.x,now),y=tval(sheet.y,now),z=tval(sheet.z,now);draw(i,a,x,y,z);order.push({i,z});if(!tdone(sheet.a,now)||!tdone(sheet.x,now)||!tdone(sheet.y,now)||!tdone(sheet.z,now))moving=true;});
    order.sort((a,b)=>a.z-b.z);const key=order.map(o=>o.i).join("");if(key!==lastOrder){lastOrder=key;order.forEach(o=>papers.append(sheets[o.i].group));}
    return moving;
  });
  sheets.forEach((sheet,i)=>draw(i,ANGLES[i],i*4,i*2,Z[i]));read.textContent="rest";
  bag.add(B.unregister);bag.add(pointer(stage,{move:p=>choose(hit(p)),leave:()=>choose(-1)}));bag.add(()=>svg.replaceChildren());
  return {set(v){spread=clamp(v,8,30);const old=active;active=-2;choose(old);},destroy:bag.dispose};
}
hairline({
  name:"fieldnotes",
  means:"A paper organizer fans its research sheets apart, lifting the one being inspected into a reading position.",
  rules:[1,2,4,5,6,7,8,9,10],
  range:[8,22,30],
  tour:[[198,195],[174,187],[162,181],null],
  mount,
});

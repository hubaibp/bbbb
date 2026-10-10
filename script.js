(()=>{
const $=(s,e=document)=>e.querySelector(s),$$=(s,e=document)=>[...e.querySelectorAll(s)];
const PHONE='919947150142',MSG='Hello Creative Builders, I would like to discuss a house design or construction project. Please share your services and the next steps.';
const wa=t=>`https://wa.me/${PHONE}?text=${encodeURIComponent(t||MSG)}`;
const U=(id,w=900)=>`https://images.unsplash.com/photo-${id}?w=${w}&q=70&auto=format&fit=crop`;
const IMG={a:'1600585154340-be6161a56a0c',b:'1564013799919-ab600027ffc6',c:'1512917774080-9991f1c4c750',d:'1600596542815-ffad4c1539a9',e:'1600607687939-ce8a6c25118c',f:'1613490493576-7fde63acd811',g:'1503387762-592deb58ef4e'};
const ic=p=>`<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="${p}"/></svg>`;
const SVC=[['Building Plans','Professional residential floor plans and space planning tailored to the client\'s requirements.','d','M4 4h16v16H4zM4 12h8V4M12 12v8'],
['Panchayat Permit Assistance','Assistance with building permit documentation and relevant local approval procedures, subject to applicable requirements.','b','M6 3h9l4 4v14H6zM14 3v5h5M9 13h7M9 17h7'],
['3D Architectural Works','Realistic exterior elevations and architectural visualization to help customers understand the proposed design.','c','M12 3l8 4.5v9L12 21l-8-4.5v-9zM12 12l8-4.5M12 12v9M12 12L4 7.5'],
['Site Supervision','Site monitoring and coordination services according to the agreed project scope.','e','M3 21h18M6 21V9l6-5 6 5v12M10 21v-6h4v6'],
['Building Estimates','Preliminary construction cost estimates and quantity-related planning where offered.','g','M5 3h14v18H5zM8 7h8M8 11h2M12 11h2M8 15h2M12 15h2'],
['Construction','Residential construction services focused on functionality, design, and quality-oriented execution.','f','M3 21h18M5 21V10l7-6 7 6v11M9 21v-7h6v7']];
const PROJ=[['Modern Two-Storey Villa','Modern Villas','a','Concept render: white walls, charcoal accents, wooden entrance and a paved driveway.'],
['Minimalist Single-Storey Home','Modern Villas','b','Concept: a compact single-storey home with clean lines and tropical landscaping.'],
['Flat-Roof Contemporary House','Exterior Elevations','c','Concept elevation: flat-roof architecture with large glazing.'],
['Charcoal & Timber Entrance','Exterior Elevations','d','Concept: wooden door and charcoal exterior details.'],
['Living Space Concept','Interior Designs','e','Concept interior visual showing open, practical layout ideas.'],
['Ground Floor Plan Study','Floor Plans','g','Concept plan study showing room layout and circulation.'],
['3D Exterior Visualization','CAD & 3D Visualization','f','Concept 3D exterior render to preview a design before construction.'],
['Garden Villa Render','CAD & 3D Visualization','a','Concept render with landscaped driveway and tropical garden.']];
const WHY=[['Personalized Design Approach','Plans shaped around your plot and needs.'],['Modern Architectural Concepts','Contemporary styles suited to Kerala homes.'],['Detailed 3D Visualization','See the design before construction.'],['Practical Space Planning','Layouts that work day to day.'],['Project Coordination','Clear coordination within the agreed scope.'],['Customer-Focused Service','Open communication at every step.']];
const STEP=[['Share Your Requirements','Tell us your plot, house requirements, preferred style and approximate budget.'],['Planning and Design','Discuss floor plans, architectural requirements and proposed design options.'],['3D Visualization and Estimation','Review the available visualizations and project estimates before proceeding.'],['Execution and Supervision','Coordinate the agreed construction or supervision services according to the project scope.']];
const ph=t=>'data:image/svg+xml,'+encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600"><rect width="800" height="600" fill="#151719"/><path d="M200 400V260l200-120 200 120v140zM360 400V320h80v80" fill="none" stroke="#D7192D" stroke-width="6"/><text x="400" y="480" fill="#8B929B" font-family="sans-serif" font-size="26" text-anchor="middle">${t||'Creative Builders'}</text></svg>`);
function fixImgs(){$$('img').forEach(i=>{if(i.dataset.fb)return;i.dataset.fb=1;i.onerror=()=>{i.onerror=null;i.src=ph(i.alt.split('(')[0].trim())}})}
const img=(k,alt,w)=>`<img loading="lazy" src="${U(IMG[k],w)}" alt="${alt}">`;
$('#svc').innerHTML=SVC.map((s,i)=>`<article class="card svc rv"><div class="im">${img(s[2],s[0]+' (concept imagery)')}<span class="badge">${ic(s[3])}</span><span class="num">0${i+1}</span></div><div class="pad"><h3>${s[0]}</h3><p>${s[1]}</p></div></article>`).join('');
$('#why').innerHTML=WHY.map((w,i)=>`<div class="card rv" data-n="0${i+1}"><h3>${w[0]}</h3><p>${w[1]}</p></div>`).join('');
$('#tl').innerHTML=STEP.map((s,i)=>`<li class="rv"><b>${i+1}</b><h3>${s[0]}</h3><p>${s[1]}</p></li>`).join('');
$('#fsvc').innerHTML=SVC.map(s=>`<span>${s[0]}</span>`).join('');
$('#yr').textContent=new Date().getFullYear();
const cats=['All Projects','Modern Villas','Exterior Elevations','Interior Designs','Floor Plans','CAD & 3D Visualization'];
$('#filters').innerHTML=cats.map((c,i)=>`<button class="${i?'':'on'}" data-c="${c}" aria-pressed="${!i}">${c}</button>`).join('');
const G=$('#gallery');
const draw=c=>{G.innerHTML=PROJ.map((p,i)=>({p,i})).filter(o=>c==='All Projects'||o.p[1]===c).map(({p,i})=>`<button class="card proj" data-i="${i}"><div class="im">${img(p[2],p[0]+' (concept)')}<span class="tag">${p[1]}</span><span class="view">View Project <b>→</b></span></div><div class="pad"><h3>${p[0]}</h3><p>${p[3]}</p></div></button>`).join('')||'<p>No projects in this category yet.</p>';fixImgs()};
$('#filters').onclick=e=>{const b=e.target.closest('button');if(!b)return;$$('#filters button').forEach(x=>{x.classList.toggle('on',x===b);x.setAttribute('aria-pressed',x===b)});draw(b.dataset.c)};
draw('All Projects');
const M=$('#modal');let last;
const close=()=>{M.hidden=true;document.body.style.overflow='';last&&last.focus()};
G.onclick=e=>{const b=e.target.closest('.proj');if(!b)return;last=b;const p=PROJ[b.dataset.i];const mi=$('#mi');mi.dataset.fb='';mi.src=U(IMG[p[2]],1400);mi.alt=p[0]+' (concept render)';$('#mc').textContent=p[1];$('#mt').textContent=p[0];$('#md').textContent=p[3];$('.wa-link',M).href=wa(`Hello Creative Builders, I am interested in a design like "${p[0]}". Please share details.`);M.hidden=false;document.body.style.overflow='hidden';fixImgs();$('#mx').focus()};
$('#mx').onclick=close;M.onclick=e=>{if(e.target===M)close()};addEventListener('keydown',e=>{if(e.key==='Escape'&&!M.hidden)close()});
$$('.wa-link').forEach(a=>a.href=wa());
const hdr=$('#hdr'),nav=$('#nav'),bg=$('#burger');
bg.onclick=()=>{const o=nav.classList.toggle('open');bg.setAttribute('aria-expanded',o)};
nav.onclick=e=>{if(e.target.matches('a')){nav.classList.remove('open');bg.setAttribute('aria-expanded',false)}};
const top=$('#top');top.onclick=()=>scrollTo({top:0,behavior:'smooth'});
const px=$$('[data-px]'),rm=matchMedia('(prefers-reduced-motion:reduce)').matches;
let tick=false;addEventListener('scroll',()=>{if(tick)return;tick=true;requestAnimationFrame(()=>{hdr.classList.toggle('solid',scrollY>60);top.classList.toggle('show',scrollY>600);
if(!rm&&innerWidth>700)px.forEach(el=>{const r=el.getBoundingClientRect();if(r.bottom>0&&r.top<innerHeight)el.style.transform=`translateY(${(r.top-innerHeight/2)*-.06}px)`});tick=false})},{passive:true});
hdr.classList.toggle('solid',scrollY>60);
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.15});
$$('.rv,.plan').forEach(el=>io.observe(el));
document.addEventListener('pointermove',e=>{const c=e.target.closest&&e.target.closest('.card');if(c){const r=c.getBoundingClientRect();c.style.setProperty('--mx',e.clientX-r.left+'px');c.style.setProperty('--my',e.clientY-r.top+'px')}});
const cmp=$('#cmp');$('#rng').oninput=e=>cmp.style.setProperty('--p',e.target.value+'%');
fixImgs();
})();
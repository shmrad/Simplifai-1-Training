// SimplifAI-1 Lesson 1 JS (separate file)
// Advanced UI/UX interactions

const lessons = [
  { id:1, title:'Lesson 1 — Living Button', summary:'Interactive button: HTML/CSS/JS basics', completed:false },
  { id:2, title:'Lesson 2 — Layouts & Flexbox', summary:'Responsive layout foundations', completed:false },
  { id:3, title:'Lesson 3 — State & Events', summary:'Managing UI state with JS', completed:false },
  { id:4, title:'Lesson 4 — Accessible Patterns', summary:'ARIA, keyboard, screen readers', completed:false },
  { id:5, title:'Lesson 5 — Animations', summary:'Motion design and performance', completed:false },
  { id:6, title:'Lesson 6 — Forms', summary:'Validation and UX', completed:false },
  { id:7, title:'Lesson 7 — Build project', summary:'Small project to consolidate skills', completed:false },
  { id:8, title:'Lesson 8 — Review & Next Steps', summary:'Certificate & resources', completed:false }
];

// Starter code: simple living button
const starterCode = `<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <style>
      :root{ --accent:linear-gradient(90deg,#8a2be2,#b57cf6); }
      body{display:grid;place-items:center;height:100vh;margin:0;background:#12031a;font-family:system-ui,Segoe UI,Roboto,Arial;color:#fff}
      .btn{background:var(--accent);border:none;padding:14px 18px;border-radius:12px;color:white;font-weight:700;font-size:16px;cursor:pointer;transition:transform .18s cubic-bezier(.2,.9,.2,1),box-shadow .18s ease}
      .btn:focus{outline:3px solid rgba(181,124,246,0.18);outline-offset:6px}
      .btn:hover{transform:translateY(-6px) rotate(-1deg);box-shadow:0 18px 40px rgba(138,43,226,0.18)}
    </style>
  </head>
  <body>
    <button class="btn" aria-pressed="false" id="liveBtn">Click me — I'm alive</button>

    <script>
      const btn = document.getElementById('liveBtn');
      btn.addEventListener('click', ()=>{
        const pressed = btn.getAttribute('aria-pressed') === 'true';
        btn.setAttribute('aria-pressed', String(!pressed));
        btn.textContent = !pressed ? 'Thanks! — Press again' : "Click me — I'm alive";
      });
    </script>
  </body>
</html>`;

// Elements
const lessonsList = document.getElementById('lessonsList');
const progressFill = document.getElementById('progressFill');
const progressText = document.getElementById('progressText');
const statusText = document.getElementById('statusText');
const codeEditor = document.getElementById('codeEditor');
const previewFrame = document.getElementById('previewFrame');
const runBtn = document.getElementById('runBtn');
const copyStarter = document.getElementById('copyStarter');
const markComplete = document.getElementById('markComplete');
const nextLessonBtn = document.getElementById('nextLesson');
const resetProgress = document.getElementById('resetProgress');
const downloadBtn = document.getElementById('downloadBtn');
const autosaveState = document.getElementById('autosaveState');
const vpSize = document.getElementById('vpSize');

// Load or initialize progress
const STORAGE_KEY = 'simplifai1_progress_v1';
const CODE_KEY = 'simplifai1_code_lesson1';

function loadState(){
  const raw = localStorage.getItem(STORAGE_KEY);
  if(raw){
    try{const parsed=JSON.parse(raw);parsed.forEach((p,i)=>lessons[i].completed = !!p);}
    catch(e){}
  }
  const code = localStorage.getItem(CODE_KEY);
  codeEditor.value = code || starterCode;
}

function saveProgress(){
  const arr = lessons.map(l=>l.completed);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(arr));
  updateUI();
}

function updateUI(){
  lessonsList.innerHTML = '';
  lessons.forEach((l,idx)=>{
    const el = document.createElement('div');
    el.className='lesson'+(l.completed? ' active':'');
    el.tabIndex = 0;
    el.innerHTML = `<div><h3>${l.title}</h3><div class="meta">${l.summary}</div></div><div class="meta">${l.completed? '✓':'○'}</div>`;
    el.addEventListener('click', ()=>selectLesson(idx));
    el.addEventListener('keydown', (e)=>{ if(e.key==='Enter') selectLesson(idx) });
    lessonsList.appendChild(el);
  });

  const completedCount = lessons.filter(l=>l.completed).length;
  const pct = Math.round((completedCount/lessons.length)*100);
  progressFill.style.width = pct + '%';
  progressText.textContent = `${pct}% complete — ${completedCount} / ${lessons.length} lessons`;
  statusText.textContent = completedCount === lessons.length ? 'Completed' : 'Learning';
}

function selectLesson(index){
  const chosen = lessons[index];
  document.getElementById('lessonTitle').textContent = chosen.title;
  document.querySelectorAll('#taskList input[type=checkbox]').forEach((cb,i)=>cb.checked = !!(chosen.completed && i<3));
  if(chosen.id===1) codeEditor.value = localStorage.getItem(CODE_KEY) || starterCode;
  window.scrollTo({top:0,behavior:'smooth'});
}

function runPreview(){
  const code = codeEditor.value;
  try{
    previewFrame.srcdoc = code;
  }catch(e){
    previewFrame.contentWindow.document.open();
    previewFrame.contentWindow.document.write(code);
    previewFrame.contentWindow.document.close();
  }
}

let autosaveTimer = null;
function scheduleAutosave(){
  if(autosaveTimer) clearTimeout(autosaveTimer);
  autosaveTimer = setTimeout(()=>{ localStorage.setItem(CODE_KEY, codeEditor.value); document.getElementById('autosaveState').textContent='Saved'; setTimeout(()=>document.getElementById('autosaveState').textContent='On',800); }, 650);
}

function markLessonComplete(){
  lessons[0].completed = true;
  saveProgress();
  tinyConfetti();
}

function tinyConfetti(){
  for(let i=0;i<12;i++){
    const d = document.createElement('div');
    d.style.position='fixed';d.style.width='9px';d.style.height='9px';d.style.borderRadius='3px';
    d.style.left=(50 + (Math.random()*40-20))+'%';d.style.top=(40 + Math.random()*20-10)+'%';
    const c = ['#b57cf6','#8a2be2','#ffd6ff','#e6b8ff'][Math.floor(Math.random()*4)];
    d.style.background=c;d.style.opacity='0.95';d.style.pointerEvents='none';d.style.transform='translateY(0)';
    d.style.transition='transform 1200ms cubic-bezier(.2,.9,.2,1),opacity 900ms';
    document.body.appendChild(d);
    setTimeout(()=>{d.style.transform='translateY(180px) rotate('+ (Math.random()*360) +'deg)';d.style.opacity='0'},20);
    setTimeout(()=>document.body.removeChild(d),1500);
  }
}

copyStarter.addEventListener('click', ()=>{ codeEditor.value = starterCode; localStorage.setItem(CODE_KEY, starterCode); runPreview(); });

runBtn.addEventListener('click', ()=>{ runPreview(); document.querySelector('[data-task="4"]').checked = true; scheduleAutosave(); });

window.addEventListener('keydown', (e)=>{ if((e.ctrlKey || e.metaKey) && e.key.toLowerCase()==='enter'){ e.preventDefault(); runPreview(); } });

downloadBtn.addEventListener('click', ()=>{
  const blob = new Blob([codeEditor.value], {type:'text/html'});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a'); a.href=url; a.download = 'simplifai_lesson1.html'; document.body.appendChild(a); a.click(); a.remove(); URL.revokeObjectURL(url);
});

markComplete.addEventListener('click', ()=>{ markLessonComplete(); });

nextLessonBtn.addEventListener('click', ()=>{
  const idx = lessons.findIndex(l=>!l.completed);
  if(idx>-1){ lessons[idx].completed = true; saveProgress(); }
  else alert('You finished all lessons. Great job!');
});

resetProgress.addEventListener('click', ()=>{ if(confirm('Reset all progress?')){ lessons.forEach(l=>l.completed=false); saveProgress(); } });

document.querySelectorAll('#taskList input[type=checkbox]').forEach(cb=>{
  cb.addEventListener('change', ()=>{
    const all = Array.from(document.querySelectorAll('#taskList input[type=checkbox]')).every(c=>c.checked);
    if(all){ lessons[0].completed = true; saveProgress(); }
  });
});

codeEditor.addEventListener('input', ()=>{ scheduleAutosave(); });

function updateVP(){ vpSize.textContent = Math.round(previewFrame.clientWidth) + 'px × ' + Math.round(previewFrame.clientHeight) + 'px'; }
const ro = new ResizeObserver(updateVP); ro.observe(previewFrame);

loadState(); updateUI(); selectLesson(0); runPreview();

window.addEventListener('keydown', (e)=>{ if(e.key.toLowerCase()==='e' && !['INPUT','TEXTAREA'].includes(document.activeElement.tagName)){ e.preventDefault(); codeEditor.focus(); } });

function trackRun(){ localStorage.setItem('simplifai1_lastRun', Date.now()); }
runBtn.addEventListener('click', trackRun);

scheduleAutosave();

:root{
  --bg-1: #0f0424;
  --bg-2: #190437;
  --card: linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01));
  --accent-1: #8a2be2;
  --accent-2: #b57cf6;
  --glass: rgba(255,255,255,0.04);
  --muted: rgba(255,255,255,0.6);
  --glass-border: rgba(255,255,255,0.06);
  --radius: 14px;
  --shadow-1: 0 6px 20px rgba(11,3,34,0.6);
  --glass-shadow: 0 8px 30px rgba(15,4,36,0.65);
  color-scheme: dark;
}

*{box-sizing: border-box}
html,body{height:100%}
body{
  margin:0;
  font-family: 'Inter', system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial;
  background: radial-gradient(1200px 600px at 10% 10%, rgba(139,0,255,0.14), transparent 6%),
              radial-gradient(900px 500px at 90% 90%, rgba(66,0,121,0.12), transparent 6%),
              linear-gradient(180deg, var(--bg-1), var(--bg-2));
  color: #fff;
  -webkit-font-smoothing:antialiased;
  -moz-osx-font-smoothing:grayscale;
  padding:28px;
}

/* App frame */
.app{
  max-width:1200px;
  margin:0 auto;
  min-height:calc(100vh - 56px);
  display:grid;
  grid-template-columns: 320px 1fr;
  gap:20px;
  align-items:start;
}

/* Sidebar */
.sidebar{
  background: var(--card);
  border-radius:calc(var(--radius) - 4px);
  padding:18px;
  border:1px solid var(--glass-border);
  box-shadow:var(--glass-shadow);
  backdrop-filter: blur(8px) saturate(120%);
  display:flex;flex-direction:column;gap:16px;
  min-height:520px;
}

.brand{display:flex;gap:12px;align-items:center;}
.logo{width:46px;height:46px;border-radius:10px;
  background:linear-gradient(135deg,var(--accent-1),var(--accent-2));
  display:grid;place-items:center;font-weight:800;font-size:18px;color:white;box-shadow:0 6px 18px rgba(133,60,255,0.25);
}
.brand h1{font-size:15px;margin:0}
.brand p{margin:0;font-size:12px;color:var(--muted)}

.progress-wrap{display:flex;flex-direction:column;gap:8px}
.progress-bar{
  height:10px;background:linear-gradient(90deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02));
  border-radius:999px;overflow:hidden;border:1px solid rgba(255,255,255,0.02)
}
.progress-bar > i{display:block;height:100%;width:0;background:linear-gradient(90deg,var(--accent-1),var(--accent-2));transition:width .45s cubic-bezier(.2,.9,.2,1)}

.lessons{display:flex;flex-direction:column;gap:8px}
.lesson{
  padding:10px;border-radius:10px;display:flex;justify-content:space-between;align-items:center;
  background:transparent;border:1px solid transparent;cursor:pointer;transition:all .18s ease;
}
.lesson:hover{transform:translateY(-3px);box-shadow:var(--shadow-1);border-color:rgba(255,255,255,0.03)}
.lesson.active{background:linear-gradient(120deg, rgba(138,43,226,0.12), rgba(181,124,246,0.06));border-color:rgba(181,124,246,0.12)}
.lesson h3{margin:0;font-size:13px}
.lesson .meta{font-size:12px;color:var(--muted)}

.cta{display:flex;gap:8px}
.btn{
  padding:10px 14px;border-radius:12px;border:0;cursor:pointer;font-weight:600;letter-spacing:.2px;transition:transform .12s ease, box-shadow .12s ease;box-shadow:0 6px 20px rgba(11,3,34,0.45);
}
.btn-primary{background:linear-gradient(90deg,var(--accent-1),var(--accent-2));color:white}
.btn-ghost{background:transparent;border:1px solid rgba(255,255,255,0.04);color:var(--muted)}
.btn:active{transform:translateY(1px)}

/* Main content */
.main{
  background: linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01));
  border-radius:calc(var(--radius));padding:18px;border:1px solid var(--glass-border);box-shadow:var(--glass-shadow);
  min-height:520px;display:flex;flex-direction:column;gap:16px;
}

.hero{display:flex;justify-content:space-between;align-items:center;gap:12px}
.hero h2{margin:0;font-size:18px}
.hero p{margin:0;color:var(--muted);font-size:13px}

.stage{display:grid;grid-template-columns: 1fr 420px;gap:16px;align-items:start;}

.lesson-card{background:transparent;padding:14px;border-radius:12px;border:1px dashed rgba(255,255,255,0.02);min-height:280px}
.lesson-card h3{margin-top:0}
.task-list{display:flex;flex-direction:column;gap:8px;margin-top:12px}
.task{display:flex;gap:10px;align-items:center}
.task input[type=checkbox]{width:18px;height:18px;border-radius:4px;background:transparent;border:1px solid rgba(255,255,255,0.06)}

/* Editor area */
.editor-wrap{display:flex;flex-direction:column;gap:10px}
.editor-controls{display:flex;gap:8px;align-items:center;justify-content:space-between}
.editor-controls .left{display:flex;gap:8px;align-items:center}
.editor-controls .muted{color:var(--muted);font-size:13px}

.split{display:grid;grid-template-columns:1fr 1fr;gap:10px;height:320px;border-radius:10px;overflow:hidden;border:1px solid rgba(255,255,255,0.02)}

textarea.code{
  width:100%;height:100%;resize:none;padding:14px;background:linear-gradient(180deg, rgba(10,4,20,0.3), rgba(0,0,0,0.22));border:none;color:#eae6ff;font-family:ui-monospace, SFMono-Regular, Menlo, monospace;font-size:13px;outline:none;line-height:1.5;
}

.preview{background:linear-gradient(180deg, rgba(255,255,255,0.01), rgba(255,255,255,0.00));border-left:1px solid rgba(255,255,255,0.02);display:flex;flex-direction:column;gap:8px;overflow:hidden}
.preview iframe{flex:1;border:0;width:100%;height:100%}

.small{font-size:12px;color:var(--muted)}

/* Responsive */
@media (max-width:1000px){
  .app{grid-template-columns:1fr;}
  .stage{grid-template-columns:1fr;}
  .split{height:260px}
}

/* Tiny micro interactions */
.sparkle{position:relative}
.sparkle::after{content:"";position:absolute;right:-6px;top:-6px;width:8px;height:8px;border-radius:50%;background:linear-gradient(90deg,#fff,#ffd6ff);box-shadow:0 6px 18px rgba(133,60,255,0.18);opacity:.9}

.hint{padding:8px 12px;border-radius:10px;background:linear-gradient(90deg, rgba(138,43,226,0.12), rgba(181,124,246,0.06));font-size:13px;color:var(--muted)}

const output  = document.getElementById('output');
const cmdInput = document.getElementById('cmd-input');

// ── HELPERS ──────────────────────────────────────────────────

function el(tag, cls, html) {
  const e = document.createElement(tag);
  if (cls)            e.className = cls;
  if (html !== undefined) e.innerHTML = html;
  return e;
}

function blank()    { output.appendChild(el('div', 'out-blank')); }
function scrollDown() { output.scrollTop = output.scrollHeight; }

function printLine(text, cls = '') {
  const d = el('div', `out-line ${cls}`.trim());
  d.textContent = text;
  output.appendChild(d);
  scrollDown();
}

function printHTML(html) {
  const d = el('div', 'out-block');
  d.innerHTML = html;
  output.appendChild(d);
  scrollDown();
}

function printCmdLine(text) {
  output.appendChild(el('div', 'out-cmd',
    `<span class="out-cmd__prompt">$</span><span class="out-cmd__text">${text}</span>`));
  scrollDown();
}

// ── COMMAND DEFINITIONS ──────────────────────────────────────

const COMMANDS = {

  help() {
    printHTML(`
      <div class="s-head">available commands</div>
      <div class="kv"><span class="kv__k">whoami</span><span class="kv__v">short introduction</span></div>
      <div class="kv"><span class="kv__k">experience</span><span class="kv__v">career timeline as git log</span></div>
      <div class="kv"><span class="kv__k">stack</span><span class="kv__v">technical skills</span></div>
      <div class="kv"><span class="kv__k">projects</span><span class="kv__v">selected work</span></div>
      <div class="kv"><span class="kv__k">principles</span><span class="kv__v">engineering values</span></div>
      <div class="kv"><span class="kv__k">contact</span><span class="kv__v">get in touch</span></div>
      <div class="kv"><span class="kv__k">resume</span><span class="kv__v">open resume PDF</span></div>
      <div class="kv"><span class="kv__k">clear</span><span class="kv__v">clear terminal</span></div>
      <div class="kv"><span class="kv__k">classic</span><span class="kv__v">switch to classic view</span></div>
    `);
  },

  whoami() {
    printHTML(`
      <div class="out-block">
        <div class="kv"><span class="kv__k">name</span><span class="kv__v">Mirko Teschke</span></div>
        <div class="kv"><span class="kv__k">origin</span><span class="kv__v">Germany</span></div>
        <div class="kv"><span class="kv__k">current</span><span class="kv__v">Palo Alto, CA</span></div>
        <div class="kv"><span class="kv__k">role</span><span class="kv__v">Software Engineer</span></div>
        <div class="kv"><span class="kv__k">at</span><span class="kv__v">SAP</span></div>
        <div class="kv"><span class="kv__k">focus</span><span class="kv__v">Enterprise Web UI · Fullstack</span></div>
      </div>
      <div class="out-blank"></div>
      <div class="out-line--muted" style="max-width:60ch;line-height:1.85">
        I build modern web interfaces for complex enterprise systems.<br>
        Started through a dual study program at SAP in Germany, relocated<br>
        to Silicon Valley in 2018, and have been in the SAP ecosystem —<br>
        SAPUI5, Fiori Elements, fullstack — for 15 years.
      </div>
      <div class="out-blank"></div>
      <div class="out-line--dim">→ try <span class="inline-cmd" onclick="runCmd('experience')">experience</span> or <span class="inline-cmd" onclick="runCmd('projects')">projects</span></div>
    `);
  },

  experience() {
    printHTML(`
      <div class="s-head">git log --career --oneline</div>
      <div class="commits">

        <div class="commit">
          <div class="commit__hash">commit 2018..present · Palo Alto, CA</div>
          <div class="commit__title">SAP — Senior Software Engineer</div>
          <div class="commit__meta">7+ years · Silicon Valley</div>
          <div class="commit__body">
            Enterprise UI engineering on the US West Coast. Building SAPUI5
            and Fiori Elements applications, fullstack product work, UI
            architecture for large-scale enterprise systems.
          </div>
          <div class="commit__tags">
            <span class="tag">SAPUI5</span>
            <span class="tag">Fiori Elements</span>
            <span class="tag">TypeScript</span>
            <span class="tag">Node.js</span>
            <span class="tag">CAP</span>
            <span class="tag">OData</span>
          </div>
        </div>

        <div class="commit">
          <div class="commit__hash">commit 2014..2018 · Germany</div>
          <div class="commit__title">SAP — Software Engineer</div>
          <div class="commit__meta">4 years · Walldorf</div>
          <div class="commit__body">
            Enterprise application development within the SAP ecosystem.
            Web UI technologies, production systems, and core platform work.
          </div>
          <div class="commit__tags">
            <span class="tag">SAPUI5</span>
            <span class="tag">JavaScript</span>
            <span class="tag">OData</span>
            <span class="tag">SAP Ecosystem</span>
          </div>
        </div>

        <div class="commit">
          <div class="commit__hash">commit 2011..2014 · Germany</div>
          <div class="commit__title">SAP — Dual Study Program</div>
          <div class="commit__meta">B.Sc. Applied CS + hands-on engineering</div>
          <div class="commit__body">
            Combined software engineering degree with practical development
            at SAP. Foundation in enterprise systems, applied computer science,
            and the full SAP technology stack.
          </div>
          <div class="commit__tags">
            <span class="tag">Java</span>
            <span class="tag">Enterprise Systems</span>
            <span class="tag">Applied CS</span>
          </div>
        </div>

      </div>
    `);
  },

  stack() {
    printHTML(`
      <div class="s-head">tech stack</div>
      <div class="stack-group">
        <div class="stack-group__name">core</div>
        <div class="stack-item"><span>SAPUI5</span></div>
        <div class="stack-item"><span>Fiori Elements</span></div>
        <div class="stack-item"><span>TypeScript</span></div>
        <div class="stack-item"><span>Enterprise UI Architecture</span></div>
      </div>
      <div class="stack-group">
        <div class="stack-group__name">strong</div>
        <div class="stack-item"><span>React</span></div>
        <div class="stack-item"><span>Node.js</span></div>
        <div class="stack-item"><span>OData · CAP</span></div>
        <div class="stack-item"><span>Design Systems</span></div>
      </div>
      <div class="stack-group">
        <div class="stack-group__name">comfortable</div>
        <div class="stack-item"><span>Fullstack prototyping</span></div>
        <div class="stack-item"><span>AI tooling</span></div>
        <div class="stack-item"><span>Cloud-native app patterns</span></div>
      </div>
    `);
  },

  projects() {
    printHTML(`
      <div class="s-head">ls -la projects/</div>

      <div class="project">
        <div class="project__path">~/projects/metadata-driven-ui/</div>
        <div class="project__title">Metadata-driven Enterprise UI</div>
        <div class="project__desc">
          Reusable UI patterns for enterprise teams built on Fiori Elements
          and SAPUI5. Reduced repetition across teams, improved consistency
          and developer experience across large-scale SAP applications.
        </div>
        <div class="project__meta">
          <div><span class="project__label">stack&nbsp;</span><span class="project__value">SAPUI5, Fiori Elements, TypeScript, OData</span></div>
          <div><span class="project__label">role&nbsp;&nbsp;</span><span class="project__value">Frontend · UI Architecture</span></div>
        </div>
      </div>

      <div class="project">
        <div class="project__path">~/projects/fullstack-cap-app/</div>
        <div class="project__title">Fullstack CAP Application</div>
        <div class="project__desc">
          End-to-end enterprise application using SAP Cloud Application
          Programming Model. Backend services, OData APIs, and a Fiori
          Elements frontend — all from a single monorepo.
        </div>
        <div class="project__meta">
          <div><span class="project__label">stack&nbsp;</span><span class="project__value">CAP, Node.js, SAP HANA, Fiori Elements</span></div>
          <div><span class="project__label">role&nbsp;&nbsp;</span><span class="project__value">Fullstack</span></div>
        </div>
      </div>

      <div class="project">
        <div class="project__path">~/projects/ai-tooling/</div>
        <div class="project__title">AI Tooling Experiments</div>
        <div class="project__desc">
          Exploring how AI-assisted tooling can improve developer workflows
          in enterprise contexts — UI scaffolding, code generation, and
          integrating LLMs into existing SAP development patterns.
        </div>
        <div class="project__meta">
          <div><span class="project__label">stack&nbsp;</span><span class="project__value">TypeScript, LLM APIs, SAPUI5</span></div>
          <div><span class="project__label">role&nbsp;&nbsp;</span><span class="project__value">Exploration · Prototyping</span></div>
        </div>
        <div class="project__links">
          <a class="project__link" href="https://github.com/tomba07" target="_blank" rel="noopener">github.com/tomba07 ↗</a>
        </div>
      </div>

      <div class="out-line--dim" style="margin-top:.5rem">
        → more at <a class="contact-val" style="font-size:inherit" href="https://github.com/tomba07" target="_blank" rel="noopener">github.com/tomba07 ↗</a>
      </div>
    `);
  },

  principles() {
    printHTML(`
      <div class="s-head">cat principles.md</div>
      <div class="principle"><span class="principle__arrow">→</span><span class="principle__text">Simplicity over cleverness</span></div>
      <div class="principle"><span class="principle__arrow">→</span><span class="principle__text">UI is the product, not decoration</span></div>
      <div class="principle"><span class="principle__arrow">→</span><span class="principle__text">Enterprise constraints are design problems</span></div>
      <div class="principle"><span class="principle__arrow">→</span><span class="principle__text">Maintainability is a feature</span></div>
      <div class="principle"><span class="principle__arrow">→</span><span class="principle__text">Know your tools deeply before reaching for new ones</span></div>
      <div class="principle"><span class="principle__arrow">→</span><span class="principle__text">Ship it, then improve it</span></div>
    `);
  },

  contact() {
    printHTML(`
      <div class="s-head">contact --all</div>
      <div class="contact-row">
        <span class="contact-key">github</span>
        <a class="contact-val" href="https://github.com/tomba07" target="_blank" rel="noopener">github.com/tomba07</a>
      </div>
      <div class="contact-row">
        <span class="contact-key">linkedin</span>
        <a class="contact-val" href="https://www.linkedin.com/in/mirko-teschke-9187ba75/" target="_blank" rel="noopener">linkedin.com/in/mirko-teschke-9187ba75</a>
      </div>
      <div class="contact-row">
        <span class="contact-key">resume</span>
        <a class="contact-val" href="resume.pdf" target="_blank">download PDF ↗</a>
      </div>
    `);
  },

  resume() {
    window.open('resume.pdf', '_blank');
    printLine('opening resume.pdf...', 'out-line--dim');
  },

  clear() {
    output.innerHTML = '';
  },

  classic() {
    window.location.href = 'classic.html';
  }
};

// ── COMMAND RUNNER ────────────────────────────────────────────

function runCmd(raw) {
  const cmd = raw.trim().toLowerCase();
  if (!cmd) return;

  if (cmd !== 'clear') blank();
  printCmdLine(cmd);

  if (cmd === 'clear') {
    COMMANDS.clear();
  } else if (COMMANDS[cmd]) {
    COMMANDS[cmd]();
  } else {
    printLine(`command not found: ${cmd}`, 'out-line--warn');
    printLine('run "help" to see available commands', 'out-line--dim');
  }
  scrollDown();
}

// ── TYPING ANIMATION (for chip clicks) ───────────────────────

function typeAndRun(cmd) {
  if (cmd === 'clear') { COMMANDS.clear(); return; }
  blank();

  const row = el('div', 'out-cmd',
    `<span class="out-cmd__prompt">$</span><span class="out-cmd__text"></span><span class="cursor"></span>`);
  output.appendChild(row);

  const textEl = row.querySelector('.out-cmd__text');
  const cursor = row.querySelector('.cursor');
  let i = 0;

  function step() {
    if (i < cmd.length) {
      textEl.textContent += cmd[i++];
      scrollDown();
      setTimeout(step, 40 + Math.random() * 35);
    } else {
      cursor.remove();
      scrollDown();
      setTimeout(() => {
        if (COMMANDS[cmd]) COMMANDS[cmd]();
        scrollDown();
      }, 180);
    }
  }
  setTimeout(step, 80);
}

// ── BOOT SEQUENCE ─────────────────────────────────────────────

function boot() {
  const steps = [
    { t: 0,    fn: () => printLine('# loading portfolio...', 'out-line--dim') },
    { t: 320,  fn: () => blank() },
    { t: 430,  fn: () => printHTML('<div class="kv"><span class="kv__k">name</span><span class="kv__v">Mirko Teschke</span></div>') },
    { t: 600,  fn: () => printHTML('<div class="kv"><span class="kv__k">origin</span><span class="kv__v">Germany</span></div>') },
    { t: 770,  fn: () => printHTML('<div class="kv"><span class="kv__k">current</span><span class="kv__v">Palo Alto, CA</span></div>') },
    { t: 940,  fn: () => printHTML('<div class="kv"><span class="kv__k">role</span><span class="kv__v">Software Engineer · SAP</span></div>') },
    { t: 1110, fn: () => printHTML('<div class="kv"><span class="kv__k">focus</span><span class="kv__v">Enterprise Web UI · Fullstack</span></div>') },
    { t: 1380, fn: () => blank() },
    { t: 1480, fn: () => printLine('Ready.', 'out-line--green') },
    { t: 1680, fn: () => blank() },
    { t: 1900, fn: () => typeAndRun('help') },
  ];

  steps.forEach(s => setTimeout(s.fn, s.t));
}

// ── EVENT LISTENERS ───────────────────────────────────────────

document.querySelectorAll('.chip[data-cmd]').forEach(btn => {
  btn.addEventListener('click', () => typeAndRun(btn.dataset.cmd));
});

cmdInput.addEventListener('keydown', e => {
  if (e.key !== 'Enter') return;
  const val = cmdInput.value;
  cmdInput.value = '';
  runCmd(val);
});

// clicking the output area focuses the input
output.addEventListener('click', e => {
  if (!window.getSelection().toString()) cmdInput.focus();
});

// ── START ─────────────────────────────────────────────────────

boot();

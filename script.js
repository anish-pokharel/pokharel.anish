/* ============ CENTRAL CONTENT: edit this object to update the whole site ============ */
const D = {
  name: "Anish Pokharel",
  initials: "AP",
  email: "er.anishpokharel@gmail.com",
  headline: "Master’s Student in Computer Engineering | AI/ML Researcher",
  location: "Lalitpur, Nepal",
  university: "Nepal College of Information Technology, Pokhara University",
  grad: "[EXPECTED GRADUATION YEAR]",
  // Leave a link empty ("") and it is hidden automatically.
  links: { scholar: "", orcid: "", github: "", linkedin: "" },
  cvFile: "", // e.g. "cv.pdf" once you place a real PDF next to index.html
  intro: "I am a Master’s student in Computer Engineering with research interests in artificial intelligence, deep learning, unsupervised learning, and time-series anomaly detection. I aim to develop reliable and computationally efficient machine learning methods that identify unusual patterns in complex real-world data, with a focus on reproducible research and collaboration.",
  stats: [["2019–24", "BE Software Engineering"], ["7", "Colleges taught at"], ["3", "Languages spoken"], ["2022–23", "Industry experience"]],
  education: [
    { t: "Master of Computer Engineering (ongoing)", u: "Nepal College of Information Technology, Pokhara University", p: "In progress", x: "Thesis: [THESIS TITLE] · Supervisor: [SUPERVISOR NAME] · Coursework: [ADD]" },
    { t: "BE in Software Engineering", u: "Nepal College of Information Technology, Pokhara University", p: "2019 – 2024", x: "Software design, development and analysis; programming languages, database management and software architecture; project management and collaborative projects." }
  ],
  experience: [
    { t: "Lecturer", u: "Nobel Academy · K & K International College · VS International College · Aryan School of Engineering & Management · Triton International College · KIST College of Information Technology · Nepal College of Information Technology", p: "Dates to be added", x: "Taught core BCA subjects: programming languages, numerical methods, computer graphics and web development. Designed coursework, evaluated student performance and provided mentorship through interactive, practical learning." },
    { t: "Software Developer", u: "Upcode Nepal, Jadibuti, Kathmandu", p: "2022 – 2023", x: "Developed dynamic web applications with Angular, integrated APIs and collaborated with the backend team." }
  ],
  interests: [
    ["Artificial Intelligence & Machine Learning", "Learning reliable models from data.", "Which methods stay dependable outside clean benchmarks?", ["Python", "scikit-learn"]],
    ["Deep Learning", "Neural architectures for complex data.", "How can models stay efficient without losing accuracy?", ["PyTorch"]],
    ["Autoencoders & Representation Learning", "Compact latent structure of normal behaviour.", "What does a latent space reveal about normality?", ["Autoencoders", "VAE"]],
    ["Unsupervised & Self-Supervised Learning", "Learning without dense labels.", "How far can unlabeled data take detection?", ["Contrastive learning"]],
    ["Time-Series Anomaly Detection", "Unusual patterns in sequences.", "How should thresholds be chosen when anomalies are rare?", ["Reconstruction error", "PR-AUC"]],
    ["Robust ML & Domain Shift", "Behaviour under noise and shift.", "Can detectors adapt at test time?", ["Test-time adaptation"]],
    ["AI for Cybersecurity", "Detecting abnormal or malicious activity.", "Which unsupervised signals transfer to security data?", ["Anomaly scoring"]],
    ["Explainable & Efficient ML", "Interpretable, resource-aware models.", "Can explanations be cheap and faithful?", ["Edge ML", "XAI"]]
  ],
  skills: {
    "Web & Software": ["Web design and development", "Angular", "API integration", "Graphic design"],
    "Teaching & Communication": ["Lesson planning", "Public speaking", "Mentoring", "German · English · Hindi"],
    "Working Style": ["Team collaboration", "Time management"]
  },
  thesisStages: [["Problem definition", 1], ["Literature review", 0], ["Data & preprocessing", 0], ["Model design", 0], ["Experiments", 0], ["Writing & defence", 0]],
  projects: [
    { t: "[PROJECT TITLE — placeholder]", c: "Anomaly Detection", d: "Describe the problem, dataset, method and results. Replace this card with a real project.", tech: ["Python"], repo: "" },
    { t: "[PROJECT TITLE — placeholder]", c: "Software Engineering", d: "Add an Angular or web project you built, with repository and demo links.", tech: ["Angular", "TypeScript"], repo: "" }
  ],
  // Add real entries only. Example shape:
  // { title:"", authors:"", year:2026, venue:"", type:"Conference", doi:"", pdf:"", bibtex:"" }
  pubs: [],
  posts: [
    { title: "Thesis progress notes (sample post — replace)", date: "2026-10-17", tags: ["Thesis"], read: 2, body: "Write your first update here. Describe what you tried, what you learned and what comes next." }
  ]
};

/* ============ HELPERS ============ */
const $ = (s, r = document) => r.querySelector(s);
const esc = s => String(s ?? "").replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
const pages = ["home", "about", "research", "thesis", "publications", "projects", "blog", "cv", "contact"];
const label = { home: "Home", about: "About", research: "Research", thesis: "Thesis", publications: "Publications", projects: "Projects", blog: "Blog", cv: "CV", contact: "Contact" };

const links = () => {
  const L = D.links;
  const items = [["Google Scholar", L.scholar], ["ORCID", L.orcid], ["GitHub", L.github], ["LinkedIn", L.linkedin]].filter(x => x[1]);
  items.push(["Email", "mailto:" + D.email]);
  return items.map(x => `<a class="btn s" href="${esc(x[1])}" rel="noopener" ${x[1].startsWith("http") ? 'target="_blank"' : ""}>${x[0]}</a>`).join("");
};
const timeline = a => `<div class="tl">${a.map(e => `<div class="card"><span class="when">${esc(e.p)}</span><h3>${esc(e.t)}</h3><p><b>${esc(e.u)}</b></p><p>${esc(e.x)}</p></div>`).join("")}</div>`;
const tags = (a, c = "") => a.map(t => `<span class="tag ${c}">${esc(t)}</span>`).join("");
const empty = m => `<div class="note">${m}</div>`;

/* ============ PAGES ============ */
const V = {
  home: () => `<section class="page">
    <div class="hero"><div>
      <div class="eyebrow">${esc(D.location)}</div>
      <h1>${esc(D.name)}</h1>
      <p class="eyebrow" style="color:var(--primary);font-size:15px;text-transform:none;letter-spacing:0">${esc(D.headline)}</p>
      <p class="lead">${esc(D.intro)}</p>
      <p class="mute" style="font-size:15px">${esc(D.university)} · Master’s in Computer Engineering · Expected graduation: ${esc(D.grad)}</p>
      <div class="actions"><a class="btn p" href="#research">Explore My Research</a><a class="btn" href="#projects">View My Projects</a><a class="btn" href="#cv">Download CV</a><a class="btn" href="#contact">Contact Me</a></div>
      <div class="actions" style="margin-top:0">${links()}</div>
    </div><div class="photo" aria-label="Profile photo placeholder">${esc(D.initials)}</div></div>
    <div class="stats">${D.stats.map(s => `<div class="stat"><b>${esc(s[0])}</b><span>${esc(s[1])}</span></div>`).join("")}</div>
    <h2>Education</h2>${timeline(D.education)}
  </section>`,

  about: () => `<section class="page"><h2>About Me</h2>
    <p>I am Anish, a software engineer and lecturer from Lalitpur, Nepal. I completed a BE in Software Engineering (2019–2024) and am now pursuing a Master of Computer Engineering at Nepal College of Information Technology, Pokhara University.</p>
    <p>My path mixes industry and teaching. I worked as a software developer at Upcode Nepal, building Angular applications and integrating APIs, and I have lectured BCA subjects at several colleges in Kathmandu and Lalitpur. Making difficult topics understandable has shaped how I approach my own research problems.</p>
    <p><b>Research motivation.</b> I am drawn to problems where data is messy and labels are scarce, which is why anomaly detection and representation learning interest me most.</p>
    <p><b>Approach.</b> I value reproducible experiments, careful evaluation, and honest reporting of limitations.</p>
    <p><b>Goals.</b> I am planning to pursue doctoral research and I am open to PhD opportunities, research assistantships and collaboration with groups working on reliable AI systems.</p>
    ${empty("Draft text. Refine the motivation and philosophy paragraphs in your own words before sharing.")}
    <h2>Experience</h2>${timeline(D.experience)}
    <h2>Skills</h2><div class="grid">${Object.entries(D.skills).map(([k, v]) => `<div class="card"><h3>${esc(k)}</h3>${tags(v)}</div>`).join("")}</div>
    ${empty("Add Python, PyTorch, LaTeX and other research tools to <code>D.skills</code> once confirmed. No proficiency percentages are shown.")}
  </section>`,

  research: () => `<section class="page"><h2>Research Interests</h2>
    ${empty("These are areas of interest, not claims of completed research.")}
    <div class="grid">${D.interests.map(i => `<div class="card"><h3>${esc(i[0])}</h3><p>${esc(i[1])}</p><p><span class="lab">Key question</span><br>${esc(i[2])}</p>${tags(i[3])}</div>`).join("")}</div>
    <h2>PhD &amp; Collaboration</h2>
    <p>I am interested in pursuing doctoral research in machine learning, representation learning and robust anomaly detection. I welcome collaboration with researchers working on reliable AI systems, unsupervised learning and data-driven approaches to real-world problems, and I am open to research assistantships.</p>
    <div class="actions"><a class="btn p" href="#contact">Discuss collaboration</a></div>
  </section>`,

  thesis: () => {
    const secs = ["Research problem", "Motivation & significance", "Research gap", "Research questions", "Objectives", "Related work", "Methodology", "Dataset & preprocessing", "Baselines", "Experimental setup", "Evaluation metrics", "Limitations", "Ethical considerations", "Future directions"];
    return `<section class="page"><h2>Master’s Thesis</h2>
    <h3 style="font-size:24px">[THESIS TITLE]</h3>
    <p><span class="tag w">Status: [STATUS]</span><span class="tag">Expected completion: [DATE]</span></p>
    ${empty("Template for an autoencoder-based anomaly detection thesis. Replace each section with your real content.")}
    <h3>Progress</h3><div class="steps">${D.thesisStages.map(s => `<div class="step ${s[1] ? "done" : ""}"><b>${esc(s[0])}</b>${s[1] ? "Done" : "Not started"}</div>`).join("")}</div>
    <h2>Pipeline</h2>
    <svg class="diagram" viewBox="0 0 640 170" role="img" aria-label="Autoencoder pipeline diagram">
      <rect x="10" y="55" width="90" height="60" rx="10"/><text x="30" y="90">Input x</text>
      <path d="M100 85H140"/><rect x="140" y="40" width="100" height="90" rx="10"/><text x="168" y="90">Encoder</text>
      <path d="M240 85H270"/><rect class="lat" x="270" y="65" width="70" height="40" rx="8"/><text x="285" y="90" style="fill:#fff">z</text>
      <path d="M340 85H370"/><rect x="370" y="40" width="100" height="90" rx="10"/><text x="398" y="90">Decoder</text>
      <path d="M470 85H500"/><rect x="500" y="55" width="60" height="60" rx="10"/><text x="516" y="90">x̂</text>
      <path d="M560 85H580"/><rect x="580" y="55" width="55" height="60" rx="10"/><text x="590" y="90">Score</text></svg>
    <p>Reconstruction error is used as the anomaly score: <code>s(x) = ‖x − D(E(x))‖²</code>. A sample is flagged when <code>s(x) &gt; τ</code>, with τ chosen on validation data.</p>
    <h2>Sections</h2><div class="grid">${secs.map(x => `<div class="card"><h3>${x}</h3><p>[To be added]</p></div>`).join("")}</div>
    <h2>Results</h2><div class="sc"><table><tr><th>Model</th><th>Precision</th><th>Recall</th><th>F1</th><th>ROC-AUC</th><th>PR-AUC</th></tr>
    <tr><td>Proposed</td><td colspan="5">Results forthcoming</td></tr><tr><td>Baseline</td><td colspan="5">Results forthcoming</td></tr></table></div>
    </section>`;
  },

  publications: () => `<section class="page"><h2>Publications</h2>
    <div class="tools"><input id="q" type="search" placeholder="Search title, venue, keyword" aria-label="Search publications">
    <select id="ty" aria-label="Type"><option value="">All types</option><option>Journal</option><option>Conference</option><option>Preprint</option><option>Workshop</option><option>Technical report</option></select>
    <select id="so" aria-label="Sort"><option value="d">Newest first</option><option value="a">Oldest first</option></select></div>
    <div id="pl" class="grid"></div></section>`,

  projects: () => {
    const cats = ["All", ...new Set(D.projects.map(p => p.c))];
    return `<section class="page"><h2>Projects</h2>${empty("Placeholder cards. Replace them with real projects, repositories and results.")}
    <div class="chips" id="chips">${cats.map((c, i) => `<button class="chip ${i ? "" : "on"}" data-c="${esc(c)}">${esc(c)}</button>`).join("")}</div>
    <div class="grid" id="pj"></div></section>`;
  },

  blog: () => `<section class="page"><h2>Research Blog</h2>
    <div class="tools"><input id="bq" type="search" placeholder="Search posts" aria-label="Search posts"></div>
    <div class="grid" id="bl"></div>
    <p class="mute">Planned topics: paper explanations, autoencoder tutorials, experiment notes, thesis progress updates.</p></section>`,

  cv: () => `<section class="page"><h2>Academic CV</h2>
    <p class="noprint"><button class="btn p" onclick="window.print()">Print / Save as PDF</button> ${D.cvFile ? `<a class="btn" href="${esc(D.cvFile)}" download>Download PDF</a>` : ""}</p>
    <h3 style="font-size:26px">${esc(D.name)}</h3><p class="mute">${esc(D.email)} · ${esc(D.location)}</p>
    <h3>Education</h3>${timeline(D.education)}<h3>Experience</h3>${timeline(D.experience)}
    <h3>Research interests</h3><p>${D.interests.map(i => esc(i[0])).join("; ")}.</p>
    <h3>Publications</h3><p>None listed yet.</p>
    <h3>Awards, certifications, references</h3>${empty("Add only items you can document.")}</section>`,

  contact: () => `<section class="page"><h2>Contact</h2>
    <p>I welcome messages from supervisors, researchers and collaborators.</p><div class="actions">${links()}</div>
    <form id="f" novalidate style="max-width:560px">
      <label for="n">Name</label><input id="n" autocomplete="name"><div class="err" id="en"></div>
      <label for="e">Email</label><input id="e" type="email" autocomplete="email"><div class="err" id="ee"></div>
      <label for="m">Message</label><textarea id="m" rows="5"></textarea><div class="err" id="em"></div>
      <input id="hp" tabindex="-1" autocomplete="off" aria-hidden="true" style="position:absolute;left:-9999px">
      <button class="btn p" type="submit">Open in email app</button><p id="ok" role="status" class="mute"></p></form>
    ${empty("No server is connected. Submitting opens your email app with the message prepared; nothing is sent automatically.")}</section>`
};

/* ============ INTERACTIONS ============ */
function bind(p) {
  if (p === "publications") {
    const draw = () => {
      const q = $("#q").value.toLowerCase(), t = $("#ty").value, asc = $("#so").value === "a";
      const l = D.pubs.filter(x => (!t || x.type === t) && JSON.stringify(x).toLowerCase().includes(q)).sort((a, b) => asc ? a.year - b.year : b.year - a.year);
      $("#pl").innerHTML = l.length ? l.map((x, i) => `<div class="card"><span class="tag">${esc(x.type)}</span><h3>${esc(x.title)}</h3><p>${esc(x.authors)}</p><p>${esc(x.venue)}, ${esc(x.year)}</p>
        <p>${x.doi ? `<a class="btn s" href="https://doi.org/${esc(x.doi)}" target="_blank" rel="noopener">DOI</a> ` : ""}${x.pdf ? `<a class="btn s" href="${esc(x.pdf)}">PDF</a> ` : ""}${x.bibtex ? `<button class="btn s" data-bib="${i}">Copy BibTeX</button>` : ""}</p></div>`).join("")
        : `<div style="grid-column:1/-1">${empty(D.pubs.length ? "No publications match your search." : "My publication list is currently under development. I am working on building a strong foundation in research methodology, experimentation, and scientific writing.")}</div>`;
      document.querySelectorAll("[data-bib]").forEach(b => b.onclick = () => navigator.clipboard?.writeText(l[b.dataset.bib].bibtex).then(() => { b.textContent = "Copied"; }));
    };
    ["input", "change"].forEach(ev => ["#q", "#ty", "#so"].forEach(s => $(s).addEventListener(ev, draw))); draw();
  }
  if (p === "projects") {
    let cat = "All";
    const draw = () => { $("#pj").innerHTML = D.projects.filter(x => cat === "All" || x.c === cat).map(x => `<div class="card"><span class="tag w">${esc(x.c)}</span><h3>${esc(x.t)}</h3><p>${esc(x.d)}</p>${tags(x.tech)}${x.repo ? `<p><a class="btn s" href="${esc(x.repo)}" target="_blank" rel="noopener">Repository</a></p>` : ""}</div>`).join(""); };
    $("#chips").onclick = e => { const b = e.target.closest(".chip"); if (!b) return; cat = b.dataset.c; document.querySelectorAll(".chip").forEach(c => c.classList.toggle("on", c === b)); draw(); }; draw();
  }
  if (p === "blog") {
    const draw = () => { const q = $("#bq").value.toLowerCase(); const l = D.posts.filter(x => JSON.stringify(x).toLowerCase().includes(q));
      $("#bl").innerHTML = l.length ? l.map(x => `<article class="card"><span class="when">${esc(x.date)} · ${x.read} min read</span><h3>${esc(x.title)}</h3><p>${esc(x.body)}</p>${tags(x.tags)}</article>`).join("") : `<div style="grid-column:1/-1">${empty("No posts found.")}</div>`; };
    $("#bq").oninput = draw; draw();
  }
  if (p === "contact") {
    $("#f").onsubmit = ev => {
      ev.preventDefault();
      if ($("#hp").value) return;
      const n = $("#n").value.trim(), e = $("#e").value.trim(), m = $("#m").value.trim();
      $("#en").textContent = n ? "" : "Please enter your name.";
      $("#ee").textContent = EMAIL_RE.test(e) ? "" : "Please enter a valid email address.";
      $("#em").textContent = m.length >= 10 ? "" : "Message must be at least 10 characters.";
      if (n && EMAIL_RE.test(e) && m.length >= 10) {
        location.href = `mailto:${D.email}?subject=${encodeURIComponent("Message from " + n)}&body=${encodeURIComponent(m + "\n\nReply to: " + e)}`;
        $("#ok").textContent = "Your email app should open. The message is sent only when you send it there.";
      }
    };
  }
}

function route() {
  let p = location.hash.slice(1); if (!pages.includes(p)) p = "home";
  $("#app").innerHTML = V[p]();
  document.title = (p === "home" ? D.name : label[p] + " — " + D.name);
  document.querySelectorAll("#nav a").forEach(a => a.classList.toggle("on", a.hash === "#" + p));
  $("#nav").classList.remove("open"); $("#menu").setAttribute("aria-expanded", "false");
  window.scrollTo(0, 0); bind(p);
}

$("#nav").innerHTML = pages.map(p => `<a href="#${p}">${label[p]}</a>`).join("");
$("#yr").textContent = new Date().getFullYear();
$("#menu").onclick = () => { const o = $("#nav").classList.toggle("open"); $("#menu").setAttribute("aria-expanded", o); };
try { const t = localStorage.getItem("theme"); if (t) document.documentElement.dataset.theme = t; } catch (e) {}
$("#theme").onclick = () => {
  const r = document.documentElement, dark = r.dataset.theme === "dark" || (!r.dataset.theme && matchMedia("(prefers-color-scheme:dark)").matches);
  r.dataset.theme = dark ? "light" : "dark"; try { localStorage.setItem("theme", r.dataset.theme); } catch (e) {}
};
addEventListener("scroll", () => { const h = document.documentElement; $("#progress").style.width = (h.scrollTop / Math.max(1, h.scrollHeight - h.clientHeight) * 100) + "%"; }, { passive: true });
addEventListener("hashchange", route); route();

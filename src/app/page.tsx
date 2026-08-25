"use client";
import { useEffect, useState } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  BarChart3,
  BrainCircuit,
  Camera,
  Check,
  Code2,
  ExternalLink,
  GraduationCap,
  HeartPulse,
  Mail,
  MapPin,
  Menu,
  Network,
  Palette,
  Route,
  Search,
  Sparkles,
  X,
} from "lucide-react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const projects = [
  {
    index: "01",
    title: "Waypoint",
    type: "PRODUCT / PRODUCTIVITY",
    description:
      "A map-first focus timer that turns completed study sessions into virtual flights, combining a Pomodoro ritual with routes, authentication, and journey history.",
    stack: ["React", "TypeScript", "Leaflet", "Supabase"],
    href: "https://project-waypoint-app.vercel.app/",
    repo: "https://github.com/koustavdatascience/project-waypoint",
    icon: Route,
    tone: "lime",
  },
  {
    index: "02",
    title: "ClinicOCR",
    type: "APPLIED AI / HEALTHCARE",
    description:
      "An OCR-assisted prescription workflow that turns handwritten prescriptions into clinician-reviewed digital records, with patient history, notes, multilingual support, and PDF export.",
    stack: ["React", "Express", "OCR", "Neon", "Clerk"],
    href: "https://clinic-ocr-app.vercel.app/",
    repo: "https://github.com/koustavdatascience/clinicOCR",
    icon: HeartPulse,
    tone: "blue",
  },
  {
    index: "03",
    title: "Second Self",
    type: "AI / KNOWLEDGE SYSTEM",
    description:
      "A local-first AI second brain that organizes notes, links, and files with PARA, embeddings, a knowledge graph, and retrieval-augmented answers.",
    stack: ["Python", "Streamlit", "RAG", "Embeddings", "Groq"],
    href: "https://secondself-project.streamlit.app",
    repo: "https://github.com/koustavdatascience/Secondself-project",
    icon: Network,
    tone: "coral",
  },
  {
    index: "04",
    title: "The Brief",
    type: "RESEARCH / POLICY INTELLIGENCE",
    description:
      "A policy-intelligence project exploring structured source discovery, evidence review, and private research workflows for complex public information.",
    stack: ["React", "TypeScript", "Supabase", "RLS"],
    href: "https://github.com/koustavdatascience/brief-global",
    repo: "https://github.com/koustavdatascience/brief-global",
    icon: Search,
    tone: "ink",
  },
  {
    index: "05",
    title: "Mochi",
    type: "BROWSER EXTENSION / PLAY",
    description:
      "A local-first animated cat companion for Chromium tabs. A tiny browser experience built around personality, customization, and a little delight.",
    stack: ["Chromium", "JavaScript", "Local-first"],
    href: "https://github.com/koustavdatascience/mochi",
    repo: "https://github.com/koustavdatascience/mochi",
    icon: Sparkles,
    tone: "yellow",
  },
];

const experience = [
  {
    period: "MAY 2024 — PRESENT",
    role: "Freelance Content Designer",
    company: "Independent / Remote",
    detail:
      "Creating digital content and designing or developing portfolio websites for clients and personal brands. Bringing visual identity, content systems, and clear digital presentation together.",
  },
  {
    period: "MAY 2024 — JUL 2025",
    role: "Studio Editor",
    company: "The Graduate Dropout · Remote",
    detail:
      "Edited studio content, refined visual assets, and handled post-production for social media and digital campaigns.",
  },
  {
    period: "DURING COLLEGE",
    role: "Coordinator",
    company: "Google Developers Club · RCCIIT",
    detail:
      "Coordinated developer activities, technical events, and community initiatives around technology and participation.",
  },
  {
    period: "2023",
    role: "Runner-up",
    company: "Smart Bengal Hackathon · RCCIIT",
    detail:
      "Collaborated with a team to develop and present a solution under a defined challenge, finishing as runner-up.",
  },
];

const skillGroups = [
  {
    label: "ANALYTICS",
    icon: BarChart3,
    color: "lime",
    skills: ["Excel", "SQL", "Python", "Statistics", "Data cleaning", "Power BI", "Tableau", "Data visualization"],
  },
  {
    label: "BUILDING",
    icon: Code2,
    color: "blue",
    skills: ["C", "JavaScript", "TypeScript", "Next.js", "Firebase", "React Native", "Git / GitHub", "Supabase"],
  },
  {
    label: "AI + DELIVERY",
    icon: BrainCircuit,
    color: "coral",
    skills: ["Prompt engineering", "Streamlit", "Render", "Vercel", "GitHub Actions", "Cursor AI", "Claude Code", "Codex"],
  },
  {
    label: "CREATIVE + PRODUCT",
    icon: Palette,
    color: "yellow",
    skills: ["Content design", "Adobe Photoshop", "Canva", "Social media", "Product thinking", "Storytelling", "Problem-solving"],
  },
];

function scrollToSection(href: string, closeMenu?: () => void) {
  document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  closeMenu?.();
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("About");

  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector(item.href))
      .filter(Boolean) as Element[];
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) {
          const match = navItems.find((item) => item.href === `#${visible.target.id}`);
          if (match) setActive(match.label);
        }
      },
      { rootMargin: "-20% 0px -65% 0px" },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="site-shell">
      <div className="grain" aria-hidden="true" />
      <header className="topbar">
        <button className="wordmark" onClick={() => scrollToSection("#top")} aria-label="Back to top">
          <span className="wordmark-mark">KR</span>
          <span>koustav.roy</span>
        </button>
        <nav className={menuOpen ? "nav-links is-open" : "nav-links"} aria-label="Primary navigation">
          {navItems.map((item) => (
            <button
              key={item.label}
              className={active === item.label ? "nav-link active" : "nav-link"}
              onClick={() => {
                setActive(item.label);
                scrollToSection(item.href, () => setMenuOpen(false));
              }}
            >
              <span className="nav-index">0{navItems.indexOf(item) + 1}</span>
              {item.label}
            </button>
          ))}
        </nav>
        <button className="menu-toggle" onClick={() => setMenuOpen((open) => !open)} aria-label="Toggle navigation">
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </header>

      <main id="top">
        <section className="hero section-pad">
          <div className="hero-copy">
            <div className="eyebrow"><span className="eyebrow-dot" /> OPEN TO DATA ANALYST OPPORTUNITIES</div>
            <p className="hero-kicker">DATA × DESIGN × STORYTELLING</p>
            <h1>
              I turn messy
              <span className="headline-accent"> questions</span>
              <br />into clear answers.
            </h1>
            <p className="hero-intro">
              Hey, I’m <strong>Koustav Roy</strong> — an aspiring Data Analyst at IIT Roorkee, building practical products and learning how to make data easier to understand.
            </p>
            <div className="hero-actions">
              <button className="button button-primary" onClick={() => scrollToSection("#projects")}>
                Explore my work <ArrowDown size={18} />
              </button>
              <a className="button button-quiet" href="https://github.com/koustavdatascience" target="_blank" rel="noreferrer">
                View GitHub <ArrowUpRight size={17} />
              </a>
            </div>
            <div className="hero-meta">
              <span><MapPin size={15} /> Remote · India</span>
              <span><GraduationCap size={15} /> Data Analytics · IIT Roorkee</span>
            </div>
          </div>
          <div className="hero-art" aria-label="A visual summary of Koustav's data and design interests">
            <div className="art-caption">CURRENT SIGNAL <span>↘ 2026</span></div>
            <div className="signal-card signal-card-main">
              <div className="signal-top"><span>INSIGHT / 001</span><BarChart3 size={20} /></div>
              <div className="signal-number">DATA<br /><em>with</em> CLARITY</div>
              <div className="chart-bars" aria-hidden="true">
                {[42, 66, 50, 78, 58, 92, 72, 84].map((height, index) => <i style={{ height: `${height}%` }} key={index} />)}
              </div>
              <div className="signal-bottom"><span>read the pattern</span><span>↗</span></div>
            </div>
            <div className="floating-note note-one"><span className="note-number">01</span><span>ANALYZE<br />THE QUESTION</span></div>
            <div className="floating-note note-two"><span className="note-number">02</span><span>DESIGN<br />THE ANSWER</span></div>
            <div className="art-coordinate">22.3193° N<br />87.3105° E</div>
          </div>
          <div className="scroll-cue"><ArrowDown size={14} /> SCROLL TO EXPLORE</div>
        </section>

        <section id="about" className="section-pad about-section">
          <div className="section-heading"><span className="section-number">01</span><h2>About me</h2><span className="heading-rule" /></div>
          <div className="about-grid">
            <div className="about-lead">
              <p className="display-copy">Analytical by direction.<br /><span>Creative by default.</span></p>
              <div className="stamp"><span>CURIOUS<br />PRACTICAL<br />GROWING</span><Sparkles size={22} /></div>
            </div>
            <div className="about-body">
              <p>I’m currently pursuing a postgraduate programme in <strong>Data Analytics at IIT Roorkee</strong>. I’m building a foundation in Excel, SQL, Python, statistics, data cleaning, Power BI, Tableau, visualization, and dashboard design.</p>
              <p>Before moving toward data, I worked in content design and social media. That creative background still shapes how I work: I care about structure, visual communication, and the story behind the numbers — not just the numbers themselves.</p>
              <div className="about-facts">
                <div><span>BASED IN</span><strong>India · Remote</strong></div>
                <div><span>EDUCATION</span><strong>IIT Roorkee · RCCIIT</strong></div>
                <div><span>LOOKING FOR</span><strong>Internships + full-time</strong></div>
              </div>
            </div>
          </div>
        </section>

        <section id="work" className="section-pad work-section">
          <div className="section-heading"><span className="section-number">02</span><h2>Experience & education</h2><span className="heading-rule" /></div>
          <div className="work-grid">
            <div className="timeline">
              {experience.map((item) => <article className="timeline-item" key={`${item.role}-${item.period}`}><div className="timeline-period">{item.period}</div><div className="timeline-marker" /><div><h3>{item.role}</h3><p className="timeline-company">{item.company}</p><p>{item.detail}</p></div></article>)}
            </div>
            <aside className="education-card">
              <div className="card-label"><GraduationCap size={18} /> EDUCATION / 02</div>
              <h3>Postgraduate<br /><span>Data Analytics</span></h3>
              <p className="edu-school">IIT Roorkee</p>
              <div className="edu-line" />
              <div className="education-secondary"><span>COMPLETED 2025</span><strong>B.Tech · Electronics & Communication Engineering</strong><small>RCCIIT, Kolkata · CGPA ~7.5</small></div>
              <div className="hackathon-badge"><Check size={16} /> Smart Bengal Hackathon · Runner-up / 2023</div>
            </aside>
          </div>
        </section>

        <section id="projects" className="section-pad projects-section">
          <div className="section-heading"><span className="section-number">03</span><h2>Selected projects</h2><span className="heading-rule" /></div>
          <div className="projects-intro"><p>Small products, applied AI, and information systems — built to answer real questions.</p><span>05 BUILDS / AND COUNTING</span></div>
          <div className="project-grid">
            {projects.map((project) => {
              const Icon = project.icon;
              return <article className={`project-card project-${project.tone}`} key={project.title}>
                <div className="project-header"><span className="project-index">{project.index}</span><Icon size={22} /><span className="project-type">{project.type}</span></div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-stack">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
                <div className="project-links"><a href={project.href} target="_blank" rel="noreferrer">Open project <ExternalLink size={15} /></a><a href={project.repo} target="_blank" rel="noreferrer" aria-label={`${project.title} source code`}><Code2 size={16} /></a></div>
              </article>;
            })}
          </div>
        </section>

        <section id="skills" className="section-pad skills-section">
          <div className="section-heading"><span className="section-number">04</span><h2>Tools I use</h2><span className="heading-rule" /></div>
          <div className="skills-layout"><div className="skills-lead"><p className="display-copy">A growing toolkit<br />for <span>useful work.</span></p><p>I’m deliberately building across analytics, development, AI workflows, and visual communication — the intersection is where I do my best thinking.</p></div><div className="skill-grid">{skillGroups.map((group) => { const Icon = group.icon; return <div className={`skill-group skill-${group.color}`} key={group.label}><div className="skill-group-head"><Icon size={20} /><span>{group.label}</span></div><div className="skill-tags">{group.skills.map((skill) => <span key={skill}>{skill}</span>)}</div></div>; })}</div></div>
          <div className="interest-strip"><span>BEYOND THE SCREEN</span><p><Camera size={18} /> Photography</p><p><Palette size={18} /> Design trends</p><p><Sparkles size={18} /> Alternative rock</p><p><Route size={18} /> Long rides & travel</p></div>
        </section>

        <section id="contact" className="contact-section section-pad">
          <div className="contact-orbit" aria-hidden="true"><span /><span /><span /></div>
          <div className="contact-content"><div className="section-heading section-heading-dark"><span className="section-number">05</span><h2>Let’s make data useful.</h2><span className="heading-rule" /></div><p className="contact-lead">Open to data analyst internships, full-time opportunities, thoughtful collaborations, and interesting problems.</p><a className="email-link" href="mailto:koustavdatascience@gmail.com">koustavdatascience@gmail.com <ArrowUpRight size={22} /></a><div className="contact-links"><a href="https://www.linkedin.com/in/koustav-roy-443b34230" target="_blank" rel="noreferrer"><ExternalLink size={18} /> LinkedIn</a><a href="https://github.com/koustavdatascience" target="_blank" rel="noreferrer"><Code2 size={18} /> GitHub</a><a href="mailto:koustavdatascience@gmail.com"><Mail size={18} /> Email</a></div></div>
        </section>
      </main>

      <footer className="footer"><span>© 2026 Koustav Roy</span><span>DATA × DESIGN × STORYTELLING</span><a href="https://github.com/koustavdatascience" target="_blank" rel="noreferrer">Built in public <ArrowUpRight size={14} /></a></footer>
    </div>
  );
}

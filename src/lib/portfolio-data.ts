export type PortfolioProject = {
  id: string;
  title: string;
  description: string;
  detail: string;
  stack: string[];
  link: string;
  repo: string;
  imageUrl?: string;
  accent: string;
  featured?: boolean;
};

export const profile = {
  name: "Koustav Roy",
  role: "data analyst in the making",
  location: "Remote",
  email: "koustavdatascience@gmail.com",
  linkedin: "https://www.linkedin.com/in/koustav-roy-443b34230",
  github: "https://github.com/koustavdatascience",
  intro:
    "I am an aspiring Data Analyst who enjoys turning data into clear insights and meaningful business decisions. I am passionate about learning, solving problems, and using data to understand what drives results.",
  strengths: ["analytical thinking", "problem-solving", "storytelling with data"],
  stack: ["Excel", "SQL", "Python", "Power BI", "Tableau", "statistics", "data visualization"],
};

export const projects: PortfolioProject[] = [
  {
    id: "waypoint",
    title: "Waypoint",
    description: "A map-first focus timer that turns completed study sessions into virtual flights.",
    detail:
      "Waypoint combines a Pomodoro-style focus ritual with real geography, interactive maps, route calculations, authentication, and a personal journey history.",
    stack: ["React", "TypeScript", "Leaflet", "Supabase", "Vercel"],
    link: "https://project-waypoint-app.vercel.app/",
    repo: "https://github.com/koustavdatascience/project-waypoint",
    imageUrl: "https://raw.githubusercontent.com/koustavdatascience/project-waypoint/main/assets/product-hunt/01-waypoint-route-selection.png",
    accent: "#f16a4b",
    featured: true,
  },
  {
    id: "mochi",
    title: "Mochi",
    description: "A tiny animated cat companion for browser tabs, built as a local-first Chromium extension.",
    detail:
      "Mochi lets people choose, position, and customize a tiny animated companion while browsing. It reached #12 on the Product Hunt launch-day leaderboard.",
    stack: ["TypeScript", "Chromium Extension", "UX", "Product Design"],
    link: "https://github.com/koustavdatascience/mochi",
    repo: "https://github.com/koustavdatascience/mochi",
    imageUrl: "https://raw.githubusercontent.com/koustavdatascience/mochi/main/docs/screenshots/in-action-showcase.png",
    accent: "#d98eff",
    featured: true,
  },
  {
    id: "clinic-ocr",
    title: "ClinicOCR",
    description: "ClinicOCR turns handwritten prescriptions into clear, clinician-reviewed digital records.",
    detail:
      "ClinicOCR supports review and correction, search, patient history, multiple languages, notes, and PDF export rather than treating an AI draft as a final medical record.",
    stack: ["React", "Express", "OCR", "AI", "Neon", "Clerk"],
    link: "https://clinic-ocr-app.vercel.app/",
    repo: "https://github.com/koustavdatascience/clinicOCR",
    imageUrl: "/projects/clinicocr.png",
    accent: "#7bc7ff",
    featured: true,
  },
  {
    id: "the-brief",
    title: "The Brief",
    description: "A governed policy-intelligence product for discovery, evidence, and private research workflows.",
    detail:
      "The Brief explores a structured approach to monitoring policy sources, extracting useful information, and keeping review boundaries explicit.",
    stack: ["React", "TypeScript", "Supabase", "RLS", "Product Systems"],
    link: "https://github.com/koustavdatascience/brief-global",
    repo: "https://github.com/koustavdatascience/brief-global",
    imageUrl: "/projects/the-brief.png",
    accent: "#f5c96b",
    featured: true,
  },
  {
    id: "second-self",
    title: "Second Self",
    description: "A local-first AI second brain that organizes notes and answers questions using RAG.",
    detail:
      "Second Self captures notes, links, and files, classifies them with PARA, links related concepts with embeddings, visualizes a knowledge graph, and answers questions from personal knowledge.",
    stack: ["Python", "Streamlit", "RAG", "Embeddings", "Groq"],
    link: "https://secondself-project.streamlit.app",
    repo: "https://github.com/koustavdatascience/Secondself-project",
    imageUrl: "/projects/secondself.png",
    accent: "#86d69a",
    featured: false,
  },
];

export const experience = [
  {
    company: "The Graduate Dropout",
    role: "Studio Editor",
    date: "may 2024 - july 2025",
    location: "bengaluru, india · remote",
    description: ["Edited studio content, refined visual assets, and handled post-production for social media and digital campaigns."],
  },
  {
    company: "Google Developers Club",
    role: "Coordinator",
    date: "during college",
    location: "RCCIIT, Kolkata",
    description: ["Coordinated developer activities, technical events, and community initiatives during college."],
  },
  {
    company: "Freelance",
    role: "Content Designer",
    date: "may 2024 - present",
    location: "remote",
    description: ["Created digital content and designed/developed portfolio websites for clients and personal brands."],
  },
  {
    company: "College Cultural Committee",
    role: "Event Team Member",
    date: "2022 - 2024",
    location: "RCCIIT, Kolkata",
    description: ["Helped organize cultural events, coordinate activities, and manage creative responsibilities during college programs."],
  },
  {
    company: "Smart Bengal Hackathon",
    role: "Runner-up",
    date: "2023",
    location: "RCCIIT, Kolkata",
    description: ["Collaborated with a team to develop and present a solution, finishing as Runner-up in 2023."],
  },
  {
    company: "Chittaranjan Locomotive Works",
    role: "Industrial Trainee",
    date: "one month",
    location: "india",
    description: ["Gained practical exposure to industrial processes, engineering operations, and workplace practices."],
  },
];

export const education = [
  {
    institution: "RCCIIT",
    degree: "B.Tech in Electronics and Communication Engineering",
    date: "completed 2025",
    detail: "CGPA: approximately 7.5",
  },
  {
    institution: "IIT Roorkee",
    degree: "Data Analyst course",
    date: "july 2026 - january 2027",
    detail: "currently enrolled · six-month program",
  },
];

export const skillGroups = [
  {
    category: "development",
    skills: ["C", "JavaScript", "TypeScript", "Next.js", "Firebase", "React Native"],
  },
  {
    category: "analytics",
    skills: [
      "Excel",
      "SQL",
      "Python",
      "statistics",
      "data cleaning",
      "Power BI",
      "Tableau",
      "data visualization",
      "dashboard design",
      "storytelling with data",
    ],
  },
  {
    category: "creative + product",
    skills: ["content design", "Adobe Photoshop", "Canva", "social media", "problem-solving"],
  },
  {
    category: "ai dev",
    skills: [
      "Git/GitHub",
      "Cursor AI",
      "Antigravity",
      "Claude Code",
      "prompt engineering",
      "Manus AI",
      "Supabase",
      "Render",
      "Vercel",
      "Streamlit",
      "Codex",
      "GitHub Actions",
    ],
  },
];

export const photographyPlaceholders = [
  { title: "coming soon", caption: "A small collection of photographs by Koustav.", accent: "#f16a4b" },
  { title: "frame one", caption: "Photography will be added here soon.", accent: "#7bc7ff" },
  { title: "frame two", caption: "Replace these placeholders with your own work.", accent: "#d98eff" },
];

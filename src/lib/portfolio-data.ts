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
    description: "An OCR-assisted workflow that turns handwritten prescriptions into clinician-reviewed digital records.",
    detail:
      "ClinicOCR supports review and correction, search, patient history, multiple languages, notes, and PDF export rather than treating an AI draft as a final medical record.",
    stack: ["React", "Express", "OCR", "AI", "Neon", "Clerk"],
    link: "https://clinic-ocr-app.vercel.app/",
    repo: "https://github.com/koustavdatascience/clinicOCR",
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
    accent: "#f5c96b",
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
    accent: "#86d69a",
  },
];

export const experience = [
  {
    company: "The Graduate Dropout",
    role: "social media designer",
    date: "may 2024 - july 2025",
    location: "bengaluru, india · remote",
    description: [
      "Shaped visual and content strategy for a growing podcast and digital media platform.",
      "Created social media assets and visual stories using Adobe Photoshop and Canva.",
    ],
  },
  {
    company: "Google Developers Club",
    role: "coordinator",
    date: "during college",
    location: "india",
    description: ["Coordinated activities for the Google Developers Club in college."],
  },
  {
    company: "freelance",
    role: "content designer",
    date: "may 2024 - present",
    location: "remote",
    description: [
      "Create digital production and web content for different briefs and audiences.",
      "Translate ideas into clear, engaging visual and written communication.",
    ],
  },
  {
    company: "college cultural committee",
    role: "event team member",
    date: "2022 - 2024",
    location: "india",
    description: [
      "Contributed to the planning and execution of Regalia, the annual cultural event.",
      "Worked across teams in a fast-moving event environment.",
    ],
  },
  {
    company: "college band",
    role: "lead guitarist",
    date: "2022 - 2024",
    location: "india",
    description: ["Performed as lead guitarist and finished runner-up at an inter-college fest."],
  },
  {
    company: "smart bengal hackathon",
    role: "runner-up",
    date: "2023",
    location: "india",
    description: ["Finished runner-up at Smart Bengal Hackathon 2023."],
  },
  {
    company: "chittaranjan locomotive works",
    role: "industrial trainee",
    date: "one month",
    location: "india",
    description: [
      "Visited shops and departments across CLW and learned the basics of locomotive manufacturing and operations.",
      "Gained exposure to railway technology, manufacturing processes, and locomotive systems.",
    ],
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
  { category: "analytics", skills: ["Excel", "SQL", "Python", "statistics", "data cleaning"] },
  { category: "visualization", skills: ["Power BI", "Tableau", "data visualization", "dashboard design", "storytelling with data"] },
  { category: "creative + product", skills: ["content design", "Adobe Photoshop", "Canva", "social media", "problem-solving"] },
];

export const photographyPlaceholders = [
  { title: "coming soon", caption: "A small collection of photographs by Koustav.", accent: "#f16a4b" },
  { title: "frame one", caption: "Photography will be added here soon.", accent: "#7bc7ff" },
  { title: "frame two", caption: "Replace these placeholders with your own work.", accent: "#d98eff" },
];

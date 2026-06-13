// ============================================================
// siteData.ts — Single source of truth for all portfolio content.
// To update your stats, projects, or experience, edit THIS file.
// ============================================================

export const personalInfo = {
  name: "Avan Sahu",
  initials: "AS",
  phone: "+91-9893102491",
  email: "avan.sahu0987@gmail.com",
  tagline: "Full-Stack Developer · Competitive Programmer · Open-Source Contributor",
  location: "Gwalior, Madhya Pradesh, India",
  resumeUrl: "https://drive.google.com/file/d/1Z3pxO4jVqJGaFd_bQ0xKDI4Qnh7r6ief/view?usp=sharing", // Replace with actual resume link
  socials: {
    github: "https://github.com/Avan14",
    linkedin: "https://www.linkedin.com/in/avan-sahu-541710296/",
    leetcode: "https://leetcode.com/u/Awaann/",
    codeforces: "https://codeforces.com/profile/Awaann",
  },
  education: {
    institution: "IIIT Gwalior",
    degree: "Integrated B.Tech + M.Tech",
    gpa: "8.43 / 10",
  },
  aboutParagraph:
    "I'm a student at IIIT Gwalior with a passion for building performant, production-grade web applications and pushing the limits of algorithmic problem-solving. From crafting cross-platform desktop apps to engineering AI-powered developer tools, I thrive at the intersection of systems thinking and user experience.",
};

// ── Skills ─────────────────────────────────────────────────────
export const skills: { category: string; items: string[] }[] = [
  {
    category: "Languages & Core",
    items: ["C++", "TypeScript", "Python", "SQL", "Bash", "C", "JavaScript"],
  },
  {
    category: "Frontend Tech",
    items: ["React.js", "Next.js 14", "Tailwind CSS", "Framer Motion", "HTML", "CSS", "redux-toolkit"],
  },
  {
    category: "Backend & Infra",
    items: ["Node.js", "Express.js", "REST APIs", "WebSockets", "Django", "FastAPI", "NestJS", "GraphQL"],
  },
  {
    category: "Databases",
    items: ["PostgreSQL", "MongoDB", "NeonDB", "MySQL", "Firebase", "Supabase", "Redis"],
  },
  {
    category: "DevOps & Tools",
    items: ["Git", "Docker", "Postman", "VS Code", "Linux CLI", "Github Actions", "Gitlab CI/CD"],
  },
  {
    category: "AI & Cloud",
    items: ["OpenAI API", "Claude API", "Vercel", "Render", "Google Cloud", "AWS", "Azure"],
  },
];

// ── Projects ───────────────────────────────────────────────────
export interface Project {
  name: string;
  index: string;
  label: string;
  tagline: string;
  stack: string[];
  highlights: string[];
  liveUrl: string;
  githubUrl: string;
  imageUrl?: string;
  imageFallbackText?: string;
}

export const projects: Project[] = [
  {
    name: "BLAZZIC",
    index: "01",
    label: "AI SaaS",
    tagline:
      "AI-powered developer visibility platform converting commits to social growth.",
    stack: ["Next.js 14", "Claude API", "TypeScript", "PostgreSQL", "NextAuth", "Twitter API"],
    highlights: [
      "Converts GitHub activity (commits, PRs, repos) into structured resume bullets and Twitter threads using AI orchestration.",
      "Scheduled cron workers for async job processing",
      "Retry logic and idempotent execution for reliability",
      "OAuth authentication with GitHub and Twitter",
    ],
    liveUrl: "https://git-x-flow-kyys-git-sprintjan-awaanns-projects.vercel.app/",
    githubUrl: "https://github.com/Avan14/Blazzic_v0",
    imageUrl: "/blazzic.png", // Replace with actual image in public folder
  },
  {
    name: "CODEPULSE",
    index: "02",
    label: "Cloud IDE",
    tagline:
      "Browser-based IDE with sandboxed multi-language execution.",
    stack: ["Docker", "Node.js", "TypeScript", "Express", "OpenAI API", "MongoDB", "Clerk"],
    highlights: [
      "Real-time code execution and syntax highlighting across 15+ languages using isolated Docker containers.",
      "Docker-based sandboxing for secure execution",
      "OpenAI integration for real-time debugging",
      "Clerk-backed secure session management",
    ],
    liveUrl: "https://remote-code-editor.vercel.app/",
    githubUrl: "https://github.com/Avan14/RemoteCodeEditor",
    imageUrl: "/codepulse.png", // Replace with actual image in public folder
  },
  {
    name: "CRPTED",
    index: "01",
    label: "Crypto Market Dashboard",
    tagline:
      "Real-time cryptocurrency analytics platform with interactive market insights.",
    stack: ["React.js", "Node.js", "Express", "MongoDB", "REST API", "CoinGecko API", "Tailwind CSS"],
    highlights: [
      "Real-time cryptocurrency market tracking with price, volume, and trend analytics for 100+ digital assets.",
      "Interactive charts and historical market data visualization using CoinGecko API.",
      "Full-stack architecture with React frontend and Express backend for scalable data handling.",
      "Secure data storage and user interactions powered by MongoDB and RESTful APIs.",
    ],
    liveUrl: "",
    githubUrl: "https://github.com/Avan14/CRPTED",
    imageUrl: "/", // Replace with actual image in public folder
  },
  {
    name: "TEXT-TO-SQL",
    index: "04",
    label: "ML Pipeline",
    tagline:
      "Production-grade natural language to SQL pipeline with schema intelligence and self-correction.",
    stack: ["Python", "FastAPI", "Streamlit", "OpenAI API", "FAISS"],
    highlights: [
      "Built a FastAPI backend with a schema retriever using FAISS for semantic table matching.",
      "Implemented an AST-based safety validator using sqlglot and an LLM self-correction loop.",
      "Developed an interactive Streamlit frontend displaying SQL generated, results, and query metrics.",
      "Integrated observability and tracing to monitor execution accuracy and LLM latency.",
    ],
    liveUrl: "",
    githubUrl: "",
    imageUrl: "", 
    imageFallbackText: "TEXT TO SQL\nCONVERSION",
  }
];

// ── Experience ─────────────────────────────────────────────────
export interface ExperienceEntry {
  title: string;
  company: string;
  dates: string;
  bullets: string[];
}

export const experience: ExperienceEntry[] = [
  {
    title: "Full Stack Developer Intern",
    company: "CareEco Technologies",
    dates: "May 2025 — July 2025",
    bullets: [
      "Spearheaded development of a cross-platform desktop application using Tauri and React, featuring a fully responsive design.",
      "Designed and implemented RESTful APIs with Django REST Framework on Google Cloud, supporting thousands of daily requests.",
      "Collaborated within an Agile team, leading stand-ups and ensuring 95% on-time feature delivery.",
    ],
  },
];

// ── Achievements ───────────────────────────────────────────────
export type AchievementSize = "large" | "normal";
export type AccentColor =
  | "accent-coral"
  | "accent-teal"
  | "accent-purple"
  | "accent-electric";

export interface Achievement {
  platform: string;
  title: string;
  badge?: string;
  rating?: string;
  stat?: string;
  progressPercent?: number;
  color: AccentColor;
  size: AchievementSize;
  description?: string;
  bigNumber?: string;
}

export const achievements: Achievement[] = [
  {
    platform: "AlgoUniversity Contest",
    title: "National Level",
    badge: "National Level",
    color: "accent-coral",
    size: "large",
    description:
      "Top 1% achievement among 20,000+ participants nationwide. A testament to algorithmic efficiency and speed under pressure.",
    bigNumber: "TOP 1%",
  },
  {
    platform: "LeetCode",
    title: "Knight",
    badge: "Knight",
    rating: "Rating: 1970",
    stat: "1000+ Problems Solved",
    progressPercent: 85,
    color: "accent-teal",
    size: "normal",
  },
  {
    platform: "Codeforces",
    title: "Expert",
    badge: "Expert",
    rating: "Rating: 1625",
    stat: "600+ Problems Solved",
    progressPercent: 60,
    color: "accent-purple",
    size: "normal",
  },
  {
    platform: "CodeChef",
    title: "3-Star",
    badge: "3-Star",
    rating: "Rating: 1735",
    progressPercent: 70,
    color: "accent-electric",
    size: "normal",
  },
  {
    platform: "GSSoC",
    title: "Selected Contributor",
    stat: "Selected Contributor (2024)",
    color: "accent-coral",
    size: "normal",
  },
  {
    platform : "Hacktober-fest",
    title: "Selected Contributor",
    stat: "Selected Contributor (2024)",
    color: "accent-coral",
    size: "normal",
  }
];

// ── Positions of Responsibility ────────────────────────────────
export interface Position {
  label: string;
  title: string;
  description: string;
}

export const positions: Position[] = [
  {
    label: "Leadership — 01",
    title: "Coordinator, TWARAN INTER-IIIT 2025",
    description:
      "Led planning and logistics for one of the largest inter-IIIT sports meets, managing 3,000+ participants across India. Coordinated event scheduling and hospitality with peak efficiency.",
  },
  {
    label: "Leadership — 02",
    title: "Lead Coordinator, 36-Hour Hackathon",
    description:
      "End-to-end execution of INFOTSAVA's 36-hour hackathon with 300+ participants. Managed logistics, team coordination, and event operations.",
  },
];

// ── Competitive Coding ─────────────────────────────────────────
export interface CodingProfile {
  platform: string;
  username: string;
  rating: number;
  title: string;
  profileUrl: string;
  problemsSolved: {
    total: number;
    easy?: number;
    medium?: number;
    hard?: number;
  };
  stats: {
    label: string;
    value: string | number;
  }[];
}

export const codingProfiles: CodingProfile[] = [
  {
    platform: "LeetCode",
    username: "Awaann",
    rating: 1937,
    title: "Knight",
    profileUrl: "https://leetcode.com/u/Awaann/",
    problemsSolved: {
      total: 942,
      easy: 208,
      medium: 560,
      hard: 174,
    },
    stats: [
      { label: "Top Percentile", value: "3.57%" },
      { label: "Contests Attended", value: 35 },
      { label: "Active Days", value: 338 },
      { label: "Max Streak", value: "91 Days" },
      { label: "Submissions (1yr)", value: 969 },
    ],
  },
  {
    platform: "Codeforces",
    username: "Awaann",
    rating: 1611,
    title: "Expert",
    profileUrl: "https://codeforces.com/profile/Awaann",
    problemsSolved: {
      total: 551,
    },
    stats: [
      { label: "Max Rating", value: "1625" },
      { label: "Solved (1yr)", value: 217 },
      { label: "Solved (1mo)", value: 37 },
      { label: "Max Streak", value: "10 Days" },
      { label: "Friends", value: 50 },
    ],
  },
];

// ── Nav Sections ───────────────────────────────────────────────
export const navSections = [
  { id: "home", label: "Home", number: "01" },
  { id: "about", label: "About", number: "02" },
  { id: "projects", label: "Projects", number: "03" },
  { id: "experience", label: "Experience", number: "04" },
  { id: "coding", label: "Coding", number: "05" },
  { id: "achievements", label: "Achievements", number: "06" },
  { id: "contact", label: "Contact", number: "07" },
];

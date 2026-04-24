export interface Project {
  title: string;
  type: "Fullstack" | "Front-End" | "Mobile";
  url?: string;
  github?: string;
  img: string;
  tags: string[];
}

export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  desc: string;
  stack: string[];
}

export const PROJECTS: Project[] = [
  {
    title: "Sendora [Pet]",
    type: "Fullstack",
    url: "https://www.sendora.forum/",
    github: "https://github.com/denvudd/sendora-fe",
    img: "/assets/projects/sendora.jpg",
    tags: ["Next.js", "TypeScript", "Digital Ocean", "Clerk", "Open AI SDK", "Stripe", "Uploadcare", "Prisma", "PostgreSQL", "Bun"],
  },
  {
    title: "Koor Pro",
    type: "Front-End",
    url: "https://koorpro.com/",
    img: "/assets/projects/koor-pro.jpg",
    tags: ["React", "TypeScript", "CSS Modules", "MUI", "React Router"],
  },
  {
    title: "Plura [Pet]",
    type: "Fullstack",
    url: "https://plura-denvud.vercel.app/",
    github: "https://github.com/denvudd/plura",
    img: "/assets/projects/plura.png",
    tags: ["Next.js", "TypeScript", "Stripe", "Prisma", "MySQL", "Bun"],
  },
  {
    title: "Djinni Clone [Pet]",
    type: "Fullstack",
    url: "https://djinni-clone.vercel.app/",
    github: "https://github.com/denvudd/djinni-clone-frontend.github.io",
    img: "/assets/projects/djinni.png",
    tags: ["Next.js", "Nest.js", "Prisma", "MySQL", "Uploadthing"],
  },
  {
    title: "TMDB Clone [Pet]",
    type: "Front-End",
    url: "https://react-dbmovies.vercel.app/",
    github: "https://github.com/denvudd/react-dbmovies.github.io",
    img: "/assets/projects/tmdb.png",
    tags: ["Next.js", "TypeScript", "RTK Query", "Jest", "Ant Design"],
  },
  {
    title: "Ivan Peklin",
    type: "Front-End",
    url: "https://ivanpeklin-racing.com/en",
    img: "/assets/projects/peklin.png",
    tags: ["Next.js", "React", "TypeScript", "i18n", "Ant Design"],
  },
  {
    title: "Sieben Umzuge",
    type: "Front-End",
    url: "https://sieben-umzuege.de/de",
    img: "/assets/projects/su.png",
    tags: ["Next.js", "TypeScript", "Redux", "Recharts", "Vite"],
  },
  {
    title: "Cypress SaaS [Pet]",
    type: "Fullstack",
    url: "https://cypress-r2o0.onrender.com/",
    github: "https://github.com/denvudd/cypress",
    img: "/assets/projects/cypress.png",
    tags: ["Next.js", "Supabase", "Drizzle", "Stripe", "Sockets"],
  },
  {
    title: "Vantazhivochka",
    type: "Fullstack",
    url: "https://vantazhivochka.com/",
    img: "/assets/projects/vantazhivochka.png",
    tags: ["Next.js", "Prisma", "MongoDB", "Telegram Bot API"],
  },
  {
    title: "Deliveroo Clone [Pet]",
    type: "Mobile",
    github: "https://github.com/denvudd/deliveroo-expo",
    img: "/assets/projects/deliveroo.jpg",
    tags: ["React Native", "Expo", "Zustand", "Google Maps API"],
  },
];

export const SKILLS_MAIN = [
  "React", "Next.js", "TypeScript", "Redux", "Zustand", "MobX",
  "RTK Query", "React Query", "React Router", "Tailwind CSS", "SCSS", "Framer Motion",
];

export const SKILLS_SECONDARY = [
  "Vue.js", "Nuxt", "Pinia", "Svelte 5", "SvelteKit",
  "Node.js", "Express.js", "Nest.js", "Prisma ORM", "Drizzle ORM",
  "PostgreSQL", "MySQL", "MongoDB",
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    period: "2023 — Present",
    role: "Front-End Engineer",
    company: "Admiral Studios",
    desc: "Built scalable web applications for enterprise clients across UK, Germany and Ukraine. Led frontend architecture decisions on 5+ production projects including CRM systems, SaaS platforms and corporate websites. Worked closely with design and product teams to bridge implementation with business goals.",
    stack: ["Next.js", "React", "TypeScript", "Redux", "Ant Design", "SCSS"],
  },
  {
    period: "2022 — 2023",
    role: "Front-End Developer",
    company: "Freelance",
    desc: "Designed and developed client-facing web applications and websites. Built fullstack projects with Next.js and Node.js, including custom booking systems, CRM dashboards, and real-time collaboration tools.",
    stack: ["React", "Next.js", "Node.js", "MongoDB", "Tailwind CSS"],
  },
];

export const SOCIALS = [
  { label: "GitHub", abbr: "GH", href: "https://github.com/denvudd" },
  { label: "LinkedIn", abbr: "LI", href: "https://www.linkedin.com/in/yurindmytro/" },
  { label: "Telegram", abbr: "TG", href: "https://t.me/denvudd" },
  { label: "Email", abbr: "GM", href: "mailto:dmitry.yurin2020@gmail.com" },
];

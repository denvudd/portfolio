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
    title: "Mifu",
    type: "Front-End",
    url: "https://www.mifu.io/",
    img: "/assets/projects/mifu.jpg",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Chakra UI", "AWS Cognito"],
  },
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
    tags: ["React", "TypeScript", "CSS Modules", "MUI", "React Router", "Firebase"],
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
    title: "Sieben Umzuge",
    type: "Front-End",
    url: "https://sieben-umzuege.de/de",
    img: "/assets/projects/su.png",
    tags: ["Next.js", "TypeScript", "Redux", "Recharts", "Vite", "i18n", "Ant Design"],
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
    title: "Cypress SaaS [Pet]",
    type: "Fullstack",
    url: "https://cypress-r2o0.onrender.com/",
    github: "https://github.com/denvudd/cypress",
    img: "/assets/projects/cypress.png",
    tags: ["Next.js", "Supabase", "Drizzle", "Stripe", "Sockets"],
  },
  {
    title: "Ivan Peklin",
    type: "Front-End",
    url: "https://ivanpeklin-racing.com/en",
    img: "/assets/projects/peklin.png",
    tags: ["Next.js", "React", "TypeScript", "i18n", "Ant Design"],
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
    period: "Oct 2024 — Present",
    role: "Fullstack Engineer",
    company: "Admiral Studios",
    desc: "Led end-to-end front-end development of a large-scale recruiting platform (similar to LinkedIn), refactored ~70% of a highly legacy codebase, migrated the application to TypeScript and Next.js. Participated in React Native, Vue/Nuxt, Nest.js, and Python (Fast API) projects",
    stack: ["Next.js", "React", "TypeScript", "Vue.js", "Nest.js", "Fast API", "React Native"],
  },
  {
    period: "May 2024 — Sep 2024",
    role: "Front-End Engineer",
    company: "Red Rocket Software",
    desc: "Developed core functionality for an internal Healthcare product (similar to Helsi) with a team of 5+ developers. Mentored and led a front-end internship program for 1-2 interns",
    stack: ["Next.js", "React", "TypeScript", "Vue.js", "Nuxt.js"],
  },
  {
    period: "Jun 2023 — May 2024",
    role: "Front-End Developer",
    company: "Luna Edge",
    desc: "Served as the sole Lead Front-end Developer in a UK startup focused on influencer–brand collaboration. Implemented new core features, including RBAC, Stripe-based payments, and a paywall system.",
    stack: ["React", "Next.js", "Typescript"],
  },
];

export const SOCIALS = [
  { label: "GitHub", abbr: "GH", href: "https://github.com/denvudd" },
  { label: "LinkedIn", abbr: "LI", href: "https://www.linkedin.com/in/yurindmytro/" },
  { label: "Telegram", abbr: "TG", href: "https://t.me/denvudd" },
  { label: "Email", abbr: "GM", href: "mailto:dmitry.yurin2020@gmail.com" },
];

import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Noel Rohi Garcia",
  initials: "NRG",
  location: "Parañaque, Metro Manila, Philippines",
  locationLink: "https://www.google.com/maps/place/Parañaque,Metro+Manila",
  about:
    "Full Stack Engineer focused on building products with extra attention to details",
  summary:
    "I specialize in TypeScript, React, Node.js, and MySQL, crafting code with precision and embracing type safety for clean, efficient solutions. With over a year immersed in web development, I thrive in the realm of creating dynamic, user-centric experiences.",
  avatarUrl:
    "https://utfs.io/f/cf356951-9025-4d7d-9fc8-2cde9bb19558-o3eep5.jpg",
  personalWebsiteUrl: "https://rohi.dev",
  contact: {
    email: "n@rohi.dev",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/gneiru",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/gneiru/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/gneiru",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Pangasinan State University, Bayambang Campus",
      degree: "Bachelor's Degree in Information Technology",
      start: "2018",
      end: "2022",
    },
  ],
  work: [
    {
      company: "CaPEx",
      link: "https://capex.com.ph",
      badges: ["On-site"],
      title: "Full Stack Developer",
      start: "Jan 2023",
      end: "Present",
      description:
        "Implemented new features, fixed bugs, started migration from Bootstrap4 to Tailwind CSS, now building app for Finance using Nextjs. Technologies: React, Nextjs, Typescript, TailwindCSS, PHP, Yii, Jquery, Laravel",
    },
    {
      company: "Exploretale Technologies",
      link: "https://exploretale.tech",
      badges: ["Freelance"],
      title: "Front-End Developer",
      start: "Jun 2023",
      end: "Oct 2023",
      description:
        "Integrate REST API, replicated UI made with Figma, SEO and more. Meetings held on discord / google meet. Technologies: React, Nextjs, Typescript, TailwindCSS, Git",
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React/Next.js",
    "Node.js",
    "TailwindCSS",
    "PHP",
    "Git",
    "MySQL",
  ],
  projects: [
    {
      title: "anirohi",
      techStack: [
        "Side Project",
        "TypeScript",
        "Next.js",
        "TailwindCSS",
        "Shadcn UI",
        "GraphQL",
        "Planetscale MySQL",
        "Drizzle ORM",
      ],
      description: "An anime streaming site with Anilist mutations and query.",
      link: {
        label: "ani.rohi.dev",
        href: "https://ani.rohi.dev/",
      },
    },
    {
      title: "Thr",
      techStack: [
        "Side Project",
        "TypeScript",
        "Next.js",
        "TailwindCSS",
        "Shadcn UI",
        "Planetscale MySQL",
        "Drizzle ORM",
      ],
      description: "A clone of Meta's Threads",
      link: {
        label: "thr.rohi.dev",
        href: "https://thr.rohi.dev/",
      },
    },
    {
      title: "rohi.dev",
      techStack: [
        "Side Project",
        "Next.js",
        "TailwindCSS",
        "Shadcn UI",
        "Neon PostgreSQL",
        "Drizzle ORM",
        "Biome Formatter / Linter",
      ],
      description: "My personal website and blog.",
      link: {
        label: "rohi.dev",
        href: "https://rohi.dev/",
      },
    },
    {
      title: "K-Next",
      techStack: [
        "Side Project",
        "TypeScript",
        "Next.js",
        "TailwindCSS",
        "Shadcn UI",
        "Planetscale MySQL",
        "Drizzle ORM",
      ],
      description: "A kdrama streaming site.",
      link: {
        label: "kd.rohi.dev",
        href: "https://kd.rohi.dev/",
      },
    },
  ],
} as const;

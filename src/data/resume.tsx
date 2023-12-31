import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Noel Rohi Garcia",
  initials: "NRG",
  location: "Parañaque, Metro Manila, Philippines",
  locationLink: "https://www.google.com/maps/place/Parañaque,Metro+Manila",
  about:
    "Full Stack Engineer focused on building products with extra attention to details",
  summary:
    "As a Full Stack Engineer, I have successfully taken multiple products from 0 to 1. Currently, I work mostly with TypeScript, React, Node.js, and MySQL. I have over 1 year of experience in web development.",
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
    "MySQL"
  ],
  projects: [
    {
      title: "Anirohi",
      techStack: [
        "Side Project",
        "TypeScript",
        "Next.js",
        "TailwindCSS",
        "Radix UI",
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
        "Radix UI",
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
      title: "Rohi.dev",
      techStack: [
        "Side Project",
        "Astro.js",
        "TailwindCSS",
        "MDX",
      ],
      description: "My personal website and blog. Some of my activities are also here. Built with Astro and TailwindCSS",
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
        "Radix UI",
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

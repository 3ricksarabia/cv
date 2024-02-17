import {
  BarepapersLogo,
  ConsultlyLogo,
  JarockiMeLogo,
  Minimal,
  MonitoLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Erick Sarabia",
  initials: "ES",
  location: "Hidalgo, Mexico",
  locationLink: "https://www.google.com/maps/place/Hidalgo",
  about:
    "Frontend Chapter Leader and JAMstack enthusiasts focused on improving Web Performance and Developer Experience",
  summary:
    "Software Engineer with 10+ years of experience developing web applications using JavaScript, React and Node.js, with a focus on optimizing web projects and improving DX. Much of my time is spent researching and implementing new web technologies. The best way to learn is by solving real problems.",
  avatarUrl: "https://avatars.githubusercontent.com/u/36867526?v=4",
  contact: {
    email: "3ricksarabia@gmail.com",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/3ricksarabia",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/3ricksarabia/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/3ricksarabia",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Universidad Politécnica de Pachuca",
      degree: "Bachelor's Degree in Software Engineering",
      start: "2009",
      end: "2013",
    },
    {
      school: "Utel Universidad",
      degree: "Master's Degree in Software Engineering and Management",
      start: "2024",
      end: "Present",
    },
  ],
  work: [
    {
      company: "Danone",
      link: "https://www.danone.com/",
      badges: ["Hybrid"],
      start: "2023",
      end: "Present",
      positions: [
        {
          title: "Frontend Chapter Leader",
          description:
            "Managed a team of 12 engineers responsible for the frontend development of Danone's digital products.",
        },
      ],
    },
    {
      company: "Skydropx",
      link: "https://www.skydropx.com/",
      badges: ["Remote"],
      start: "2021",
      end: "2023",
      positions: [
        {
          title: "Engineering Manager",
          description:
            "Hire and built a team of 30 engineers responsible for the frontend development. Manage a team of 15 engineers focused on customer acquisition features.",
        },
        {
          title: "Technical Leader",
          description:
            "Lead a team of 6 engineers responsible for automating the user onboarding process. Design frontend architecture for an organization of ~70 engineers.",
        },
        {
          title: "Frontend Engineer",
          description:
            "Work on the rebuild of the Skydropx API documentation website. Design a component library with React, Storybook and Emotion.",
        },
      ],
    },
    {
      company: "Televisa Digital",
      link: "https://televisa.com/",
      badges: ["Hybrid"],
      start: "2021",
      end: "2019",
      positions: [
        {
          title: "Technical Leader",
          description:
            "Lead a team of 3 engineers working on improving Google Lighthouse score of Televisa's websites. Work with Google engineers building PWA of Televisa's websites.",
        },
        {
          title: "Frontend Developer",
          description:
            "Increase crawling of content in google search results by integrating structured data and AMP. Improve performance of Televisa's websites by integrating Next.js framework.",
        },
      ],
    },
  ],
  skills: [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Node.js",
    "Next.js",
    "GraphQL",
    "Docker",
    "Git",
  ],
  projects: [
    {
      title: "Consultly",
      techStack: [
        "Side Project",
        "TypeScript",
        "Next.js",
        "Vite",
        "GraphQL",
        "WebRTC",
      ],
      description: "A platform to build and grow your online business",
      logo: ConsultlyLogo,
      link: {
        label: "consultly.com",
        href: "https://consultly.com/",
      },
    },
    {
      title: "Monito",
      techStack: ["Side Project", "TypeScript", "Next.js", "Browser Extension"],
      description:
        "Browser extension that records everything happening in a web application",
      logo: MonitoLogo,
      link: {
        label: "monito.dev",
        href: "https://monito.dev/",
      },
    },
    {
      title: "Jarocki.me",
      techStack: ["Side Project", "Next.js", "MDX"],
      description:
        "My personal website and blog. Built with Next.js and Notion API",
      logo: JarockiMeLogo,
      link: {
        label: "github.com",
        href: "https://jarocki.me/",
      },
    },
    {
      title: "Minimal",
      techStack: ["Side Project", "Next.js", "Puppeteer"],
      description:
        "Minimalist calendars, habit trackers and planners generator",
      logo: Minimal,
      link: {
        label: "useminimal.com",
        href: "https://useminimal.com/",
      },
    },
    {
      title: "Barepapers",
      techStack: ["Side Project", "Next.js", "Puppeteer"],
      description:
        "Generates beautiful wallpapers using random shapes and gradients",
      logo: BarepapersLogo,
      link: {
        label: "barepapers.com",
        href: "https://barepapers.com/",
      },
    },
    {
      title: "Year progress",
      techStack: ["Side Project", "TypeScript", "Next.js"],
      description: "Tracks current year progress and displays a countdown",
      logo: YearProgressLogo,
      link: {
        label: "getyearprogress.com",
        href: "https://getyearprogress.com/",
      },
    },
  ],
} as const;

import { Project } from "./types";

export const projects: Project[] = [
  {
    id: "1",
    slug: "enterprise-analytics-platform",

    title: "Enterprise Analytics Platform",
    tagline: "High-performance financial data visualization system",

    description:
      "A scalable analytics dashboard built to process and visualize high-volume financial transaction data for enterprise users.",

    role: "Senior Frontend Engineer",
    duration: "2022 – Present",

    problem:
      "Legacy system struggled with rendering large datasets, causing performance bottlenecks and slow user workflows.",

    solution:
      "Redesigned frontend architecture using optimized state management, memoization, code splitting, and virtualization strategies.",

    impact: [
      "Reduced load time by 40%",
      "Improved Lighthouse score from 68 → 94",
      "Reduced bundle size by 25%",
      "Adopted by 5,000+ enterprise users",
    ],

    tech: [
      "React",
      "Redux Toolkit",
      "TypeScript",
      "Tailwind",
      "Performance Optimization",
    ],

    featured: true,

    liveUrl: "https://your-live-project.com",
    githubUrl: "https://github.com/yourusername/project-repo",
  },

  {
    id: "2",
    slug: "dynamic-portfolio-platform",

    title: "Dynamic Portfolio Platform",
    tagline: "Feature-driven scalable Next.js architecture",

    description:
      "A modular portfolio platform built using modern Next.js App Router patterns and server components.",

    role: "Frontend Architect",
    duration: "2025",

    problem:
      "Traditional portfolios lack scalability and structured architecture.",

    solution:
      "Implemented feature-based architecture with server components and optimized rendering strategies.",

    impact: [
      "95+ Lighthouse performance score",
      "SEO optimized",
      "Clean scalable folder architecture",
    ],

    tech: [
      "Next.js",
      "TypeScript",
      "App Router",
      "Framer Motion",
    ],

    liveUrl: "https://your-portfolio.com",
    githubUrl: "https://github.com/yourusername/portfolio",
  },
];
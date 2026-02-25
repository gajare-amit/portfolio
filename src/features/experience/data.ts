import { Experience } from "./types";

export const experienceData: Experience[] = [
  {
    id: "tcs",
    role: "System Engineer",
    company: "Tata Consultancy Services (Client: PayPal)",
    duration: "Feb 2023 – Present",
    location: "Pune, India",
    description: [
      "Designed and optimized UIs for PayPal’s Limitation & Shipment Tracking systems.",
      "Improved application load speed by 5% using code splitting and performance tuning.",
      "Built real-time workflow components reducing internal processing time by 7%.",
      "Expanded Cypress E2E coverage improving automation and stability.",
      "Migrated observability from Splunk to Datadog."
    ],
    tech: ["React.js", "TypeScript", "Cypress", "Datadog", "HTML5", "CSS3"]
  },
  {
    id: "neosoft",
    role: "Associate Software Engineer",
    company: "NeoSoft Technologies",
    duration: "Jan 2021 – Nov 2022",
    location: "Pune, India",
    description: [
      "Developed scalable React.js and Redux applications.",
      "Created reusable design system reducing UI inconsistencies by 30%.",
      "Converted Figma designs into pixel-perfect interfaces."
    ],
    tech: ["React.js", "Redux", "JavaScript", "SCSS"]
  },
  {
    id: "sankhala",
    role: "Software Developer",
    company: "Sankhala Infotech LLP",
    duration: "Oct 2019 – Dec 2020",
    location: "Surat, India",
    description: [
      "Built reusable UI themes and components.",
      "Maintained PHP-based eCommerce platforms.",
      "Ensured payment module security and stability."
    ],
    tech: ["React.js", "PHP", "JavaScript", "CSS3"]
  }
];
export type Project = {
  id: string;
  slug: string;

  title: string;
  tagline: string;
  description: string;

  role?: string;
  duration?: string;

  problem?: string;
  solution?: string;
  impact?: string[];

  tech: string[];

  image?: string;

  featured?: boolean;

  liveUrl?: string;
  githubUrl?: string;
};
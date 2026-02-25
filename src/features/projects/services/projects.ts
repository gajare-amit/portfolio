import { Project } from "../types";

export const getProjects = async (): Promise<Project[]> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/projects`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch projects");
  }

  return res.json();
};
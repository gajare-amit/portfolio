import { Experience } from "../types";

export const getExperience = async (): Promise<Experience[]> => {
  const res = await fetch("/api/experience", {
    cache: "no-store"
  });

  if (!res.ok) {
    throw new Error("Failed to fetch experience");
  }

  return res.json();
};
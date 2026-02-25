"use client";

import { useEffect, useState } from "react";
import { Experience } from "../types";
import { getExperience } from "../services/experience";
import ExperienceCard from "./ExperienceCard";

export default function ExperienceSection() {
  const [experience, setExperience] = useState<Experience[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchExperience = async () => {
      try {
        const data = await getExperience();
        setExperience(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unknown error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchExperience();
  }, []);

  return (
    <section id="experience" className="bg-slate-950 text-white py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Experience</h2>
          <p className="text-gray-400">
            My professional journey building scalable, high-performance web applications.
          </p>
        </div>

        {loading && (
          <p className="text-center text-gray-400">Loading...</p>
        )}

        {error && (
          <p className="text-center text-red-400">{error}</p>
        )}

        {!loading && !error && (
          <div className="relative">
            {/* Continuous Timeline Line */}
            <div className="absolute left-2 top-0 bottom-0 w-[1.5px] bg-gradient-to-b from-blue-500/50 via-slate-700 to-slate-700" />

            <div className="space-y-16">
              {experience.map((exp, index) => (
                <ExperienceCard key={exp.id} experience={exp} index={index} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
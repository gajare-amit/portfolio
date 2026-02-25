"use client";

import { motion } from "framer-motion";
import { Experience } from "../types";

type Props = {
  experience: Experience;
  index: number;
};

export default function ExperienceCard({ experience, index }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="relative pl-12"
    >
      {/* Timeline Dot */}
      <div className="absolute left-0 top-7 w-4 h-4 bg-blue-500 rounded-full border-4 border-slate-950" />

      <div
        className={`bg-slate-900/80 backdrop-blur-sm p-6 rounded-xl border shadow-lg transition-all duration-300 ${
          index === 0
            ? "border-blue-500 shadow-blue-500/20"
            : "border-slate-800/70 hover:border-blue-500 hover:shadow-blue-500/20 hover:shadow-xl"
        }`}
      >
        <h3 className="text-xl font-bold text-white">
          {experience.role}
        </h3>

        <p className="text-blue-400 text-lg font-medium">
          {experience.company}
        </p>

        <p className="text-sm text-gray-400 mb-4">
          {experience.duration} • {experience.location}
        </p>

        <ul className="space-y-2 mb-4 text-gray-300 text-sm">
          {experience.description.map((point, index) => (
            <li key={index} className="flex gap-2">
              <span className="text-blue-500">•</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2">
          {experience.tech.map((tech) => (
            <span
              key={tech}
              className="text-xs bg-slate-800 px-3 py-1 rounded-full text-blue-400"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
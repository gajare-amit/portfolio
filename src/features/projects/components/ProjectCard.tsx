import { Project } from "../types";
import Link from "next/link";

type Props = {
  project: Project;
};

export default function ProjectCard({ project }: Props) {
  return (
    <div className="group bg-slate-900 border border-white/10 rounded-2xl p-5 sm:p-6 md:p-8 
                    hover:border-blue-500/40 hover:-translate-y-1 
                    transition-all duration-300 flex flex-col h-full">

      {/* Title */}
      <Link href={`/projects/${project.slug}`}>
        <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white mb-2 
                       group-hover:text-blue-400 transition-colors duration-300">
          {project.title}
        </h3>
      </Link>

      {/* Tagline */}
      <p className="text-blue-400 text-xs sm:text-sm mb-3">
        {project.tagline}
      </p>

      {/* Description */}
      <p className="text-gray-400 text-sm sm:text-base mb-5 leading-relaxed flex-grow">
        {project.description}
      </p>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2 mb-5">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="text-xs bg-slate-800 px-3 py-1 rounded-full text-blue-400 border border-white/10"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* CTA Buttons */}
      <div className="flex gap-3 mt-auto">
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs sm:text-sm bg-blue-500 hover:bg-blue-600 
                       px-4 py-2 rounded-lg transition"
          >
            Live Demo
          </a>
        )}

        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs sm:text-sm border border-gray-500 
                       hover:border-white px-4 py-2 rounded-lg transition"
          >
            GitHub
          </a>
        )}
      </div>
    </div>
  );
}
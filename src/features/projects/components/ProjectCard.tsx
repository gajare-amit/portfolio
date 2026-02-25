import { Project } from "../types";
import Link from "next/link";

type Props = {
  project: Project;
};

export default function ProjectCard({ project }: Props) {
  return (
    <div className="bg-slate-900 border border-white/10 rounded-2xl p-8 hover:border-blue-500/40 hover:-translate-y-2 transition-all duration-300">

      <Link href={`/projects/${project.slug}`}>
        <h3 className="text-2xl font-semibold text-white mb-2 hover:text-blue-400 transition">
          {project.title}
        </h3>
      </Link>

      <p className="text-blue-400 text-sm mb-4">
        {project.tagline}
      </p>

      <p className="text-gray-400 mb-6">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-6">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="text-xs bg-slate-800 px-3 py-1 rounded-full text-blue-400"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex gap-4">
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            className="text-sm bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg transition"
          >
            Live Demo
          </a>
        )}

        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            className="text-sm border border-gray-500 hover:border-white px-4 py-2 rounded-lg transition"
          >
            GitHub
          </a>
        )}
      </div>
    </div>
  );
}
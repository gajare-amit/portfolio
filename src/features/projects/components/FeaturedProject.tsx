import { Project } from "../types";

type Props = {
  project: Project;
};

export default function FeaturedProject({ project }: Props) {
  return (
    <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 border border-white/10 rounded-3xl p-14 shadow-2xl overflow-hidden">

      <div className="absolute inset-0 bg-blue-500/5 blur-3xl pointer-events-none" />

      <h3 className="text-4xl font-bold text-white mb-6 relative">
        {project.title}
      </h3>

      <p className="text-gray-400 text-lg max-w-3xl mb-10 relative">
        {project.description}
      </p>

      <div className="grid md:grid-cols-2 gap-12 relative">
        {project.problem && (
          <div>
            <h4 className="text-xl font-semibold text-blue-400 mb-3">
              Problem
            </h4>
            <p className="text-gray-400">{project.problem}</p>
          </div>
        )}

        {project.solution && (
          <div>
            <h4 className="text-xl font-semibold text-blue-400 mb-3">
              Solution
            </h4>
            <p className="text-gray-400">{project.solution}</p>
          </div>
        )}
      </div>

      {project.impact && (
        <div className="mt-12 relative">
          <h4 className="text-xl font-semibold text-blue-400 mb-4">
            Impact
          </h4>
          <ul className="space-y-2 text-gray-400">
            {project.impact.map((item, index) => (
              <li key={index}>• {item}</li>
            ))}
          </ul>
        </div>
      )}

      <div className="flex flex-wrap gap-3 mt-10 relative">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="text-xs bg-slate-800 px-4 py-2 rounded-full text-blue-400 border border-white/10"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
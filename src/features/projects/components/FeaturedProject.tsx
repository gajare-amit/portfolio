import { Project } from "../types";

type Props = {
  project: Project;
};

export default function FeaturedProject({ project }: Props) {
  return (
    <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 border border-white/10 rounded-3xl p-6 sm:p-8 md:p-12 lg:p-14 shadow-2xl overflow-hidden">

      {/* Subtle Background Glow */}
      <div className="absolute inset-0 bg-blue-500/5 blur-3xl pointer-events-none" />

      {/* Title */}
      <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 relative leading-tight">
        {project.title}
      </h3>

      {/* Description */}
      <p className="text-gray-400 text-base sm:text-lg max-w-3xl mb-8 md:mb-10 relative leading-relaxed">
        {project.description}
      </p>

      {/* Problem / Solution */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 relative">
        {project.problem && (
          <div>
            <h4 className="text-lg sm:text-xl font-semibold text-blue-400 mb-3">
              Problem
            </h4>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              {project.problem}
            </p>
          </div>
        )}

        {project.solution && (
          <div>
            <h4 className="text-lg sm:text-xl font-semibold text-blue-400 mb-3">
              Solution
            </h4>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              {project.solution}
            </p>
          </div>
        )}
      </div>

      {/* Impact */}
      {project.impact && (
        <div className="mt-10 md:mt-12 relative">
          <h4 className="text-lg sm:text-xl font-semibold text-blue-400 mb-4">
            Impact
          </h4>

          <ul className="space-y-2 text-gray-400 text-sm sm:text-base list-disc list-inside">
            {project.impact.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2 sm:gap-3 mt-8 md:mt-10 relative">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="text-xs sm:text-sm bg-slate-800 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-blue-400 border border-white/10"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
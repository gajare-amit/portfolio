import { getProjects } from "./services/projects";
import FeaturedProject from "./components/FeaturedProject";
import ProjectCard from "./components/ProjectCard";

export default async function ProjectsSection() {
  const projects = await getProjects();

  const featured = projects.find((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <section
      id="projects"
      className="bg-slate-950 text-white py-16 md:py-20 lg:py-24"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className="text-center mb-14 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            Selected Work
          </h2>

          <p className="text-gray-400 mt-4 text-base sm:text-lg max-w-2xl mx-auto">
            Real-world products built with scalable frontend architecture.
          </p>
        </div>

        {/* Featured Project */}
        {featured && (
          <div className="mb-16 md:mb-24">
            <FeaturedProject project={featured} />
          </div>
        )}

        {/* Other Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {others.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

      </div>
    </section>
  );
}
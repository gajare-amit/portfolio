import { getProjects } from "./services/projects";
import FeaturedProject from "./components/FeaturedProject";
import ProjectCard from "./components/ProjectCard";

export default async function ProjectsSection() {
  const projects = await getProjects();

  const featured = projects.find((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="bg-slate-950 text-white py-32 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-24">
          <h2 className="text-5xl font-bold">Selected Work</h2>
          <p className="text-gray-400 mt-4 text-lg">
            Real-world products built with scalable frontend architecture.
          </p>
        </div>

        {featured && <FeaturedProject project={featured} />}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-24">
          {others.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

      </div>
    </section>
  );
}
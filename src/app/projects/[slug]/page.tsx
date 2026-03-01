import { notFound } from "next/navigation";
import ScrollProgress from "@/components/ScrollProgress";
// import Image from "next/image";
import { projects } from "@/features/projects/data";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProjectCaseStudy({ params }: Props) {
  const { slug } = await params;

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <ScrollProgress />
      <section className="bg-slate-950 text-white py-32">
        <div className="max-w-7xl mx-auto px-6">

          {/* HERO */}
          <div className="mb-24 border-b border-white/10 pb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl 
               font-bold leading-[1.15] tracking-tight 
               mb-5 sm:mb-6 max-w-4xl">
              {project.title}
            </h1>

            <p className="text-xl text-blue-400 mb-8">
              {project.tagline}
            </p>
          </div>

          {/* MAIN GRID */}
          <div className="lg:grid lg:grid-cols-3 lg:gap-16">

            {/* ================= LEFT CONTENT ================= */}
            <div className="lg:col-span-2 space-y-24">

              {/* OVERVIEW */}
              <div>
                <h2 className="text-3xl font-bold text-blue-400 mb-6">
                  Overview
                </h2>
                <p className="text-gray-300 leading-relaxed text-lg">
                  This project is a production-grade portfolio platform built using
                  modern Next.js App Router architecture and Server Components.
                  The goal was to create a scalable system rather than a static website.
                </p>
              </div>

              {/* PROBLEM */}
              <div>
                <h2 className="text-3xl font-bold text-blue-400 mb-6">
                  Problem
                </h2>
                <p className="text-gray-300 leading-relaxed text-lg">
                  Traditional portfolios are tightly coupled and difficult to scale.
                  As projects grow, routing and structure become complex.
                </p>
              </div>

              {/* SOLUTION */}
              <div>
                <h2 className="text-3xl font-bold text-blue-400 mb-6">
                  Solution
                </h2>
                <p className="text-gray-300 leading-relaxed text-lg">
                  Implemented a modular feature-based architecture with dynamic routing
                  and optimized rendering strategies using server components.
                </p>
              </div>

              {/* IMPACT */}
              {project.impact && (
                <div>
                  <h2 className="text-3xl font-bold mb-10 text-blue-400">
                    Key Impact
                  </h2>

                  <div className="grid md:grid-cols-2 gap-8">
                    {project.impact.map((item, index) => (
                      <div
                        key={index}
                        className="bg-gradient-to-br from-slate-900 to-slate-800 
                             border border-white/10 rounded-2xl p-8"
                      >
                        <p className="text-lg font-medium">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>

            {/* ================= RIGHT STICKY PANEL ================= */}
            <aside className="mt-16 lg:mt-0 lg:col-span-1">
              <div className="lg:sticky lg:top-32 space-y-8">

                <div className="bg-slate-900 border border-white/10 
                          rounded-2xl p-8 space-y-6">

                  <div>
                    <h3 className="text-sm text-gray-400 mb-2">
                      Role
                    </h3>
                    <p className="font-medium">{project.role}</p>
                  </div>

                  <div>
                    <h3 className="text-sm text-gray-400 mb-2">
                      Duration
                    </h3>
                    <p className="font-medium">{project.duration}</p>
                  </div>

                  <div>
                    <h3 className="text-sm text-gray-400 mb-3">
                      Tech Stack
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="bg-slate-800 px-3 py-1 rounded-full 
                               text-xs text-blue-400"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/10 space-y-4">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        className="block w-full text-center 
                             bg-blue-500 hover:bg-blue-600 
                             py-3 rounded-xl transition"
                      >
                        Live Demo
                      </a>
                    )}

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        className="block w-full text-center 
                             border border-white/20 hover:border-white 
                             py-3 rounded-xl transition"
                      >
                        View GitHub
                      </a>
                    )}
                  </div>

                </div>
              </div>
            </aside>

          </div>
        </div>
      </section>
    </>
  );
}
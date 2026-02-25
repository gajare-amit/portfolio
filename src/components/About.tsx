export default function About() {
  return (
    <section className="relative py-32 px-6 bg-slate-950 text-white overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-500/10 blur-[120px] rounded-full" />

      <div className="relative max-w-7xl mx-auto grid lg:grid-cols-3 gap-20">

        {/* LEFT COLUMN */}
        <div className="lg:col-span-1">
          <h2 className="text-5xl font-bold leading-tight">
            About <br />
            <span className="text-blue-400">Me</span>
          </h2>

          <div className="w-16 h-1 bg-blue-500 mt-6 rounded-full" />

          <p className="text-gray-400 mt-8 text-lg leading-relaxed">
            Senior frontend engineer focused on scalable systems,
            performance architecture, and enterprise-grade UI.
          </p>
        </div>

        {/* RIGHT COLUMN */}
        <div className="lg:col-span-2 space-y-20">

          {/* Intro */}
          <div className="text-lg text-gray-300 leading-relaxed max-w-3xl space-y-6">
            <p>
              I design frontend systems that are predictable, maintainable,
              and built to scale. With 6+ years of experience in fintech
              and enterprise environments, I focus on clean architecture,
              performance optimization, and production stability.
            </p>

            <p>
              My approach goes beyond UI implementation — I think in systems.
              Every feature I build is designed with scalability, testing,
              and long-term maintainability in mind.
            </p>
          </div>

          {/* Impact Cards */}
          <div className="grid md:grid-cols-2 gap-8">
            {[
              "Improved application performance through code splitting and rendering optimization.",
              "Designed reusable component architecture adopted across multiple business modules.",
              "Implemented Cypress testing strategy for production reliability.",
              "Collaborated with cross-functional teams to deliver scalable enterprise solutions."
            ].map((item, index) => (
              <div
                key={index}
                className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-blue-500/50 transition duration-300"
              >
                <p className="text-gray-300 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>

          {/* Engineering Philosophy */}
          <div className="max-w-3xl space-y-6">
            <h3 className="text-2xl font-semibold text-white">
              Engineering Philosophy
            </h3>

            <p className="text-gray-300 leading-relaxed">
              Frontend engineering is not just about building interfaces —
              it is about creating reliable systems that support business
              growth over time. I prioritize modular architecture,
              performance efficiency, and testing discipline as core
              engineering principles.
            </p>

            <p className="text-gray-300 leading-relaxed">
              I believe strong frontend architecture reduces long-term
              technical debt and improves developer velocity across teams.
            </p>
          </div>

          {/* Career Direction */}
          <div className="max-w-3xl pt-6 border-t border-white/10">
            <h3 className="text-2xl font-semibold text-white mb-4">
              Career Direction
            </h3>

            <p className="text-gray-300 leading-relaxed">
              I am currently focused on building high-performance React
              applications while continuously improving architectural
              standards and frontend best practices. My goal is to
              contribute to product-driven teams where technical decisions
              directly influence business outcomes.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
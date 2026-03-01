export default function Skills() {
  return (
    <section className="relative py-32 px-6 bg-slate-950 text-white overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-blue-500/10 blur-[140px] rounded-full" />

      <div className="relative max-w-7xl px-6 mx-auto grid lg:grid-cols-3 gap-20">

        {/* LEFT COLUMN */}
        <div className="lg:col-span-1">
          <h2 className="text-5xl font-bold leading-tight">
            Technical <br />
            <span className="text-blue-400">Skills</span>
          </h2>

          <div className="w-16 h-1 bg-blue-500 mt-6 rounded-full" />

          <p className="text-gray-400 mt-8 text-lg leading-relaxed">
            A structured overview of my technical expertise, tools, and
            engineering practices developed over 6+ years of building
            scalable enterprise applications.
          </p>
        </div>

        {/* RIGHT COLUMN */}
        <div className="lg:col-span-2 space-y-10">

          {/* CORE EXPERTISE */}
          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-10 hover:border-blue-500/40 transition duration-300">
            <h3 className="text-2xl font-semibold text-blue-400 mb-6">
              Core Expertise
            </h3>

            <div className="grid sm:grid-cols-2 gap-4 text-gray-300">
              <p>• React Architecture & Component Design</p>
              <p>• State Management (Redux Toolkit)</p>
              <p>• Performance Optimization</p>
              <p>• Code Splitting & Lazy Loading</p>
              <p>• Scalable UI Systems</p>
              <p>• Frontend System Design</p>
            </div>
          </div>

          {/* TECH STACK */}
          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-10 hover:border-blue-500/40 transition duration-300">
            <h3 className="text-2xl font-semibold text-blue-400 mb-6">
              Technical Stack
            </h3>

            <div className="grid sm:grid-cols-2 gap-4 text-gray-300">
              <p>• React.js / Next.js</p>
              <p>• TypeScript / JavaScript (ES6+)</p>
              <p>• Redux Toolkit</p>
              <p>• Tailwind CSS / SCSS</p>
              <p>• Cypress / Jest</p>
              <p>• Git / CI-CD Basics</p>
            </div>
          </div>

          {/* ENGINEERING PRACTICES */}
          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-10 hover:border-blue-500/40 transition duration-300">
            <h3 className="text-2xl font-semibold text-blue-400 mb-6">
              Engineering Practices
            </h3>

            <div className="grid sm:grid-cols-2 gap-4 text-gray-300">
              <p>• Clean & Modular Code Architecture</p>
              <p>• Test-Driven Mindset</p>
              <p>• Accessibility Standards (a11y)</p>
              <p>• Agile & Cross-Team Collaboration</p>
              <p>• Observability & Monitoring Awareness</p>
              <p>• Performance Benchmarking</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
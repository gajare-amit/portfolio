export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6 pt-28 pb-24 w-full grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div className="space-y-6">
          <p className="text-blue-400 text-lg">Hello, I'm</p>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Amit Gajare
          </h1>

          <h2 className="text-2xl md:text-3xl text-gray-300">
            Senior Frontend Engineer building scalable 
            <span className="text-blue-400"> enterprise-grade React applications</span>
          </h2>

          <p className="text-gray-400 max-w-xl">
            6+ years of experience delivering high-performance, production-ready
            systems for fintech and enterprise platforms. Specialized in
            performance optimization, testing strategy, and maintainable UI architecture.
          </p>

          {/* Optional Skill Highlight Row */}
          <div className="flex flex-wrap gap-3 text-sm text-gray-400 pt-2">
            <span>React</span>
            <span>•</span>
            <span>TypeScript</span>
            <span>•</span>
            <span>Cypress</span>
            <span>•</span>
            <span>Performance Optimization</span>
            <span>•</span>
            <span>Enterprise Systems</span>
          </div>

          <div className="flex gap-4 pt-6">
            <button className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg font-medium transition">
              View Experience
            </button>

            <button className="border border-gray-500 hover:border-white px-6 py-3 rounded-lg font-medium transition">
              Download Resume
            </button>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="flex justify-center">
          <div className="w-72 h-72 rounded-full bg-blue-500 flex items-center justify-center text-6xl font-bold shadow-[0_0_60px_rgba(59,130,246,0.4)]">
            A
          </div>
        </div>

      </div>
    </section>
  );
}
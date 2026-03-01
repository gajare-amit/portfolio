"use client";

import { useState } from "react";
import { Mail, Linkedin } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Form submitted (connect backend later)");
  };

  return (
    <section className="relative py-32 px-6 bg-slate-950 text-white overflow-hidden">

      {/* Glow Background */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-500/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-500/10 blur-[120px] rounded-full" />

      <div className="relative max-w-7xl px-6 mx-auto">

        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h1 className="text-5xl font-bold">
            Let’s <span className="text-blue-400">Connect</span>
          </h1>

          <p className="text-gray-400 mt-6 text-lg leading-relaxed">
            I’m currently open to impactful frontend engineering roles
            and product-focused teams. If you’re building something
            meaningful, let’s talk.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">

          {/* Left - Contact Info */}
          <div className="space-y-10">

            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 space-y-6">

              <h3 className="text-xl font-semibold text-white">
                Direct Contact
              </h3>

              <div className="flex items-center gap-4 text-gray-300">
                <Mail size={18} className="text-blue-400" />
                <a
                  href="mailto:amit.gajare01@gmail.com"
                  className="hover:text-white transition"
                >
                  amit.gajare01@gmail.com
                </a>
              </div>

              <div className="flex items-center gap-4 text-gray-300">
                <Linkedin size={18} className="text-blue-400" />
                <a
                  href="https://www.linkedin.com/in/amitgajare/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition"
                >
                  linkedin.com/in/amitgajare
                </a>
              </div>
            </div>

            {/* Availability */}
            <div className="text-gray-400 text-sm">
              Typically respond within 24 hours.
            </div>
          </div>

          {/* Right - Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 space-y-6"
          >
            <div>
              <label className="text-sm text-gray-400">Name</label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full mt-2 bg-slate-900/60 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition"
              />
            </div>

            <div>
              <label className="text-sm text-gray-400">Email</label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full mt-2 bg-slate-900/60 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition"
              />
            </div>

            <div>
              <label className="text-sm text-gray-400">Message</label>
              <textarea
                name="message"
                rows={4}
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full mt-2 bg-slate-900/60 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600
                         py-3 rounded-lg text-sm font-medium
                         transition-all duration-300
                         hover:scale-105"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
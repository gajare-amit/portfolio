"use client";

import Link from "next/link";
import { Github, Linkedin } from "lucide-react";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Skills", path: "/skills" },
  { name: "Contact", path: "/contact" },
];

export default function Footer() {
  return (
    <>
      {/* Email CTA Strip */}
      <div className="border-t border-white/10 bg-slate-900/40 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h3 className="text-xl font-semibold text-white">
              Let’s build something great together.
            </h3>
            <p className="text-gray-400 text-sm mt-2">
              Open to new opportunities and collaborations.
            </p>
          </div>

          <a
            href="mailto:your-email@example.com"
            className="bg-blue-500 hover:bg-blue-600 
                       text-white px-6 py-3 rounded-lg 
                       text-sm font-medium transition-all duration-300"
          >
            Get In Touch
          </a>
        </div>
      </div>

      {/* Subtle Gradient Glow */}
      <div className="h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />

      {/* Main Footer */}
      <footer className="bg-slate-900/70 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 py-16">

          {/* Top Section */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10">

            {/* Branding */}
            <div className="space-y-4 max-w-sm">
              <Link
                href="/"
                className="text-xl font-semibold tracking-tight text-white"
              >
                Amit<span className="text-blue-500">.dev</span>
              </Link>

              <p className="text-gray-400 text-sm leading-relaxed">
                Building scalable frontend systems with modern React,
                performance-first architecture, and clean UI engineering.
              </p>

              {/* Social Icons */}
              <div className="flex gap-4 pt-2">
                <a
                  href="https://github.com/gajare-amit"
                  target="_blank"
                  className="text-gray-400 hover:text-white transition"
                >
                  <Github size={18} />
                </a>

                <a
                  href="https://www.linkedin.com/in/amitgajare/"
                  target="_blank"
                  className="text-gray-400 hover:text-white transition"
                >
                  <Linkedin size={18} />
                </a>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex gap-8 text-sm text-gray-400">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  className="relative group transition-colors duration-200"
                >
                  <span className="group-hover:text-white transition-colors duration-200">
                    {link.name}
                  </span>
                  <span className="absolute left-0 -bottom-1 h-[2px] bg-blue-500 w-0 group-hover:w-full transition-all duration-300" />
                </Link>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="my-12 border-t border-white/10" />

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <p>
              © {new Date().getFullYear()} Amit.dev. All rights reserved.
            </p>

            <p className="text-gray-400">
              Built with <span className="text-blue-500">Next.js</span> & Tailwind CSS
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
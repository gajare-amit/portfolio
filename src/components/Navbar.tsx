"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Skills", path: "/skills" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
        ${
          scrolled
            ? "bg-slate-900/80 backdrop-blur-md shadow-lg border-b border-white/10"
            : "bg-slate-900/30 backdrop-blur-sm"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
        
        {/* Logo */}
        <Link href="/" className="text-xl font-bold tracking-tight text-white">
          Amit<span className="text-blue-500">.dev</span>
        </Link>

        {/* Navigation Links */}
        <div className="flex gap-10 text-sm font-medium text-gray-400">
          {navLinks.map((link) => {
            const isActive = pathname === link.path;

            return (
              <Link
                key={link.path}
                href={link.path}
                className="relative group transition-colors duration-200"
              >
                <span
                  className={`${
                    isActive ? "text-white" : "group-hover:text-white"
                  }`}
                >
                  {link.name}
                </span>

                {/* Animated underline */}
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-blue-500 transition-all duration-300
                    ${
                      isActive
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }`}
                />
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
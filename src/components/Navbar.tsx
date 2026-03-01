"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Skills", path: "/skills" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Scroll blur effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
          ${
            scrolled
              ? "bg-slate-900/80 backdrop-blur-md shadow-lg border-b border-white/10"
              : "bg-slate-900/30 backdrop-blur-sm"
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-5 flex justify-between items-center">
          
          <Link href="/" className="text-lg md:text-xl font-bold tracking-tight text-white">
            Amit<span className="text-blue-500">.dev</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex gap-8 text-sm font-medium text-gray-400">
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

                  <span
                    className={`absolute left-0 -bottom-1 h-[2px] bg-blue-500 transition-[width] duration-300
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

          {/* Hamburger */}
          <button
            className="md:hidden text-white z-50"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Fullscreen Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-slate-950/95 backdrop-blur-xl z-40 flex flex-col pt-28 px-8">
          <div className="flex flex-col space-y-8 text-lg font-medium text-gray-400">
            {navLinks.map((link) => {
              const isActive = pathname === link.path;

              return (
                <Link
                  key={link.path}
                  href={link.path}
                  onClick={() => setIsOpen(false)}
                  className="relative group transition-colors duration-200"
                >
                  <span
                    className={`${
                      isActive ? "text-white" : "group-hover:text-white"
                    }`}
                  >
                    {link.name}
                  </span>

                  <span
                    className={`absolute left-0 -bottom-2 h-[2px] bg-blue-500 transition-[width] duration-300
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
      )}
    </>
  );
}
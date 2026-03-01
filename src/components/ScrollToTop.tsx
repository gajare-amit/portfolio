"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 z-50 
                 bg-slate-900/80 backdrop-blur-md 
                 border border-white/10 
                 p-3 rounded-full 
                 text-blue-500 
                 hover:bg-slate-800 
                 transition-all duration-300 shadow-lg"
    >
      <ArrowUp size={18} />
    </button>
  );
}
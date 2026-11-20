import React, { useState, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Beranda", to: "/" },
  { label: "Tentang", to: "/about" },
  { label: "Proyek", to: "/projects" },
  { label: "Karier", to: "/career" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname, location.search]);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 16);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToContact = (e) => {
    e.preventDefault();
    setMenuOpen(false);
    const contactEl = document.getElementById("contact");
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: shouldReduceMotion ? "auto" : "smooth" });
    }
  };

  return (
    <nav
      className={`no-print fixed top-0 right-0 left-0 z-50 border-b border-[#1f2937] transition-colors duration-200 ${
        scrolled ? "bg-[#090b13]/95 backdrop-blur-xs" : "bg-[#090b13]"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <Link
          to="/"
          className="text-xl font-bold tracking-tight text-[#f3f4f6] transition-colors hover:text-[#f3f4f6]"
        >
          Ariel<span className="text-[#20d3ee]">CV</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) =>
                `relative py-1.5 text-sm font-medium transition-colors ${
                  isActive ? "text-[#f3f4f6]" : "text-[#9ca3af] hover:text-[#f3f4f6]"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <span>{item.label}</span>
                  {isActive && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute right-0 bottom-0 left-0 h-0.5 bg-[#20d3ee]"
                      transition={
                        shouldReduceMotion
                          ? { duration: 0 }
                          : { type: "spring", stiffness: 380, damping: 32 }
                      }
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}

          <a
            href="#contact"
            onClick={scrollToContact}
            className="rounded-md border border-[#374151] px-3.5 py-1.5 text-sm font-medium text-[#f3f4f6] transition-colors hover:border-[#20d3ee] hover:text-[#20d3ee]"
          >
            Hubungi Saya
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-expanded={menuOpen}
          aria-label="Toggle navigation"
          className="inline-flex items-center justify-center rounded-md border border-[#374151] p-2 text-[#f3f4f6] transition-colors hover:border-[#20d3ee] hover:text-[#20d3ee] md:hidden"
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden border-t border-[#1f2937] bg-[#090b13] md:hidden"
          >
            <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-4 sm:px-6">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === "/"}
                  className={({ isActive }) =>
                    `rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-[#111827] text-[#20d3ee]"
                        : "text-[#9ca3af] hover:bg-[#111827] hover:text-[#f3f4f6]"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
              <a
                href="#contact"
                onClick={scrollToContact}
                className="mt-1 inline-flex w-fit rounded-md border border-[#374151] px-3.5 py-2 text-sm font-medium text-[#f3f4f6] transition-colors hover:border-[#20d3ee] hover:text-[#20d3ee]"
              >
                Hubungi Saya
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

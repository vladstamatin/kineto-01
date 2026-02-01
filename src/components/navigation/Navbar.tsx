"use client";

import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

const languages = [
  { code: "ro" as const, label: "RO" },
  { code: "ru" as const, label: "RU" },
  { code: "en" as const, label: "EN" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const navLinks = [
    { href: "#sus", label: t.nav.home },
    { href: "#servicii-preturi", label: t.nav.services },
    { href: "#echipa", label: t.nav.team },
    { href: "#contacte", label: t.nav.contacts },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 h-[var(--nav-height)] z-[var(--z-navbar)]",
          "transition-all duration-300 ease-out",
          isScrolled
            ? "bg-slate-900/20 backdrop-blur-md border-b border-white/20"
            : "bg-transparent"
        )}
      >
        <nav className="h-full grid grid-cols-[1fr_auto_1fr] md:grid-cols-[35%_30%_35%] items-center px-[var(--container-padding-x)] max-w-[var(--container-2xl)] mx-auto">
          {/* Left: Mobile hamburger / Desktop nav links */}
          <div className="flex items-center">
            {/* Mobile hamburger */}
            <button
              className="md:hidden p-2 -ml-2"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu
                className="w-6 h-6 text-white"
              />
            </button>

            {/* Desktop nav links */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-white/90 hover:text-white transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Center: Logo */}
          <div className="flex flex-col items-center justify-center">
            <a href="/" className="flex flex-col items-center gap-1">
              {/* Logo Icon - Abstract hands shape */}
              <svg
                width="40"
                height="32"
                viewBox="0 0 40 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="transition-opacity"
              >
                <path
                  d="M8 16C8 11.5817 11.5817 8 16 8C18.5 8 20.5 9 22 10.5C23.5 9 25.5 8 28 8C32.4183 8 36 11.5817 36 16C36 24 28 28 22 32C16 28 8 24 8 16Z"
                  fill="url(#logo-gradient)"
                />
                <defs>
                  <linearGradient
                    id="logo-gradient"
                    x1="8"
                    y1="8"
                    x2="36"
                    y2="32"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#00C4CC" />
                    <stop offset="1" stopColor="#00A3A9" />
                  </linearGradient>
                </defs>
              </svg>
              {/* Brand text */}
              <span
                className="text-xs font-bold uppercase tracking-[0.15em] text-white"
              >
                Rebalance
              </span>
            </a>
          </div>

          {/* Right: Action stack */}
          <div className="flex flex-col items-end justify-center gap-1">
            {/* Phone CTA */}
            <a
              href="tel:+37360123456"
              className={cn(
                "inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200",
                "border-[1.5px] border-[var(--color-primary)]",
                isScrolled
                  ? "bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-dark)]"
                  : "bg-white/10 text-white hover:bg-white/20"
              )}
            >
              <Phone className="w-4 h-4" />
              <span>060 123 456</span>
            </a>

            {/* Language switcher */}
            <div className="flex items-center gap-1 text-xs uppercase">
              {languages.map((lang, index) => (
                <span key={lang.code} className="flex items-center">
                  <button
                    onClick={() => setLanguage(lang.code)}
                    className={cn(
                      "transition-colors duration-200 px-1",
                      language === lang.code
                        ? "text-white font-bold"
                        : "text-white/60 hover:text-white"
                    )}
                  >
                    {lang.label}
                  </button>
                  {index < languages.length - 1 && (
                    <span className="text-white/40">
                      |
                    </span>
                  )}
                </span>
              ))}
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/50 z-[calc(var(--z-navbar)+1)] md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Drawer - Full width, height matches first video */}
            <motion.div
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{ type: "tween", duration: 0.3, ease: "easeOut" }}
              className="fixed top-0 left-0 right-0 h-[200px] bg-[#1a2230] z-[calc(var(--z-navbar)+2)] md:hidden"
            >
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
                  <span className="text-sm font-bold uppercase tracking-[0.15em] text-white">
                    Rebalance
                  </span>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 -mr-2"
                    aria-label="Close menu"
                  >
                    <X className="w-5 h-5 text-white" />
                  </button>
                </div>

                {/* Nav links - horizontal layout */}
                <nav className="flex-1 flex items-center justify-center px-4">
                  <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2">
                    {navLinks.map((link) => (
                      <li key={link.href}>
                        <a
                          href={link.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="text-sm font-medium text-white/80 hover:text-white transition-colors"
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>

                {/* Footer - Phone button */}
                <div className="px-4 pb-4">
                  <a
                    href="tel:+37360123456"
                    className="flex items-center justify-center gap-2 w-full py-3 bg-[var(--color-primary)] text-white rounded-full font-semibold"
                  >
                    <Phone className="w-4 h-4" />
                    060 123 456
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

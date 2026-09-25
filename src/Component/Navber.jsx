"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX, FiSun, FiMoon, FiArrowUpRight } from "react-icons/fi";
import { useTheme } from "next-themes";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Services", href: "#services" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = theme === "dark";

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <motion.header initial={{ y: -80, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6, ease: "easeOut" }} className="sticky top-0 z-50 border-b border-emerald-200/70 bg-[#E8F7EF]/95 backdrop-blur-xl transition-colors duration-300 dark:border-emerald-400/10 dark:bg-[#061B15]/95">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <a href="#home" onClick={closeMenu} className="group flex items-center gap-3">
          <motion.div whileHover={{ rotate: -5, scale: 1.08 }} whileTap={{ scale: 0.95 }} transition={{ type: "spring", stiffness: 300 }} className="flex h-9 w-9 items-center justify-center rounded-lg border border-emerald-500/30 bg-emerald-500/10 transition-colors duration-300 dark:border-emerald-400/20 dark:bg-emerald-400/10">
            <span className="text-lg font-bold tracking-tight text-emerald-700 dark:text-emerald-400">AR</span>
          </motion.div>

          <div className="hidden sm:block">
            <p className="text-sm font-semibold tracking-tight text-gray-900 dark:text-white">Avishek Roy Yash</p>
            <p className="text-[10px] font-medium text-gray-500 dark:text-gray-400">Full Stack Developer</p>
          </div>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-5 lg:flex">
          {navLinks.map((link, index) => (
            <a key={link.name} href={link.href} onClick={closeMenu} className={`group relative py-2 text-xs font-medium transition-colors duration-300 ${index === 0 ? "text-emerald-700 dark:text-emerald-400" : "text-gray-700 hover:text-emerald-700 dark:text-gray-400 dark:hover:text-emerald-400"}`}>
              {link.name}
              <motion.span initial={{ width: index === 0 ? "100%" : "0%" }} whileHover={{ width: "100%" }} transition={{ duration: 0.25, ease: "easeOut" }} className="absolute bottom-0 left-0 h-0.5 rounded-full bg-emerald-600 dark:bg-emerald-400" />
            </a>
          ))}
        </div>

        {/* Desktop Right Side */}
        <div className="hidden items-center gap-3 lg:flex">
          {/* Theme Toggle */}
          <motion.button whileHover={{ scale: 1.08, rotate: 8 }} whileTap={{ scale: 0.92 }} onClick={toggleTheme} aria-label="Toggle theme" className="flex h-9 w-9 items-center justify-center rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-700 transition-all duration-300 hover:border-emerald-600/50 hover:bg-emerald-500/20 hover:text-emerald-800 dark:border-emerald-400/20 dark:bg-emerald-400/10 dark:text-emerald-300 dark:hover:border-emerald-400/50 dark:hover:bg-emerald-400/20 dark:hover:text-emerald-200">
            <AnimatePresence mode="wait" initial={false}>
              {mounted && (
                <motion.span key={isDark ? "sun" : "moon"} initial={{ opacity: 0, rotate: -90, scale: 0.5 }} animate={{ opacity: 1, rotate: 0, scale: 1 }} exit={{ opacity: 0, rotate: 90, scale: 0.5 }} transition={{ duration: 0.2 }}>
                  {isDark ? <FiSun size={16} /> : <FiMoon size={16} />}
                </motion.span>
              )}
            </AnimatePresence>

            {!mounted && <FiMoon size={16} />}
          </motion.button>

          {/* Hire Me */}
          <motion.a href="#contact" onClick={closeMenu} whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }} transition={{ type: "spring", stiffness: 400, damping: 20 }} className="group inline-flex items-center justify-center gap-2 rounded-lg border border-emerald-500/30 bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors duration-300 hover:border-emerald-400 hover:bg-emerald-500 hover:shadow-lg hover:shadow-emerald-500/20 dark:bg-emerald-500 dark:text-slate-950 dark:hover:bg-emerald-400">
            <span>Hire Me</span>
            <motion.span initial={{ x: 0, y: 0 }} whileHover={{ x: 2, y: -2 }} transition={{ duration: 0.2 }} className="flex items-center">
              <FiArrowUpRight size={17} />
            </motion.span>
          </motion.a>
        </div>

        {/* Mobile Menu Button */}
        <motion.button whileTap={{ scale: 0.9 }} onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu" aria-expanded={isOpen} className="flex h-9 w-9 items-center justify-center rounded-lg border border-emerald-500/30 bg-emerald-500/10 text-emerald-700 transition-all duration-300 hover:border-emerald-500/50 hover:bg-emerald-500/20 dark:border-emerald-400/20 dark:bg-emerald-400/10 dark:text-emerald-300 dark:hover:border-emerald-400/50 dark:hover:bg-emerald-400/20 lg:hidden">
          <AnimatePresence mode="wait" initial={false}>
            <motion.span key={isOpen ? "close" : "menu"} initial={{ opacity: 0, rotate: -90 }} animate={{ opacity: 1, rotate: 0 }} exit={{ opacity: 0, rotate: 90 }} transition={{ duration: 0.2 }}>
              {isOpen ? <FiX size={20} /> : <FiMenu size={20} />}
            </motion.span>
          </AnimatePresence>
        </motion.button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease: "easeInOut" }} className="overflow-hidden border-t border-emerald-200/70 bg-[#E8F7EF] dark:border-emerald-400/10 dark:bg-[#061B15] lg:hidden">
            <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6">
              <motion.div initial="hidden" animate="show" variants={{ hidden: {}, show: { transition: { staggerChildren: 0.05 } } }} className="flex flex-col">
                {navLinks.map((link, index) => (
                  <motion.div key={link.name} variants={{ hidden: { opacity: 0, x: -15 }, show: { opacity: 1, x: 0, transition: { duration: 0.25 } } }}>
                    <a href={link.href} onClick={closeMenu} className={`block border-b px-2 py-3 text-sm font-medium transition-colors duration-300 ${index === 0 ? "border-emerald-300/50 text-emerald-700 dark:border-emerald-400/10 dark:text-emerald-400" : "border-emerald-200/60 text-gray-700 hover:text-emerald-700 dark:border-white/5 dark:text-gray-400 dark:hover:text-emerald-400"}`}>
                      <motion.span whileHover={{ x: 5 }} className="inline-block">{link.name}</motion.span>
                    </a>
                  </motion.div>
                ))}

                {/* Mobile Theme */}
                <motion.button whileTap={{ scale: 0.98 }} onClick={toggleTheme} className="mt-4 flex items-center justify-center gap-2 rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-sm font-semibold text-emerald-700 transition-all duration-300 hover:bg-emerald-500/20 dark:border-emerald-400/20 dark:bg-emerald-400/10 dark:text-emerald-300 dark:hover:bg-emerald-400/20">
                  {mounted ? (
                    isDark ? (
                      <>
                        <FiSun size={16} />
                        Light Mode
                      </>
                    ) : (
                      <>
                        <FiMoon size={16} />
                        Dark Mode
                      </>
                    )
                  ) : (
                    <>
                      <FiMoon size={16} />
                      Dark Mode
                    </>
                  )}
                </motion.button>

                {/* Mobile Hire Me */}
                <motion.a href="#contact" onClick={closeMenu} whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }} transition={{ type: "spring", stiffness: 400, damping: 20 }} className="mt-3 inline-flex items-center justify-center gap-2 rounded-lg border border-emerald-500/30 bg-emerald-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-colors duration-300 hover:border-emerald-400 hover:bg-emerald-500 hover:shadow-lg hover:shadow-emerald-500/20 dark:bg-emerald-500 dark:text-slate-950 dark:hover:bg-emerald-400">
                  <span>Hire Me</span>
                  <motion.span initial={{ x: 0, y: 0 }} whileHover={{ x: 2, y: -2 }} transition={{ duration: 0.2 }} className="flex items-center">
                    <FiArrowUpRight size={17} />
                  </motion.span>
                </motion.a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
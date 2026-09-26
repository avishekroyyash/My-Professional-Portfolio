"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import pic from "../../public/images/profile/avishek.png";

import {
  FiArrowRight,
  FiDownload,
  FiGithub,
  FiMail,
  FiMapPin,
} from "react-icons/fi";

import { FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { useEffect, useState } from "react";


const Hero = () => {
const [roleIndex, setRoleIndex] = useState(0);
const roles = ["Full Stack Developer", "MERN Stack Developer", "Web Developer", "Software Engineer", "React/Next.js Developer", "Frontend Developer" ,"Backend Developer"];

useEffect(() => {
  const interval = setInterval(() => {
    setRoleIndex((prev) => (prev + 1) % roles.length);
  }, 5000);

  return () => clearInterval(interval);
}, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const socialLinks = [
    {
      label: "GitHub",
      href: "https://github.com/avishekroyyash",
      icon: <FiGithub size={21} />,
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/avishek-roy-yash/",
      icon: <FaLinkedinIn size={19} />,
    },
    {
      label: "X",
      href: "#",
      icon: <FaXTwitter size={18} />,
    },
    {
      label: "Email",
      href: "mailto:avishekroyyash@gmail.com",
      icon: <FiMail size={21} />,
    },
  ];

  const stats = [
    {
      value: "25+",
      label: "Real Projects",
      icon: "</>",
    },
    {
      value: "4th Year",
      label: "CSE Student",
      icon: "🎓",
    },
    {
      value: "AI/ML",
      label: "Research Enthusiast",
      icon: "🧠",
    },
    {
      value: "Sylhet",
      label: "Bangladesh",
      icon: <FiMapPin size={19} />,
    },
  ];

  return (
    <section id="home" className="relative isolate overflow-hidden border-b border-emerald-200 bg-[#EFFFF7] text-gray-900 transition-colors duration-300 dark:border-emerald-400/10 dark:bg-[#020B0A] dark:text-white">
      {/* Background Effects */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.2 }} className="pointer-events-none absolute -right-40 top-20 -z-10 h-125 w-125 rounded-full bg-emerald-500/10 blur-[140px] dark:bg-emerald-500/10" />

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.4, delay: 0.2 }} className="pointer-events-none absolute -left-40 bottom-0 -z-10 h-100 w-100 rounded-full bg-emerald-500/10 blur-[130px] dark:bg-emerald-600/10" />

      <div className="pointer-events-none absolute -left-20 top-0 -z-10 h-52 w-72 -skew-x-12 bg-emerald-500/4 dark:bg-emerald-500/3" />

      <div className="pointer-events-none absolute -bottom-20 -right-25 -z-10 h-72 w-125 -skew-x-12 bg-emerald-500/5 dark:bg-emerald-500/4" />

      {/* Hero Container */}
      <div className="mx-auto max-w-7xl px-4 pb-8 pt-12 sm:px-6 sm:pt-16 lg:px-8 lg:pb-10 lg:pt-20">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.95fr] lg:gap-8">
          {/* Left Content */}
          <motion.div variants={containerVariants} initial="hidden" animate="visible" className="relative z-10 max-w-2xl">
            {/* Open To Work */}
            <motion.div variants={itemVariants} className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-600/30 bg-emerald-500/10 px-4 py-2 text-xs font-medium text-emerald-700 backdrop-blur-sm dark:border-emerald-400/30 dark:bg-emerald-400/6 dark:text-emerald-300">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-600 opacity-50 dark:bg-emerald-400" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-600 dark:bg-emerald-400" />
              </span>
              Open to Work
            </motion.div>

            {/* Greeting */}
            <motion.p variants={itemVariants} className="mb-2 text-lg font-medium text-gray-600 sm:text-xl dark:text-gray-300">
              Hi, I'm
            </motion.p>

            {/* Name */}
            <motion.h1 variants={itemVariants} className="text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl">
              <span className="text-gray-900 dark:text-white">Avishek </span>
              <span className="bg-linear-to-r from-emerald-600 via-emerald-500 to-green-600 bg-clip-text text-transparent dark:from-emerald-300 dark:via-emerald-400 dark:to-green-500">Roy Yash</span>
            </motion.h1>

            {/* Job Title */}
           <motion.div variants={itemVariants} className="mt-5 min-h-16 sm:min-h-20">
  <AnimatePresence mode="wait">
    <motion.h2 key={roles[roleIndex]} initial={{ opacity: 0, y: 18, filter: "blur(6px)" }} animate={{ opacity: 1, y: 0, filter: "blur(0px)" }} exit={{ opacity: 0, y: -18, filter: "blur(6px)" }} transition={{ duration: 0.5, ease: "easeOut" }} className="text-xl font-semibold leading-snug text-gray-800 sm:text-2xl md:text-3xl dark:text-gray-200">
      {roles[roleIndex]}
    </motion.h2>
  </AnimatePresence>

  <motion.span initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.5 }} className="mt-1 block text-base font-medium text-gray-500 sm:text-lg dark:text-gray-400">
    &amp; Aspiring AI/ML Engineer
  </motion.span>
</motion.div>

            {/* Description */}
            <motion.p variants={itemVariants} className="mt-6 max-w-xl text-sm leading-7 text-gray-600 sm:text-base sm:leading-8 dark:text-gray-400">
              I build modern, scalable and user-focused web applications using React, Next.js, Node.js, Express.js and MongoDB. Passionate about solving real-world problems and continuously growing as a software engineer.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="#projects" className="group inline-flex items-center justify-center gap-2 rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-emerald-700 hover:shadow-[0_0_30px_rgba(16,185,129,0.20)] dark:bg-emerald-400 dark:text-[#02100C] dark:hover:bg-emerald-300 dark:hover:shadow-[0_0_30px_rgba(52,211,153,0.20)]">
                View My Projects
                <FiArrowRight size={17} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <a href="/resume/Avishek_Roy_Yash_Full_Stack_Developer.pdf" download="Avishek_Roy_Yash_Full_Stack_Developer.pdf" className="group inline-flex items-center justify-center gap-2 rounded-full border border-emerald-600/70 bg-transparent px-6 py-3 text-sm font-semibold text-emerald-700 transition-all duration-300 hover:-translate-y-0.5 hover:bg-emerald-600 hover:text-white hover:shadow-[0_0_30px_rgba(16,185,129,0.15)] dark:border-emerald-400/70 dark:text-emerald-300 dark:hover:bg-emerald-400 dark:hover:text-[#02100C] dark:hover:shadow-[0_0_30px_rgba(52,211,153,0.15)]">
  Download Resume
  <FiDownload size={17} className="transition-transform duration-300 group-hover:translate-y-0.5" />
</a>
            </motion.div>

            {/* Social Links */}
         <div className="mt-8 flex items-center gap-5">
  <motion.a href="https://github.com/avishekroyyash" target="_blank" rel="noopener noreferrer" aria-label="GitHub" whileHover={{ y: -4 }} whileTap={{ scale: 0.95 }} className="text-gray-500 transition-colors duration-300 hover:text-emerald-600 dark:text-gray-400 dark:hover:text-emerald-400">
    <FiGithub size={21} />
  </motion.a>

  <motion.a href="https://www.linkedin.com/in/avishek-roy-yash/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" whileHover={{ y: -4 }} whileTap={{ scale: 0.95 }} className="text-gray-500 transition-colors duration-300 hover:text-emerald-600 dark:text-gray-400 dark:hover:text-emerald-400">
    <FaLinkedinIn size={19} />
  </motion.a>

  <motion.a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" aria-label="X" whileHover={{ y: -4 }} whileTap={{ scale: 0.95 }} className="text-gray-500 transition-colors duration-300 hover:text-emerald-600 dark:text-gray-400 dark:hover:text-emerald-400">
    <FaXTwitter size={18} />
  </motion.a>

  <motion.a href="https://mail.google.com/mail/?view=cm&fs=1&to=avishekroyyash@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Email" whileHover={{ y: -4 }} whileTap={{ scale: 0.95 }} className="text-gray-500 transition-colors duration-300 hover:text-emerald-600 dark:text-gray-400 dark:hover:text-emerald-400">
    <FiMail size={21} />
  </motion.a>
</div>
          </motion.div>

          {/* Right Side / Profile Image */}
          <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.25, ease: "easeOut" }} className="relative mx-auto flex w-full max-w-xl items-center justify-center lg:min-h-142.5">
            {/* Main Glow */}
            <motion.div animate={{ scale: [1, 1.05, 1], opacity: [0.8, 1, 0.8] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} className="absolute left-1/2 top-1/2 h-75 w-75 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/15 blur-[100px] sm:h-100 sm:w-100 dark:bg-emerald-500/20" />

            {/* Rotated Shape */}
            <motion.div initial={{ opacity: 0, rotate: -15 }} animate={{ opacity: 1, rotate: -9 }} transition={{ duration: 0.8, delay: 0.4 }} className="absolute left-1/2 top-1/2 h-95 w-70 -translate-x-1/2 -translate-y-1/2 rounded-[35px] border border-emerald-600/30 bg-emerald-500/4 sm:h-125 sm:w-87.5 dark:border-emerald-400/40 dark:bg-emerald-400/4" />

            {/* Green Filled Shape */}
            <motion.div initial={{ opacity: 0, rotate: 15 }} animate={{ opacity: 1, rotate: 7 }} transition={{ duration: 0.8, delay: 0.5 }} className="absolute left-1/2 top-1/2 h-90 w-65 -translate-x-1/2 -translate-y-1/2 rounded-[35px] bg-linear-to-br from-emerald-500/15 via-emerald-500/5 to-transparent sm:h-120 sm:w-82.5 dark:from-emerald-500/20 dark:via-emerald-500/5" />

            {/* Border Frame */}
            <motion.div initial={{ opacity: 0, rotate: 5 }} animate={{ opacity: 1, rotate: -4 }} transition={{ duration: 0.8, delay: 0.6 }} className="absolute left-1/2 top-1/2 h-92.5 w-67.5 -translate-x-1/2 -translate-y-1/2 rounded-4xl border border-emerald-600/40 sm:h-122.5 sm:w-85 dark:border-emerald-400/50" />

            {/* Profile Image */}
           <motion.div initial={{ opacity: 0, y: 25, scale: 0.97 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 0.8, delay: 0.35, ease: "easeOut" }} className="relative z-10 mt-8 w-72.5 sm:w-87.5 md:w-96  lg:w-106">
  <Image src={pic} alt="Avishek Roy Yash" width={800} height={700} priority className="relative z-10 h-auto scale-[1.37] object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.20)] dark:drop-shadow-[0_20px_50px_rgba(0,0,0,0.60)]" />
</motion.div>

            {/* Build / Learn / Grow */}
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.9 }} className="absolute right-0 top-16 z-20 hidden sm:block lg:-right-1.25 lg:top-24">
              <div className="rotate-[-5deg] text-right">
                <p className="font-serif text-2xl italic leading-tight text-emerald-600 dark:text-emerald-300">Build</p>
                <p className="font-serif text-2xl italic leading-tight text-emerald-600 dark:text-emerald-300">Learn</p>
                <p className="font-serif text-2xl italic leading-tight text-emerald-600 dark:text-emerald-300">Grow</p>
                <div className="ml-auto mt-2 h-0.5 w-20 rotate-[-8deg] rounded-full bg-emerald-600 dark:bg-emerald-400" />
              </div>
            </motion.div>

            {/* Floating Elements */}
            <motion.div animate={{ y: [0, -8, 0], rotate: [12, 16, 12] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="absolute left-5 top-24 hidden h-4 w-4 rounded bg-emerald-500/60 shadow-[0_0_20px_rgba(16,185,129,0.25)] sm:block dark:bg-emerald-400/70 dark:shadow-[0_0_20px_rgba(52,211,153,0.4)]" />

            <motion.div animate={{ y: [0, 7, 0], rotate: [12, 8, 12] }} transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }} className="absolute bottom-24 left-12 hidden h-3 w-3 rounded bg-emerald-500/50 sm:block dark:bg-emerald-400/50" />

            <motion.div animate={{ y: [0, -7, 0], rotate: [45, 52, 45] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }} className="absolute bottom-28 right-16 hidden h-4 w-4 rounded bg-emerald-500/50 sm:block dark:bg-emerald-400/50" />
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.7 }} className="relative z-20 mt-10 rounded-2xl border border-emerald-600/20 bg-white/70 p-4 backdrop-blur-md sm:mt-14 sm:p-5 dark:border-emerald-400/20 dark:bg-[#04110F]/80">
          <div className="grid grid-cols-2 divide-x divide-y divide-emerald-600/10 sm:grid-cols-4 sm:divide-y-0 dark:divide-emerald-400/10">
            {stats.map((stat) => (
              <motion.div key={stat.label} whileHover={{ y: -3 }} transition={{ duration: 0.2 }} className="flex items-center gap-3 px-3 py-4 sm:px-5 sm:py-2">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600 dark:bg-emerald-400/10 dark:text-emerald-400">
                  {typeof stat.icon === "string" ? <span className="text-lg font-bold">{stat.icon}</span> : stat.icon}
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900 sm:text-base dark:text-white">{stat.value}</p>
                  <p className="text-[10px] text-gray-500 sm:text-xs dark:text-gray-500">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Scroll Indicator */}
 
      </div>
    </section>
  );
};

export default Hero;
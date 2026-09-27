
"use client";

import { motion } from "framer-motion";
import {
  FiArrowUpRight,
  FiCode,
  FiDatabase,
  FiGlobe,
  FiLayers,
  FiCheck,
  FiZap,
  FiShield,
} from "react-icons/fi";

const services = [
  {
    number: "01",
    icon: FiGlobe,
    title: "Business Website Development",
    description:
      "Professional, responsive websites designed to establish a strong online presence and clearly communicate your brand, services, and value.",
    features: [
      "Responsive design",
      "Modern UI",
      "SEO-friendly",
      "Fast performance",
    ],
  },
  {
    number: "02",
    icon: FiLayers,
    title: "Full-Stack Web Application",
    description:
      "End-to-end web applications with modern frontend interfaces, secure backend systems, database integration, and scalable architecture.",
    features: [
      "Frontend & backend",
      "REST API",
      "Database integration",
      "Authentication",
    ],
  },
  {
    number: "03",
    icon: FiCode,
    title: "Frontend Development",
    description:
      "Clean and responsive interfaces built with modern JavaScript technologies, focusing on usability, performance, accessibility, and maintainable code.",
    features: [
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "Responsive UI",
    ],
  },
  {
    number: "04",
    icon: FiDatabase,
    title: "Backend & API Development",
    description:
      "Reliable backend services and REST APIs that connect applications with databases and provide structured and secure data management.",
    features: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST APIs",
    ],
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.97,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function ServicesPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#F4FFF9] px-5 py-24 text-gray-900 transition-colors duration-500 dark:bg-[#020908] dark:text-white sm:px-8 lg:px-12">
      
      {/* =====================================================
          BACKGROUND
      ====================================================== */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.35] dark:opacity-[0.08]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(16,185,129,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(16,185,129,0.08) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />

        {/* Glow 1 */}
        <motion.div
          animate={{
            x: [0, 30, 0],
            y: [0, 20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-40 -top-40 h-[450px] w-[450px] rounded-full bg-emerald-400/10 blur-3xl dark:bg-emerald-500/10"
        />

        {/* Glow 2 */}
        <motion.div
          animate={{
            x: [0, -25, 0],
            y: [0, -15, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -bottom-40 -left-40 h-[450px] w-[450px] rounded-full bg-teal-400/10 blur-3xl dark:bg-teal-500/10"
        />
      </div>

      <div className="relative mx-auto max-w-7xl">

        {/* =====================================================
            HEADER
        ====================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-300/60 bg-emerald-50/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700 backdrop-blur-sm dark:border-emerald-800/60 dark:bg-emerald-400/5 dark:text-emerald-400"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>

            Services
          </motion.div>

          {/* Heading */}
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Turning ideas into{" "}
            <span className="relative inline-block text-emerald-600 dark:text-emerald-400">
              digital products
              
              <motion.span
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{
                  delay: 0.8,
                  duration: 0.8,
                  ease: "easeOut",
                }}
             
              />
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-gray-600 dark:text-gray-400 sm:text-base">
            I design and develop modern web experiences that are fast,
            responsive, scalable, and built around real business needs.
          </p>
        </motion.div>

        {/* =====================================================
            SERVICES GRID
        ====================================================== */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
            amount: 0.1,
          }}
          className="grid gap-6 md:grid-cols-2"
        >
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <motion.article
                key={service.number}
                variants={cardVariants}
                whileHover={{
                  y: -8,
                  transition: {
                    duration: 0.25,
                  },
                }}
                className="group relative overflow-hidden rounded-3xl border border-emerald-200/70 bg-white/70 p-7 shadow-[0_10px_40px_rgba(16,185,129,0.04)] backdrop-blur-xl transition-all duration-500 hover:border-emerald-400/70 hover:shadow-[0_20px_60px_rgba(16,185,129,0.12)] dark:border-emerald-900/60 dark:bg-[#071512]/75 dark:hover:border-emerald-500/50 dark:hover:shadow-[0_20px_60px_rgba(16,185,129,0.08)] sm:p-8"
              >
                {/* Hover glow */}
                <div className="pointer-events-none absolute -right-24 -top-24 h-48 w-48 rounded-full bg-emerald-400/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100 dark:bg-emerald-400/10" />

                {/* Top border animation */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.8,
                    delay: 0.2,
                  }}
                  className="absolute left-0 right-0 top-0 h-[2px] origin-left bg-gradient-to-r from-transparent via-emerald-500 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />

                {/* Header */}
                <div className="relative mb-8 flex items-center justify-between">
                  
                  {/* Icon */}
                  <motion.div
                    whileHover={{
                      rotate: 5,
                      scale: 1.08,
                    }}
                    className="flex h-14 w-14 items-center justify-center rounded-2xl border border-emerald-200 bg-emerald-50 text-emerald-600 transition-all duration-300 group-hover:border-emerald-300 group-hover:bg-emerald-100 dark:border-emerald-900/70 dark:bg-emerald-400/10 dark:text-emerald-400 dark:group-hover:bg-emerald-400/15"
                  >
                    <Icon size={25} />
                  </motion.div>

                  {/* Number */}
                  <span className="font-mono text-sm font-medium tracking-wider text-gray-300 transition-colors duration-300 group-hover:text-emerald-500 dark:text-gray-700 dark:group-hover:text-emerald-700">
                    {service.number}
                  </span>
                </div>

                {/* Content */}
                <div className="relative">
                  <h2 className="text-xl font-bold tracking-tight sm:text-2xl">
                    {service.title}
                  </h2>

                  <p className="mt-4 text-sm leading-7 text-gray-600 dark:text-gray-400">
                    {service.description}
                  </p>
                </div>

                {/* Features */}
                <div className="relative mt-7 grid grid-cols-2 gap-x-4 gap-y-3 border-t border-gray-200/70 pt-6 dark:border-emerald-900/40">
                  {service.features.map((feature, index) => (
                    <motion.div
                      key={feature}
                      initial={{
                        opacity: 0,
                        x: -8,
                      }}
                      whileInView={{
                        opacity: 1,
                        x: 0,
                      }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.35,
                        delay: index * 0.06,
                      }}
                      className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-400/10">
                        <FiCheck
                          size={11}
                          className="text-emerald-600 dark:text-emerald-400"
                        />
                      </span>

                      <span>{feature}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Arrow */}
                <div className="absolute bottom-7 right-7 flex h-9 w-9 translate-y-2 items-center justify-center rounded-full border border-emerald-200 text-emerald-600 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 dark:border-emerald-800 dark:text-emerald-400">
                  <FiArrowUpRight size={17} />
                </div>
              </motion.article>
            );
          })}
        </motion.div>

        {/* =====================================================
            APPROACH SECTION
        ====================================================== */}
        <motion.section
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.7,
          }}
          className="relative mt-24 overflow-hidden rounded-3xl border border-emerald-200/70 bg-white/60 p-7 backdrop-blur-xl dark:border-emerald-900/50 dark:bg-[#071512]/60 sm:p-10 lg:p-12"
        >
          {/* Decorative glow */}
          <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-emerald-400/10 blur-3xl" />

          <div className="relative grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">

            {/* Left */}
            <div>
              <div className="mb-5 inline-flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-emerald-600 dark:text-emerald-400">
                <span className="h-px w-8 bg-emerald-500" />
                My Approach
              </div>

              <h2 className="max-w-xl text-3xl font-bold tracking-tight sm:text-4xl">
                Thoughtful development.
                <br />
                <span className="text-emerald-600 dark:text-emerald-400">
                  Meaningful results.
                </span>
              </h2>

              <p className="mt-5 max-w-lg text-sm leading-7 text-gray-600 dark:text-gray-400">
                I focus on building digital products that are not only visually
                polished, but also reliable, maintainable, responsive, and
                practical for real-world use.
              </p>

              {/* Mini stats */}
              <div className="mt-8 flex flex-wrap gap-6">
                <div>
                  <p className="text-2xl font-bold">150+</p>
                  <p className="mt-1 text-xs text-gray-500 dark:text-gray-500">
                    Service Areas
                  </p>
                </div>

                <div className="h-10 w-px bg-gray-200 dark:bg-emerald-900/50" />

                <div>
                  <p className="text-2xl font-bold">100%</p>
                  <p className="mt-1 text-xs text-gray-500 dark:text-gray-500">
                    Responsive
                  </p>
                </div>
              </div>
            </div>

            {/* Right */}
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  icon: FiCode,
                  title: "Clean Code",
                  text: "Readable, structured and maintainable development.",
                },
                {
                  icon: FiZap,
                  title: "Performance",
                  text: "Fast experiences with performance in mind.",
                },
                {
                  icon: FiShield,
                  title: "Reliable",
                  text: "Stable architecture designed for real usage.",
                },
                {
                  icon: FiLayers,
                  title: "Scalable",
                  text: "Flexible foundations that can grow with your project.",
                },
              ].map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    initial={{
                      opacity: 0,
                      y: 20,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.45,
                      delay: index * 0.1,
                    }}
                    whileHover={{
                      y: -4,
                    }}
                    className="group rounded-2xl border border-emerald-200/60 bg-white/70 p-5 transition-all duration-300 hover:border-emerald-400/60 hover:shadow-lg hover:shadow-emerald-500/5 dark:border-emerald-900/50 dark:bg-[#0A1C18]/70 dark:hover:border-emerald-500/40"
                  >
                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600 transition-transform duration-300 group-hover:scale-110 dark:bg-emerald-400/10 dark:text-emerald-400">
                      <Icon size={19} />
                    </div>

                    <h3 className="font-semibold">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-xs leading-6 text-gray-500 dark:text-gray-400">
                      {item.text}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.section>

        {/* Bottom CTA */}
       
      </div>
    </main>
  );
}


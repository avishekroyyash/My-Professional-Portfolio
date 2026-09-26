
"use client";

import { motion } from "framer-motion";
import {
  FiCode,
  FiMonitor,
  FiServer,
  FiDatabase,
  FiTool,
  FiLayers,
  FiCheckCircle,
  FiArrowUpRight,
} from "react-icons/fi";

const skillCategories = [
  {
    icon: FiCode,
    number: "01",
    title: "Programming",
    description:
      "Core programming languages I use for development, logical thinking, and problem solving.",
    skills: ["JavaScript", "C", "C++"],
  },
  {
    icon: FiMonitor,
    number: "02",
    title: "Frontend Development",
    description:
      "Building responsive, accessible, and modern user interfaces using component-based architecture.",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React.js",
      "Next.js",
      "Tailwind CSS",
    ],
  },
  {
    icon: FiServer,
    number: "03",
    title: "Backend Development",
    description:
      "Developing server-side applications, REST APIs, authentication systems, and backend logic.",
    skills: ["Node.js", "Express.js", "REST API"],
  },
  {
    icon: FiDatabase,
    number: "04",
    title: "Database",
    description:
      "Working with application data, database operations, and structured backend workflows.",
    skills: ["MongoDB", "CRUD Operations"],
  },
  {
    icon: FiLayers,
    number: "05",
    title: "Libraries & Services",
    description:
      "Using modern libraries and third-party services to extend application functionality.",
    skills: [
      "React Router",
      "Recharts",
      "HeroUI",
      "DaisyUI",
      "Better Auth",
      "Stripe",
    ],
  },
  {
    icon: FiTool,
    number: "06",
    title: "Development Tools",
    description:
      "Tools I use throughout the development lifecycle, from coding and testing to deployment.",
    skills: ["Git", "GitHub", "VS Code", "Postman", "Vercel"],
  },
];

const additionalSkills = [
  "Responsive Design",
  "Authentication",
  "API Integration",
  "CRUD Operations",
  "Git & GitHub",
  "Problem Solving",
];

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardAnimation = {
  hidden: {
    opacity: 0,
    y: 25,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export default function SkillsPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#F5FBF8] text-gray-900 dark:bg-[#020B09] dark:text-white">
      {/* =====================================================
          HERO SECTION
      ====================================================== */}
      <section className="relative overflow-hidden border-b border-emerald-900/10 dark:border-emerald-400/10">
        {/* Background Decorations */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-40 -top-40 h-96 w-96 rounded-full bg-emerald-400/10 blur-3xl dark:bg-emerald-500/10" />

          <div className="absolute -right-40 top-20 h-96 w-96 rounded-full bg-green-400/10 blur-3xl dark:bg-green-500/10" />

          <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-300/5 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-10 lg:py-28">
          <motion.div
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
            }}
            className="max-w-3xl"
          >
            {/* Eyebrow */}
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-emerald-500" />

              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-600 dark:text-emerald-400">
                Technical Expertise
              </p>
            </div>

            {/* Heading */}
            <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Technologies I use to{" "}
              <span className="text-emerald-600 dark:text-emerald-400">
                build the web.
              </span>
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-2xl text-base leading-8 text-gray-600 dark:text-gray-400 sm:text-lg">
              A practical collection of technologies, tools, and development
              practices I use to create reliable, responsive, and
              user-focused web applications.
            </p>

            {/* Stats */}
            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-5">
              {/* Stat 01 */}
              <div>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  06
                </p>

                <p className="mt-1 text-xs uppercase tracking-wider text-gray-500 dark:text-gray-500">
                  Skill Areas
                </p>
              </div>

              <div className="hidden h-10 w-px bg-gray-200 dark:bg-white/10 sm:block" />

              {/* Stat 02 */}
              <div>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  20+
                </p>

                <p className="mt-1 text-xs uppercase tracking-wider text-gray-500 dark:text-gray-500">
                  Technologies
                </p>
              </div>

              <div className="hidden h-10 w-px bg-gray-200 dark:bg-white/10 sm:block" />

              {/* Stat 03 */}
              <div>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  ∞
                </p>

                <p className="mt-1 text-xs uppercase tracking-wider text-gray-500 dark:text-gray-500">
                  Learning Mindset
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          SKILLS SECTION
      ====================================================== */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
        {/* Section Header */}
        <motion.div
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
            amount: 0.2,
          }}
          transition={{
            duration: 0.5,
          }}
          className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end"
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-600 dark:text-emerald-400">
              My Toolkit
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Skills & Technologies
            </h2>
          </div>

          <p className="max-w-md text-sm leading-6 text-gray-500 dark:text-gray-500 sm:text-right">
            Technologies I have worked with across personal projects,
            learning, and practical development.
          </p>
        </motion.div>

        {/* Skill Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.1,
          }}
          className="grid gap-5 md:grid-cols-2 lg:grid-cols-3"
        >
          {skillCategories.map((category) => {
            const Icon = category.icon;

            return (
              <motion.article
                key={category.title}
                variants={cardAnimation}
                whileHover={{
                  y: -6,
                }}
                transition={{
                  duration: 0.25,
                }}
                className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:border-emerald-300 hover:shadow-xl hover:shadow-emerald-900/5 dark:border-white/10 dark:bg-[#06120F] dark:hover:border-emerald-400/30 dark:hover:shadow-none"
              >
                {/* Top Hover Accent */}
                <div className="absolute left-0 top-0 h-1 w-0 bg-emerald-500 transition-all duration-300 group-hover:w-full" />

                {/* Card Header */}
                <div className="flex items-start justify-between">
                  {/* Icon */}
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-emerald-500/10 bg-emerald-500/10 text-xl text-emerald-600 dark:border-emerald-400/10 dark:bg-emerald-400/10 dark:text-emerald-400">
                    <Icon />
                  </div>

                  {/* Number */}
                  <span className="text-xs font-semibold tracking-widest text-gray-300 dark:text-white/20">
                    {category.number}
                  </span>
                </div>

                {/* Title */}
                <h3 className="mt-6 text-lg font-bold">
                  {category.title}
                </h3>

                {/* Description */}
                <p className="mt-2 min-h-[72px] text-sm leading-6 text-gray-500 dark:text-gray-400">
                  {category.description}
                </p>

                {/* Divider */}
                <div className="my-5 h-px bg-gray-100 dark:bg-white/10" />

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, index) => (
                    <motion.span
                      key={skill}
                      initial={{
                        opacity: 0,
                        scale: 0.95,
                      }}
                      whileInView={{
                        opacity: 1,
                        scale: 1,
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        duration: 0.25,
                        delay: index * 0.04,
                      }}
                      className="rounded-md border border-gray-200 bg-gray-50 px-2.5 py-1.5 text-xs font-medium text-gray-700 transition-all duration-200 hover:border-emerald-300 hover:bg-emerald-50 hover:text-emerald-700 dark:border-white/10 dark:bg-white/[0.03] dark:text-gray-300 dark:hover:border-emerald-400/30 dark:hover:bg-emerald-400/5 dark:hover:text-emerald-400"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>

                {/* Hover Arrow */}
                <div className="absolute bottom-5 right-5 opacity-0 transition-all duration-300 group-hover:opacity-100">
                  <FiArrowUpRight className="text-emerald-500" />
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </section>

      {/* =====================================================
          ADDITIONAL SKILLS
      ====================================================== */}
      <section className="border-y border-gray-200 bg-white dark:border-white/10 dark:bg-[#03100D]">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
          {/* Header */}
          <motion.div
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
              amount: 0.2,
            }}
            transition={{
              duration: 0.5,
            }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-600 dark:text-emerald-400">
              Development Practices
            </p>

            <div className="mt-3 flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Beyond the{" "}
                <span className="text-emerald-600 dark:text-emerald-400">
                  stack.
                </span>
              </h2>

              <p className="max-w-lg text-sm leading-6 text-gray-500 dark:text-gray-500 md:text-right">
                Technical skills are only part of development. I also focus
                on building maintainable applications and solving problems
                effectively.
              </p>
            </div>
          </motion.div>

          {/* Additional Skill Grid */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3"
          >
            {additionalSkills.map((skill) => (
              <motion.div
                key={skill}
                variants={cardAnimation}
                whileHover={{
                  x: 4,
                }}
                transition={{
                  duration: 0.2,
                }}
                className="group flex items-center gap-3 rounded-xl border border-gray-200 bg-gray-50 px-5 py-4 transition-all duration-300 hover:border-emerald-300 hover:bg-emerald-50 dark:border-white/10 dark:bg-white/[0.02] dark:hover:border-emerald-400/30 dark:hover:bg-emerald-400/5"
              >
                {/* Icon */}
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-600 dark:bg-emerald-400/10 dark:text-emerald-400">
                  <FiCheckCircle size={16} />
                </div>

                {/* Text */}
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {skill}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          FINAL STATEMENT
      ====================================================== */}

    </main>
  );
}



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
  FiCpu,
  FiGitBranch,
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

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 35,
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

export default function SkillsPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#F4FFF9] text-gray-900 transition-colors duration-500 dark:bg-[#020908] dark:text-white">

      {/* =====================================================
          GLOBAL BACKGROUND
      ====================================================== */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-40 dark:opacity-[0.08]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(16,185,129,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(16,185,129,0.08) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        {/* Animated Glow */}
        <motion.div
          animate={{
            x: [0, 35, 0],
            y: [0, 20, 0],
            scale: [1, 1.12, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-emerald-400/10 blur-3xl dark:bg-emerald-500/10"
        />

        <motion.div
          animate={{
            x: [0, -30, 0],
            y: [0, 25, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-40 top-40 h-[500px] w-[500px] rounded-full bg-teal-400/10 blur-3xl dark:bg-teal-500/10"
        />
      </div>

      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="relative overflow-hidden border-b border-emerald-900/10 dark:border-emerald-400/10">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-10 lg:py-28">

          <div className="grid items-center gap-14 lg:grid-cols-[1.2fr_0.8fr]">

            {/* Left Content */}
            <motion.div
              initial={{
                opacity: 0,
                x: -30,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
            >

              {/* Label */}
              <motion.div
                initial={{
                  opacity: 0,
                  y: 10,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.15,
                }}
                className="mb-6 flex items-center gap-3"
              >
                <span className="h-px w-10 bg-emerald-500" />

                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-600 dark:text-emerald-400">
                  Technical Expertise
                </span>
              </motion.div>

              {/* Heading */}
              <h1 className="max-w-4xl text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
                The tools behind
                <br />
                <span className="relative text-emerald-600 dark:text-emerald-400">
                  the things I build.
                  
                  <motion.span
                    initial={{
                      width: 0,
                    }}
                    animate={{
                      width: "100%",
                    }}
                    transition={{
                      delay: 0.9,
                      duration: 0.8,
                    }}
                    className="absolute -bottom-2 left-0 h-[3px] rounded-full bg-emerald-500/60"
                  />
                </span>
              </h1>

              <p className="mt-7 max-w-2xl text-base leading-8 text-gray-600 dark:text-gray-400 sm:text-lg">
                A practical collection of technologies, tools, and development
                practices I use to create reliable, responsive, and
                user-focused web applications.
              </p>

              {/* Stats */}
              <div className="mt-10 flex flex-wrap items-center gap-7">

                <div>
                  <p className="text-2xl font-bold">10+</p>
                  <p className="mt-1 text-[11px] uppercase tracking-wider text-gray-500">
                    Skill Areas
                  </p>
                </div>

                <div className="hidden h-10 w-px bg-gray-200 dark:bg-white/10 sm:block" />

                <div>
                  <p className="text-2xl font-bold">20+</p>
                  <p className="mt-1 text-[11px] uppercase tracking-wider text-gray-500">
                    Technologies
                  </p>
                </div>

                <div className="hidden h-10 w-px bg-gray-200 dark:bg-white/10 sm:block" />

                <div>
                  <p className="text-2xl font-bold">∞</p>
                  <p className="mt-1 text-[11px] uppercase tracking-wider text-gray-500">
                    Learning
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Right Visual */}
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.85,
                rotate: 4,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                rotate: 0,
              }}
              transition={{
                duration: 0.9,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative mx-auto hidden h-[330px] w-[330px] lg:block"
            >

              {/* Outer Ring */}
              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 25,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-0 rounded-full border border-dashed border-emerald-500/20"
              />

              {/* Middle Ring */}
              <motion.div
                animate={{
                  rotate: -360,
                }}
                transition={{
                  duration: 18,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-8 rounded-full border border-emerald-500/10"
              />

              {/* Center */}
              <div className="absolute inset-16 flex flex-col items-center justify-center rounded-full border border-emerald-300/30 bg-white/70 shadow-2xl shadow-emerald-500/10 backdrop-blur-xl dark:border-emerald-500/20 dark:bg-[#071512]/80">

                <motion.div
                  animate={{
                    y: [0, -8, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
                >
                  <FiCpu size={32} />
                </motion.div>

                <p className="mt-4 text-sm font-semibold">
                  Full-Stack
                </p>

                <p className="mt-1 text-xs text-gray-500 dark:text-gray-500">
                  Development
                </p>
              </div>

              {/* Floating Badge 1 */}
              <motion.div
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute left-0 top-16 rounded-xl border border-emerald-200 bg-white/80 px-3 py-2 text-xs font-medium shadow-lg backdrop-blur-md dark:border-emerald-900/50 dark:bg-[#071512]/80"
              >
                React.js
              </motion.div>

              {/* Floating Badge 2 */}
              <motion.div
                animate={{
                  y: [0, 8, 0],
                }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute bottom-16 right-0 rounded-xl border border-emerald-200 bg-white/80 px-3 py-2 text-xs font-medium shadow-lg backdrop-blur-md dark:border-emerald-900/50 dark:bg-[#071512]/80"
              >
                Node.js
              </motion.div>

              {/* Floating Badge 3 */}
              <motion.div
                animate={{
                  x: [0, 7, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute right-3 top-5 rounded-xl border border-emerald-200 bg-white/80 px-3 py-2 text-xs font-medium shadow-lg backdrop-blur-md dark:border-emerald-900/50 dark:bg-[#071512]/80"
              >
                Next.js
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =====================================================
          SKILLS
      ====================================================== */}
      <section className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-24">

        {/* Section Header */}
        <motion.div
          initial={{
            opacity: 0,
            y: 25,
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
            duration: 0.6,
          }}
          className="mb-12 flex flex-col justify-between gap-5 sm:flex-row sm:items-end"
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
            Technologies I use across frontend, backend, database,
            authentication, APIs, and modern development workflows.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
            amount: 0.08,
          }}
          className="grid gap-5 md:grid-cols-2 lg:grid-cols-3"
        >
          {skillCategories.map((category) => {
            const Icon = category.icon;

            return (
              <motion.article
                key={category.title}
                variants={cardVariants}
                whileHover={{
                  y: -8,
                  transition: {
                    duration: 0.25,
                  },
                }}
                className="group relative overflow-hidden rounded-3xl border border-emerald-200/70 bg-white/70 p-6 shadow-sm backdrop-blur-xl transition-all duration-500 hover:border-emerald-400/70 hover:shadow-xl hover:shadow-emerald-500/10 dark:border-emerald-900/50 dark:bg-[#071512]/75 dark:hover:border-emerald-500/40 dark:hover:shadow-emerald-500/5 sm:p-7"
              >

                {/* Animated top line */}
                <motion.div
                  initial={{
                    scaleX: 0,
                  }}
                  whileInView={{
                    scaleX: 1,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.8,
                  }}
                  className="absolute left-0 right-0 top-0 h-[2px] origin-left bg-gradient-to-r from-transparent via-emerald-500 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />

                {/* Hover Glow */}
                <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-emerald-400/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

                {/* Header */}
                <div className="relative flex items-start justify-between">

                  <motion.div
                    whileHover={{
                      rotate: 6,
                      scale: 1.08,
                    }}
                    transition={{
                      duration: 0.2,
                    }}
                    className="flex h-14 w-14 items-center justify-center rounded-2xl border border-emerald-200 bg-emerald-50 text-emerald-600 transition-colors duration-300 group-hover:bg-emerald-100 dark:border-emerald-900/70 dark:bg-emerald-400/10 dark:text-emerald-400 dark:group-hover:bg-emerald-400/15"
                  >
                    <Icon size={25} />
                  </motion.div>

                  <span className="font-mono text-sm font-semibold tracking-widest text-gray-300 transition-colors duration-300 group-hover:text-emerald-500 dark:text-white/10 dark:group-hover:text-emerald-700">
                    {category.number}
                  </span>
                </div>

                {/* Title */}
                <h3 className="relative mt-7 text-xl font-bold tracking-tight">
                  {category.title}
                </h3>

                {/* Description */}
                <p className="relative mt-3 min-h-[72px] text-sm leading-6 text-gray-500 dark:text-gray-400">
                  {category.description}
                </p>

                {/* Divider */}
                <div className="my-6 h-px bg-gray-200 dark:bg-white/10" />

                {/* Technologies */}
                <div className="relative flex flex-wrap gap-2">
                  {category.skills.map((skill, index) => (
                    <motion.span
                      key={skill}
                      initial={{
                        opacity: 0,
                        scale: 0.9,
                      }}
                      whileInView={{
                        opacity: 1,
                        scale: 1,
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        duration: 0.3,
                        delay: index * 0.06,
                      }}
                      whileHover={{
                        y: -2,
                        scale: 1.04,
                      }}
                      className="cursor-default rounded-lg border border-gray-200 bg-gray-50 px-3 py-1.5 text-xs font-medium text-gray-700 transition-colors duration-200 hover:border-emerald-300 hover:bg-emerald-50 hover:text-emerald-700 dark:border-white/10 dark:bg-white/[0.03] dark:text-gray-300 dark:hover:border-emerald-400/30 dark:hover:bg-emerald-400/5 dark:hover:text-emerald-400"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>

                {/* Bottom Arrow */}
                <motion.div
                  initial={{
                    opacity: 0,
                    x: -5,
                  }}
                  whileHover={{
                    opacity: 1,
                    x: 0,
                  }}
                  className="absolute bottom-6 right-6 text-emerald-500"
                >
                  <FiArrowUpRight size={18} />
                </motion.div>
              </motion.article>
            );
          })}
        </motion.div>
      </section>

      {/* =====================================================
          DEVELOPMENT PRACTICES
      ====================================================== */}
      <section className="relative border-y border-emerald-900/10 bg-white/60 dark:border-white/10 dark:bg-[#03100D]/70">

        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-24">

          <motion.div
            initial={{
              opacity: 0,
              y: 25,
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
              duration: 0.6,
            }}
          >
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-emerald-500" />

              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-600 dark:text-emerald-400">
                Development Practices
              </p>
            </div>

            <div className="mt-4 flex flex-col justify-between gap-5 md:flex-row md:items-end">

              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Beyond the{" "}
                <span className="text-emerald-600 dark:text-emerald-400">
                  stack.
                </span>
              </h2>

              <p className="max-w-lg text-sm leading-6 text-gray-500 dark:text-gray-500 md:text-right">
                Technical skills are only part of development. I also focus on
                writing maintainable code, integrating systems, and solving
                problems effectively.
              </p>
            </div>
          </motion.div>

          {/* Practice Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{
              once: true,
              amount: 0.15,
            }}
            className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          >
            {additionalSkills.map((skill, index) => (
              <motion.div
                key={skill}
                variants={cardVariants}
                whileHover={{
                  y: -4,
                  x: 2,
                }}
                className="group flex items-center gap-4 rounded-2xl border border-gray-200 bg-gray-50/80 px-5 py-5 transition-all duration-300 hover:border-emerald-300 hover:bg-emerald-50/70 hover:shadow-lg hover:shadow-emerald-500/5 dark:border-white/10 dark:bg-white/[0.02] dark:hover:border-emerald-400/30 dark:hover:bg-emerald-400/5"
              >

                <motion.div
                  whileHover={{
                    scale: 1.1,
                    rotate: 5,
                  }}
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600 dark:bg-emerald-400/10 dark:text-emerald-400"
                >
                  <FiCheckCircle size={18} />
                </motion.div>

                <div>
                  <p className="text-sm font-semibold">
                    {skill}
                  </p>

                  <p className="mt-1 text-xs text-gray-500 dark:text-gray-500">
                    Practical development skill
                  </p>
                </div>

                <FiArrowUpRight
                  className="ml-auto text-gray-300 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100 dark:text-gray-600"
                  size={17}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>


    </main>
  );
}


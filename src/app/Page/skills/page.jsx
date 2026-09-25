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
} from "react-icons/fi";

const skillCategories = [
  {
    icon: FiCode,
    title: "Programming",
    description: "Languages I use for development and problem solving.",
    skills: ["JavaScript", "C", "C++"],
  },
  {
    icon: FiMonitor,
    title: "Frontend",
    description: "Building responsive and modern user interfaces.",
    skills: [
      "HTML5",
      "CSS3",
      "React.js",
      "Next.js",
      "Tailwind CSS",
    ],
  },
  {
    icon: FiServer,
    title: "Backend",
    description: "Developing APIs and server-side applications.",
    skills: ["Node.js", "Express.js", "REST API"],
  },
  {
    icon: FiDatabase,
    title: "Database",
    description: "Working with data storage and database operations.",
    skills: ["MongoDB", "CRUD Operations"],
  },
  {
    icon: FiLayers,
    title: "Libraries & Tools",
    description: "Tools and libraries I use in modern web projects.",
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
    title: "Development Tools",
    description: "Tools I use to build, test and deploy applications.",
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "Postman",
      "Vercel",
    ],
  },
];

const additionalSkills = [
  "Responsive Design",
  "Authentication",
  "API Integration",
  "CRUD",
  "Git & GitHub",
  "Problem Solving",
];

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardAnimation = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: "easeOut",
    },
  },
};

export default function SkillsPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#EFFFF7] text-gray-900 transition-colors duration-300 dark:bg-[#020B0A] dark:text-white">

      {/* =========================
          HEADER
      ========================== */}
      <section className="relative border-b border-emerald-600/10 dark:border-emerald-400/10">
        {/* Background glow */}
        <motion.div
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="pointer-events-none absolute -left-32 -top-32 h-72 w-72 rounded-full bg-emerald-400/15 blur-3xl dark:bg-emerald-500/10"
        />

        <motion.div
          animate={{
            x: [0, -30, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="pointer-events-none absolute -right-32 top-10 h-80 w-80 rounded-full bg-green-400/15 blur-3xl dark:bg-green-500/10"
        />

        <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600 dark:text-emerald-400">
              Technical Skills
            </p>

            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Tools I use to{" "}
              <span className="text-emerald-600 dark:text-emerald-400">
                build products.
              </span>
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-7 text-gray-600 dark:text-gray-400">
              A practical toolkit built around modern web development,
              problem solving, and continuous learning.
            </p>
          </motion.div>
        </div>
      </section>

      {/* =========================
          SKILL CARDS
      ========================== */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
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
              <motion.div
                key={category.title}
                variants={cardAnimation}
                whileHover={{
                  y: -7,
                  transition: {
                    duration: 0.25,
                  },
                }}
                className="group rounded-2xl border border-emerald-600/15 bg-white/70 p-6 shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-emerald-500/40 hover:shadow-lg hover:shadow-emerald-900/5 dark:border-emerald-400/10 dark:bg-[#061511]/70 dark:hover:border-emerald-400/30 dark:hover:shadow-none"
              >
                {/* Icon */}
                <motion.div
                  whileHover={{
                    scale: 1.1,
                    rotate: 3,
                  }}
                  transition={{ duration: 0.2 }}
                  className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 text-xl text-emerald-600 dark:bg-emerald-400/10 dark:text-emerald-400"
                >
                  <Icon />
                </motion.div>

                {/* Title */}
                <h2 className="mt-5 text-lg font-bold">
                  {category.title}
                </h2>

                {/* Description */}
                <p className="mt-2 text-sm leading-6 text-gray-500 dark:text-gray-500">
                  {category.description}
                </p>

                {/* Skills */}
                <div className="mt-5 flex flex-wrap gap-2">
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
                        delay: index * 0.05,
                      }}
                      className="rounded-lg border border-emerald-600/10 bg-emerald-500/5 px-3 py-1.5 text-xs font-medium text-gray-700 transition-colors hover:border-emerald-500/30 hover:text-emerald-600 dark:border-emerald-400/10 dark:bg-emerald-400/5 dark:text-gray-300 dark:hover:border-emerald-400/30 dark:hover:text-emerald-400"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      {/* =========================
          ADDITIONAL SKILLS
      ========================== */}
      <section className="border-y border-emerald-600/10 bg-white/40 dark:border-emerald-400/10 dark:bg-[#03110E]/50">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600 dark:text-emerald-400">
              Additional Skills
            </p>

            <h2 className="mt-3 text-2xl font-bold sm:text-3xl">
              Beyond the{" "}
              <span className="text-emerald-600 dark:text-emerald-400">
                technologies
              </span>
            </h2>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            className="mt-8 flex flex-wrap gap-3"
          >
            {additionalSkills.map((skill) => (
              <motion.div
                key={skill}
                variants={cardAnimation}
                whileHover={{
                  scale: 1.04,
                }}
                className="flex items-center gap-2 rounded-xl border border-emerald-600/15 bg-white/70 px-4 py-3 text-sm font-medium text-gray-700 dark:border-emerald-400/10 dark:bg-[#061511]/70 dark:text-gray-300"
              >
                <FiCheckCircle className="text-emerald-600 dark:text-emerald-400" />

                {skill}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* =========================
          BOTTOM STATEMENT
      ========================== */}
      <section className="mx-auto max-w-5xl px-5 py-20 text-center sm:px-8 lg:py-24">
        <motion.div
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
            amount: 0.3,
          }}
          transition={{
            duration: 0.7,
          }}
        >
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500/10 text-2xl text-emerald-600 dark:bg-emerald-400/10 dark:text-emerald-400">
            <FiCode />
          </div>

          <h2 className="mt-6 text-2xl font-bold sm:text-3xl">
            Always learning. Always building.
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-600 dark:text-gray-400">
            I believe strong developers are built through consistent
            practice, real-world projects, and a willingness to keep
            learning new technologies.
          </p>
        </motion.div>
      </section>
    </main>
  );
}
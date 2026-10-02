
"use client";

import { motion } from "framer-motion";
import {
  FiAward,
  FiBookOpen,
  FiCode,
  FiFileText,
  FiGlobe,
  FiLayers,
} from "react-icons/fi";

const achievements = [
  {
    icon: FiLayers,
    title: "Full Stack Development",
    organization: "Web Development & Personal Projects",
    year: "2025 — Present",
    description:
      "Building full-stack web applications using modern frontend and backend technologies, with practical experience in authentication, APIs, databases, and responsive UI development.",
    tags: ["React", "Next.js", "Node.js", "MongoDB"],
  },
  {
    icon: FiFileText,
    title: "AI/ML Research",
    organization: "Academic Research",
    year: "2026",
    description:
      "Working on an undergraduate research project focused on machine learning-based prediction of Bangladeshi students' intention to pursue higher education abroad.",
    tags: ["Machine Learning", "Research", "Data Analysis"],
  },
  {
    icon: FiBookOpen,
    title: "Computer Science Education",
    organization: "Metropolitan University",
    year: "2023 — Present",
    description:
      "Pursuing a Bachelor's degree in Computer Science & Engineering while developing skills in software engineering, web development, and artificial intelligence.",
    tags: ["CSE", "Software Engineering", "AI/ML"],
  },
  {
    icon: FiGlobe,
    title: "Digital Marketing",
    organization: "E-Learning & Earning",
    year: "2024 — Present",
    description:
      "Developing practical digital marketing skills with a focus on online advertising, search engine optimization, social media management, and audience growth.",
    tags: ["Facebook Ads", "Google Ads", "SEO", "Social Media"],
  },

    {
    icon: FiCode,
    title: "Competitive Programming",
    organization: "Problem Solving & Programming",
    year: "Ongoing",
    description:
      "Continuously improving algorithmic thinking and problem-solving skills through programming practice and coding challenges.",
    tags: ["C", "C++", "JavaScript", "Problem Solving"],
  },
];

const areas = [
  "Software Development",
  "Problem Solving",
  "Web Development",
  "AI & Machine Learning",
  "Academic Research",
  "Digital Marketing",
];

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 25,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

export default function AchievementsPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#EFFFF7] px-5 py-24 text-gray-900 transition-colors duration-300 dark:bg-[#020B0A] dark:text-white sm:px-8 lg:px-12">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-emerald-400/10 blur-3xl dark:bg-emerald-400/5" />
        <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-emerald-500/10 blur-3xl dark:bg-emerald-500/5" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        {/* ================= HEADER ================= */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <p className="mb-3 font-mono text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600 dark:text-emerald-400">
            Achievements
          </p>

          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Milestones &{" "}
            <span className="text-emerald-600 dark:text-emerald-400">
              Achievements
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-600 dark:text-gray-400 sm:text-base">
            A collection of academic, technical, and professional milestones
            that reflect my continuous growth in computer science and software
            engineering.
          </p>
        </motion.div>

        {/* ================= ACHIEVEMENT CARDS ================= */}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="grid gap-5 md:grid-cols-2 lg:grid-cols-3"
        >
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;

            return (
              <motion.article
                key={achievement.title}
                variants={cardVariants}
                whileHover={{ y: -5 }}
                className="group rounded-2xl border border-emerald-200/70 bg-white/70 p-6 shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-emerald-400/70 hover:shadow-lg dark:border-emerald-900/50 dark:bg-[#071512]/70 dark:hover:border-emerald-500/50"
              >
                {/* Top */}
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600 transition-transform duration-300 group-hover:scale-105 dark:bg-emerald-400/10 dark:text-emerald-400">
                    <Icon size={22} />
                  </div>

                  <span className="font-mono text-xs text-gray-400 dark:text-gray-600">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Year */}
                <p className="mt-6 font-mono text-xs uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                  {achievement.year}
                </p>

                {/* Title */}
                <h2 className="mt-2 text-xl font-semibold">
                  {achievement.title}
                </h2>

                {/* Organization */}
                <p className="mt-1 text-sm font-medium text-gray-500 dark:text-gray-400">
                  {achievement.organization}
                </p>

                {/* Description */}
                <p className="mt-4 text-sm leading-6 text-gray-600 dark:text-gray-400">
                  {achievement.description}
                </p>

                {/* Tags */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {achievement.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-lg bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-700 dark:bg-emerald-400/5 dark:text-emerald-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </motion.div>

        {/* ================= AREAS OF GROWTH ================= */}

        <motion.section
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 border-t border-emerald-200/70 pt-14 dark:border-emerald-900/50"
        >
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="font-mono text-sm uppercase tracking-[0.2em] text-emerald-600 dark:text-emerald-400">
                Growth
              </p>

              <h2 className="mt-3 text-2xl font-bold sm:text-3xl">
                Areas I&apos;m Building Expertise In
              </h2>

              <p className="mt-4 max-w-lg text-sm leading-7 text-gray-600 dark:text-gray-400">
                My current focus is on developing practical engineering skills
                while strengthening my academic, research, and digital
                expertise.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {areas.map((area, index) => (
                <motion.div
                  key={area}
                  initial={{ opacity: 0, x: 15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.07,
                  }}
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-3 rounded-xl border border-emerald-200/60 bg-white/60 p-4 transition-colors duration-300 hover:border-emerald-400/60 dark:border-emerald-900/50 dark:bg-[#071512]/60 dark:hover:border-emerald-500/40"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-emerald-100 text-sm font-semibold text-emerald-600 dark:bg-emerald-400/10 dark:text-emerald-400">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="text-sm font-medium">{area}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* ================= CERTIFICATION / AWARDS ================= */}

    

      </div>
    </main>
  );
}

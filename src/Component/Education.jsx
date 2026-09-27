
"use client";

import { motion } from "framer-motion";
import {
  FiArrowUpRight,
  FiBookOpen,
  FiCpu,
  FiCheckCircle,
  FiCode,
  FiDatabase,
  FiFileText,
  FiLayers,
  FiSearch,
  FiTrendingUp,
} from "react-icons/fi";

const researchInterests = [
  "Machine Learning",
  "Artificial Intelligence",
  "Educational Data Mining",
  "Predictive Modeling",
  "Data Analysis",
  "Student Behavior & Decision Making",
];

const researchSkills = [
  "Python",
  "Machine Learning",
  "Data Preprocessing",
  "Exploratory Data Analysis",
  "Model Evaluation",
  "Data Visualization",
];

const educationHighlights = [
  "Computer Science & Engineering",
  "Software Development",
  "Artificial Intelligence & Machine Learning",
  "Web Application Development",
];

const researchProcess = [
  {
    number: "01",
    title: "Data Collection",
    description:
      "Collecting relevant student-level information and preparing structured research datasets.",
    icon: FiDatabase,
  },
  {
    number: "02",
    title: "Data Analysis",
    description:
      "Exploring patterns, relationships, and meaningful variables through statistical analysis.",
    icon: FiSearch,
  },
  {
    number: "03",
    title: "Model Development",
    description:
      "Applying machine learning techniques to develop predictive models from the collected data.",
    icon: FiCpu,
  },
  {
    number: "04",
    title: "Model Evaluation",
    description:
      "Comparing model performance using appropriate evaluation techniques and metrics.",
    icon: FiTrendingUp,
  },
];

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

export default function EducationPage() {
  return (
    <main className="relative min-h-screen border border-slate-200  dark:border-white/10  overflow-hidden bg-[#F7FFFC] text-slate-900 transition-colors duration-300 dark:bg-[#030908] dark:text-white">
      {/* =========================================================
          BACKGROUND
      ========================================================= */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-[-180px] h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-emerald-400/10 blur-[120px] dark:bg-emerald-500/[0.07]" />

        <div className="absolute -right-48 top-[35%] h-[450px] w-[450px] rounded-full bg-teal-400/10 blur-[120px] dark:bg-teal-500/[0.04]" />

        <div className="absolute -left-48 bottom-[10%] h-[450px] w-[450px] rounded-full bg-emerald-400/10 blur-[120px] dark:bg-emerald-500/[0.04]" />

        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.025] dark:opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(#10b981 1px, transparent 1px), linear-gradient(90deg, #10b981 1px, transparent 1px)",
            backgroundSize: "42px 42px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
        {/* =========================================================
            HERO
        ========================================================= */}
        <motion.header
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="mx-auto max-w-4xl text-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/70 px-4 py-2 shadow-sm backdrop-blur-md dark:border-emerald-500/20 dark:bg-white/[0.03]"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>

            <span className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-emerald-700 dark:text-emerald-400">
              Education • Research • Technology
            </span>
          </motion.div>

          {/* Heading */}
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Academic Journey &
            <span className="block bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 bg-clip-text text-transparent">
              Research Interests
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-sm leading-7 text-slate-600 dark:text-slate-400 sm:text-base sm:leading-8">
            My academic journey combines computer science, software
            engineering, and data-driven research, with a growing focus on
            artificial intelligence, machine learning, and predictive
            analytics.
          </p>

          {/* Hero Stats */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
            className="mx-auto mt-10 grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-4"
          >
            {[
              ["2023", "Started Degree"],
              ["CSE", "Academic Field"],
              ["AI/ML", "Research Focus"],
              ["Ongoing", "Research Status"],
            ].map(([value, label]) => (
              <motion.div
                key={label}
                variants={fadeUp}
                className="rounded-2xl border border-slate-200 bg-white/70 px-4 py-4 shadow-sm backdrop-blur-sm dark:border-white/10 dark:bg-white/[0.03]"
              >
                <p className="text-lg font-bold text-emerald-600 dark:text-emerald-400">
                  {value}
                </p>

                <p className="mt-1 text-[11px] font-medium uppercase tracking-wide text-slate-500">
                  {label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.header>

        {/* =========================================================
            EDUCATION
        ========================================================= */}
        <section className="mt-24">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="mb-8 flex items-end justify-between gap-5"
          >
            <div>
              <div className="mb-3 flex items-center gap-2 text-emerald-600 dark:text-emerald-400">
                <FiBookOpen size={16} />

                <span className="font-mono text-xs font-semibold uppercase tracking-[0.18em]">
                  Education
                </span>
              </div>

              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                Academic Background
              </h2>

              <p className="mt-2 max-w-2xl text-sm text-slate-500 dark:text-slate-400">
                Building a strong foundation in computer science while
                developing practical software and research skills.
              </p>
            </div>
          </motion.div>

          {/* Education Card */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className="group relative overflow-hidden rounded-3xl border border-emerald-200/70 bg-white/80 shadow-[0_20px_70px_-35px_rgba(16,185,129,0.35)] backdrop-blur-xl dark:border-emerald-500/15 dark:bg-white/[0.035]"
          >
            {/* Accent */}
            <div className="h-1 w-full bg-gradient-to-r from-emerald-500 via-teal-400 to-transparent" />

            <div className="p-6 sm:p-8 lg:p-10">
              <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
                <div className="flex gap-5">
                  {/* Icon */}
                  <div className="hidden h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-emerald-200 bg-emerald-50 text-emerald-600 shadow-sm sm:flex dark:border-emerald-500/20 dark:bg-emerald-500/10 dark:text-emerald-400">
                    <FiBookOpen size={24} />
                  </div>

                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 font-mono text-[11px] font-semibold uppercase tracking-wider text-emerald-700 dark:border-emerald-500/20 dark:bg-emerald-500/10 dark:text-emerald-400">
                        2023 — Present
                      </span>

                      <span className="rounded-full border border-slate-200 px-3 py-1 text-[11px] font-medium text-slate-500 dark:border-white/10 dark:text-slate-400">
                        Undergraduate
                      </span>
                    </div>

                    <h3 className="mt-4 text-xl font-bold leading-snug sm:text-2xl">
                      Bachelor of Science in Computer Science & Engineering
                    </h3>

                    <p className="mt-2 font-medium text-slate-600 dark:text-slate-300">
                      Metropolitan University, Sylhet
                    </p>
                  </div>
                </div>

                <span className="w-fit shrink-0 rounded-xl border border-emerald-300/60 bg-emerald-50 px-4 py-2 text-xs font-semibold text-emerald-700 dark:border-emerald-500/20 dark:bg-emerald-500/10 dark:text-emerald-400">
                  4th Year
                </span>
              </div>

              {/* Education details */}
              <div className="mt-8 grid gap-8 border-t border-slate-200 pt-8 dark:border-white/10 lg:grid-cols-[1.2fr_1fr]">
                <div>
                  <p className="text-sm font-semibold">
                    Academic Overview
                  </p>

                  <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-400">
                    Currently developing a strong foundation in computer
                    science while focusing on software engineering, web
                    development, artificial intelligence, machine learning,
                    and research-oriented problem solving.
                  </p>
                </div>

                <div>
                  <p className="text-sm font-semibold">
                    Academic Focus
                  </p>

                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    {educationHighlights.map((item) => (
                      <div
                        key={item}
                        className="flex items-start gap-2.5 rounded-xl border border-slate-200 bg-slate-50/70 p-3 text-xs font-medium text-slate-700 dark:border-white/10 dark:bg-white/[0.025] dark:text-slate-300"
                      >
                        <FiCheckCircle className="mt-0.5 shrink-0 text-emerald-500" />

                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* =========================================================
            RESEARCH
        ========================================================= */}
        <section className="mt-24">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="mb-8"
          >
            <div className="mb-3 flex items-center gap-2 text-emerald-600 dark:text-emerald-400">
              <FiSearch size={16} />

              <span className="font-mono text-xs font-semibold uppercase tracking-[0.18em]">
                Research
              </span>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                  Current Research
                </h2>

                <p className="mt-2 max-w-2xl text-sm text-slate-500 dark:text-slate-400">
                  Exploring how machine learning can support educational
                  decision-making and predictive analysis.
                </p>
              </div>

              <span className="w-fit rounded-full border border-emerald-300/60 bg-emerald-50 px-3 py-1.5 font-mono text-[11px] font-semibold uppercase tracking-wider text-emerald-700 dark:border-emerald-500/20 dark:bg-emerald-500/10 dark:text-emerald-400">
                Research in Progress
              </span>
            </div>
          </motion.div>

          {/* Research Card */}
          <motion.article
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.25 }}
            className="relative overflow-hidden rounded-3xl border border-emerald-300/60 bg-white shadow-[0_25px_80px_-45px_rgba(16,185,129,0.45)] dark:border-emerald-500/20 dark:bg-[#07110f]"
          >
            {/* Decorative glow */}
            <div className="pointer-events-none absolute -right-32 -top-32 h-72 w-72 rounded-full bg-emerald-400/10 blur-3xl" />

            <div className="relative p-6 sm:p-8 lg:p-10">
              {/* Header */}
              <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                <div className="flex gap-5">
                  <div className="hidden h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 sm:flex dark:bg-emerald-500/10 dark:text-emerald-400">
                    <FiFileText size={25} />
                  </div>

                  <div>
                    <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-600 dark:text-emerald-400">
                      Thesis Research
                    </p>

                    <h3 className="mt-3 max-w-4xl text-xl font-bold leading-snug sm:text-2xl lg:text-3xl">
                      Machine Learning-Based Prediction of Bangladeshi
                      Students&apos; Intention to Pursue Higher Education Abroad
                    </h3>
                  </div>
                </div>
              </div>

              {/* Research Details */}
              <div className="mt-10 grid gap-5 lg:grid-cols-2">
                <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-5 dark:border-white/10 dark:bg-white/[0.025]">
                  <div className="flex items-center gap-2">
                    <FiSearch className="text-emerald-500" />

                    <p className="text-sm font-semibold">
                      Research Focus
                    </p>
                  </div>

                  <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-400">
                    The research explores whether machine learning techniques
                    can be used to predict Bangladeshi students&apos;
                    intention to pursue higher education abroad, with a
                    comparative focus on HSC and Bachelor&apos;s students.
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-5 dark:border-white/10 dark:bg-white/[0.025]">
                  <div className="flex items-center gap-2">
                    <FiTrendingUp className="text-emerald-500" />

                    <p className="text-sm font-semibold">
                      Research Direction
                    </p>
                  </div>

                  <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-400">
                    The study focuses on collecting relevant student-level
                    factors, preparing the dataset, identifying meaningful
                    patterns, and evaluating machine learning models for
                    prediction.
                  </p>
                </div>
              </div>

              {/* Skills */}
              <div className="mt-8 border-t border-slate-200 pt-8 dark:border-white/10">
                <div className="flex items-center gap-2">
                  <FiCode className="text-emerald-500" />

                  <p className="text-sm font-semibold">
                    Research & Technical Skills
                  </p>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {researchSkills.map((skill) => (
                    <motion.span
                      key={skill}
                      whileHover={{ y: -2 }}
                      className="rounded-xl border border-emerald-200 bg-emerald-50 px-3.5 py-2 text-xs font-medium text-emerald-700 transition-colors hover:border-emerald-400 dark:border-emerald-500/20 dark:bg-emerald-500/[0.07] dark:text-emerald-400"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          </motion.article>
        </section>

        {/* =========================================================
            RESEARCH WORKFLOW
        ========================================================= */}
        <section className="mt-24">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="mb-8"
          >
            <div className="mb-3 flex items-center gap-2 text-emerald-600 dark:text-emerald-400">
              <FiLayers size={16} />

              <span className="font-mono text-xs font-semibold uppercase tracking-[0.18em]">
                Methodology
              </span>
            </div>

            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Research Workflow
            </h2>

            <p className="mt-2 max-w-2xl text-sm text-slate-500 dark:text-slate-400">
              A structured approach to transforming educational data into
              meaningful predictive insights.
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
          >
            {researchProcess.map((item) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.number}
                  variants={fadeUp}
                  whileHover={{ y: -6 }}
                  className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-xl hover:shadow-emerald-500/5 dark:border-white/10 dark:bg-white/[0.025]"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 transition-transform duration-300 group-hover:scale-110 dark:bg-emerald-500/10 dark:text-emerald-400">
                      <Icon size={20} />
                    </div>

                    <span className="font-mono text-xs font-bold text-slate-300 dark:text-slate-700">
                      {item.number}
                    </span>
                  </div>

                  <h3 className="mt-6 font-semibold">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-xs leading-6 text-slate-500 dark:text-slate-400">
                    {item.description}
                  </p>

                  <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-emerald-500 transition-all duration-500 group-hover:w-full" />
                </motion.div>
              );
            })}
          </motion.div>
        </section>

        {/* =========================================================
            INTERESTS + DEVELOPMENT
        ========================================================= */}
        <section className="mt-24 grid gap-6 lg:grid-cols-2">
          {/* Research Interests */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/[0.025] sm:p-8"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-600 dark:text-emerald-400">
                  Areas of Interest
                </p>

                <h3 className="mt-2 text-xl font-bold">
                  Research Interests
                </h3>
              </div>

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400">
                <FiCpu size={20} />
              </div>
            </div>

            <div className="mt-7 flex flex-wrap gap-2">
              {researchInterests.map((interest) => (
                <span
                  key={interest}
                  className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-medium text-slate-700 transition-colors hover:border-emerald-300 hover:text-emerald-600 dark:border-white/10 dark:bg-white/[0.025] dark:text-slate-300 dark:hover:border-emerald-500/30 dark:hover:text-emerald-400"
                >
                  {interest}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Research & Development */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="group relative overflow-hidden rounded-3xl border border-emerald-200 bg-gradient-to-br from-emerald-50 to-white p-6 shadow-sm dark:border-emerald-500/15 dark:from-emerald-500/[0.07] dark:to-white/[0.02] sm:p-8"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-600 dark:text-emerald-400">
                  Beyond Research
                </p>

                <h3 className="mt-2 text-xl font-bold">
                  Research & Development
                </h3>
              </div>

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-emerald-600 shadow-sm dark:bg-white/10 dark:text-emerald-400">
                <FiCode size={20} />
              </div>
            </div>

            <p className="mt-6 text-sm leading-7 text-slate-600 dark:text-slate-400">
              My development experience supports my research interests by
              allowing me to work with data-driven applications, APIs,
              databases, and software systems. This combination helps bridge
              theoretical research with practical software development.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {[
                "Software Development",
                "APIs",
                "Databases",
                "Data-Driven Systems",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-lg bg-white/80 px-3 py-2 text-xs font-medium text-slate-700 shadow-sm dark:bg-white/5 dark:text-slate-300"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="pointer-events-none absolute -bottom-16 -right-16 h-40 w-40 rounded-full bg-emerald-400/10 blur-3xl transition-transform duration-700 group-hover:scale-150" />
          </motion.div>
        </section>

    
      </div>
    </main>
  );
}

"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FiArrowUpRight,
  FiBookOpen,
  FiCheckCircle,
  FiCode,
  FiDatabase,
  FiExternalLink,
  FiFileText,
  FiSearch,
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

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 25,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: "easeOut",
    },
  },
};

export default function EducationPage() {
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
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <p className="mb-3 font-mono text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600 dark:text-emerald-400">
            Education & Research
          </p>

          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Academic Journey &{" "}
            <span className="text-emerald-600 dark:text-emerald-400">
              Research
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-600 dark:text-gray-400 sm:text-base">
            My academic journey combines computer science, software
            development, and research with a growing interest in artificial
            intelligence and machine learning.
          </p>
        </motion.div>


        {/* ================= EDUCATION ================= */}
        <section className="mb-20">

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="mb-8"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600 dark:bg-emerald-400/10 dark:text-emerald-400">
                <FiBookOpen size={21} />
              </div>

              <div>
                <p className="font-mono text-xs uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
                  Education
                </p>

                <h2 className="text-2xl font-bold sm:text-3xl">
                  Academic Background
                </h2>
              </div>
            </div>
          </motion.div>


          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="relative rounded-2xl border border-emerald-200/70 bg-white/70 p-6 shadow-sm backdrop-blur-sm dark:border-emerald-900/50 dark:bg-[#071512]/70 sm:p-8"
          >

            {/* Timeline line */}
            <div className="absolute bottom-8 left-8 top-8 hidden w-px bg-emerald-200 dark:bg-emerald-900 sm:block" />

            <div className="relative sm:pl-10">

              {/* Timeline dot */}
              <div className="absolute left-[-4px] top-1 hidden h-3 w-3 rounded-full bg-emerald-500 ring-4 ring-emerald-100 dark:ring-emerald-950 sm:block" />

              <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">

                <div>
                  <p className="font-mono text-sm text-emerald-600 dark:text-emerald-400">
                    2023 — Present
                  </p>

                  <h3 className="mt-2 text-xl font-bold">
                    Bachelor of Science in Computer Science & Engineering
                  </h3>

                  <p className="mt-1 font-medium text-gray-700 dark:text-gray-300">
                    Metropolitan University, Sylhet
                  </p>
                </div>

                <span className="w-fit rounded-full border border-emerald-300/70 bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700 dark:border-emerald-500/20 dark:bg-emerald-400/10 dark:text-emerald-400">
                  4th Year
                </span>
              </div>


              <p className="mt-6 max-w-3xl text-sm leading-7 text-gray-600 dark:text-gray-400">
                Currently developing a strong foundation in computer science
                while focusing on software engineering, web development,
                artificial intelligence, machine learning, and research.
              </p>


              {/* Academic focus */}
              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {educationHighlights.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300"
                  >
                    <FiCheckCircle className="shrink-0 text-emerald-600 dark:text-emerald-400" />
                    {item}
                  </div>
                ))}
              </div>

            </div>
          </motion.div>

        </section>


        {/* ================= RESEARCH ================= */}
        <section>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="mb-8"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600 dark:bg-emerald-400/10 dark:text-emerald-400">
                <FiSearch size={21} />
              </div>

              <div>
                <p className="font-mono text-xs uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
                  Research
                </p>

                <h2 className="text-2xl font-bold sm:text-3xl">
                  Current Research
                </h2>
              </div>
            </div>
          </motion.div>


          {/* Research project */}
          <motion.article
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className="rounded-2xl border border-emerald-300/60 bg-white/80 p-6 shadow-sm backdrop-blur-sm dark:border-emerald-500/20 dark:bg-[#071512]/80 sm:p-8"
          >

            <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">

              <div className="flex gap-4">

                <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600 dark:bg-emerald-400/10 dark:text-emerald-400 sm:flex">
                  <FiFileText size={21} />
                </div>

                <div>
                  <p className="font-mono text-xs uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
                    Thesis Research
                  </p>

                  <h3 className="mt-2 max-w-3xl text-xl font-bold leading-snug sm:text-2xl">
                    Machine Learning-Based Prediction of Bangladeshi Students’
                    Intention to Pursue Higher Education Abroad
                  </h3>
                </div>

              </div>

              <span className="w-fit shrink-0 rounded-full border border-emerald-300/70 bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700 dark:border-emerald-500/20 dark:bg-emerald-400/10 dark:text-emerald-400">
                In Progress
              </span>

            </div>


            {/* Research question */}
            <div className="mt-8 grid gap-6 lg:grid-cols-2">

              <div>
                <p className="text-sm font-semibold text-gray-900 dark:text-white">
                  Research Focus
                </p>

                <p className="mt-2 text-sm leading-7 text-gray-600 dark:text-gray-400">
                  The research explores whether machine learning techniques
                  can be used to predict Bangladeshi students’ intention to
                  pursue higher education abroad, with a comparative focus on
                  HSC and Bachelor&apos;s students.
                </p>
              </div>


              <div>
                <p className="text-sm font-semibold text-gray-900 dark:text-white">
                  Research Direction
                </p>

                <p className="mt-2 text-sm leading-7 text-gray-600 dark:text-gray-400">
                  The study focuses on collecting relevant student-level
                  factors, preparing the dataset, identifying meaningful
                  patterns, and evaluating machine learning models for
                  prediction.
                </p>
              </div>

            </div>


            {/* Research skills */}
            <div className="mt-8 border-t border-emerald-100 pt-7 dark:border-emerald-900/50">

              <p className="mb-4 text-sm font-semibold">
                Research & Technical Skills
              </p>

              <div className="flex flex-wrap gap-2">
                {researchSkills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-xs font-medium text-emerald-700 dark:border-emerald-900/60 dark:bg-emerald-400/5 dark:text-emerald-400"
                  >
                    {skill}
                  </span>
                ))}
              </div>

            </div>

          </motion.article>


          {/* ================= RESEARCH INTERESTS ================= */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="mt-8 grid gap-6 lg:grid-cols-2"
          >

            {/* Interests */}
            <div className="rounded-2xl border border-emerald-200/70 bg-white/60 p-6 dark:border-emerald-900/50 dark:bg-[#071512]/60">

              <div className="flex items-center gap-3">
                <FiSearch className="text-xl text-emerald-600 dark:text-emerald-400" />

                <h3 className="font-semibold">
                  Research Interests
                </h3>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {researchInterests.map((interest) => (
                  <span
                    key={interest}
                    className="rounded-lg bg-gray-100 px-3 py-2 text-xs font-medium text-gray-700 dark:bg-white/5 dark:text-gray-300"
                  >
                    {interest}
                  </span>
                ))}
              </div>

            </div>


            {/* Technical connection */}
            <div className="rounded-2xl border border-emerald-200/70 bg-white/60 p-6 dark:border-emerald-900/50 dark:bg-[#071512]/60">

              <div className="flex items-center gap-3">
                <FiCode className="text-xl text-emerald-600 dark:text-emerald-400" />

                <h3 className="font-semibold">
                  Research & Development
                </h3>
              </div>

              <p className="mt-4 text-sm leading-7 text-gray-600 dark:text-gray-400">
                My development experience supports my research interests by
                allowing me to work with data-driven applications, APIs,
                databases, and software systems.
              </p>

            </div>

          </motion.div>

        </section>


        {/* ================= CTA ================= */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-20 rounded-2xl border border-emerald-300/50 bg-emerald-50 p-8 text-center dark:border-emerald-500/20 dark:bg-emerald-400/5 sm:p-12"
        >
          <h2 className="text-2xl font-bold sm:text-3xl">
            Interested in my research?
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-gray-600 dark:text-gray-400">
            Explore my research direction, academic work, and technical
            projects to learn more about my work in computer science.
          </p>

          <div className="mt-7 flex flex-wrap justify-center gap-3">

            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-400 dark:hover:text-gray-950"
            >
              View Projects
              <FiArrowUpRight />
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl border border-emerald-300 bg-white px-5 py-3 text-sm font-semibold text-gray-800 transition hover:border-emerald-500 dark:border-emerald-800 dark:bg-transparent dark:text-gray-200"
            >
              Contact Me
              <FiExternalLink />
            </Link>

          </div>
        </motion.section>

      </div>
    </main>
  );
}
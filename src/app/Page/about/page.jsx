"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FiArrowRight, FiDownload } from "react-icons/fi";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#EFFFF7] text-gray-900 transition-colors duration-300 dark:bg-[#020B0A] dark:text-white">
      <section className="mx-auto max-w-5xl px-5 py-20 sm:px-8 lg:py-28">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600 dark:text-emerald-400">
            About Me
          </p>

          <h1 className="max-w-3xl text-3xl font-bold tracking-tight sm:text-5xl">
            Building products with{" "}
            <span className="text-emerald-600 dark:text-emerald-400">
              code & curiosity.
            </span>
          </h1>
        </motion.div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-7 max-w-3xl space-y-5 text-base leading-8 text-gray-600 dark:text-gray-400"
        >
          <p>
            I’m <strong className="text-gray-900 dark:text-white">
              Avishek Roy Yash
            </strong>
            , a Computer Science & Engineering student and aspiring
            Software Engineer focused on building modern, responsive,
            and scalable web applications.
          </p>

          <p>
            I work primarily with{" "}
            <strong className="text-emerald-600 dark:text-emerald-400">
              JavaScript, React, Next.js, Node.js, Express.js, and MongoDB
            </strong>
            . I enjoy solving real-world problems and turning ideas into
            practical products.
          </p>

          <p>
            Currently, I’m focused on strengthening my software engineering
            skills, building real-world projects, and exploring{" "}
            <strong className="text-emerald-600 dark:text-emerald-400">
              AI/ML research
            </strong>
            .
          </p>
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 flex flex-wrap gap-4"
        >
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 font-semibold text-white transition-all hover:-translate-y-1 hover:bg-emerald-700 dark:bg-emerald-500 dark:text-[#02100C] dark:hover:bg-emerald-400"
          >
            View Projects
            <FiArrowRight className="transition-transform group-hover:translate-x-1" />
          </Link>

          <a
            href="/resume/Avishek-Roy-Yash-Resume.pdf"
            download
            className="inline-flex items-center gap-2 rounded-xl border border-emerald-600/20 px-5 py-3 font-semibold text-gray-700 transition-all hover:-translate-y-1 hover:border-emerald-500 hover:text-emerald-600 dark:border-emerald-400/20 dark:text-gray-300 dark:hover:border-emerald-400 dark:hover:text-emerald-400"
          >
            <FiDownload />
            Resume
          </a>
        </motion.div>

        {/* Highlights */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.12,
                delayChildren: 0.4,
              },
            },
          }}
          className="mt-16 grid gap-4 sm:grid-cols-3"
        >
          {[
            {
              number: "01",
              title: "Full Stack Development",
              text: "React • Next.js • Node.js • MongoDB",
            },
            {
              number: "02",
              title: "Problem Solving",
              text: "Building practical solutions for real-world problems",
            },
            {
              number: "03",
              title: "AI/ML Research",
              text: "Exploring machine learning and research",
            },
          ].map((item) => (
            <motion.div
              key={item.number}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ y: -5 }}
              className="rounded-2xl border border-emerald-600/15 bg-white/60 p-5 transition-colors dark:border-emerald-400/10 dark:bg-[#061511]/70"
            >
              <span className="text-sm font-bold text-emerald-600 dark:text-emerald-400">
                {item.number}
              </span>

              <h3 className="mt-3 font-semibold">
                {item.title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-500 dark:text-gray-500">
                {item.text}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </main>
  );
}
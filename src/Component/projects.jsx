"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiGithub,
  FiExternalLink,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";
import { useState } from "react";

const projects = [
  {
    title: "ReBazzar",
    category: "Full Stack Marketplace",
    description:
      "A second-hand e-commerce marketplace where users can browse, buy and sell used products.",
    image: "/images/projects/rebazzar.png",
    technologies: [
      "Next.js",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
    github: "https://github.com/avishekroyyash",
    live: "#",
  },

  {
    title: "MovieExplorer",
    category: "Frontend Application",
    description:
      "A movie exploration application where users can search and browse shows using the TVMaze API.",
    image: "/images/projects/movie-explorer.png",
    technologies: [
      "React",
      "React Router",
      "Tailwind CSS",
      "API",
    ],
    github: "https://github.com/avishekroyyash",
    live: "#",
  },

  {
    title: "Project Three",
    category: "Web Application",
    description:
      "A responsive web application designed to provide a clean user experience with practical functionality.",
    image: "/images/projects/project-three.png",
    technologies: [
      "React",
      "JavaScript",
      "Tailwind CSS",
    ],
    github: "https://github.com/avishekroyyash",
    live: "#",
  },

  {
    title: "Project Four",
    category: "Full Stack Application",
    description:
      "A full-stack application focused on API integration, database operations and modern web development.",
    image: "/images/projects/project-four.png",
    technologies: [
      "Next.js",
      "Node.js",
      "MongoDB",
    ],
    github: "https://github.com/avishekroyyash",
    live: "#",
  },

  {
    title: "Project Five",
    category: "Web Application",
    description:
      "A practical web application built with modern frontend technologies and responsive design.",
    image: "/images/projects/project-five.png",
    technologies: [
      "React",
      "JavaScript",
      "Tailwind CSS",
    ],
    github: "https://github.com/avishekroyyash",
    live: "#",
  },
];

const projectsPerPage = 3;

const cardAnimation = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export default function ProjectsPage() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(
    projects.length / projectsPerPage
  );

  const startIndex =
    (currentPage - 1) * projectsPerPage;

  const currentProjects = projects.slice(
    startIndex,
    startIndex + projectsPerPage
  );

  const changePage = (page) => {
    setCurrentPage(page);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#EFFFF7] text-gray-900 transition-colors duration-300 dark:bg-[#020B0A] dark:text-white">

      {/* =====================================================
          HEADER
      ====================================================== */}

      <section className="relative border-b border-emerald-600/10 dark:border-emerald-400/10">

        {/* Background glow */}

        <motion.div
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="pointer-events-none absolute -left-32 -top-32 h-80 w-80 rounded-full bg-emerald-400/15 blur-3xl dark:bg-emerald-500/10"
        />

        <motion.div
          animate={{
            x: [0, -30, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="pointer-events-none absolute -right-32 top-10 h-80 w-80 rounded-full bg-green-400/15 blur-3xl dark:bg-green-500/10"
        />

        <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-24">

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
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600 dark:text-emerald-400">
              My Projects
            </p>

            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Things I&apos;ve{" "}
              <span className="text-emerald-600 dark:text-emerald-400">
                built.
              </span>
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-7 text-gray-600 dark:text-gray-400">
              A selection of projects where I apply my skills
              to solve practical problems and build real-world
              applications.
            </p>
          </motion.div>

        </div>
      </section>

      {/* =====================================================
          PROJECTS
      ====================================================== */}

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-24">

        <AnimatePresence mode="wait">

          <motion.div
            key={currentPage}
            initial={{
              opacity: 0,
              x: 20,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            exit={{
              opacity: 0,
              x: -20,
            }}
            transition={{
              duration: 0.35,
            }}
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          >

            {currentProjects.map((project, index) => (

              <motion.article
                key={project.title}
                initial={{
                  opacity: 0,
                  y: 25,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -7,
                }}
                className="group overflow-hidden rounded-2xl border border-emerald-600/15 bg-white/70 shadow-sm transition-all duration-300 hover:border-emerald-500/40 hover:shadow-xl hover:shadow-emerald-900/5 dark:border-emerald-400/10 dark:bg-[#061511]/70 dark:hover:border-emerald-400/30 dark:hover:shadow-none"
              >

                {/* =========================
                    PROJECT IMAGE
                ========================== */}

                <div className="relative aspect-16/10 overflow-hidden bg-emerald-950/10">

                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />

                  {/* Category */}

                  <div className="absolute left-4 top-4">
                    <span className="rounded-full border border-white/20 bg-black/30 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-md">
                      {project.category}
                    </span>
                  </div>

                </div>

                {/* =========================
                    CONTENT
                ========================== */}

                <div className="p-5">

                  <h2 className="text-xl font-bold">
                    {project.title}
                  </h2>

                  <p className="mt-3 line-clamp-3 text-sm leading-6 text-gray-600 dark:text-gray-400">
                    {project.description}
                  </p>

                  {/* Technologies */}

                  <div className="mt-4 flex flex-wrap gap-2">

                    {project.technologies.map(
                      (technology) => (
                        <span
                          key={technology}
                          className="rounded-md border border-emerald-600/10 bg-emerald-500/5 px-2.5 py-1 text-xs font-medium text-gray-700 dark:border-emerald-400/10 dark:bg-emerald-400/5 dark:text-gray-300"
                        >
                          {technology}
                        </span>
                      )
                    )}

                  </div>

                  {/* Buttons */}

                  <div className="mt-5 flex gap-2">

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg border border-emerald-600/20 px-3.5 py-2 text-sm font-semibold text-gray-700 transition hover:border-emerald-500 hover:text-emerald-600 dark:border-emerald-400/15 dark:text-gray-300 dark:hover:border-emerald-400 dark:hover:text-emerald-400"
                    >
                      <FiGithub />
                      GitHub
                    </a>

                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-3.5 py-2 text-sm font-semibold text-white transition hover:bg-emerald-700 dark:bg-emerald-500 dark:text-[#02100C] dark:hover:bg-emerald-400"
                    >
                      Live Demo
                      <FiExternalLink />
                    </a>

                  </div>

                </div>

              </motion.article>

            ))}

          </motion.div>

        </AnimatePresence>

        {/* =================================================
            PAGINATION
        ================================================== */}

        {totalPages > 1 && (
          <div className="mt-12 flex items-center justify-center gap-2">

            {/* Previous */}

            <button
              onClick={() =>
                changePage(
                  Math.max(currentPage - 1, 1)
                )
              }
              disabled={currentPage === 1}
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-emerald-600/20 text-gray-600 transition hover:border-emerald-500 hover:text-emerald-600 disabled:cursor-not-allowed disabled:opacity-40 dark:border-emerald-400/15 dark:text-gray-400 dark:hover:border-emerald-400 dark:hover:text-emerald-400"
            >
              <FiChevronLeft />
            </button>

            {/* Page Numbers */}

            {Array.from(
              { length: totalPages },
              (_, index) => index + 1
            ).map((page) => (

              <button
                key={page}
                onClick={() => changePage(page)}
                className={`flex h-10 w-10 items-center justify-center rounded-lg text-sm font-semibold transition-all ${
                  currentPage === page
                    ? "bg-emerald-600 text-white shadow-lg shadow-emerald-600/20 dark:bg-emerald-500 dark:text-[#02100C]"
                    : "border border-emerald-600/20 text-gray-600 hover:border-emerald-500 hover:text-emerald-600 dark:border-emerald-400/15 dark:text-gray-400 dark:hover:border-emerald-400 dark:hover:text-emerald-400"
                }`}
              >
                {page}
              </button>

            ))}

            {/* Next */}

            <button
              onClick={() =>
                changePage(
                  Math.min(
                    currentPage + 1,
                    totalPages
                  )
                )
              }
              disabled={currentPage === totalPages}
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-emerald-600/20 text-gray-600 transition hover:border-emerald-500 hover:text-emerald-600 disabled:cursor-not-allowed disabled:opacity-40 dark:border-emerald-400/15 dark:text-gray-400 dark:hover:border-emerald-400 dark:hover:text-emerald-400"
            >
              <FiChevronRight />
            </button>

          </div>
        )}

      </section>

      {/* =====================================================
          GITHUB CTA
      ====================================================== */}

      <section className="px-5 pb-20 sm:px-8 lg:px-10 lg:pb-28">

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
          className="mx-auto max-w-7xl rounded-2xl border border-emerald-600/15 bg-emerald-500/5 p-8 text-center dark:border-emerald-400/10 dark:bg-emerald-400/5"
        >

          <h2 className="text-2xl font-bold">
            Want to see more?
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-gray-600 dark:text-gray-400">
            Explore more of my projects, experiments and
            development work on GitHub.
          </p>

          <a
            href="https://github.com/avishekroyyash"
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 font-semibold text-white transition hover:-translate-y-1 hover:bg-emerald-700 dark:bg-emerald-500 dark:text-[#02100C] dark:hover:bg-emerald-400"
          >
            <FiGithub />
            Visit GitHub
            <FiExternalLink />
          </a>

        </motion.div>

      </section>

    </main>
  );
}
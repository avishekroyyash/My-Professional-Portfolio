
"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiGithub,
  FiExternalLink,
  FiChevronLeft,
  FiChevronRight,
  FiArrowUpRight,
} from "react-icons/fi";
import { useState } from "react";

import ban1 from "../../public/images/profile/banner.png";
import ban2 from "../../public/images/profile/banner1.jpg";
import ban3 from "../../public/images/profile/banner2.jpg";

const projects = [
  {
    title: "ReBazzar",
    category: "Full-Stack Marketplace",
    description:
      "A second-hand e-commerce marketplace where users can browse, buy, and sell used products through a modern marketplace experience.",
    image: ban1,
    technologies: [
      "Tailwind CSS",
      "Hero UI",
      "React",
      "Next.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Stripe",
      "Better Auth",
    ],
    github: "https://github.com/avishekroyyash/reseller-frontend",
    live: "https://reseller-frontend-silk.vercel.app",
  },

  {
    title: "SportNest",
    category: "Sports Management",
    description:
      "A centralized sports management platform for managing teams, players, and sports activities with authentication and role-based access.",
    image: ban2,
    technologies: [
      "Tailwind CSS",
      "DaisyUI",
      "React",
      "Next.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Better Auth",
    ],
    github: "https://github.com/avishekroyyash/sport-frontend",
    live: "https://sport-frontend-gray.vercel.app",
  },

  {
    title: "Animal Marketplace",
    category: "Marketplace Application",
    description:
      "A marketplace platform for browsing, listing, and selling animals with detailed listings, category-based filtering, search, and account management.",
    image: ban3,
    technologies: [
      "React",
      "DaisyUI",
      "Next.js",
      "Tailwind CSS",
      "React Router",
      "React Hook Form",
      "Better Auth",
    ],
    github: "https://github.com/avishekroyyash/Animal",
    live: "https://animal-mu-gold.vercel.app",
  },
];

const projectsPerPage = 3;

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
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
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#EFFFF7] text-gray-900 transition-colors duration-300 dark:bg-[#020B0A] dark:text-white">

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative overflow-hidden border-b border-emerald-600/10 dark:border-emerald-400/10">

        {/* Animated background glow */}

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.8,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            x: [0, 25, 0],
            y: [0, -20, 0],
          }}
          transition={{
            opacity: {
              duration: 1,
            },
            scale: {
              duration: 1.2,
              ease: "easeOut",
            },
            x: {
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
            },
            y: {
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
          className="pointer-events-none absolute -left-40 -top-40 h-96 w-96 rounded-full bg-emerald-400/15 blur-3xl dark:bg-emerald-500/10"
        />

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.8,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            x: [0, -25, 0],
            y: [0, 20, 0],
          }}
          transition={{
            opacity: {
              duration: 1,
              delay: 0.2,
            },
            scale: {
              duration: 1.2,
              delay: 0.2,
              ease: "easeOut",
            },
            x: {
              duration: 14,
              repeat: Infinity,
              ease: "easeInOut",
            },
            y: {
              duration: 11,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
          className="pointer-events-none absolute -right-40 top-10 h-96 w-96 rounded-full bg-green-400/10 blur-3xl dark:bg-green-500/10"
        />

        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28"
        >

          <div className="max-w-3xl">

            <motion.div
              variants={cardVariants}
              className="inline-flex items-center gap-2 rounded-full border border-emerald-600/15 bg-emerald-500/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700 dark:border-emerald-400/10 dark:bg-emerald-400/5 dark:text-emerald-400"
            >
              <motion.span
                animate={{
                  scale: [1, 1.25, 1],
                  opacity: [1, 0.6, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="h-1.5 w-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400"
              />

              Selected Projects
            </motion.div>

            <motion.h1
              variants={cardVariants}
              className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
            >
              Things I&apos;ve{" "}
              <span className="text-emerald-600 dark:text-emerald-400">
                built.
              </span>
            </motion.h1>

            <motion.p
              variants={cardVariants}
              className="mt-6 max-w-2xl text-base leading-8 text-gray-600 dark:text-gray-400 sm:text-lg"
            >
              A selection of practical projects where I apply modern
              technologies to build responsive, scalable, and user-focused
              web applications.
            </motion.p>

            <motion.div
              variants={cardVariants}
              className="mt-8 flex flex-wrap gap-3"
            >
              {[
                "Full Stack Development",
                "Modern Web Applications",
                "Real-World Projects",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-lg border border-emerald-600/10 bg-white/50 px-3 py-2 text-xs font-medium text-gray-600 dark:border-emerald-400/10 dark:bg-white/[0.02] dark:text-gray-400"
                >
                  {item}
                </span>
              ))}
            </motion.div>

          </div>

        </motion.div>
      </section>

      {/* =====================================================
          PROJECTS
      ====================================================== */}

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-24">

        <AnimatePresence mode="wait">

          <motion.div
            key={currentPage}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit={{
              opacity: 0,
              y: -10,
              transition: {
                duration: 0.2,
              },
            }}
            className="grid gap-7 md:grid-cols-2 lg:grid-cols-3"
          >

            {currentProjects.map((project) => (

              <motion.article
                key={project.title}
                variants={cardVariants}
                whileHover={{
                  y: -6,
                }}
                transition={{
                  duration: 0.25,
                  ease: "easeOut",
                }}
                className="group overflow-hidden rounded-2xl border border-emerald-600/10 bg-white/70 shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-emerald-500/30 hover:shadow-xl hover:shadow-emerald-900/5 dark:border-emerald-400/10 dark:bg-[#061511]/70 dark:hover:border-emerald-400/20 dark:hover:shadow-none"
              >

                {/* =================================================
                    IMAGE
                ================================================== */}

                <div className="relative aspect-[16/10] overflow-hidden bg-emerald-950/10">

                  <Image
                    src={project.image}
                    alt={`${project.title} project preview`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  {/* Image overlay */}

                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/5 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-90" />

                  {/* Category */}

                  <div className="absolute left-4 top-4">
                    <span className="rounded-full border border-white/20 bg-black/30 px-3 py-1.5 text-xs font-medium text-white shadow-sm backdrop-blur-md">
                      {project.category}
                    </span>
                  </div>

                  {/* Preview indicator */}

                  <motion.div
                    initial={{
                      opacity: 0,
                      x: 10,
                    }}
                    whileHover={{
                      opacity: 1,
                      x: 0,
                    }}
                    className="absolute bottom-4 right-4 hidden rounded-full border border-white/20 bg-black/30 p-2.5 text-white backdrop-blur-md md:block"
                  >
                    <FiArrowUpRight size={16} />
                  </motion.div>

                </div>

                {/* =================================================
                    CONTENT
                ================================================== */}

                <div className="p-6">

                  <div className="flex items-start justify-between gap-4">

                    <div>
                      <h2 className="text-xl font-bold tracking-tight">
                        {project.title}
                      </h2>

                      <div className="mt-2 h-0.5 w-8 rounded-full bg-emerald-500 transition-all duration-300 group-hover:w-12" />
                    </div>

                  </div>

                  <p className="mt-4 line-clamp-3 text-sm leading-7 text-gray-600 dark:text-gray-400">
                    {project.description}
                  </p>

                  {/* Technologies */}

                  <div className="mt-5 flex flex-wrap gap-2">

                    {project.technologies.map((technology) => (

                      <motion.span
                        key={technology}
                        whileHover={{
                          y: -2,
                        }}
                        className="rounded-md border border-emerald-600/10 bg-emerald-500/5 px-2.5 py-1 text-xs font-medium text-gray-700 transition-colors duration-200 hover:border-emerald-500/20 hover:bg-emerald-500/10 hover:text-emerald-700 dark:border-emerald-400/10 dark:bg-emerald-400/5 dark:text-gray-300 dark:hover:bg-emerald-400/10 dark:hover:text-emerald-300"
                      >
                        {technology}
                      </motion.span>

                    ))}

                  </div>

                  {/* Buttons */}

                  <div className="mt-6 flex gap-2 border-t border-emerald-600/10 pt-5 dark:border-emerald-400/10">

                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      whileHover={{
                        y: -2,
                      }}
                      whileTap={{
                        scale: 0.97,
                      }}
                      className="inline-flex items-center gap-2 rounded-lg border border-emerald-600/15 px-3.5 py-2 text-sm font-semibold text-gray-700 transition-all duration-200 hover:border-emerald-500/40 hover:bg-emerald-500/5 hover:text-emerald-600 dark:border-emerald-400/15 dark:text-gray-300 dark:hover:border-emerald-400/30 dark:hover:bg-emerald-400/5 dark:hover:text-emerald-400"
                    >
                      <FiGithub size={16} />
                      GitHub
                    </motion.a>

                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      whileHover={{
                        y: -2,
                      }}
                      whileTap={{
                        scale: 0.97,
                      }}
                      className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-3.5 py-2 text-sm font-semibold text-white shadow-sm shadow-emerald-600/10 transition-all duration-200 hover:bg-emerald-700 dark:bg-emerald-500 dark:text-[#02100C] dark:hover:bg-emerald-400"
                    >
                      Live Demo
                      <FiExternalLink size={15} />
                    </motion.a>

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

          <motion.div
            initial={{
              opacity: 0,
              y: 15,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.5,
            }}
            className="mt-14 flex items-center justify-center gap-2"
          >

            {/* Previous */}

            <motion.button
              type="button"
              whileHover={{
                y: -2,
              }}
              whileTap={{
                scale: 0.95,
              }}
              onClick={() =>
                changePage(
                  Math.max(currentPage - 1, 1)
                )
              }
              disabled={currentPage === 1}
              aria-label="Previous page"
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-emerald-600/20 text-gray-600 transition-all duration-200 hover:border-emerald-500 hover:bg-emerald-500/5 hover:text-emerald-600 disabled:cursor-not-allowed disabled:opacity-40 dark:border-emerald-400/15 dark:text-gray-400 dark:hover:border-emerald-400 dark:hover:text-emerald-400"
            >
              <FiChevronLeft />
            </motion.button>

            {/* Page numbers */}

            {Array.from(
              {
                length: totalPages,
              },
              (_, index) => index + 1
            ).map((page) => (

              <motion.button
                type="button"
                key={page}
                whileHover={{
                  y: -2,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                onClick={() => changePage(page)}
                aria-label={`Go to page ${page}`}
                aria-current={
                  currentPage === page
                    ? "page"
                    : undefined
                }
                className={`flex h-10 w-10 items-center justify-center rounded-lg text-sm font-semibold transition-all duration-200 ${
                  currentPage === page
                    ? "bg-emerald-600 text-white shadow-lg shadow-emerald-600/20 dark:bg-emerald-500 dark:text-[#02100C]"
                    : "border border-emerald-600/20 text-gray-600 hover:border-emerald-500 hover:bg-emerald-500/5 hover:text-emerald-600 dark:border-emerald-400/15 dark:text-gray-400 dark:hover:border-emerald-400 dark:hover:text-emerald-400"
                }`}
              >
                {page}
              </motion.button>

            ))}

            {/* Next */}

            <motion.button
              type="button"
              whileHover={{
                y: -2,
              }}
              whileTap={{
                scale: 0.95,
              }}
              onClick={() =>
                changePage(
                  Math.min(
                    currentPage + 1,
                    totalPages
                  )
                )
              }
              disabled={currentPage === totalPages}
              aria-label="Next page"
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-emerald-600/20 text-gray-600 transition-all duration-200 hover:border-emerald-500 hover:bg-emerald-500/5 hover:text-emerald-600 disabled:cursor-not-allowed disabled:opacity-40 dark:border-emerald-400/15 dark:text-gray-400 dark:hover:border-emerald-400 dark:hover:text-emerald-400"
            >
              <FiChevronRight />
            </motion.button>

          </motion.div>

        )}

      </section>

    </main>
  );
}


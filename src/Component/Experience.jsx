
"use client";

import { motion } from "framer-motion";
import {
    FiTrendingUp,
    FiCheckCircle,
    FiBarChart2,
    FiSearch,
    FiGlobe,
} from "react-icons/fi";

const experiences = [
    {
        year: "2026 — Present",
        type: "Academic & Research",
        title: "CSE Student & AI/ML Researcher",
        organization: "Metropolitan University",
        description:
            "Currently working on academic projects and exploring AI/ML research with a focus on developing practical research skills and building solutions to real-world problems.",
        points: [
            "Exploring machine learning research",
            "Working on an undergraduate thesis",
            "Developing research and analytical skills",
        ],
    },

    {
        year: "2025 — Present",
        type: "Development",
        title: "Full Stack Web Developer",
        organization: "Personal Projects",
        description:
            "Building full-stack web applications using modern JavaScript technologies while strengthening frontend, backend and database development skills.",
        points: [
            "Developing responsive React and Next.js applications",
            "Building REST APIs with Node.js and Express.js",
            "Working with MongoDB and authentication with payment method Stripe",
        ],
    },
    {
        year: "2024 — Present",
        type: "Digital Marketer",
        title: "Digital Marketing With UI/UX",
        organization: "E-Learning & Earning ",
        description:
            "Started learning digital marketing in 2024 and developed practical knowledge of digital advertising, social media management and search engine optimization.",
        points: [
            "Running and managing Facebook Ads campaigns",
            "Working with Google Ads and online advertising",
            "Managing social media content and pages",
            "Learning and applying SEO strategies",
        ],
    },

    {
        year: "2023 — Present",
        type: "Continuous Learning",
        title: "Software Engineering Learner",
        organization: "Self-Directed Learning",
        description:
            "Continuously improving software engineering fundamentals through practical projects, problem solving and learning modern development tools and technologies.",
        points: [
            "Practicing JavaScript and programming fundamentals",
            "Learning modern development workflows",
            "Building and deploying real-world projects",
        ],
    },

];

const container = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.12,
        },
    },
};

const itemAnimation = {
    hidden: {
        opacity: 0,
        y: 30,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut",
        },
    },
};

export default function ExperiencePage() {
    return (
        <main className="min-h-screen overflow-hidden bg-[#EFFFF7] text-gray-900 transition-colors duration-300 dark:bg-[#020B0A] dark:text-white">

            {/* =========================================
          HEADER
      ========================================== */}

            <section className="relative border-b border-emerald-600/10 dark:border-emerald-400/10">

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
                            Experience
                        </p>

                        <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
                            My journey through{" "}
                            <span className="text-emerald-600 dark:text-emerald-400">
                                learning & building.
                            </span>
                        </h1>

                        <p className="mt-5 max-w-2xl text-base leading-7 text-gray-600 dark:text-gray-400">
                            A brief overview of my development, academic, research and
                            digital marketing journey as I continue building skills for a
                            career in technology.
                        </p>
                    </motion.div>

                </div>
            </section>

            {/* =========================================
          EXPERIENCE TIMELINE
      ========================================== */}

            <section className="mx-auto max-w-5xl px-5 py-16 sm:px-8 lg:py-24">

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{
                        once: true,
                        amount: 0.1,
                    }}
                    className="relative"
                >

                    {/* Timeline line */}

                    <div className="absolute left-[15px] top-2 hidden h-[calc(100%-10px)] w-px bg-emerald-600/20 sm:block dark:bg-emerald-400/20" />

                    <div className="space-y-12">

                        {experiences.map((experience) => (
                            <motion.article
                                key={experience.title}
                                variants={itemAnimation}
                                className="relative sm:pl-14"
                            >

                                {/* Timeline dot */}

                                <div className="absolute left-0 top-1 hidden h-8 w-8 items-center justify-center rounded-full border border-emerald-500/30 bg-[#EFFFF7] text-emerald-600 sm:flex dark:bg-[#020B0A] dark:text-emerald-400">
                                    <div className="h-2.5 w-2.5 rounded-full bg-emerald-500 dark:bg-emerald-400" />
                                </div>

                                {/* Card */}

                                <div className="rounded-2xl border border-emerald-600/15 bg-white/70 p-6 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/35 hover:shadow-lg hover:shadow-emerald-900/5 dark:border-emerald-400/10 dark:bg-[#061511]/70 dark:hover:border-emerald-400/25 dark:hover:shadow-none">

                                    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">

                                        <div>
                                            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-emerald-600 dark:text-emerald-400">
                                                {experience.type}
                                            </p>

                                            <h2 className="mt-2 text-xl font-bold">
                                                {experience.title}
                                            </h2>

                                            <p className="mt-1 text-sm font-medium text-gray-500 dark:text-gray-500">
                                                {experience.organization}
                                            </p>
                                        </div>

                                        <span className="w-fit rounded-lg border border-emerald-600/15 bg-emerald-500/5 px-3 py-1.5 text-xs font-medium text-gray-600 dark:border-emerald-400/10 dark:bg-emerald-400/5 dark:text-gray-400">
                                            {experience.year}
                                        </span>

                                    </div>

                                    <p className="mt-5 text-sm leading-7 text-gray-600 dark:text-gray-400">
                                        {experience.description}
                                    </p>

                                    <div className="mt-5 space-y-3">

                                        {experience.points.map((point) => (
                                            <div
                                                key={point}
                                                className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-400"
                                            >
                                                <FiCheckCircle className="mt-0.5 shrink-0 text-emerald-600 dark:text-emerald-400" />
                                                <span>{point}</span>
                                            </div>
                                        ))}

                                    </div>

                                </div>
                            </motion.article>
                        ))}

                    </div>
                </motion.div>
            </section>

            {/* =========================================
          CURRENT FOCUS
      ========================================== */}

            <section className="border-y border-emerald-600/10 bg-white/40 dark:border-emerald-400/10 dark:bg-[#03110E]/50"> 
            
            <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-20">
                 <motion.div initial={{ opacity: 0, y: 25, }} whileInView={{ opacity: 1, y: 0, }} viewport={{ once: true, amount: 0.2, }} transition={{ duration: 0.6, }} className="text-center" > 
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 text-xl text-emerald-600 dark:bg-emerald-400/10 dark:text-emerald-400"> 
                    <FiBarChart2 /> 
                    </div>
                     <p className="mt-5 text-sm font-semibold uppercase tracking-[0.18em] text-emerald-600 dark:text-emerald-400"> Professional Focus </p>
                     
                      <h2 className="mt-3 text-2xl font-bold sm:text-3xl"> Areas I am actively developing </h2>
                       <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-600 dark:text-gray-400"> Combining technical development, research, problem solving, and digital growth skills to build a versatile technology profile. </p>
                        <div className="mt-8 flex flex-wrap justify-center gap-3"> {["Full Stack Development", "Software Engineering", "AI / ML Research", "Digital Marketing", "Problem Solving", "Continuous Learning",].map((item) => (<span key={item} className="rounded-full border border-emerald-600/15 bg-emerald-500/5 px-4 py-2 text-sm font-medium text-emerald-700 transition-colors duration-300 hover:border-emerald-500/30 hover:bg-emerald-500/10 dark:border-emerald-400/10 dark:bg-emerald-400/5 dark:text-emerald-300 dark:hover:border-emerald-400/20 dark:hover:bg-emerald-400/10" > {item} </span>))}
                         </div>
                          </motion.div> 
                          </div>
                           </section>
                            {/* ========================================= FINAL CTA ========================================== */}
                       
        </main>
    );
}


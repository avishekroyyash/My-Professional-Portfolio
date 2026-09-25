"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FiArrowUpRight,
  FiCode,
  FiDatabase,
  FiGlobe,
  FiLayers,
  FiCheck,
} from "react-icons/fi";

const services = [
  {
    icon: FiGlobe,
    title: "Business Website Development",
    description:
      "Professional, responsive websites designed to establish a strong online presence and clearly communicate your brand, services, and value.",
    features: [
      "Responsive design",
      "Modern UI",
      "SEO-friendly structure",
      "Fast performance",
    ],
  },
  {
    icon: FiLayers,
    title: "Full-Stack Web Application",
    description:
      "End-to-end web applications with modern frontend interfaces, secure backend systems, database integration, and scalable architecture.",
    features: [
      "Frontend & backend",
      "REST API integration",
      "Database integration",
      "Authentication",
    ],
  },
  {
    icon: FiCode,
    title: "Frontend Development",
    description:
      "Clean and responsive user interfaces built with modern JavaScript technologies, focusing on usability, performance, and maintainable code.",
    features: [
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "Responsive UI",
    ],
  },
  {
    icon: FiDatabase,
    title: "Backend & API Development",
    description:
      "Reliable backend services and REST APIs that connect applications with databases and provide structured, secure data management.",
    features: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST APIs",
    ],
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

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

export default function ServicesPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#EFFFF7] px-5 py-24 text-gray-900 transition-colors duration-300 dark:bg-[#020B0A] dark:text-white sm:px-8 lg:px-12">
      
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-emerald-400/10 blur-3xl dark:bg-emerald-400/5" />
        <div className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-emerald-500/10 blur-3xl dark:bg-emerald-500/5" />
      </div>

      <div className="relative mx-auto max-w-6xl">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <p className="mb-3 font-mono text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600 dark:text-emerald-400">
            Services
          </p>

          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            What I Can{" "}
            <span className="text-emerald-600 dark:text-emerald-400">
              Build
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-600 dark:text-gray-400 sm:text-base">
            I build modern, responsive, and maintainable web solutions for
            individuals, startups, and businesses with a focus on performance,
            usability, and clean development practices.
          </p>
        </motion.div>

        {/* Services */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="grid gap-5 md:grid-cols-2"
        >
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.article
                key={service.title}
                variants={cardVariants}
                whileHover={{ y: -5 }}
                className="group rounded-2xl border border-emerald-200/70 bg-white/70 p-6 shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-emerald-400/70 hover:shadow-lg dark:border-emerald-900/50 dark:bg-[#071512]/70 dark:hover:border-emerald-500/50 sm:p-7"
              >
                {/* Icon + Number */}
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600 transition-transform duration-300 group-hover:scale-105 dark:bg-emerald-400/10 dark:text-emerald-400">
                    <Icon size={22} />
                  </div>

                  <span className="font-mono text-sm text-gray-400 dark:text-gray-600">
                    0{index + 1}
                  </span>
                </div>

                {/* Title */}
                <h2 className="text-xl font-semibold tracking-tight">
                  {service.title}
                </h2>

                {/* Description */}
                <p className="mt-3 text-sm leading-6 text-gray-600 dark:text-gray-400">
                  {service.description}
                </p>

                {/* Features */}
                <div className="mt-6 grid grid-cols-2 gap-3">
                  {service.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300"
                    >
                      <FiCheck className="shrink-0 text-emerald-600 dark:text-emerald-400" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </motion.div>

        {/* Approach */}
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
                My Approach
              </p>

              <h2 className="mt-3 text-2xl font-bold sm:text-3xl">
                Focused on building things that work.
              </h2>

              <p className="mt-4 max-w-lg text-sm leading-7 text-gray-600 dark:text-gray-400">
                Every project is approached with attention to functionality,
                responsiveness, maintainability, and a clean user experience.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "Clean & maintainable code",
                "Responsive across devices",
                "Performance-focused development",
                "Clear project communication",
              ].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: 15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.08,
                  }}
                  className="rounded-xl border border-emerald-200/60 bg-white/60 p-5 dark:border-emerald-900/50 dark:bg-[#071512]/60"
                >
                  <FiCheck className="mb-3 text-xl text-emerald-600 dark:text-emerald-400" />

                  <p className="text-sm font-medium">
                    {item}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* CTA */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 rounded-2xl border border-emerald-300/50 bg-emerald-50 p-8 text-center dark:border-emerald-500/20 dark:bg-emerald-400/5 sm:p-12"
        >
          <h2 className="text-2xl font-bold sm:text-3xl">
            Have a project in mind?
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-gray-600 dark:text-gray-400">
            Let&apos;s discuss your idea and turn it into a reliable,
            professional web solution.
          </p>

          <Link
            href="/contact"
            className="mt-7 inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-emerald-700 hover:shadow-lg dark:bg-emerald-500 dark:hover:bg-emerald-400 dark:hover:text-gray-950"
          >
            Let&apos;s Work Together
            <FiArrowUpRight />
          </Link>
        </motion.section>

      </div>
    </main>
  );
}
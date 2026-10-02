"use client";

import Image from "next/image";
import web from '../../public/images/profile/ph.png'
import dm from '../../public/images/profile/dg.png'
import cp from '../../public/images/profile/cp.png'
import py from '../../public/images/profile/phyton.png'
import pd from '../../public/images/profile/pandas.png'
import fl from '../../public/images/profile/fl.jpeg'


import { motion } from "framer-motion";
import {
  FiAward,
  FiArrowUpRight,
  FiCode,
  FiDatabase,
  FiShield,
  FiLayers,
  FiBookOpen,
  FiExternalLink,
} from "react-icons/fi";

const certificates = [
  {
    title: "Complete Web Development Course",
    issuer: "Programming Hero",
    year: "2025",
    image: web,
    icon: FiCode,
    color: "from-green-400 to-emerald-500",
    link: "https://web.programming-hero.com/verification?validationNumber=PHbatch-13WEB13-14801363",
  },
  {
    title: "Problem Solving Competition",
    issuer: "Metropolitan University",
    year: "2025",
    image: cp,
    icon: FiAward,
    color: "from-green-400 to-emerald-500",
    link: "https://drive.google.com/file/d/1CLDo_yDKcfvVvvJ4DRXCa0px2m0FZel1/view?usp=sharing",
  },
  {
    title: "Digital Marketing With Freelancing",
    issuer: "E-Learning & Earning",
    year: "2023",
    image: fl,
    icon: FiBookOpen,
    color: "from-green-400 to-emerald-500",
    link: "https://drive.google.com/file/d/1Q9mCBMPfv6Y2h56HsbvKchdNFMyVPFGC/view?usp=sharing",
  },
  {
    title: "Al-Pandas",
    issuer: "Kaggle",
    year: "2025",
    image: pd,
    icon: FiDatabase,
    color: "from-green-400 to-emerald-500",
    link: "https://www.kaggle.com/learn/certification/avishekroyeyas/pandas",
  },
  {
    title: "Phyton",
    issuer: "Kaggle",
    year: "2025",
    image: py,
    icon: FiLayers,
    color: "from-green-400 to-emerald-500",
    link: "https://www.kaggle.com/learn/certification/avishekroyeyas/python",
  },
  {
    title: "Digital-Marketing",
    issuer: "HTI IT Institute",
    year: "2022",
    image: dm,
    icon: FiShield,
    color: "from-green-400 to-emerald-500",
    link: "https://drive.google.com/file/d/1qTKDBBaDhA8i-AJWFRFWNP6M6i8dx4Tn/view?usp=sharing",
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
    y: 35,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function CertificationsPage() {
  return (
    <section
      id="certifications"
      className="relative isolate overflow-hidden bg-[#EFFFF7] px-5 py-24 text-gray-900 transition-colors duration-300 dark:bg-[#020B0A] dark:text-white sm:px-8 lg:px-12"
    >
      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-40 -top-40 h-96 w-96 rounded-full bg-emerald-400/10 blur-[120px] dark:bg-emerald-400/[0.07]" />
        <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-teal-400/10 blur-[120px] dark:bg-teal-400/[0.06]" />

        <div className="absolute right-10 top-10 grid grid-cols-5 gap-3 opacity-30">
          {Array.from({ length: 25 }).map((_, i) => (
            <span
              key={i}
              className="h-1 w-1 rounded-full bg-emerald-500"
            />
          ))}
        </div>

        <div className="absolute bottom-20 left-10 grid grid-cols-4 gap-3 opacity-30">
          {Array.from({ length: 16 }).map((_, i) => (
            <span
              key={i}
              className="h-1 w-1 rounded-full bg-emerald-500"
            />
          ))}
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-emerald-500" />
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.25em] text-emerald-600 dark:text-emerald-400 sm:text-sm">
              Certifications & Awards
            </p>
            <span className="h-px w-8 bg-emerald-500" />
          </div>

     

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-600 dark:text-gray-400 sm:text-base">
            Certifications, competition results, and recognitions
            that reflect my commitment to continuous learning,
            technical growth, and professional development.
          </p>
        </motion.div>

        {/* Certificate cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {certificates.map((certificate, index) => {
            const Icon = certificate.icon;

            return (
              <motion.article
                key={certificate.title}
                variants={cardVariants}
                whileHover={{
                  y: -7,
                  transition: { duration: 0.3 },
                }}
                className="group relative overflow-hidden rounded-2xl border border-emerald-200/70 bg-white/70 p-4 shadow-sm backdrop-blur-md transition-all duration-300 hover:border-emerald-400/80 hover:shadow-[0_12px_40px_rgba(16,185,129,0.12)] dark:border-emerald-900/60 dark:bg-[#06130F]/80 dark:hover:border-emerald-500/60 dark:hover:shadow-[0_12px_40px_rgba(16,185,129,0.08)] sm:p-5"
              >
                {/* Top accent */}
                <div
                  className={`absolute left-0 top-0 h-1 w-full bg-gradient-to-r ${certificate.color} opacity-70 transition-opacity duration-300 group-hover:opacity-100`}
                />

                {/* Certificate number */}
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600 transition-transform duration-300 group-hover:scale-110 dark:bg-emerald-400/10 dark:text-emerald-400">
                    <Icon size={20} />
                  </div>

                  <span className="font-mono text-xs tracking-wider text-gray-400 dark:text-gray-600">
                    0{index + 1} / 06
                  </span>
                </div>

                {/* Certificate image */}
                <div className="relative aspect-[1.45/1] overflow-hidden rounded-xl border border-emerald-100 bg-gray-100 dark:border-emerald-900/50 dark:bg-[#0A1915]">
                  <Image
                    src={certificate.image}
                    alt={`${certificate.title} certificate from ${certificate.issuer}`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-contain p-1 transition-transform duration-500 group-hover:scale-[1.04]"
                  />

                  {/* Hover overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-[#020B0A]/0 opacity-0 transition-all duration-300 group-hover:bg-[#020B0A]/30 group-hover:opacity-100">
                    <a
                      href={certificate.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${certificate.title} certificate`}
                      className="flex h-11 w-11 items-center justify-center rounded-full bg-emerald-400 text-[#020B0A] shadow-lg transition-transform duration-300 hover:scale-110"
                    >
                      <FiExternalLink size={19} />
                    </a>
                  </div>
                </div>

                {/* Certificate details */}
                <div className="flex items-start gap-3 pt-5">
                  <div className="min-w-0 flex-1">
                    <h3 className="text-base font-semibold leading-6 tracking-tight transition-colors group-hover:text-emerald-600 dark:group-hover:text-emerald-400 sm:text-lg">
                      {certificate.title}
                    </h3>

                    <p className="mt-1 text-sm text-emerald-700 dark:text-emerald-400">
                      {certificate.issuer}
                    </p>
                  </div>

                  <span className="shrink-0 pt-1 font-mono text-xs text-gray-500 dark:text-gray-500">
                    {certificate.year}
                  </span>
                </div>
              </motion.article>
            );
          })}
        </motion.div>

        {/* Bottom call to action */}
      
      </div>
    </section>
  );
}


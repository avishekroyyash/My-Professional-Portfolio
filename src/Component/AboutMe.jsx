
"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import {
  FiTarget,
  FiClock,
  FiUsers,
  FiLayers,
} from "react-icons/fi";
import pic from "../../public/images/profile/O.png";

const qualities = [
  {
    icon: FiTarget,
    title: "Hardworking",
    text: "Committed to my goals and consistent in delivering quality work.",
  },
  {
    icon: FiClock,
    title: "Time Management",
    text: "I plan my work carefully and prioritize tasks to use time effectively.",
  },
  {
    icon: FiUsers,
    title: "Team & Individual",
    text: "Comfortable working independently and collaborating with a team.",
  },
  {
    icon: FiLayers,
    title: "Patient & Adaptable",
    text: "Patient when solving problems and adaptable when facing new challenges.",
  },
];

export default function AboutPage() {
  const shouldReduceMotion = useReducedMotion();

  const revealLeft = {
    hidden: {
      opacity: 0,
      x: shouldReduceMotion ? 0 : -20,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: shouldReduceMotion ? 0 : 0.4 },
    },
  };

  const revealRight = {
    hidden: {
      opacity: 0,
      x: shouldReduceMotion ? 0 : 20,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: shouldReduceMotion ? 0 : 0.4 },
    },
  };

  const revealUp = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 15,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: shouldReduceMotion ? 0 : 0.4 },
    },
  };

  return (
    <main
      id="about"
      className="min-h-screen overflow-hidden bg-[#EFFFF7] text-gray-900 transition-colors duration-300 dark:bg-[#020B0A] dark:text-white"
    >
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-28">

        {/* Section Header */}
        <motion.div
          variants={revealUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mb-12 max-w-2xl sm:mb-14"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600 dark:text-emerald-400">
            About Me
          </p>

          <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl">
            Building with purpose,
            <span className="text-emerald-600 dark:text-emerald-400">
              {" "}learning with curiosity.
            </span>
          </h2>
        </motion.div>

        {/* Main Content */}
        <div className="grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">

          {/* Left - Image */}
          <motion.div
            variants={revealLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="relative mx-auto flex w-full max-w-[420px] items-center justify-center lg:mx-0 lg:max-w-none"
          >
            {/* Background Glow */}
            <div className="pointer-events-none absolute h-64 w-64 rounded-full bg-emerald-400/15 blur-3xl dark:bg-emerald-500/10 sm:h-80 sm:w-80" />

            {/* Decorative Frame - Static to reduce continuous animation */}
            <div className="absolute h-[350px] w-[260px] rounded-[2rem] border border-emerald-500/15 bg-emerald-500/5 sm:h-[470px] sm:w-[340px]" />

            <div className="absolute h-[350px] w-[260px] rotate-[-5deg] rounded-[2rem] border border-emerald-500/10 bg-white/30 dark:bg-[#061511]/30 sm:h-[470px] sm:w-[340px]" />

            {/* Portrait */}
            <div className="relative z-10 flex h-[390px] w-full items-end justify-center sm:h-[510px]">
              <Image
                src={pic}
                alt="Avishek Roy Yash - Full Stack Developer"
                width={700}
                height={800}
                priority={false}
                loading="lazy"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 500px"
                quality={75}
                className="h-full w-full object-contain drop-shadow-[0_15px_25px_rgba(0,0,0,0.15)] dark:drop-shadow-[0_15px_25px_rgba(0,0,0,0.4)]"
              />
            </div>

            {/* Profile Status */}
            <motion.div
              variants={revealUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="absolute bottom-4 left-1/2 z-20 w-[calc(100%-2rem)] max-w-[300px] -translate-x-1/2 rounded-2xl border border-emerald-500/15 bg-white/95 px-5 py-4 shadow-lg dark:border-emerald-400/10 dark:bg-[#061511]/95"
            >
              <div className="flex items-center gap-3">
                <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-emerald-500" />

                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Career Direction
                  </p>
                  <p className="mt-1 text-sm font-semibold text-gray-900 dark:text-white">
                    AI/ML Engineering
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            variants={revealRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="min-w-0"
          >
            {/* Introduction */}
            <div className="max-w-3xl space-y-4 text-sm leading-7 text-gray-600 dark:text-gray-400 sm:space-y-5 sm:text-base sm:leading-8">
              <p>
                I’m{" "}
                <strong className="font-semibold text-gray-900 dark:text-white">
                  Avishek Roy Yash
                </strong>
                , a Computer Science & Engineering student and{" "}
                <strong className="font-semibold text-emerald-600 dark:text-emerald-400">
                  Full Stack Developer
                </strong>{" "}
                from Sylhet, Bangladesh. I build modern, responsive, and
                scalable web applications and enjoy turning ideas into
                practical digital products.
              </p>

              <p>
                I have hands-on experience in{" "}
                <strong className="font-semibold text-emerald-600 dark:text-emerald-400">
                  Full Stack Development
                </strong>{" "}
                with JavaScript, React, Next.js, Node.js, Express.js,
                and MongoDB. I also have skills in{" "}
                <strong className="font-semibold text-emerald-600 dark:text-emerald-400">
                  UI/UX Design
                </strong>{" "}
                and{" "}
                <strong className="font-semibold text-emerald-600 dark:text-emerald-400">
                  Digital Marketing
                </strong>
                , allowing me to approach digital products from both
                technical and user-focused perspectives.
              </p>

              <p>
                My career goal is to become an{" "}
                <strong className="font-semibold text-emerald-600 dark:text-emerald-400">
                  AI/ML Engineer
                </strong>{" "}
                and build intelligent, data-driven solutions. I’m
                continuously developing my knowledge of machine learning,
                data analysis, AI research, and software engineering.
              </p>

              <p>
                I’m a{" "}
                <strong className="font-semibold text-gray-900 dark:text-white">
                  hardworking, patient, and continuous learner
                </strong>{" "}
                who enjoys exploring new technologies and learning new
                things. I value effective time management and can work
                independently as well as contribute effectively within a team.
              </p>
            </div>

            {/* Working Style */}
            <div className="mt-9 sm:mt-10">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-600 dark:text-emerald-400">
                How I Work
              </p>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                variants={{
                  hidden: {},
                  visible: {
                    transition: {
                      staggerChildren: shouldReduceMotion ? 0 : 0.07,
                    },
                  },
                }}
                className="mt-5 grid gap-x-6 gap-y-5 sm:grid-cols-2"
              >
                {qualities.map((item) => {
                  const Icon = item.icon;

                  return (
                    <motion.div
                      key={item.title}
                      variants={{
                        hidden: {
                          opacity: 0,
                          y: shouldReduceMotion ? 0 : 10,
                        },
                        visible: {
                          opacity: 1,
                          y: 0,
                          transition: {
                            duration: shouldReduceMotion ? 0 : 0.3,
                          },
                        },
                      }}
                      className="flex gap-3"
                    >
                      <Icon
                        className="mt-1 shrink-0 text-emerald-600 dark:text-emerald-400"
                        size={18}
                      />

                      <div>
                        <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
                          {item.title}
                        </h3>

                        <p className="mt-1 text-sm leading-6 text-gray-500 dark:text-gray-400">
                          {item.text}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

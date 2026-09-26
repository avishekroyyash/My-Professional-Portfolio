"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FiTarget, FiClock, FiUsers, FiLayers, FiCode, FiPenTool, FiTrendingUp, FiCpu } from "react-icons/fi";
import pic from '../../public/images/profile/O.png'

export default function AboutPage() {
  const qualities = [
    { icon: FiTarget, title: "Hardworking", text: "Committed to my goals and consistent in delivering quality work." },
    { icon: FiClock, title: "Time Management", text: "I plan my work carefully and prioritize tasks to use time effectively." },
    { icon: FiUsers, title: "Team & Individual", text: "Comfortable working independently and collaborating with a team." },
    { icon: FiLayers, title: "Patient & Adaptable", text: "Patient when solving problems and adaptable when facing new challenges." },
  ];


  return (
    <main id="about" className="min-h-screen bg-[#EFFFF7] text-gray-900 transition-colors duration-300 dark:bg-[#020B0A] dark:text-white">
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-28">

        {/* Section Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }} className="mb-14 max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600 dark:text-emerald-400">
            About Me
          </p>

          <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl">
            Building with purpose,
            <span className="text-emerald-600 dark:text-emerald-400"> learning with curiosity.</span>
          </h2>
        </motion.div>

        {/* Main Content */}
        <div className="grid items-center gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">

          {/* Left - 3D Image */}
          <motion.div initial={{ opacity: 0, x: -40, scale: 0.96 }} whileInView={{ opacity: 1, x: 0, scale: 1 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.8, ease: "easeOut" }} className="relative mx-auto flex w-full max-w-[500px] items-center justify-center lg:mx-0 lg:max-w-none">

            {/* Background Glow */}
            <div className="absolute h-72 w-72 rounded-full bg-emerald-400/15 blur-3xl sm:h-96 sm:w-96 dark:bg-emerald-500/10" />

            {/* Decorative Frame */}
            <motion.div animate={{ y: [0, -8, 0], rotate: [5, 6, 5] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} className="absolute h-[390px] w-[285px] rounded-[2rem] border border-emerald-500/15 bg-emerald-500/5 sm:h-[500px] sm:w-[360px]" />

            <motion.div animate={{ y: [0, 8, 0], rotate: [-5, -4, -5] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className="absolute h-[390px] w-[285px] rounded-[2rem] border border-emerald-500/10 bg-white/30 dark:bg-[#061511]/30 sm:h-[500px] sm:w-[360px]" />

            {/* 3D Image */}
            <motion.div animate={{ y: [0, -7, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} className="relative z-10 flex h-[430px] w-full items-end justify-center sm:h-[540px]">
              <Image src={pic} alt="Avishek Roy Yash 3D portrait" width={700} height={800} priority className="h-full w-full object-contain drop-shadow-[0_25px_45px_rgba(0,0,0,0.18)] dark:drop-shadow-[0_25px_45px_rgba(0,0,0,0.55)]" />
            </motion.div>

            {/* Profile Status */}
            <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4, duration: 0.5 }} className="absolute bottom-5 left-1/2 z-20 w-[calc(100%-2rem)] max-w-[300px] -translate-x-1/2 rounded-2xl border border-emerald-500/15 bg-white/85 px-5 py-4 shadow-xl backdrop-blur-md dark:border-emerald-400/10 dark:bg-[#061511]/90">
              <div className="flex items-center gap-3">
                <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.7)]" />

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

          {/* Right - About Content */}
          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.8, ease: "easeOut" }}>

            {/* Introduction */}
            <div className="max-w-3xl space-y-5 text-base leading-8 text-gray-600 dark:text-gray-400">
              <p>
                I’m{" "}
                <strong className="font-semibold text-gray-900 dark:text-white">
                  Avishek Roy Yash
                </strong>
                , a Computer Science & Engineering student and{" "}
                <strong className="font-semibold text-emerald-600 dark:text-emerald-400">
                  Full Stack Developer
                </strong>
                {" "}from Sylhet, Bangladesh. I build modern, responsive, and scalable web applications and enjoy turning ideas into practical digital products.
              </p>

              <p>
                I have hands-on experience in{" "}
                <strong className="font-semibold text-emerald-600 dark:text-emerald-400">
                  Full Stack Development
                </strong>
                {" "}with JavaScript, React, Next.js, Node.js, Express.js, and MongoDB. I also have skills in{" "}
                <strong className="font-semibold text-emerald-600 dark:text-emerald-400">
                  UI/UX Design
                </strong>
                {" "}and{" "}
                <strong className="font-semibold text-emerald-600 dark:text-emerald-400">
                  Digital Marketing
                </strong>
                , allowing me to approach digital products from both technical and user-focused perspectives.
              </p>

              <p>
                My career goal is to become an{" "}
                <strong className="font-semibold text-emerald-600 dark:text-emerald-400">
                  AI/ML Engineer
                </strong>
                {" "}and build intelligent, data-driven solutions. I’m continuously developing my knowledge of machine learning, data analysis, AI research, and software engineering.
              </p>

              <p>
                I’m a{" "}
                <strong className="font-semibold text-gray-900 dark:text-white">
                  hardworking, patient, and continuous learner
                </strong>
                {" "}who enjoys exploring new technologies and learning new things. I value effective time management and can work independently as well as contribute effectively within a team.
              </p>
            </div>

            {/* Expertise */}
         
            {/* Working Style */}
            <div className="mt-10">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-600 dark:text-emerald-400">
                How I Work
              </p>

              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }} className="mt-5 grid gap-x-6 gap-y-5 sm:grid-cols-2">
                {qualities.map((item) => {
                  const Icon = item.icon;

                  return (
                    <motion.div key={item.title} variants={{ hidden: { opacity: 0, x: -10 }, visible: { opacity: 1, x: 0 } }} className="flex gap-3">
                      <Icon className="mt-1 shrink-0 text-emerald-600 dark:text-emerald-400" size={18} />

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
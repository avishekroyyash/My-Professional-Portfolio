"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  FiArrowUpRight,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiSend,
} from "react-icons/fi";

const contactInfo = [
  {
    icon: FiMail,
    title: "Email",
    value: "your-email@gmail.com",
    href: "mailto:your-email@gmail.com",
  },
  {
    icon: FiMapPin,
    title: "Location",
    value: "Sylhet, Bangladesh",
    href: "#",
  },
];

const socials = [
  {
    icon: FiGithub,
    name: "GitHub",
    username: "@avishekroyyash",
    href: "https://github.com/avishekroyyash",
  },
  {
    icon: FiLinkedin,
    name: "LinkedIn",
    username: "/in/avishek-roy-yash",
    href: "https://www.linkedin.com/in/avishek-roy-yash/",
  },
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

export default function ContactPage() {
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
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <p className="mb-3 font-mono text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600 dark:text-emerald-400">
            Contact
          </p>

          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Let&apos;s Build Something{" "}
            <span className="text-emerald-600 dark:text-emerald-400">
              Together
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-600 dark:text-gray-400 sm:text-base">
            Have a project, opportunity, or research idea in mind? Feel free to
            get in touch. I&apos;m always open to discussing interesting
            projects and opportunities.
          </p>
        </motion.div>


        {/* ================= CONTACT CONTENT ================= */}

        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">

          {/* ================= LEFT SIDE ================= */}

          <motion.section
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="rounded-2xl border border-emerald-200/70 bg-white/70 p-6 shadow-sm backdrop-blur-sm dark:border-emerald-900/50 dark:bg-[#071512]/70 sm:p-8"
          >

            <h2 className="text-xl font-bold">
              Get in touch
            </h2>

            <p className="mt-3 text-sm leading-6 text-gray-600 dark:text-gray-400">
              Whether you want to discuss a web development project, job
              opportunity, collaboration, or research, you can reach me
              through the channels below.
            </p>


            {/* Contact information */}

            <div className="mt-8 space-y-4">

              {contactInfo.map((item) => {
                const Icon = item.icon;

                return (
                  <a
                    key={item.title}
                    href={item.href}
                    className="group flex items-center gap-4 rounded-xl border border-emerald-100 bg-emerald-50/50 p-4 transition-all hover:border-emerald-300 hover:bg-emerald-50 dark:border-emerald-900/50 dark:bg-emerald-400/5 dark:hover:border-emerald-700"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-100 text-emerald-600 dark:bg-emerald-400/10 dark:text-emerald-400">
                      <Icon size={19} />
                    </div>

                    <div className="min-w-0">
                      <p className="text-xs font-medium uppercase tracking-wide text-gray-500 dark:text-gray-500">
                        {item.title}
                      </p>

                      <p className="mt-1 truncate text-sm font-medium text-gray-800 dark:text-gray-200">
                        {item.value}
                      </p>
                    </div>

                    <FiArrowUpRight className="ml-auto text-gray-400 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                );
              })}

            </div>


            {/* Socials */}

            <div className="mt-8 border-t border-emerald-100 pt-7 dark:border-emerald-900/50">

              <p className="text-sm font-semibold">
                Find me online
              </p>

              <div className="mt-4 space-y-3">

                {socials.map((social) => {
                  const Icon = social.icon;

                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-3 text-sm text-gray-600 transition-colors hover:text-emerald-600 dark:text-gray-400 dark:hover:text-emerald-400"
                    >
                      <Icon size={19} />

                      <span>
                        <span className="font-medium text-gray-800 dark:text-gray-200">
                          {social.name}
                        </span>{" "}
                        <span className="text-gray-500">
                          {social.username}
                        </span>
                      </span>

                      <FiArrowUpRight className="ml-auto transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </a>
                  );
                })}

              </div>
            </div>

          </motion.section>


          {/* ================= FORM ================= */}

          <motion.section
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="rounded-2xl border border-emerald-200/70 bg-white/70 p-6 shadow-sm backdrop-blur-sm dark:border-emerald-900/50 dark:bg-[#071512]/70 sm:p-8"
          >

            <div className="mb-7">
              <p className="font-mono text-xs uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
                Message
              </p>

              <h2 className="mt-2 text-2xl font-bold">
                Send me a message
              </h2>

              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                Tell me a little about your project or opportunity.
              </p>
            </div>


            <form
              action="https://formsubmit.co/your-email@gmail.com"
              method="POST"
              className="space-y-5"
            >

              {/* FormSubmit configuration */}

              <input
                type="hidden"
                name="_subject"
                value="New message from Portfolio Website"
              />

              <input
                type="hidden"
                name="_captcha"
                value="false"
              />


              {/* Name */}

              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium"
                >
                  Name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  required
                  className="w-full rounded-xl border border-emerald-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/10 dark:border-emerald-900/60 dark:bg-[#020B0A] dark:text-white dark:placeholder:text-gray-600 dark:focus:border-emerald-500"
                />
              </div>


              {/* Email */}

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium"
                >
                  Email
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                  required
                  className="w-full rounded-xl border border-emerald-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/10 dark:border-emerald-900/60 dark:bg-[#020B0A] dark:text-white dark:placeholder:text-gray-600 dark:focus:border-emerald-500"
                />
              </div>


              {/* Subject */}

              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block text-sm font-medium"
                >
                  Subject
                </label>

                <input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="Project / Job opportunity / Collaboration"
                  required
                  className="w-full rounded-xl border border-emerald-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/10 dark:border-emerald-900/60 dark:bg-[#020B0A] dark:text-white dark:placeholder:text-gray-600 dark:focus:border-emerald-500"
                />
              </div>


              {/* Message */}

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  placeholder="Tell me about your project..."
                  required
                  className="w-full resize-none rounded-xl border border-emerald-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/10 dark:border-emerald-900/60 dark:bg-[#020B0A] dark:text-white dark:placeholder:text-gray-600 dark:focus:border-emerald-500"
                />
              </div>


              {/* Submit */}

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-emerald-700 hover:shadow-lg dark:bg-emerald-500 dark:hover:bg-emerald-400 dark:hover:text-gray-950"
              >
                Send Message
                <FiSend size={17} />
              </button>

            </form>

          </motion.section>

        </div>


        {/* ================= BOTTOM CTA ================= */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-gray-500 dark:text-gray-500">
            Prefer email?
          </p>

          <a
            href="mailto:your-email@gmail.com"
            className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-emerald-600 hover:underline dark:text-emerald-400"
          >
            your-email@gmail.com
            <FiArrowUpRight />
          </a>
        </motion.div>

      </div>
    </main>
  );
}
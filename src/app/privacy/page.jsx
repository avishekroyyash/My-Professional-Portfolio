
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FiShield, FiArrowLeft, FiMail, FiLock, FiDatabase, FiGlobe, FiUserCheck, FiTarget } from "react-icons/fi";

export default function PrivacyPage() {
  const sections = [
    {
      icon: FiDatabase,
      title: "1. Information I Collect",
      content: [
        "When you visit my portfolio, you may browse its content without providing personal information.",
        "If you contact me through the contact form or email, you may provide information such as your name, email address, subject, and message. Please avoid sending sensitive personal information.",
      ],
    },
    {
      icon: FiTarget,
      title: "2. How I Use Your Information",
      content: [
        "Information you provide is used to respond to your inquiries, discuss potential projects or professional opportunities, and communicate with you when necessary.",
        "I do not intentionally collect personal information for advertising, sell personal information, or use contact submissions for unrelated purposes.",
      ],
    },
    {
      icon: FiGlobe,
      title: "3. Third-Party Services",
      content: [
        "This portfolio may use third-party services for hosting, contact form processing, analytics, or external links.",
        "If the contact form uses FormSubmit, the information you submit may be processed by FormSubmit to deliver your message. Third-party services operate under their own privacy policies and terms.",
        "External websites, including GitHub and LinkedIn, have their own privacy practices. I am not responsible for the privacy policies or content of those websites.",
      ],
    },
    {
      icon: FiLock,
      title: "4. Data Security",
      content: [
        "I take reasonable steps to protect information shared through this portfolio. However, no method of transmission or electronic storage can be guaranteed to be completely secure.",
        "Please do not send passwords, financial information, government identification numbers, or other sensitive data through the contact form.",
      ],
    },
    {
      icon: FiUserCheck,
      title: "5. Data Retention and Your Choices",
      content: [
        "Personal information submitted through the contact form may be retained for as long as reasonably necessary to respond to your inquiry, maintain relevant communication, or meet applicable obligations.",
        "You may contact me to request access to, correction of, or deletion of information you have provided, subject to applicable legal and technical limitations.",
      ],
    },
    {
      icon: FiGlobe,
      title: "6. Cookies and Analytics",
      content: [
        "The portfolio may use essential technical features required for its operation, such as theme preferences. If analytics or other tracking tools are added, this policy should be updated to identify them and explain their use.",
        "Your browser may also store or process information according to the settings of the hosting platform or services you use to access this website.",
      ],
    },
    {
      icon: FiShield,
      title: "7. Children's Privacy",
      content: [
        "This portfolio is intended for a general audience and is not specifically directed at children. I do not knowingly seek to collect personal information from children.",
        "If you believe a child has submitted personal information through this website, please contact me so I can review the request.",
      ],
    },
    {
      icon: FiMail,
      title: "8. Changes to This Policy",
      content: [
        "This Privacy Policy may be updated as the portfolio, its features, or the services it uses change. Any revised version will be published on this page with an updated date.",
        "Visitors are encouraged to review this page periodically.",
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-[#EFFFF7] text-gray-900 transition-colors duration-300 dark:bg-[#020B0A] dark:text-white">
      <section className="mx-auto max-w-5xl px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        {/* Back Link */}
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <Link href="/" className="group mb-10 inline-flex items-center gap-2 text-sm font-medium text-gray-600 transition-colors hover:text-emerald-600 dark:text-gray-400 dark:hover:text-emerald-400">
            <FiArrowLeft className="transition-transform duration-300 group-hover:-translate-x-1" />
            Back to Home
          </Link>
        </motion.div>

        {/* Page Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="relative overflow-hidden rounded-3xl border border-emerald-600/10 bg-white/70 p-7 shadow-sm dark:border-emerald-400/10 dark:bg-[#061511]/70 sm:p-10">
          <div className="absolute -right-12 -top-16 h-48 w-48 rounded-full bg-emerald-400/10 blur-3xl" />
          <div className="relative z-10">
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
              <FiShield size={28} />
            </div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600 dark:text-emerald-400">
              Your Privacy Matters
            </p>
            <h1 className="text-3xl font-bold tracking-tight sm:text-5xl">
              Privacy Policy
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-gray-600 dark:text-gray-400">
              This page explains how information may be collected, used, and protected when you visit my portfolio or contact me.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-gray-500 dark:text-gray-400">
              <span className="rounded-full border border-emerald-600/15 bg-emerald-500/5 px-3 py-1.5 dark:border-emerald-400/10">
                Effective date: October 2, 2026
              </span>
              <span>Personal Portfolio of Avishek Roy Yash</span>
            </div>
          </div>
        </motion.div>

        {/* Introduction */}
        <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="mt-10 rounded-2xl border border-emerald-600/10 bg-white/50 p-6 dark:border-emerald-400/10 dark:bg-[#061511]/40 sm:p-8">
          <p className="text-base leading-8 text-gray-600 dark:text-gray-400">
            Welcome to my portfolio website. I’m <strong className="font-semibold text-gray-900 dark:text-white">Avishek Roy Yash</strong>, a Computer Science & Engineering student and Full Stack Developer. I respect your privacy and aim to handle the information you share with care. This policy describes the general practices relating to this website.
          </p>
        </motion.div>

        {/* Policy Sections */}
        <div className="mt-8 space-y-5">
          {sections.map((section, index) => {
            const Icon = section.icon;
            return (
              <motion.article key={section.title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.5, delay: (index % 3) * 0.05 }} className="rounded-2xl border border-emerald-600/10 bg-white/60 p-6 transition-colors dark:border-emerald-400/10 dark:bg-[#061511]/60 sm:p-8">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                    <Icon size={21} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h2 className="text-lg font-semibold text-gray-900 dark:text-white sm:text-xl">
                      {section.title}
                    </h2>
                    <div className="mt-3 space-y-3">
                      {section.content.map((paragraph, paragraphIndex) => (
                        <p key={paragraphIndex} className="text-sm leading-7 text-gray-600 dark:text-gray-400 sm:text-base">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Contact */}
        <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mt-8 rounded-2xl border border-emerald-600/15 bg-emerald-500/5 p-6 dark:border-emerald-400/10 sm:p-8">
          <div className="flex items-start gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
              <FiMail size={21} />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white sm:text-xl">
                9. Contact Me
              </h2>
              <p className="mt-3 text-sm leading-7 text-gray-600 dark:text-gray-400 sm:text-base">
                If you have questions about this Privacy Policy or wish to make a request regarding information you have submitted, you can contact me at:
              </p>
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=avishekroyyash@gmail.com" className="mt-3 inline-flex items-center gap-2 break-all font-semibold text-emerald-700 transition-colors hover:text-emerald-600 dark:text-emerald-400 dark:hover:text-emerald-300">
                <FiMail />
                avishekroyyash@gmail.com
              </a>
            </div>
          </div>
        </motion.div>

        {/* Footer Note */}
        <p className="mt-10 text-center text-xs leading-6 text-gray-500 dark:text-gray-500">
          This policy is a general privacy notice for a personal portfolio and is not legal advice. It should be reviewed and updated to reflect the website’s actual data practices and applicable laws.
        </p>
      </section>
    </main>
  );
}
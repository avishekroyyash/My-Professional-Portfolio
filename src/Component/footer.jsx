"use client";

import Link from "next/link";
import {
  FiArrowUpRight,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiMapPin,
} from "react-icons/fi";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Skills", href: "/skills" },
  { name: "Projects", href: "/projects" },
  { name: "Experience", href: "/experience" },
  { name: "Education", href: "/education" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];

const socials = [
  {
    name: "GitHub",
    href: "https://github.com/avishekroyyash",
    icon: FiGithub,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/avishek-roy-yash/",
    icon: FiLinkedin,
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-emerald-200/70 bg-[#E8F7EF] text-gray-900 transition-colors duration-300 dark:border-emerald-900/50 dark:bg-[#061B15] dark:text-white">

      <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-12">

        {/* ================= MAIN FOOTER ================= */}

        <div className="grid gap-10 py-12 md:grid-cols-[1.2fr_0.8fr_0.8fr] lg:py-14">

          {/* ================= BRAND ================= */}

          <div className="max-w-sm">

            <Link
              href="/"
              className="inline-flex items-center gap-2"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-600 font-bold text-white dark:bg-emerald-500 dark:text-gray-950">
                A
              </span>

              <span className="text-lg font-bold">
                Avishek Roy Yash
              </span>
            </Link>

            <p className="mt-5 text-sm leading-6 text-gray-600 dark:text-gray-400">
              Full Stack Developer and aspiring Software Engineer focused on
              building modern, responsive, and practical web applications.
            </p>

            {/* Location */}

            <div className="mt-5 flex items-center gap-2 text-sm text-gray-500 dark:text-gray-500">
              <FiMapPin className="text-emerald-600 dark:text-emerald-400" />
              Sylhet, Bangladesh
            </div>

            {/* Email */}

            <a
              href="mailto:your-email@gmail.com"
              className="mt-2 flex items-center gap-2 text-sm text-gray-500 transition-colors hover:text-emerald-600 dark:text-gray-500 dark:hover:text-emerald-400"
            >
              <FiMail className="text-emerald-600 dark:text-emerald-400" />
              your-email@gmail.com
            </a>

          </div>


          {/* ================= NAVIGATION ================= */}

          <div>

            <h3 className="text-sm font-semibold">
              Navigation
            </h3>

            <ul className="mt-5 grid grid-cols-2 gap-x-6 gap-y-3">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-600 transition-colors hover:text-emerald-600 dark:text-gray-400 dark:hover:text-emerald-400"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

          </div>


          {/* ================= CONNECT ================= */}

          <div>

            <h3 className="text-sm font-semibold">
              Connect
            </h3>

            <p className="mt-5 text-sm leading-6 text-gray-600 dark:text-gray-400">
              Interested in working together or discussing an opportunity?
            </p>

            <Link
              href="/contact"
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-emerald-600 transition-colors hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300"
            >
              Get in touch
              <FiArrowUpRight />
            </Link>


            {/* Social icons */}

            <div className="mt-6 flex items-center gap-3">

              {socials.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-emerald-200 bg-white text-gray-600 transition-all hover:-translate-y-0.5 hover:border-emerald-400 hover:text-emerald-600 dark:border-emerald-900/60 dark:bg-[#020B0A] dark:text-gray-400 dark:hover:border-emerald-500 dark:hover:text-emerald-400"
                  >
                    <Icon size={17} />
                  </a>
                );
              })}

            </div>

          </div>

        </div>


        {/* ================= BOTTOM BAR ================= */}

        <div className="flex flex-col gap-4 border-t border-emerald-200/70 py-6 dark:border-emerald-900/50 sm:flex-row sm:items-center sm:justify-between">

          <p className="text-xs text-gray-500 dark:text-gray-500">
            © {new Date().getFullYear()} Avishek Roy Yash. All rights reserved.
          </p>

          <div className="flex items-center gap-5">

            <Link
              href="/privacy"
              className="text-xs text-gray-500 transition-colors hover:text-emerald-600 dark:hover:text-emerald-400"
            >
              Privacy
            </Link>

            <Link
              href="/contact"
              className="text-xs text-gray-500 transition-colors hover:text-emerald-600 dark:hover:text-emerald-400"
            >
              Contact
            </Link>

            <a
              href="https://github.com/avishekroyyash"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs text-gray-500 transition-colors hover:text-emerald-600 dark:hover:text-emerald-400"
            >
              GitHub
              <FiArrowUpRight size={12} />
            </a>

          </div>

        </div>

      </div>
    </footer>
  );
}
import { FaGithub, FaInstagram, FaLink, FaTwitter } from "react-icons/fa";
export const metadata = {
  title: "IdeaVault || Footer",
};
const Footer = () => {
  return (
    <footer className="bg-white text-gray-600 dark:bg-black dark:text-[#d4d0d0] py-12 px-6 md:px-16 font-sans border-t border-gray-100 dark:border-none transition-colors duration-300">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Column 1: Brand & Socials */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2 font-bold text-xl">
            {/* IdeaVault Lightbulb Logo */}
            <svg
              className="w-8 h-8 text-[#246afc] transition-transform group-hover:scale-105"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
              />
              <circle cx="12" cy="10" r="1.5" className="fill-[#246afc]" />
            </svg>

            <span className="text-gray-900 dark:text-white">
              Idea<span className="text-[#246afc]">Vault</span>
            </span>
          </div>
          <p className="text-sm leading-relaxed max-w-sm text-gray-600 dark:text-[#e4e4e7]">
            A community platform where innovators share, validate, and grow
            startup ideas together.
          </p>
          {/* Social Media Icons */}
          <div className="flex gap-2 mt-2">
            {/* X (formerly Twitter) */}
            <a
              href="#"
              className="w-9 h-9 flex items-center justify-center rounded-lg border border-gray-200 dark:border-[#3f3f46] hover:bg-gray-50 dark:hover:bg-[#27272a] transition-colors"
            >
              <FaTwitter />
            </a>
            {/* LinkedIn */}
            <a
              href="#"
              className="w-9 h-9 flex items-center justify-center rounded-lg border border-gray-200 dark:border-[#3f3f46] hover:bg-gray-50 dark:hover:bg-[#27272a] transition-colors"
            >
              <FaLink />
            </a>
            {/* GitHub */}
            <a
              href="#"
              className="w-9 h-9 flex items-center justify-center rounded-lg border border-gray-200 dark:border-[#3f3f46] hover:bg-gray-50 dark:hover:bg-[#27272a] transition-colors"
            >
              <FaGithub />
            </a>
            {/* Instagram */}
            <a
              href="#"
              className="w-9 h-9 flex items-center justify-center rounded-lg border border-gray-200 dark:border-[#3f3f46] hover:bg-gray-50 dark:hover:bg-[#27272a] transition-colors"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Column 2: Platform */}
        <div className="flex flex-col gap-3">
          <h3 className="text-gray-900 dark:text-white font-bold text-sm tracking-wider uppercase">
            Platform
          </h3>
          <ul className="flex flex-col gap-2 text-sm font-medium text-gray-600 dark:text-[#d4d0d0]">
            <li>
              <a
                href="#"
                className="hover:text-black dark:hover:text-white transition-colors"
              >
                Ideas
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-black dark:hover:text-white transition-colors"
              >
                Categories
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-black dark:hover:text-white transition-colors"
              >
                Trending
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-black dark:hover:text-white transition-colors"
              >
                Submit idea
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3: Account */}
        <div className="flex flex-col gap-3">
          <h3 className="text-gray-900 dark:text-white font-bold text-sm tracking-wider uppercase">
            Account
          </h3>
          <ul className="flex flex-col gap-2 text-sm font-medium text-gray-600 dark:text-[#d4d0d0]">
            <li>
              <a
                href="#"
                className="hover:text-black dark:hover:text-white transition-colors"
              >
                Login
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-black dark:hover:text-white transition-colors"
              >
                Register
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-black dark:hover:text-white transition-colors"
              >
                My ideas
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-black dark:hover:text-white transition-colors"
              >
                Profile
              </a>
            </li>
          </ul>
        </div>

        {/* Column 4: Contact & Copyright */}
        <div className="flex flex-col gap-3 text-sm">
          <h3 className="text-gray-900 dark:text-white font-bold text-sm tracking-wider uppercase">
            Contact
          </h3>
          <div className="flex flex-col gap-2 font-medium text-gray-600 dark:text-[#d4d0d0]">
            <a
              href="mailto:hello@ideavault.io"
              className="flex items-center gap-2 hover:text-black dark:hover:text-white transition-colors"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              hello@ideavault.io
            </a>
            <div className="flex items-center gap-2">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              Dhaka, BD
            </div>
          </div>
          {/* Copyright Note */}
          <p className="text-xs text-gray-400 dark:text-[#71717a] mt-4 leading-normal">
            &copy; {new Date().getFullYear()} IdeaVault. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

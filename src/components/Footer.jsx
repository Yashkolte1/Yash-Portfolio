import { FiGithub, FiLinkedin, FiArrowUpRight } from "react-icons/fi";

const footerLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#work" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/Yashkolte1",
    icon: FiGithub,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/yash-kolte-b6849b332",
    icon: FiLinkedin,
  },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-10 border-t border-white/10 bg-[#070a12]/95">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#915EFF] to-transparent" />

      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-10 sm:px-16 lg:flex-row lg:items-center lg:justify-between">
        <div className="space-y-3">
          <a href="#" className="inline-flex items-center">
            <span className="mr-3 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-r from-gray-500 to-gray-100 text-xl font-bold text-purple-600">
              YK
            </span>

            <span className="bg-gradient-to-r from-gray-300 to-gray-100 bg-clip-text text-xl font-bold text-transparent">
              Yash Kolte
            </span>
          </a>

          <p className="max-w-sm text-sm leading-6 text-secondary">
            &copy; {year} Yash Kolte. All Rights Reserved.
          </p>
        </div>

        <nav className="flex flex-wrap gap-x-7 gap-y-3 text-sm font-medium text-secondary">
          {footerLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="transition-colors duration-300 hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {socialLinks.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              title={label}
              className="group flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] text-white transition-all duration-300 hover:-translate-y-1 hover:border-[#915EFF]/70 hover:bg-[#915EFF]/15 hover:shadow-lg hover:shadow-[#915EFF]/20"
            >
              <Icon className="h-5 w-5" />
            </a>
          ))}

          <a
            href="#"
            aria-label="Back to top"
            title="Back to top"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white text-primary transition-all duration-300 hover:-translate-y-1 hover:bg-[#dfd9ff]"
          >
            <FiArrowUpRight className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

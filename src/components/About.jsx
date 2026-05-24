import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { FiArrowUpRight, FiCheckCircle, FiDownload } from "react-icons/fi";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const MotionDiv = motion.div;
const MotionP = motion.p;

const highlights = [
  "Responsive interfaces with HTML/CSS, React, and Bootstrap",
  "Backend-ready MERN development with APIs and JWT auth",
  "Website deployment, hosting management, FTP handling, and cPanel workflows",
];

const stats = [
  { value: "Modern UI", label: "Clean & Interactive Design" },
  { value: "MERN", label: "Full Stack Projects" },
  { value: "100%", label: "Responsive" },
];

const ServiceCard = ({ index, title, icon: Icon }) => {
  return (
    <Tilt tiltMaxAngleX={8} tiltMaxAngleY={8} scale={1.02} transitionSpeed={450}>
      <MotionDiv
        variants={fadeIn("up", "spring", 0.16 * index, 0.75)}
        className="group h-full rounded-[18px] border border-white/10 bg-[#100d25]/85 p-[1px] shadow-card"
      >
        <div className="flex min-h-[210px] h-full flex-col items-center justify-center rounded-[18px] bg-gradient-to-b from-white/[0.06] to-transparent px-6 py-8 text-center transition duration-300 group-hover:bg-white/[0.08]">
          <div className="grid h-16 w-16 place-items-center rounded-2xl border border-cyan-300/20 bg-gradient-to-br from-cyan-300/15 to-violet-400/10 transition duration-300 group-hover:border-cyan-300/40">
            <Icon className="h-8 w-8 text-cyan-200" />
          </div>
          <h3 className="mt-6 text-[18px] font-bold leading-6 text-white">{title}</h3>
        </div>
      </MotionDiv>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <MotionDiv variants={textVariant()}>
        <p className={`${styles.sectionSubText} mt-5`}>Introduction</p>
        <h2 className={styles.sectionHeadText}>About Me.</h2>
      </MotionDiv>

      <div className="mt-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-stretch">
        <MotionDiv
          variants={fadeIn("right", "spring", 0.1, 0.9)}
          className="relative overflow-hidden rounded-[22px] border border-white/10 bg-[#100d25]/80 p-6 sm:p-8 "
        >
          <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-cyan-300 via-violet-400 to-fuchsia-400" />

          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-300/30 bg-emerald-400/10 px-3 py-1 text-[12px] font-semibold uppercase tracking-wider text-emerald-300">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              Available for Internships
            </span>
          </div>

          <p className="mt-4 text-[15px] font-semibold uppercase tracking-wider text-cyan-200">
            Web Developer / MERN Stack Learner
          </p>

          <MotionP
            variants={fadeIn("", "", 0.2, 1)}
            className="mt-5 text-[17px] leading-8 text-secondary"
          >
            Hi, I am Yash Kolte, aweb developer who enjoys building modern, responsive, and visually polished websites. I mainly work with HTML/CSS, React, Tailwind CSS, Bootstrap, and JavaScript to create smooth user experiences with clean layouts and interactive sections.
          </MotionP>

          <MotionP
            variants={fadeIn("", "", 0.3, 1)}
            className="mt-4 text-[17px] leading-8 text-secondary"
          >
            Along with frontend development, I also work with backend integration using the MERN stack and APIs whenever projects require real functionality. Recently, I’ve also been handling deployment tasks, managing websites through cPanel, FTP workflows, and hosting platforms like Hostinger hPanel.
          </MotionP>

          <div className="mt-7 space-y-4">
            {highlights.map((item, index) => (
              <MotionDiv
                key={item}
                variants={fadeIn("up", "spring", 0.35 + index * 0.08, 0.65)}
                className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.04] p-4"
              >
                <FiCheckCircle className="mt-1 h-5 w-5 shrink-0 text-cyan-200" />
                <span className="text-[14px] leading-6 text-white">{item}</span>
              </MotionDiv>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-300 to-violet-400 px-5 py-3 text-[14px] font-bold text-[#050816] transition duration-300 hover:shadow-lg hover:shadow-violet-500/25"
            >
              View Projects
              <FiArrowUpRight className="h-4 w-4" />
            </a>
            <a
              href="/resume.pdf"
              download="Yash-Kolte-Resume.pdf"
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-5 py-3 text-[14px] font-bold text-white transition duration-300 hover:border-cyan-300/40 hover:bg-white/[0.08]"
            >
              Download Resume
              <FiDownload className="h-4 w-4" />
            </a>
          </div>
        </MotionDiv>

        <MotionDiv
          variants={fadeIn("left", "spring", 0.2, 0.9)}
          className="grid gap-5"
        >
          <div className="grid grid-cols-3 overflow-hidden rounded-[18px] border border-white/10 bg-white/[0.04]">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`flex flex-col items-center justify-center px-3 py-5 text-center ${index === 1 ? "border-x border-white/10" : ""}`}
              >
                <p className="text-[22px] font-black text-white sm:text-[22px]">{stat.value}</p>
                <p className="mt-1 text-[10px] uppercase tracking-wider text-secondary sm:text-[11px]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {services.map((service, index) => (
              <ServiceCard key={service.title} index={index} {...service} />
            ))}
          </div>
        </MotionDiv>
      </div>
    </>
  );
};

const WrappedAbout = SectionWrapper(About, "about");

export default WrappedAbout;
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { FiArrowUpRight, FiExternalLink } from "react-icons/fi";

import { github } from "../assets";
import { projects } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

const MotionDiv = motion.div;

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  live_demo_link,
}) => {
  const demoLink = live_demo_link || source_code_link;

  return (
    <MotionDiv variants={fadeIn("up", "spring", index * 0.15, 0.75)}>
      <Tilt tiltMaxAngleX={8} tiltMaxAngleY={8} scale={1.01} transitionSpeed={450}>
        <article className="group flex h-full flex-col overflow-hidden rounded-[18px] border border-white/10 bg-[#100d25]/85 shadow-card">
          <div className="relative aspect-[16/10] overflow-hidden">
            <img
              src={image}
              alt={name}
              className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-[#050816]/20 to-transparent opacity-95" />

            <div className="absolute right-4 top-4 flex gap-3">
              <a
                href={source_code_link}
                target="_blank"
                rel="noreferrer"
                aria-label={`${name} GitHub repository`}
                className="grid h-10 w-10 place-items-center rounded-full border border-white/15 bg-black/60 backdrop-blur transition hover:border-cyan-300/70 hover:bg-black/80"
              >
                <img src={github} alt="" className="h-5 w-5 object-contain" />
              </a>
              <a
                href={demoLink}
                target="_blank"
                rel="noreferrer"
                aria-label={`${name} live preview`}
                className="grid h-10 w-10 place-items-center rounded-full border border-white/15 bg-black/60 text-white backdrop-blur transition hover:border-violet-300/70 hover:bg-black/80"
              >
                <FiExternalLink className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="flex flex-1 flex-col p-5">
            <h3 className="text-[20px] font-bold text-white">{name}</h3>
            <p className="mt-2 flex-1 text-[13px] leading-6 text-secondary">{description}</p>

            <div className="mt-5 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={`${name}-${tag.name}`}
                  className="rounded-full border border-white/10 bg-white/[0.05] px-2.5 py-0.5 text-[11px] font-semibold text-white"
                >
                  #{tag.name}
                </span>
              ))}
            </div>

            <div className="mt-5 flex gap-3">
              <a
                href={demoLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-cyan-300 to-violet-400 px-4 py-2.5 text-[12px] font-bold text-[#050816] transition duration-300 hover:shadow-lg hover:shadow-violet-500/25"
              >
                View Demo
                <FiArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href={source_code_link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] px-4 py-2.5 text-[12px] font-bold text-white transition duration-300 hover:border-cyan-300/40 hover:bg-white/[0.08]"
              >
                Code
              </a>
            </div>
          </div>
        </article>
      </Tilt>
    </MotionDiv>
  );
};

const Projects = () => {
  return (
    <>
      <MotionDiv variants={textVariant()}>
        <p className={`${styles.sectionSubText} mt-5`}>Real work showcase</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </MotionDiv>

      <div className="mt-4 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
        <MotionDiv
          variants={fadeIn("", "", 0.1, 1)}
          className="max-w-3xl text-[17px] leading-8 text-secondary"
        >
          A few projects I have built while improving my frontend and full-stack workflow.
          Each one focuses on clear UI, responsive layouts, and practical features.
        </MotionDiv>

        {/* <MotionDiv
          variants={fadeIn("left", "spring", 0.2, 0.75)}
          className="grid w-full max-w-sm grid-cols-3 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04]"
        >
          <div className="px-4 py-3 text-center">
            <p className="text-[24px] font-black text-white">{projects.length}+</p>
            <p className="text-[11px] uppercase tracking-wider text-secondary">Projects</p>
          </div>
          <div className="border-x border-white/10 px-4 py-3 text-center">
            <p className="text-[24px] font-black text-white">MERN</p>
            <p className="text-[11px] uppercase tracking-wider text-secondary">Focus</p>
          </div>
          <div className="px-4 py-3 text-center">
            <p className="text-[24px] font-black text-white">UI</p>
            <p className="text-[11px] uppercase tracking-wider text-secondary">Polish</p>
          </div>
        </MotionDiv> */}
      </div>

      <div className="mx-auto mt-14 grid max-w-4xl gap-y-8 md:grid-cols-2 md:gap-x-16">
        {projects.map((project, index) => (
          <ProjectCard key={project.name} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

const WrappedProjects = SectionWrapper(Projects, "projects");

export default WrappedProjects;

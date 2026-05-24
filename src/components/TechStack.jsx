import { motion } from "framer-motion";
import { FiCloud, FiCode, FiDatabase, FiKey, FiLayers, FiTool } from "react-icons/fi";
import {
  SiBootstrap,
  SiCloudinary,
  SiGithub,
  SiPostman,
  SiRender,
  SiVercel,
} from "react-icons/si";

import { technologies } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

const MotionDiv = motion.div;
const MotionArticle = motion.article;

const reactIconByName = {
  Bootstrap: { icon: SiBootstrap, color: "text-[#7952b3]" },
  "Authentication (JWT)": { icon: FiKey, color: "text-amber-200" },
  "REST API Development": { icon: FiDatabase, color: "text-cyan-200" },
  "API Integration": { icon: FiCloud, color: "text-sky-200" },
  GitHub: { icon: SiGithub, color: "text-white" },
  Vercel: { icon: SiVercel, color: "text-white" },
  Render: { icon: SiRender, color: "text-[#46e3b7]" },
  Postman: { icon: SiPostman, color: "text-[#ff6c37]" },
  Cloudinary: { icon: SiCloudinary, color: "text-[#3448c5]" },
};

const categories = [
  {
    title: "Frontend",
    icon: FiLayers,
    description: "Responsive interfaces, smooth animation, and reusable React UI.",
    skills: ["HTML 5", "CSS 3", "JavaScript", "React JS", "Bootstrap", "Tailwind CSS"],
  },
  {
    title: "Backend",
    icon: FiDatabase,
    description: "Server logic, APIs, authentication flows, and database-driven apps.",
    skills: [
      "Node JS",
      "MongoDB",
      "Authentication (JWT)",
      "REST API Development",
      "API Integration",
    ],
  },
  {
    title: "Creative Web",
    icon: FiCode,
    description: "Interactive 3D, modern motion, and detail-focused portfolio experiences.",
    skills: ["Three JS", /*"TypeScript"*/],
  },
  {
    title: "Tools",
    icon: FiTool,
    description: "Version control, deployment, API testing, and cloud media management.",
    skills: ["git", "GitHub", "Vercel", "Render", "Postman", "Cloudinary"],
  },
];

const iconByName = technologies.reduce((acc, item) => {
  acc[item.name] = item.icon;
  return acc;
}, {});

const CategoryCard = ({ category, index }) => {
  const Icon = category.icon;

  return (
    <MotionArticle
      variants={fadeIn("up", "spring", index * 0.12, 0.75)}
      className="group relative overflow-hidden rounded-[18px] border border-white/10 bg-[#100d25]/80 p-5 sm:p-7"
    >
      <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-cyan-300 via-violet-400 to-fuchsia-400 opacity-80" />

      <div className="flex items-start gap-4">
        <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-violet-300/30 bg-violet-500/10 text-cyan-200 transition-colors duration-300 group-hover:bg-violet-500/20">
          <Icon className="h-6 w-6" />
        </div>
        <div>
          <h3 className="text-[22px] font-bold text-white">{category.title}</h3>
          <p className="mt-2 text-[14px] leading-6 text-secondary">{category.description}</p>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3">
        {category.skills.map((skill) => (
          (() => {
            const SkillIcon = reactIconByName[skill]?.icon;
            const iconColor = reactIconByName[skill]?.color || "text-cyan-100";

            return (
          <div
            key={skill}
            className="flex min-h-[86px] flex-col items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] px-3 py-4 text-center transition duration-300 hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-white/[0.07]"
          >
            {iconByName[skill] ? (
              <img src={iconByName[skill]} alt={skill} className="h-9 w-9 object-contain" />
            ) : SkillIcon ? (
              <SkillIcon className={`h-9 w-9 ${iconColor}`} aria-hidden="true" />
            ) : (
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-cyan-300/20 to-violet-500/25 text-[13px] font-black text-cyan-100">
                {skill
                  .split(" ")
                  .map((word) => word[0])
                  .join("")
                  .replace(/[^A-Za-z]/g, "")
                  .slice(0, 3)
                  .toUpperCase()}
              </span>
            )}
            <span className="mt-3 text-[12px] font-semibold text-white">{skill}</span>
          </div>
            );
          })()
        ))}
      </div>
    </MotionArticle>
  );
};

const TechStack = () => {
  return (
    <>
      <MotionDiv variants={textVariant()}>
        <p className={`${styles.sectionSubText} mt-5`}>My technical toolkit</p>
        <h2 className={styles.sectionHeadText}>Tech Stack & Skills.</h2>
      </MotionDiv>

      <MotionDiv
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 max-w-3xl text-[17px] leading-8 text-secondary"
      >
        The tools and technologies I use most while building responsive interfaces,
        connecting APIs, testing features, and preparing projects for deployment.
      </MotionDiv>

      <div className="mt-14 grid gap-6 md:grid-cols-2">
        {categories.map((category, index) => (
          <CategoryCard key={category.title} category={category} index={index} />
        ))}
      </div>
    </>
  );
};

const WrappedTechStack = SectionWrapper(TechStack, "skills");

export default WrappedTechStack;

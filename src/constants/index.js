import { FiLayout, FiServer, FiSmartphone, FiCloud } from "react-icons/fi";

import {
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  edgelinktechnology,
  fingenius,
  wordninja,
  Portfollio,
  quizapp,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Development",
    icon: FiLayout,
  },
  {
    title: "Backend & APIs",
    icon: FiServer,
  },
  {
    title: "Responsive Design",
    icon: FiSmartphone,
  },
  {
    title: "Deployment & Hosting",
    icon: FiCloud,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Bootstrap",
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  // {
  //   title: "React.js Developer",
  //   company_name: "Starbucks",
  //   icon: starbucks,
  //   iconBg: "#383E56",
  //   date: "March 2020 - April 2021",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "React Native Developer",
  //   company_name: "Tesla",
  //   icon: tesla,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2021 - Feb 2022",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  {
    title: "Web Developer",
    company_name: "Edgelink Technology Pvt Ltd.",
    icon: edgelinktechnology,
    iconBg: "#383E56",
    date: "Dec 2025 - Jun 2026",
    points: [
      "Developing responsive and modern websites using HTML, CSS, Bootstrap, and JavaScript for real client projects. Focused on clean layouts, smooth responsiveness, interactive UI sections, and optimized user experience across devices.",
      "Also working with website deployment, cPanel management, FTP handling, domain setup, and Hostinger hPanel while maintaining clean and organized production-ready code.",
      "Implementing interactive features using JavaScript to enhance user experience and functionality.",
      "Managing complete website workflows from understanding client requirements and creating responsive UI layouts to implementing interactive features, optimizing performance, and handling final deployment through cPanel, FTP, domain setup, and Hostinger hPanel with clean production-ready code.",
    ],
  },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "FinGenius",
    description:
      "An AI-powered personal finance app for tracking income, expenses, and savings with smart dashboards, receipt scanning, automated reports, and interactive data visualization.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
       {
        name: "nodejs",
        color: "pink-text-gradient",
      },
    ],
    image: fingenius,
    source_code_link: "https://github.com/Yashkolte1/FinGenius-Frontend",
    live_demo_link: "https://fin-genius-frontend-rby8.vercel.app/",
  },
  {
    name: "Word-Ninja",
    description:
      "A Java-based typing game focused on improving speed and accuracy with animations, score tracking, sound effects, and interactive gameplay controls.",
    tags: [
      {
        name: "java",
        color: "blue-text-gradient",
      },
      {
        name: "JDBC",
        color: "green-text-gradient",
      },
     
    ],
    image: wordninja,
    source_code_link: "https://github.com/Yashkolte1/Word-Ninja-Game",
    live_demo_link: "https://github.com/Yashkolte1/Word-Ninja-Game",
  },
  {
    name: "Multi Topic Quiz",
    description:
      "A dynamic quiz application with multiple categories, real-time scoring, timers, progress tracking, and instant feedback for an interactive learning experience.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "js",
        color: "pink-text-gradient",
      },
    ],
    image: quizapp,
    source_code_link: "https://github.com/Yashkolte1/Multi-Topic-Quiz-App",
    live_demo_link: "https://multi-topicquizappkyash.netlify.app/",
  },
  {
    name: "Portfolio(HTML)",
    description:
      "A responsive portfolio website showcasing skills, projects, and achievements with smooth animations, modern layouts, and clean user-focused design.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "js",
        color: "pink-text-gradient",
      },
    ],
    image: Portfollio,
    source_code_link: "https://github.com/Yashkolte1/Personal-Portfolio",
    live_demo_link: "https://portfolio2455.netlify.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };

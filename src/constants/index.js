import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  pptv,
  exhibit,
  colmusk,
  zerohunger,
  dashboard,
  task,
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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Mobile Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "UI/UX",
    icon: creator,
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
    name: "Redux Toolkit",
    icon: redux,
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
];

const experiences = [
    {
    title: "Software Engineer",
    company_name: "Comligo Spanish",
    icon: colmusk,
    iconBg: "#383E56",
    date: "May 13, 2025 – Present",
    points: [
      "Built and maintained web applications using Nuxt, Firebase, and related technologies.",
      "Worked closely with designers, product managers, and developers to deliver high-quality features.",
      "Ensured responsive design principles and cross-browser compatibility across applications.",
      "Contributed to code reviews by giving and receiving constructive feedback to improve code quality.",
    ],
   },
   {
    title: "Software Developer",
    company_name: "Colmusk",
    icon: colmusk,
    iconBg: "#383E56",
    date: "April 14, 2025 – April 30, 2026",
    points: [
      "Built and maintained web applications using TypeScript, Node.js, and related technologies.",
      "Worked closely with designers, product managers, and developers to deliver high-quality features.",
      "Ensured responsive design principles and cross-browser compatibility across applications.",
      "Contributed to code reviews by giving and receiving constructive feedback to improve code quality.",
    ],
  },
  {
    title: "Backend Developer",
    company_name: "Laara",
    icon: exhibit,
    iconBg: "#383E56",
    date: "Sep 3, 2024 – Sep 24, 2025",
    points: [
      "Developing and maintaining a contract-based web application using Nest.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create a high-quality product.",
      "Contributed to API development, database integration, and backend performance improvements.",
      "Participated in code reviews, provided and applied feedback to improve code quality and maintainability.",
    ],
  },
  // {
  //   title: "Web Developer",
  //   company_name: "PPPTV",
  //   icon: pptv,
  //   iconBg: "#E6DEDD",
  //   date: "May 2023 - July 2023",
  //   points: [
  //     "Maintaining company website using React.js.",
  //     "Creating and updating the UI/UX to ensure viewers have the best experience. ",
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
    name: "AfyaPlay",
    description:
      "A mobile application that allows users to track their fitness journey, join community challenges near them, and earn real rewards. Built for Africa, it makes fitness accessible, social, and rewarding.",
      tags: [
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
      {
        name: "python",
        color: "green-text-gradient",
      },
      {
        name: "live tracking",
        color: "pink-text-gradient",
      },
    ],
    image: task,
    source_code_link: "https://afyaplay.co.ke",
  },
  {
    name: "Zero Hunger",
    description:
    "AI-powered food rescue platform that aims to bridge the gap between abundance and need, utilizing artificial intelligence to connect donors to recipients to streamline food donation process, ensuring nutritious food gets into the hands of those who need it most while reducing food waste and its environmental impact.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "geminiAI",
        color: "green-text-gradient",
      },
      {
        name: "nodejs",
        color: "pink-text-gradient",
      },
    ],
    image: zerohunger,
    source_code_link: "https://zerohungerhackathon-production-3f8a.up.railway.app/",
  },
  {
    name: "Smart Shule",
    description:
      "Web-based school management application that enables school admin can manage students, classes and teachers' information as well as keeping track of a student’s school attendance and performance.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "nodejs",
        color: "pink-text-gradient",
      },
    ],
    image: dashboard,
    source_code_link: "https://github.com/Phase-5-Capstone-Project",
  },
];

export { services, technologies, experiences, testimonials, projects };

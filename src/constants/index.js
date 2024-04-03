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
    title: "React Developer",
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
    title: "React.js Developer",
    company_name: "Exhibit",
    icon: exhibit,
    iconBg: "#383E56",
    date: "Feb 3, 2024 – Feb 27, 2024 ",
    points: [
      "Developing and maintaining a contract-based web application using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create a high-quality product.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "PPPTV",
    icon: pptv,
    iconBg: "#E6DEDD",
    date: "May 2023 - July 2023",
    points: [
      "Maintaining company website using React.js.",
      "Creating and updating the UI/UX to ensure viewers have the best experience. ",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
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
  {
    name: "Task Manager",
    description:
      "CLI platform that allows users to add, delete, and manage tasks from various categories, providing a convenient and efficient solution for task management.",
      tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "bash",
        color: "green-text-gradient",
      },
      {
        name: "commandline",
        color: "pink-text-gradient",
      },
    ],
    image: task,
    source_code_link: "https://github.com/codeitownit/Phase-3-Final-Project-Nandi",
  },
];

export { services, technologies, experiences, testimonials, projects };

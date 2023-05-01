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
  docker,
  threejs,
} from "../assets";
import apartment from "../assets/apartment.png";
import meladora from "../assets/meladora.png";
import mapbox from "../assets/mapbox.png";
import proton from "../assets/company/proton.png";
import optima from "../assets/company/optima.png";

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
    id: "project",
    title: "Project",
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
    title: "Next.js",
    icon: backend,
  },
  {
    title: "React Native",
    icon: mobile,
  },
  {
    title: "Three.js",
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
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Web Developer",
    company_name: "Proton.az",
    icon: proton,
    iconBg: "#43274f",
    date: "Feb 2022 - Apr 2022",
    points: [
      "Developing and maintaining web applications using appropriate technologies.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React.js Developer",
    company_name: "Optima Group CO",
    icon: optima,
    iconBg: "#86479c",
    date: "May 2022 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Narmin proved me wrong.",
    name: "Sabina Shukurova",
    designation: "FrontEnd",
    company: "Optima Group CO",
    image:
      "https://images.unsplash.com/photo-1619420674819-da50b9f76950?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDJ8fGdpcmwlMjB3b3JrJTIwcHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Narmin does.",
    name: "Emil Sultanov",
    designation: "Team Lead",
    company: "Cybernet LLC",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Ym95JTIwd29yayUyMHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  },
  {
    testimonial:
      "After Narmin optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Naila Gasimova",
    designation: "PM",
    company: "Optima Group CO",
    image:
      "https://images.unsplash.com/photo-1604072366595-e75dc92d6bdc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fGdpcmwlMjBwcm9maWxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
];

const projects = [
  {
    title: "Figma House",
    description: "",
    tags: [
      {
        name: "react",
        color: "text-blue-400",
      },
      {
        name: "redux-toolkit",
        color: "text-green-400",
      },
      {
        name: "scss",
        color: "text-pink-400",
      },
    ],
    image: apartment,
    source_code_link:
      "https://github.com/NarminHuseynova/figma-house-task-redux-toolkit",
  },
  {
    title: "Meladora",
    description: "",
    tags: [
      {
        name: "javascript",
        color: "text-yellow-400",
      },
      {
        name: "css",
        color: "text-pink-400",
      },
    ],
    image: meladora,
    source_code_link: "https://github.com/NarminHuseynova",
  },
  {
    title: "Mapbox",
    description: "",
    tags: [
      {
        name: "react",
        color: "text-blue-400",
      },
      {
        name: "react-map-gl",
        color: "text-green-400",
      },
      {
        name: "css",
        color: "text-pink-400",
      },
    ],
    image: mapbox,
    source_code_link: "https://github.com/NarminHuseynova",
  },
];

export { services, technologies, experiences, testimonials, projects };

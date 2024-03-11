import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

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
  meta,
  starbucks,
  tesla,
  shopify,
  buffaloswap,
  ruggedrevenants,
  chatify,
  threejs,
} from "../assets";

export const navLinks: TNavLink[] = [
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

const services: TService[] = [
  {
    title: "Solidity Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Full-Stack Developer",
    icon: creator,
  },
];

const technologies: TTechnology[] = [
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

const experiences: TExperience[] = [
  {
    title: "Frontend Developer",
    companyName: "Atos",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Aug 2017 - March 2018",
    points: [
      "Added an additional average of 25% increase in annual company revenue with an average of 15 clients per month",
      "Responsible for the quality of the user experience by developing tests suites that maintain functionality, performance and user flows across all modern browsers",
      "Developed 10+ cluster projects and utilized public cloud, computing infrastructure services",
      "Designed 20+ front-end Web Interface for engineers and test ops to control and monitor the onboard system using Angular2",
      "Translated designs and wireframes into high quality code",
      "Analyzed and optimized performance bottlenecks in 8+ existing backend systems, such as database queries and storage solutions, to increase responsiveness",
    ],
  },
  {
    title: "Senior Frontend Developer",
    companyName: "Bitorix",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "May 2018 - Feb 2020",
    points: [
      "Increased daily traffic from 45% to 80% in E-commerce platforms by redesigning existing websites to improve user experience and incorporated SEO",
      "Designed and developed interfaces of Blockchain Web app that simplify dense information streams and solicit user interactions with machine learning feedback systems that feel intuitive and familiar",
      "Developed app integration with REST and other APIs for Google Maps, social media logins, payment processors, and other services",
      "Collaborated with 2 different development teams on 4 new project designs and feature improvements",
      "Suggested 20+ improvements to product design and functionality as informed by user￾experience reporting",
      "Architected, implemented, and maintained 5 performant and scalable data-processing back-end system",
    ],
  },
  {
    title: "Solidity Developer",
    companyName: "Neusis",
    icon: shopify,
    iconBg: "#383E56",
    date: "April 2021 - Sept 2023",
    points: [
      "Increased customer rating and satisfaction from 30% to 60% by implementing new ideas in smart contracts for NFT minting with solidity",
      "Collaborated with the UX/UI design teams and used various Web APIs such as HTTP, REST, and JSON to improve the website and applications, increasing conversion rates by 25%",
      "Created a system consist of swap, pool, staking, lending and borrowing contracts using solidity which improved the company income to 130%",
      "Implemented 3rd-party integrations, such as payment and authentication systems",
      "Built and maintained strategic relationships with potential investors and business partners and brainstormed new ideas",
      "Collaborated with colleagues from other teams to participate in the creation and testing of new software applications Increased 24% faster loading time and time spam per visit by +70 seconds in 5+ projects",
    ],
  },
  {
    title: "Blockchain Developer",
    companyName: "Room-Res",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Feb 2024",
    points: [
      "Led the development of a highly successful hotel/flight reservation system that exceeded  customer expectations and drove growth(Blockchain, Golang, React)",
      "Development of a project governance token and getting audited by Certik",
      "Initiated ideas for extending the project to multi-chain",
      "Integrated 20+ provider APIs using Rest, SOAP and graphQL",
    ],
  },
];

const testimonials: TTestimonial[] = [
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

const projects: TProject[] = [
  {
    name: "BuffaloSwap",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "Web3.js",
        color: "green-text-gradient",
      },
      {
        name: "Solidity",
        color: "pink-text-gradient",
      },
    ],
    image: buffaloswap,
    sourceCodeLink: "https://github.com/Roaring0628/BuffaloSwap",
  },
  {
    name: "Rugged Revenants",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "Rust",
        color: "green-text-gradient",
      },
      {
        name: "Solana Blockchain",
        color: "pink-text-gradient",
      },
    ],
    image: ruggedrevenants,
    sourceCodeLink: "https://github.com/Roaring0628/Rugged-Revenants",
  },
  {
    name: "Chatify",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "Firebase",
        color: "green-text-gradient",
      },
      {
        name: "Material-UI",
        color: "pink-text-gradient",
      },
    ],
    image: chatify,
    sourceCodeLink: "https://github.com/Roaring0628/Chatify",
  },
];

export { services, technologies, experiences, testimonials, projects };

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
    carrent,
    jobit,
    tripguide,
    threejs,
    first,
    cp,
    logo_mit,
    gdsc,
    clang,
    cpplang,
    java,
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
      title: "Content Creator",
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
    // {
    //   name: "Redux Toolkit",
    //   icon: redux,
    // },
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
    // {
    //   name: "figma",
    //   icon: figma,
    // },
    // {
    //   name: "docker",
    //   icon: docker,
    // },
    {
      name: 'c',
      icon: clang
    },
    {
      name: 'c++',
      icon: cpplang
    },
    {
      name: 'java',
      icon: java
    },
  ];
  
  const experiences = [
    {
      title: "Highest CGPA in Btech (CSE)",
      company_name: "8.85",
      icon: first,
      iconBg: "#383E56",
      date: "November 2021 - August 2022",
      points: [
        "Acknowledged by many faculties as a Fast Learner and Practical approach",
        "Good problem interpretation skills and presentation skills",
        "Great problem analyzing and solving ability",
        "Great in Mathematics, and Data Structures & Algorithms",
      ],
    },
    {
      title: "1/94 Position in Coding competition conducted by Google student club.",
      company_name: "CodeWarrior 3.0",
      icon: cp,
      iconBg: "#E6DEDD",
      date: "March 2023",
      points: [
        "Competitive coding competition including great level DSA questions",
        "Also came 3/65 Position in Startup idea pitching competition (Knockdown), conducted by google developer student club",
        "Recieved a cash prize of 1000 Rs cash prize for CodeWarrior and 300 Rs cash prize for Knockdown",
      ],
    },
    {
      title: "Secretary @ Student Council",
      company_name: "Mahakal Institute of Technology and Management ",
      icon: logo_mit,
      iconBg: "#383E56",
      date: "Feb 2023 - Present",
      points: [
        "Selected as a core part of student council of my institution",
        "Handled many responsibilities at the same time",
        "Also held responsible position of coordinator in many cultural events of the institution",
      ],
    },
    {
      title: "GDSC LEAD",
      company_name: "Mahakal Group Of Institutes",
      icon: gdsc,
      iconBg: "#E6DEDD",
      date: "July 2023 - Present",
      points: [
        "Official lead of Google developer student club in my institution",
        "Intorduced new technologies to the students of institution through many events, sessions and competitions",
        "Managed a team of 18+ Core members in the Google developer student club",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Testimonial",
      name: "coming soon",
      designation: "ABCD",
      company: "EFGH",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "Testimonial",
      name: "Coming soon!",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "Testimonial",
      name: "coming Soon!",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "PROJECT",
      description:
        "coming soon!",
      tags: [
        {
          name: "tag1",
          color: "blue-text-gradient",
        },
        {
          name: "tag2",
          color: "green-text-gradient",
        },
        {
          name: "tag3",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "PROJECT",
      description:
        "Coming soon!",
      tags: [
        {
          name: "tag1",
          color: "blue-text-gradient",
        },
        {
          name: "tag2",
          color: "green-text-gradient",
        },
        {
          name: "tag3",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "PROJECT",
      description:
        "coming Soon!",
      tags: [
        {
          name: "tag1",
          color: "blue-text-gradient",
        },
        {
          name: "tag2",
          color: "green-text-gradient",
        },
        {
          name: "tag3",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
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
  Curika,
  Ennovate,
  mulika,
  angularminds,
  vuejs,
  MySQL,
  Eduracle,
  bharatpost,
  hrm
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
    title: "React Js Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Vue Js Developer",
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
    name: "git",
    icon: git,
  },
  {
    name: "Vue JS",
    icon: vuejs,
  },
  {
    name: "MySQL",
    icon: MySQL,
  },
];

const experiences = [
  {
    title: "Full stack Developer",
    company_name: "Enovate-IT Outsourcing Pvt. Ltd.",
    icon: Ennovate,
    iconBg: "#383E56",
    date: "August 2021 - November 2023",
    points: [
      "Achieved a low bug density rate, resulting in a 20% decrease in bug-related issues and expedited bug resolution.",
      "Conducted 20 monthly code reviews, spotting critical bugs, cutting costs in the software development bug-fix process.",
      "Consistently delivered cross-device consistency with responsive designs, reducing user complaints by 75%.",
      "Used Node.js strengths to seamlessly integrate with existing architecture, employing an efficient library for dynamic PDF generation.",
      "Utilized automated migration over manual data entry, improving database efficiency and reducing potential errors."
    ]
      },
  {
    title: "Junior Software Developer",
    company_name: "Mulika Infotech private limited",
    icon: mulika,
    iconBg: "#E6DEDD",
    date: "Dec 2020 - July 2021",
    points: [
      "DDeveloped and implemented RESTful APIs, boosting communication efficiency between frontend and backend systems.",
      "Converted project needs to technical specs, fostering clear communication and efficient development processes.",
      "Actively contribute in team projects, providing valuable insights and fostering effective communication.",
      "Stayed updated on software trends, proposing innovations to drive excellence and progress.",
    ],
  },
  // {
  //   title: "Software Engineer",
  //   company_name: "Angular Minds",
  //   icon: angularminds,
  //   iconBg: "#383E56",
  //   date: "Dec 2019 - June 2020",
  //   points: [
  //     "Allocated time for ongoing learning, attaining proficiency in three additional programming languages and frameworks over the last year.",
  //     "Reduced user downtime by promptly resolving bugs, leading to a 15% increase in overall user satisfaction.",
  //   ],
  // },
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
    name: "Eduracle",
    description:
      "Eduracle is a web-based educational platform that accommodates various user categories, including directors, coordinators, students, parents, and teachers. Within this website, students have the capability to access and view the institute’s test schedule, check their results, and verify the correctness of their answers. This website primarily serves institutes seeking to conduct online exams and prepare their students for a wide range of test formats.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "MySQL",
        color: "green-text-gradient",
      },
      {
        name: "Vue Js",
        color: "pink-text-gradient",
      },

      {
        name: "Vuetify",
        color: "red-text-gradient",
      },

      {
        name: "Node Js",
        color: "violet-text-gradient",
      },
    ],
    image: Eduracle,
    site_link: "https://www.eduracle.com/"
    // source_code_link: "https://github.com/",
  },
  {
    name: "HRM",
    description:
      `HRM, a leave management system, operates much like GreyHR but boasts a more streamlined approach. This tool efficiently handles leave requests within organizations, providing a seamless process for employees to apply for and request leaves. Its enhanced functionality ensures a more prominent and efficient leave management experience compared to GreyHR, making it a valuable asset for organizations seeking a simplified and effective solution for managing employee leave requests.`,
    tags: [
      {
        name: "React JS",
        color: "blue-text-gradient",
      },
      {
        name: "Node JS",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
    ],
    image: hrm,
    site_link: 'https://ngo.tadbox.com/user/login',
    // source_code_link: "https://github.com/",
  },
  {
    name: "KPI",
    description:
      "The KPI project has empowered stakeholders by providing actionable insights, promoting a culture of data-driven decision-making. This contribution has significantly enhanced the overall efficiency and effectiveness of organizational processes. The project's focus on key performance indicators (KPIs) has proven instrumental in guiding stakeholders toward informed decisions, thereby positively impacting the organization's operational outcomes.",
      tags: [
        {
          name: "React JS",
          color: "blue-text-gradient",
        },
        {
          name: "Node JS",
          color: "green-text-gradient",
        },
        {
          name: "MongoDB",
          color: "pink-text-gradient",
        },
      ],
    image: hrm,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
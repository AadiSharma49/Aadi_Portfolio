import {
  FaXTwitter,
  FaGithub,
  FaLinkedin,
  FaDiscord,
  FaInstagram,
} from "react-icons/fa6";

import projectImage1 from "../assets/project1.jpeg";
import projectImage2 from "../assets/project2.jpeg";
import projectImage3 from "../assets/project3.jpeg";
import projectImage4 from "../assets/project4.jpeg";
import projectImage5 from "../assets/project5.jpeg";
import projectImage6 from "../assets/project6.jpeg";

import { SiHtml5 } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { SiPython } from "react-icons/si";
import { SiCplusplus } from "react-icons/si"; // For C++
import { SiC } from "react-icons/si"; // For C
import { SiGodotengine } from "react-icons/si";
import { SiGit } from "react-icons/si";
import { SiGithub } from "react-icons/si";
import { SiLinux } from "react-icons/si";
import { RiComputerLine } from "react-icons/ri"; // React Icons (Ri) module for specific icons like RiComputerLine




// import { TbBrandNextjs } from "react-icons/tb";
// import { SiMongodb } from "react-icons/si";
// import { DiRedis } from "react-icons/di";

// import { BiLogoPostgresql } from "react-icons/bi";

export const NAVIGATION_LINKS = [

  { label: "Home", href: "#Home" },
  { label: "About", href: "#About" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  // { label: "Work Experience", href: "#work" },
  // { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const HERO = {
  name: "Aaditya Sharma",
  greet: "Hello there! 👋🏻",
  description:
    "I am a passionate Software Developer and creating beautiful and functional Web Applications. I like gaming, open-source contributions, and learning new things.",
    resumeLinkText: "Download Resume",
  resumeLink: "https://drive.google.com/file/d/13wT4JBFxgS7TvOMNCSxJzq-Io_x7kjNK/view?usp=sharing",
};

export const PROJECTS = [
  {
    id: 1,
    name: "System Monitor Software",
    description:
      "It provides real-time insights into system performance, including CPU, memory, disk usage, and GPU stats.The app is designed to be simple, efficient, and user-friendly.",
    image: projectImage1,
    githubLink: "https://github.com/AadiSharma49/System-Monitor",
  },
  {
    id: 2,
    name: "AI Chat Bot Website",
    description:
      "This is a React.js web application that allows users to interact with an AI chatbot powered by OpenAI.It is designed to be responsive, ensuring a seamless user experience across different devices.",
    image: projectImage2,
    githubLink: "https://github.com/AadiSharma49/CHAT-AI",
  },
  {
    id: 3,
    name: "Coin Chaser",
    description:
      "The game is designed and created by a single indie developer using the Godot Engine. In Coin Chaser, players navigate through various levels, collecting coins and avoiding enemies in a fast-paced, action-packed environment. ",
    image: projectImage3,
    githubLink: "https://github.com/AadiSharma49/Coin-Chaser",
  },
  {
    id: 4,
    name: "Quotes-Site",
    description:
      " This is a responsive web application built with React that allows users to explore inspirational quotes, generate new ones, and manage their favorites. .",
    image: projectImage4,
    githubLink: "https://github.com/AadiSharma49/Quotes-App",
  },
  {
    id: 5,
    name: "Coin Chaser Unreal Engine",
    description:
      "Built using Unreal Engine 5 and Blueprints, this game offers a vibrant environment and smooth gameplay, delivering an engaging experience for players.",
    image: projectImage5,
    githubLink: "https://github.com/AadiSharma49/Coin-Chaser--Unreal-engine",
  },
  {
    id: 6,
    name: "Clipboard Restriction",
    description:
      "This Windows application monitors the clipboard for file copy-paste actions. It restricts any attempt to paste files outside a designated root folder, displaying a warning message if the operation is unauthorized.",
    image: projectImage6,
    githubLink: "https://github.com/AadiSharma49/-Clipboard-Restriction",
  },
];

export const ABOUT = [
  "I am a creative and detail-oriented software developer with hands-on experience in front-end development and game design. Proficient in technologies like HTML, CSS, JavaScript, React, and Python, I thrive on creating user-friendly interfaces and engaging digital experiences. My recent projects include developing responsive web applications and crafting games like Coin Chaser using the Godot engine.",
"With a solid foundation in programming languages such as C++, C, and Python, I am also exploring Linux system-level projects while currently learning backend development and new technologies like Node.js, Next.js, MongoDB and Firebase.",
"Currently pursuing my BCA degree, I balance academic learning with professional growth. Outside of work, I channel creativity through gaming, project building, and cricket.",
"I thrive in collaborative environments that encourage growth, flexibility, and the pursuit of cutting-edge solutions, always aiming to merge technical prowess with imaginative problem-solving.",];
export const SKILLS = [
{ 
    icon: <SiHtml5 className="text-4xl text-[#E34F26] lg:text-5xl" />, 
    name: "HTML", 
    experience: "2+ Years" 
 },
 { 
  icon: <SiCss3 className="text-4xl text-[#1572B6] lg:text-5xl" />, 
  name: "CSS", 
  experience: "2+ Years" 
},
{ 
  icon: <SiTailwindcss className="text-4xl text-[#38BDF8] lg:text-5xl" />, 
  name: "Tailwind CSS", 
  experience: "1+ Year" 
},
{ 
  icon: <SiJavascript className="text-4xl text-[#F7DF1E] lg:text-5xl" />, 
  name: "JavaScript", 
  experience: "1+ Year" 
},
  {
    icon: <SiReact className="text-4xl text-cyan-400 lg:text-5xl" />,
    name: "React",
    experience: "8+ Months",
  },
  { 
    icon: <SiPython className="text-4xl text-[#306998] lg:text-5xl" />, 
    name: "Python", 
    experience: "1+ Years" 
  },
  { 
    icon: <SiCplusplus className="text-4xl text-[#00599C] lg:text-5xl" />, 
    name: "C++", 
    experience: "2+ Years" 
  },
  { 
    icon: <SiC className="text-4xl text-[#A8B9CC] lg:text-5xl" />, 
    name: "C", 
    experience: "1+ Years" 
  },
  { 
    icon: <SiGodotengine className="text-4xl text-[#478CBF] lg:text-5xl" />, 
    name: "Godot Engine", 
    experience: "6+ Months" 
  },
  { 
    icon: <SiGit className="text-4xl text-[#F05033] lg:text-5xl" />, 
    name: "Git", 
    experience: "1+ Year" 
  },
  { 
    icon: <SiGithub className="text-4xl text-[#181717] lg:text-5xl" />, 
    name: "GitHub", 
    experience: "1+ Year" 
  },
  { 
    icon: <SiLinux className="text-4xl text-[#FCC624] lg:text-5xl" />, 
    name: "Linux", 
    experience: "7+ Months" 
  }
];

// export const EXPERIENCES = [
//   {
//     title: "Lead Frontend Developer",
//     company: "Innovative Tech Solutions",
//     duration: "July 2020 - Present",
//     description:
//       "As the Lead Frontend Developer, I spearheaded the development of advanced web applications using cutting-edge technologies like React, Redux, and TypeScript. I worked closely with cross-functional teams, including designers, product managers, and backend developers, to deliver seamless and high-performance user experiences.",
//   },
//   {
//     title: "Frontend Engineer",
//     company: "Digital Creations",
//     duration: "February 2016 - June 2020",
//     description:
//       "At Digital Creations, I focused on building highly interactive and responsive web interfaces using HTML, CSS, JavaScript, and modern libraries like React. I collaborated closely with UX/UI designers to implement design changes that enhanced user engagement and satisfaction. My role involved optimizing website performance, ensuring cross-browser compatibility, and implementing SEO best practices. ",
//   },
//   {
//     title: "Junior Web Developer",
//     company: "Bright Future Technologies",
//     duration: "August 2014 - January 2016",
//     description:
//       "In my role as a Junior Web Developer, I assisted in the development and maintenance of various web applications. I gained hands-on experience in utilizing HTML, CSS, and JavaScript to create user-friendly interfaces. I actively participated in team meetings, contributed to project planning, and collaborated with senior developers to implement new features.",
//   },
// ];

// export const EDUCATION = [
//   {
//     degree: "Master of Science in Computer Science",
//     institution: "Stanford University",
//     duration: "September 2012 - June 2014",
//     description:
//       "Specialized in Human-Computer Interaction and Software Engineering. Completed a thesis on enhancing user experience in web applications through advanced interactive techniques. Participated in various projects involving frontend development, algorithms, and data structures. Graduated with honors.",
//   },
//   {
//     degree: "Bachelor of Science in Information Technology",
//     institution: "University of California, Berkeley",
//     duration: "September 2008 - June 2012",
//     description:
//       "Focused on web development, programming languages, and database management. Actively involved in coding clubs and hackathons, where I developed several web applications using HTML, CSS, JavaScript, and PHP. Completed a senior project on developing an e-commerce platform. Graduated with a high GPA.",
//   },
// ];
// solve kar na hai kal se
export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://discord.com/invite/aadityasharma_gta",
    icon: <FaDiscord fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.instagram.com/aaditya_sharma_2024/",
    icon: <FaInstagram fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://twitter.com/aaditya61793474",
    icon: <FaXTwitter fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://github.com/AadiSharma49",
    icon: <FaGithub fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.linkedin.com/in/aaditya-sharma-978163250/",
    icon: <FaLinkedin fontSize={25} className="hover:opacity-80" />,
  },
];

import {
  logo,
  backend,
  creator,
  mobile,
  web,
  github,
  menu,
  close,
  css,
  gearXpert,
  project2,
  project3,
  mysql,
  express,
  aws,
  mui,
  
  gsap,
  framer,
  figma,
  git,
  html,
  javascript,
  mongodb,
  nodejs,
  reactjs,
  redux,
  tailwind,
  threejs,
  firstTestimonial,
  secondTestimonial,
  thirdTestimonial,
} from '../assets'


// Import Tekisky separately
import tekisky from "../assets/company/tekisky.png";


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
    title: "Full-Stack Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Machine Learning",
    icon: backend,
  },
  {
    title: "Ui UX Designer",
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
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "framer",
    icon: framer,
  },
  {
    name: "figma",
    icon: figma,
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
    name: "MySql",
    icon: mysql,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Python",
    icon: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
  },
  {
    name: "Swift",
    icon: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Swift_logo.svg",
  },
];

const experiences = [
  {
    title: "Web Dev Intern",
    company_name: "Tendercare FZE",
    icon: web, // You can change this to a more appropriate icon if available
    iconBg: "#915EFF",
    date: "JUNE 2025 - PRESENT",
    points: [
      "Designing the UI/UX of company websites and developing the front-end to bring those designs to life.",
      "Supporting debugging of healthcare software and creating user manuals.",
      "Developing tutorial documentation for new tools being rolled out."
    ],
  },
  {
    title: "UI/UX Designer",
    company_name: "Masyv",
    icon: creator, // You can change this to a more appropriate icon if available
    iconBg: "#FFB400",
    date: "JUNE 2025 - PRESENT",
    points: [
      "Crafting clean, impactful visuals from logos and brand assets to intuitive interfaces.",
      "Empowering businesses to communicate with clarity, creativity, and confidence.",
      "Designing user experiences that drive engagement and brand value."
    ],
  },
  {
    title: "Machine Learning Intern",
    company_name: "Embrizon Technologies",
    icon: backend, // You can change this to a more appropriate icon if available
    iconBg: "#00CEA8",
    date: "MAY 2024 - JULY 2024",
    points: [
      "Developed a machine learning model to classify news articles as real or fake using NLP techniques.",
      "Implemented tokenization, stopword removal, and TF-IDF vectorization for feature extraction.",
      "Trained and evaluated classification models, including Naïve Bayes and Logistic Regression."
    ],
  },
];

const education = [
  {
    title: "BITS Pilani, Dubai Campus",
    institution: "B.E. Computer Science",
    icon: web, // You can change this to a more appropriate icon if available
    iconBg: "#1E90FF",
    date: "Expected August 2027",
    points: [
      "Currently pursuing a Bachelor of Engineering in Computer Science at BITS Pilani, Dubai Campus, focusing on software development, machine learning, and leadership in campus organizations."
    ],
  },
  {
    title: "Apeejay School, Saket, New Delhi, India",
    institution: "Class 10 - Class 12",
    icon: creator, // You can change this to a more appropriate icon if available
    iconBg: "#FFB400",
    date: "Completed Class 12",
    points: [
      "During school, especially through the COVID years, I explored creative and tech hobbies. I learned instruments, dabbled in music production, photography, and videography. At home, I built custom mechanical keyboards and honed my skills in Python and SQL."
    ],
  },
  {
    title: "Amrita Vidyalayam School, Saket, New Delhi, India",
    institution: "Ever Since - Class 10",
    icon: backend, // You can change this to a more appropriate icon if available
    iconBg: "#00CEA8",
    date: "Completed Class 10",
    points: [
      "Developed early interest in technology and science.",
      "Participated in school-level science exhibitions and competitions.",
      "Explored creative fields by learning musical instruments, music production, photography, and videography, shaping my eye for detail and storytelling."
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Huzaif proved me wrong.",
    name: "MD Mustaqeem",
    designation: "Ecommerce",
    company: "QuickMart",
    image: firstTestimonial,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Huzaif does.",
    name: "Abdul Raheman",
    designation: "Ecommerce Business",
    company: "justbuyz",
    image: secondTestimonial,
  },
  {
    testimonial:
      "After Huzaif optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "James Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: thirdTestimonial,
  },
];

const projects = [
  {
    name: "RescuMe",
    description: "First Responder Application",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "figma", color: "pink-text-gradient" },
    ],
    image: "https://placehold.co/400x300?text=RescuMe",
    source_code_link: "https://github.com/Aadi11z/RescuMe.git",
    figma_link: "https://www.figma.com/design/giXoV1yt4DmW0oSZ2FhLIm/RescuMe?node-id=0-1&t=TUEKrY2n2MdoQxG7-1",
  },
  {
    name: "MindfulMe",
    description: "Mental Health Companion",
    tags: [
      { name: "react", color: "blue-text-gradient" },
    ],
    image: "https://placehold.co/400x300?text=MindfulMe",
    source_code_link: "https://github.com/Manavarya09/MindfulMeApp.git",
  },
  {
    name: "Beautifulyou.today",
    description: "Beauty and wellness website.",
    tags: [
      { name: "website", color: "pink-text-gradient" },
    ],
    image: "https://placehold.co/400x300?text=Beautifulyou.today",
    website_link: "https://beautifulyou.today/", // Replace with actual link if available
  },
  {
    name: "TeleMedMe",
    description: "Medicine Assistant",
    tags: [
      { name: "react", color: "blue-text-gradient" },
    ],
    image: "https://placehold.co/400x300?text=TeleMedMe",
    source_code_link: "https://github.com/Manavarya09/TeleMedMe",
  },
  {
    name: "AI LMS",
    description: "Learning management system (Website in construction)",
    tags: [
      { name: "react", color: "blue-text-gradient" },
    ],
    image: "https://placehold.co/400x300?text=AI+LMS",
    source_code_link: "https://github.com/Manavarya09/AI-LMS.git",
  },
  {
    name: "Tendercare Website",
    description: "Healthcare Management Software (Website in construction)",
    tags: [
      { name: "website", color: "pink-text-gradient" },
    ],
    image: "https://placehold.co/400x300?text=Tendercare+Website",
    website_link: "https://tendercare.com/", // Replace with actual link if available
  },
  {
    name: "NutriMe",
    description: "An AI-powered app for smart nutrition tracking.",
    tags: [
      { name: "ai", color: "green-text-gradient" },
      { name: "react", color: "blue-text-gradient" },
    ],
    image: "https://placehold.co/400x300?text=NutriMe",
    source_code_link: "https://github.com/", // Replace with actual link
  },
  {
    name: "Geeta-Bot",
    description: "An AI chatbot that shares wisdom from the Bhagavad Gita for guidance, mindfulness, and inner peace.",
    tags: [
      { name: "ai", color: "green-text-gradient" },
      { name: "python", color: "pink-text-gradient" },
    ],
    image: "https://placehold.co/400x300?text=Geeta-Bot",
    source_code_link: "https://github.com/Manavarya09/Geeta-bot.git",
  },
];

export { services, technologies, experiences, education, testimonials, projects };

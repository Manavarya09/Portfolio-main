import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, staggerContainer } from "../utils/motion";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const ProjectCard = ({ name, description, source_code_link, website_link, index }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const el = cardRef.current;
    gsap.fromTo(
      el,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: el,
          start: "top bottom",
          end: "top center",
          scrub: true,
          markers: false,
        },
      }
    );
  }, []);

  // Prefer website_link if present, else source_code_link
  const mainLink = website_link || source_code_link;
  const buttonLabel = website_link ? "Website" : "Source Code";

  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.2, 0.75)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="w-full flex justify-center"
    >
      <div
        ref={cardRef}
        className="bg-tertiary p-8 rounded-2xl w-full max-w-md flex flex-col items-center text-center shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl h-[280px] justify-between"
      >
        <div className="flex-1 flex flex-col justify-center">
          <h3 className="text-white font-bold text-2xl mb-4 line-clamp-2">{name}</h3>
          <p className="text-secondary text-[15px] mb-6 line-clamp-3 flex-1">{description}</p>
        </div>
        {mainLink && (
          <a
            href={mainLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto px-6 py-2 rounded-lg bg-gradient-to-r from-[#915EFF] to-pink-500 text-white font-semibold shadow-md hover:from-pink-500 hover:to-[#915EFF] transition"
          >
            {buttonLabel}
          </a>
        )}
      </div>
    </motion.div>
  );
};

const Works = () => {
  useEffect(() => {
    gsap.fromTo(
      ".project-card",
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".works-container",
          start: "top bottom",
          end: "top center",
          scrub: true,
          markers: false,
        },
      }
    );
  }, []);

  return (
    <motion.div
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
    >
      <motion.div
        variants={fadeIn("right", "tween", 0.2, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <div>
          <p className={`${styles.sectionSubText}`}>My work</p>
          <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
        </div>
      </motion.div>
      
      <motion.div 
        variants={fadeIn("right", "tween", 0.4, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="w-full flex"
      >
        <p className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
          Following projects showcase my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories and live demos. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.
        </p>
      </motion.div>
      
      <motion.div 
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="works-container mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-8"
      >
        {projects.map((project, index) => (
          <div key={`project-${index}`} className="project-card w-full flex justify-center">
            <ProjectCard {...project} index={index} />
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default SectionWrapper(Works, "");

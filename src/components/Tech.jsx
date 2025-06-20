import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { technologies } from "../constants";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { fadeIn, staggerContainer } from "../utils/motion";

gsap.registerPlugin(ScrollTrigger);

const Tech = () => {
  useEffect(() => {
    gsap.fromTo(
      ".tech-icon",  
      {
        opacity: 0,
        y: 80
      },
      {
        opacity: 1,
        y: 0,
        duration: 2.5,
        stagger: 0.1, 
        scrollTrigger: {
          trigger: ".tech-icons-wrapper", 
          start: "top 80%", 
          end: "bottom 70%", 
          scrub: true, 
        },
      }
    );
  }, []);

  return (
    <motion.section
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
    >
      <motion.div 
        variants={fadeIn("up", "tween", 0.2, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="tech-icons-wrapper flex flex-row flex-wrap justify-center gap-10"
      >
        {technologies.map((technology, index) => (
          <motion.div 
            key={technology.name}
            variants={fadeIn("up", "spring", index * 0.1, 0.75)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="w-28 h-28"
          >
            <img
              src={technology.icon}
              alt={technology.name}
              className="tech-icon w-full h-full object-contain"
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default SectionWrapper(Tech, "");

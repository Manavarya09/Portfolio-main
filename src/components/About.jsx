import React, { useRef, useEffect } from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, staggerContainer } from "../utils/motion";

gsap.registerPlugin(ScrollTrigger);

const useGsap = (elementRef, animation, delay = 0) => {
  useEffect(() => {
    if (elementRef.current) {
      gsap.fromTo(
        elementRef.current,
        animation.from,
        {
          ...animation.to,
          delay,
          scrollTrigger: {
            trigger: elementRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }
  }, [elementRef, animation, delay]);
};

const ServiceCard = ({ index, title, icon }) => {
  const cardRef = useRef(null);
  useGsap(cardRef, {
    from: { opacity: 0, y: 100, scale: 0.8 },
    to: { opacity: 1, y: 0, scale: 1, duration: 1, ease: "power3.out" },
  }, index * 0.2);

  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.2, 0.75)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
      <Tilt className="xs:w-[250px] w-full">
        <div ref={cardRef} className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
          <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
            <img src={icon} alt="web-development" className="w-16 h-16 object-contain" />
            <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

const About = () => {
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);

  // Heading Animation
  useGsap(headingRef, {
    from: { opacity: 0, x: -50 },
    to: { opacity: 1, x: 0, duration: 1, ease: "power2.out" },
  });

  // Paragraph Animation
  useGsap(paragraphRef, {
    from: { opacity: 0, y: 50 },
    to: { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" },
  }, 0.3);

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
        <div ref={headingRef}>
          <p className={styles.sectionSubText}>Introduction</p>
          <h2 className={styles.sectionHeadText}>Overview.</h2>
        </div>
      </motion.div>

      <motion.div 
        variants={fadeIn("right", "tween", 0.4, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="w-full flex"
      >
        <p 
          ref={paragraphRef}
          className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Student at BITS Pilani, Dubai, with hands-on experience in software development, machine learning, and digital marketing. I've led and contributed to campus clubs, managed marketing for tech and astronomy organizations, and built projects from cross-platform apps to AI-driven tools. Skilled in Python, Swift, React Native, and front-end development. As a UI/UX developer, I'm proficient with Figma and passionate about designing intuitive digital experiences. I thrive in fast-paced, collaborative environments and enjoy turning ideas into impactful solutions.
        </p>
      </motion.div>

      <motion.div 
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center gap-10"
      >
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default SectionWrapper(About, "about");

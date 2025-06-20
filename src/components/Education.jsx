import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { education } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const FlipCard = ({ edu }) => (
  <div className="flip-card w-[320px] h-[340px] mx-4 my-6">
    <div className="flip-card-inner w-full h-full">
      {/* Front */}
      <div className="flip-card-front bg-tertiary rounded-2xl shadow-lg p-6 flex flex-col items-center justify-center border-2 border-[#915EFF] w-full h-full">
        <div className="w-20 h-20 rounded-full flex items-center justify-center bg-black-200 mb-4">
          <img src={edu.icon} alt={edu.institution} className="w-14 h-14 object-contain" />
        </div>
        <h3 className="text-white text-xl font-bold text-center mb-1">{edu.title}</h3>
        <p className="text-secondary text-[16px] font-semibold text-center mb-1">{edu.institution}</p>
        <span className="text-[#915EFF] text-[14px] mb-2">{edu.date}</span>
        <span className="text-white-100 text-[13px] mt-4">Hover to see more</span>
      </div>
      {/* Back */}
      <div className="flip-card-back bg-black-200 rounded-2xl shadow-lg p-6 flex flex-col items-center justify-center border-2 border-[#915EFF] w-full h-full">
        <h3 className="text-white text-lg font-bold text-center mb-2">Highlights</h3>
        <ul className="list-disc text-left text-white-100 text-[14px] pl-4">
          {edu.points.map((point, idx) => (
            <li key={idx}>{point}</li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

const Education = () => {
  return (
    <div className="mt-20">
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>My academic journey</p>
        <h2 className={`${styles.sectionHeadText} text-center`}>Education</h2>
      </motion.div>
      <div className="w-full flex flex-wrap justify-center items-center py-10">
        {education.map((edu, idx) => (
          <FlipCard edu={edu} key={edu.title + idx} />
        ))}
      </div>
      {/* Flip card CSS */}
      <style>{`
        .flip-card {
          perspective: 1200px;
        }
        .flip-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          transition: transform 0.7s cubic-bezier(.4,2,.6,1);
          transform-style: preserve-3d;
        }
        .flip-card:hover .flip-card-inner, .flip-card:focus-within .flip-card-inner {
          transform: rotateY(180deg);
        }
        .flip-card-front, .flip-card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }
        .flip-card-back {
          transform: rotateY(180deg);
        }
      `}</style>
    </div>
  );
};

export default SectionWrapper(Education, "education"); 
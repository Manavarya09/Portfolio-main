import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, staggerContainer } from "../utils/motion";

const hackathonData = {
  title: "1st Place - BITS TECH FEST",
  issuer: "HPE Aruba Networking",
  date: "2024",
  institution: "Birla Institute Of Technology and Science, Pilani Dubai Campus",
  prize: "AED 2000",
  description: "Won first place at the Hackathon organized by BITS Pilani, Dubai Campus in collaboration with HPE Aruba Networking.",
  image: `${import.meta.env.BASE_URL}hackathon-certificate.jpg`,
  icon: "🏆"
};

const HackathonWinner = () => (
  <motion.div
    variants={staggerContainer()}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.25 }}
    className="mt-12"
  >
    <motion.div
      variants={fadeIn("up", "tween", 0.2, 1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[60px] mb-6`}
    >
      <h2 className={styles.sectionHeadText + " text-center"}>Achievements</h2>
    </motion.div>
    
    <motion.div 
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="flex justify-center"
    >
      <motion.div
        variants={fadeIn("up", "spring", 0.2, 0.75)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        whileHover={{ 
          scale: 1.02,
          y: -5,
          transition: { duration: 0.3, ease: "easeOut" }
        }}
        className="group relative bg-black-200 p-6 rounded-2xl shadow-lg flex flex-col items-center text-center w-full max-w-2xl border-2 border-transparent hover:border-[#915EFF] transition-all duration-300 cursor-pointer overflow-hidden"
        style={{
          background: "linear-gradient(135deg, rgba(24, 16, 40, 0.95), rgba(21, 16, 48, 0.95))",
          backdropFilter: "blur(10px)"
        }}
      >
        {/* Gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-orange-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl"></div>
        
        {/* Trophy Icon and Title */}
        <div className="flex items-center gap-3 mb-4">
          <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
            {hackathonData.icon}
          </div>
          <div>
            <h3 className="text-white text-2xl font-bold group-hover:text-[#915EFF] transition-colors duration-300">
              {hackathonData.title}
            </h3>
            <div className="text-secondary text-base mt-1 group-hover:text-white transition-colors duration-300">
              {hackathonData.issuer}
            </div>
          </div>
        </div>
        
        {/* Certificate Image */}
        <div className="w-full mb-4 overflow-hidden rounded-lg">
          <img 
            src={hackathonData.image} 
            alt="Hackathon Certificate" 
            className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        
        {/* Details */}
        <div className="text-secondary text-sm mb-2 group-hover:text-white transition-colors duration-300">
          {hackathonData.institution}
        </div>
        
        <div className="text-[#915EFF] text-lg font-semibold mb-2">
          Prize: {hackathonData.prize}
        </div>
        
        <p className="text-secondary text-sm leading-relaxed max-w-xl">
          {hackathonData.description}
        </p>
        
        {/* Glow effect */}
        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"
             style={{
               background: "radial-gradient(circle at center, #fbbf24 0%, transparent 70%)",
               filter: "blur(20px)"
             }}>
        </div>
      </motion.div>
    </motion.div>
  </motion.div>
);

export default SectionWrapper(HackathonWinner, "hackathon"); 
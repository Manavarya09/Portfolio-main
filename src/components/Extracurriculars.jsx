import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, staggerContainer } from "../utils/motion";

const roles = [
  {
    title: "Marketing Head - E-CELL BPDC",
    date: "Jun 2025 - present",
    icon: "📈",
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "Marketing Executive - ACM BPDC",
    date: "May 2025 - present",
    icon: "💻",
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "Marketing Executive - LUG BPDC",
    date: "Jun 2025 - present",
    icon: "🐧",
    color: "from-green-500 to-emerald-500"
  },
  {
    title: "Marketing Executive - Supernova BPDC",
    date: "Jun 2025 - present",
    icon: "⭐",
    color: "from-yellow-500 to-orange-500"
  },
  {
    title: "Media Executive - SEC M.A.D BPDC",
    date: "May 2025 - present",
    icon: "🎨",
    color: "from-pink-500 to-rose-500"
  },
  {
    title: "Treasurer - Expressions BPDC",
    date: "May 2024 - May 2025",
    icon: "💰",
    color: "from-emerald-500 to-teal-500"
  },
];

const Extracurriculars = () => (
  <motion.div
    variants={staggerContainer()}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.25 }}
    className="mt-20"
  >
    <motion.div
      variants={fadeIn("up", "tween", 0.2, 1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[100px] mb-8`}
    >
      <p className={styles.sectionSubText + " text-center"}>Beyond the classroom</p>
      <h2 className={styles.sectionHeadText + " text-center"}>Extracurricular Roles</h2>
    </motion.div>
    
    <motion.div 
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="w-full flex flex-wrap justify-center items-center gap-6"
    >
      {roles.map((role, idx) => (
        <motion.div
          key={role.title}
          variants={fadeIn("up", "spring", idx * 0.1, 0.75)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          whileHover={{ 
            scale: 1.05,
            y: -10,
            transition: { duration: 0.3, ease: "easeOut" }
          }}
          className="group relative bg-black-200 p-6 rounded-2xl shadow-lg flex flex-col items-center text-center w-[300px] border-2 border-transparent hover:border-[#915EFF] transition-all duration-300 cursor-pointer overflow-hidden"
          style={{
            background: "linear-gradient(135deg, rgba(24, 16, 40, 0.9), rgba(21, 16, 48, 0.9))",
            backdropFilter: "blur(10px)"
          }}
        >
          {/* Gradient overlay on hover */}
          <div className={`absolute inset-0 bg-gradient-to-br ${role.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl`}></div>
          
          {/* Icon */}
          <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
            {role.icon}
          </div>
          
          {/* Content */}
          <div className="relative z-10">
            <h3 className="text-white text-lg font-bold mb-2 group-hover:text-[#915EFF] transition-colors duration-300">
              {role.title}
            </h3>
            <span className="text-secondary text-[15px] group-hover:text-white transition-colors duration-300">
              {role.date}
            </span>
          </div>
          
          {/* Glow effect */}
          <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"
               style={{
                 background: `radial-gradient(circle at center, ${role.color.split('-')[1] === 'purple' ? '#915EFF' : '#f472b6'} 0%, transparent 70%)`,
                 filter: 'blur(20px)'
               }}>
          </div>
        </motion.div>
      ))}
    </motion.div>
  </motion.div>
);

export default SectionWrapper(Extracurriculars, "extracurriculars"); 
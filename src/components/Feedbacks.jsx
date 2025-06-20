import React from "react";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";

const hobbies = [
  {
    icon: "🎸",
    title: "Playing Guitar",
    description: "Enjoy composing and playing music to relax and express creativity."
  },
  {
    icon: "📷",
    title: "Photography",
    description: "Love capturing moments and exploring new perspectives through the lens."
  },
  {
    icon: "🚴‍♂️",
    title: "Cycling",
    description: "Passionate about long rides and exploring the outdoors on two wheels."
  },
  {
    icon: "🌌",
    title: "Astronomy",
    description: "Fascinated by the cosmos and enjoy stargazing and learning about space."
  },
  {
    icon: "🧑‍💻",
    title: "Coding Side Projects",
    description: "Building fun and useful apps outside of work and academics."
  },
  {
    icon: "📚",
    title: "Reading",
    description: "Enjoy reading books on technology, psychology, and science fiction."
  },
];

const Hobbies = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[200px]`}>
        <div>
          <p className={styles.sectionSubText}>Beyond academics & work</p>
          <h2 className={styles.sectionHeadText}>Hobbies</h2>
        </div>
      </div>
      <div
        className={`-mt-20 pb-14 ${styles.paddingX} grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center`}
      >
        {hobbies.map((hobby, idx) => (
          <div key={hobby.title} className="bg-black-200 p-8 rounded-3xl w-full flex flex-col items-center text-center shadow-lg">
            <span className="text-5xl mb-4">{hobby.icon}</span>
            <h3 className="text-white text-xl font-bold mb-2">{hobby.title}</h3>
            <p className="text-secondary text-[15px]">{hobby.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Hobbies, "hobbies");

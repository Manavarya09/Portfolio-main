import React from "react";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";

const socialLinks = [
  {
    label: "Gaming on Instagram",
    username: "@periperimouse",
    url: "https://www.instagram.com/periperimouse/",
    icon: "🎮",
    bgColor: "bg-gradient-to-r from-purple-500 to-pink-500"
  },
  {
    label: "Personal Instagram",
    username: "@manav_arya_singh",
    url: "https://www.instagram.com/manav_arya_singh/",
    icon: "👤",
    bgColor: "bg-gradient-to-r from-pink-500 to-orange-500"
  },
  {
    label: "YouTube Channel",
    username: "Gammakey",
    url: "https://www.youtube.com/@Gammakey",
    icon: "📺",
    bgColor: "bg-gradient-to-r from-red-500 to-red-600"
  }
];

const SocialLinks = () => (
  <div className="mt-12 bg-black-100 rounded-[20px]">
    <div className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[150px]`}>
      <div>
        <p className={styles.sectionSubText}>Connect with me</p>
        <h2 className={styles.sectionHeadText}>Social Media.</h2>
      </div>
    </div>
    <div className={`-mt-10 pb-10 ${styles.paddingX} flex flex-wrap gap-8 justify-center items-center`}>
      {socialLinks.map((profile) => (
        <div 
          key={profile.label} 
          className="relative group bg-black-200/50 backdrop-blur-sm border border-gray-800 p-8 rounded-3xl flex flex-col items-center text-center shadow-lg w-full max-w-xs transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:border-[#915EFF]"
        >
          <div className="absolute top-2 right-2 text-xs bg-black-100 text-white px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
            {profile.label}
          </div>
          <div className="text-6xl mb-4 transition-transform transform group-hover:scale-110">
            {profile.icon}
          </div>
          <h3 className="text-white text-xl font-bold mb-2">{profile.label}</h3>
          <p className="text-secondary text-[15px] mb-4">{profile.username}</p>
          <a
            href={profile.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`${profile.bgColor} text-white px-6 py-2 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-md hover:shadow-lg`}
          >
            View Profile
          </a>
        </div>
      ))}
    </div>
  </div>
);

export default SectionWrapper(SocialLinks, "social"); 
import React from "react";
import { FaInstagram, FaLinkedin, FaPhone, FaGithub } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer className="w-full py-4 bg-black-100/55 text-white flex justify-center items-center gap-8">
      {/* Instagram */}
      <div className="relative group">
      <a
          href="https://www.instagram.com/manav_arya_singh/"
        target="_blank"
        rel="noopener noreferrer"
          aria-label="Instagram"
          className="hover:text-[#915EFF] transition-colors"
      >
        <FaInstagram size={24} />
      </a>
        <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-xs bg-black-200 text-white rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          Instagram
        </span>
      </div>

      {/* GitHub */}
      <div className="relative group">
        <a
          href="https://github.com/Manavarya09"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="hover:text-[#915EFF] transition-colors"
        >
          <FaGithub size={24} />
      </a>
        <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-xs bg-black-200 text-white rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          GitHub
        </span>
      </div>

      {/* LinkedIn */}
      <div className="relative group">
      <a
          href="https://www.linkedin.com/in/manav-arya-singh-3579b4291/"
        target="_blank"
        rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="hover:text-[#915EFF] transition-colors"
      >
        <FaLinkedin size={24} />
      </a>
        <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-xs bg-black-200 text-white rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          LinkedIn
        </span>
      </div>

      {/* Phone */}
      <div className="relative group">
        <a
          href="tel:+971522245856"
          aria-label="Phone"
          className="hover:text-[#915EFF] transition-colors"
        >
          <FaPhone size={24} />
        </a>
        <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-xs bg-black-200 text-white rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          Phone
        </span>
      </div>

      {/* Hidden Snake Easter Egg Icon */}
      <div className="relative group cursor-pointer select-none" style={{ opacity: 0.35 }}
        onClick={() => navigate("/secret")}
        aria-label="Secret Snake Game"
        tabIndex={-1}
      >
        <span className="text-2xl">🐍</span>
        <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-xs bg-black-200 text-white rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          Secret Game
        </span>
      </div>
    </footer>
  );
};

export default Footer;
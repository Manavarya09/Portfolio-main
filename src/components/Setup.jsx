import React, { useState } from "react";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";

const setup = [
  {
    name: "My Desk Setup",
    image: "/desk-setup.jpg",
    description: "My personal workspace where I build and test mechanical keyboards, featuring a clean setup for maximum focus and creativity."
  },
  {
    name: "Gaming Setup",
    image: "/gaming-setup.jpg",
    description: "A high-performance gaming setup with a Logitech racing wheel, RGB lighting, and immersive display for the ultimate racing experience."
  }
];

const ImageModal = ({ image, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black bg-opacity-90 p-4"
      onClick={onClose}
    >
      <div 
        className="relative"
        onClick={(e) => e.stopPropagation()}
      >
        <img 
          src={image} 
          alt="Setup" 
          className="max-w-[95vw] max-h-[95vh] object-contain rounded-lg"
        />
        <button
          className="absolute top-2 right-2 text-white text-3xl bg-black bg-opacity-60 w-12 h-12 rounded-full flex items-center justify-center hover:bg-opacity-80 transition-all cursor-pointer"
          onClick={onClose}
        >
          ×
        </button>
      </div>
    </div>
  );
};

const Setup = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
  <div className="mt-12 bg-black-100 rounded-[20px]">
    <div className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[150px]`}>
      <div>
        <p className={styles.sectionSubText}>Workspace</p>
        <h2 className={styles.sectionHeadText}>My Setup</h2>
      </div>
    </div>
    <div className={`-mt-10 pb-10 ${styles.paddingX} grid grid-cols-1 sm:grid-cols-2 gap-8 justify-items-center`}>
      {setup.map((item, idx) => (
          <div 
            key={item.name} 
            className="bg-black-200 p-6 rounded-3xl flex flex-col items-center text-center shadow-lg w-full max-w-md group hover:shadow-xl transition-all duration-300"
          >
            <div 
              className="relative w-full h-64 overflow-hidden rounded-xl mb-4 cursor-pointer"
              onClick={() => setSelectedImage(item.image)}
            >
              <img 
                src={item.image} 
                alt={item.name} 
                className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Click to expand
                </span>
              </div>
            </div>
          <h3 className="text-white text-xl font-bold mb-2">{item.name}</h3>
          <p className="text-secondary text-[15px]">{item.description}</p>
        </div>
      ))}
    </div>
      <ImageModal 
        image={selectedImage} 
        isOpen={!!selectedImage} 
        onClose={() => setSelectedImage(null)} 
      />
  </div>
);
};

export default SectionWrapper(Setup, "setup"); 
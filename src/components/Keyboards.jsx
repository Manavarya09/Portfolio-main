import React, { useState } from "react";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { useNavigate } from "react-router-dom";

const keyboards = [
  { name: "Keychron Q1 Pro", image: "/Keyboard1.jpg" },
  { name: "Keychron V1", image: "/Keyboard2.jpg" },
  { name: "Keychron K8 Pro", image: "/Keyboard3.jpg" },
  { name: "CIDOO ABM066", image: "/Keyboard4.jpg" },
  { name: "EPOMAKER x Feker Galaxy80", image: "/Keyboard5.jpg" },
  { name: "EPOMAKER Mini Panda 64", image: "/Keyboard6.jpg" },
  { name: "K500F MACHENIKE ", image: "/Keyboard7.jpg" },
  { name: "SKYLOONG GK61", image: "/Keyboard8.jpg" },
  { name: "REDRAGON K617 FIZZ", image: "/Keyboard9.jpg" },
  { name: "CIY 68", image: "/Keyboard10.jpg" },
  { name: "BAJEAL 87", image: "/Keyboard11.jpg" },
  { name: "Hexgears M2", image: "/Keyboard12.jpg" },
  { name: "EPOMAKER EK21", image: "/Keyboard13.jpg" },
];

const Keyboards = () => {
  const [modalImg, setModalImg] = useState(null);
  const navigate = useNavigate();

  const openModal = (img) => setModalImg(img);
  const closeModal = () => setModalImg(null);

  return (
    <div className="mt-12 bg-black-100 rounded-[20px]">
      {/* Modal for expanded image */}
      {modalImg && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80"
          onClick={closeModal}
        >
          <div
            className="relative max-w-3xl w-full flex flex-col items-center"
            onClick={e => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 text-white text-3xl bg-black bg-opacity-60 rounded-full px-3 py-1 hover:bg-opacity-90 transition"
              onClick={closeModal}
              aria-label="Close expanded image"
            >
              ×
            </button>
            <img
              src={modalImg}
              alt="Expanded Keyboard"
              className="w-full max-h-[80vh] object-contain rounded-xl shadow-2xl border-4 border-white"
            />
          </div>
        </div>
      )}
      <div className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[150px] flex flex-col items-start`}>
        <button
          className="mb-4 bg-[#915EFF] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#7a4fdc] transition"
          onClick={() => navigate("/home", { state: { fromKeyboardsCTA: true } })}
        >
          ← Back to Home
        </button>
        <div>
          <p className={styles.sectionSubText}>Collection</p>
          <h2 className={styles.sectionHeadText}>My Mechanical Keyboards</h2>
        </div>
      </div>
      <div className={`-mt-10 pb-10 ${styles.paddingX} grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center`}>
        {keyboards.map((kb) => (
          <div key={kb.name} className="bg-black-200 p-6 rounded-3xl flex flex-col items-center text-center shadow-lg w-full max-w-xs transform transition-transform duration-300 hover:scale-105">
            <div className="relative w-full h-48 mb-4 cursor-pointer group" onClick={() => openModal(kb.image)}>
              <img src={kb.image} alt={kb.name} className="w-full h-full object-cover rounded-xl group-hover:opacity-80 transition" />
              <span className="absolute bottom-2 right-2 bg-black bg-opacity-60 text-white text-xs px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition">Expand</span>
            </div>
            <h3 className="text-white text-xl font-bold mb-2">{kb.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Keyboards, "keyboards"); 
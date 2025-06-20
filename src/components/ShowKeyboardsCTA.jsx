import React from "react";
import { useNavigate } from "react-router-dom";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";

const ShowKeyboardsCTA = () => {
  const navigate = useNavigate();
  return (
    <div className="mt-12 bg-black-100 rounded-[20px] flex flex-col items-center justify-center py-12">
      <h2 className={styles.sectionHeadText + " text-center mb-4"}>
        Want to see my custom keyboards?
      </h2>
      <p className={styles.sectionSubText + " text-center mb-8"}>
        Click below to view my collection of mechanical keyboards!
      </p>
      <button
        className="bg-[#915EFF] text-white px-8 py-3 rounded-lg font-bold text-lg hover:bg-[#7a4fdc] transition"
        onClick={() => navigate("/keyboards", { state: { fromKeyboardsCTA: true } })}
      >
        See My Keyboards
      </button>
    </div>
  );
};

export default SectionWrapper(ShowKeyboardsCTA, "keyboards-cta"); 
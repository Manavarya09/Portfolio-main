import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { textVariant, fadeIn } from "../utils/motion";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto overflow-hidden`}>
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-28 md:mt-5 lg:5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <motion.div 
          variants={textVariant(0.2)}
          initial="hidden"
          animate="show"
          className="mt-28 md:mt-5 lg:5"
        >
          <h1 className={`${styles.heroHeadText} text-white`}>
            I am <span className='text-[#915EFF]'>Manav Arya Singh</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            UI/UX designer & front-end<br/>
            developer based in UAE.
          </p>
        </motion.div>
      </div>

      <motion.div 
        variants={fadeIn("up", "tween", 0.4, 1)}
        initial="hidden"
        animate="show"
        className="absolute inset-0 flex justify-center items-center"
      >
        <div className="w-full h-full max-w-[1100px] mx-auto">
          <ComputersCanvas />
        </div>
      </motion.div>

      <motion.div 
        variants={fadeIn("up", "tween", 0.6, 1)}
        initial="hidden"
        animate="show"
        className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'
      >
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;

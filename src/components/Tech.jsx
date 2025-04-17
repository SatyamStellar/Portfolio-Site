import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";

import { Blob8, Blob5, Blob4 } from "./decoration/Blob1";
import { skills } from "../constant"; // Updated to use the skills array
import { fadeIn, textVariant } from "../utils/motion";
import { Tilt } from "react-tilt";

const Tech = () => {
  return (
    <div
      id="tech"
      className="relative w-full flex flex-col justify-center items-center  z-10"
    >
      <Blob4 className="top-10 -left-10  opacity-15" />
      <Blob5 className="top-[60%] left-[30%] opacity-25" />
      <Blob8 className="bottom-0 right-0 opacity-20" />
      <motion.div variants={textVariant()} className="text-center mb-12">
        <p className={`${styles.sectionSubText} text-white/60`}>
          Tools & Technologies
        </p>
        <h2 className={`${styles.sectionHeadText} text-white`}>
          My Tech Stack
        </h2>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-white/70 font-sfMono text-[16px] max-w-2xl 
            tracking-wide leading-relaxed"
        >
          A curated collection of tools and frameworks I use to craft modern,
          efficient, and scalable solutions.
        </motion.p>
      </motion.div>
      <div className="w-full  flex flex-wrap justify-center gap-10 mt-4">
        {skills.map((skill, index) => (
          <Tilt
            key={`skill-${index}`}
            options={{ max: 25, scale: 1.05, speed: 450 }}
          >
            <motion.div
              variants={fadeIn("up", "spring", index * 0.2, 0.75)}
              className="w-full  border border-gray-700/50 rounded-2xl p-6 shadow-md shadow-purple-500/15 backdrop-blur-sm
                hover:shadow-purple-500/30 transition-all duration-300
                md:max-w-[400px] sm:max-w-[330px] sm:p-4"
            >
              <h3 className="text-gray-400 text-[28px] font-semibold text-center mb-5 md:text-[24px]">
                {skill.title}
              </h3>
              <div className="flex flex-wrap justify-center gap-3 mb-5">
                {skill.skills.map((item, index_x) => (
                  <motion.div
                    key={`skill-x-${index_x}`}
                    variants={fadeIn("up", "spring", index_x * 0.1, 0.5)}
                    className="flex items-center justify-center gap-2 text-white/80 text-base font-normal border border-white/50 rounded-xl px-4 py-3
                      hover:bg-purple-500/10 hover:border-purple-500 transition-all duration-300
                      md:text-sm md:px-3 md:py-2 sm:text-sm sm:px-3 sm:py-1.5"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-6 h-6 object-contain"
                    />
                    <span>{item.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </Tilt>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "tech");

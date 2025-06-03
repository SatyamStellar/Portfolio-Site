import { motion } from "framer-motion";
import { styles } from "../styles";

import { Blob8, Blob5, Blob4 } from "./decoration/Blob1";
import { skills } from "../constant";
import { Tilt } from "react-tilt";

const Tech = () => {
  return (
    <motion.div
      id="tech"
      className="relative w-full flex flex-col justify-center items-center mt-20 px-6 sm:px-0 z-10"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <Blob4 className="top-10 -left-10  opacity-15" />
      <Blob5 className="top-[60%] left-[30%] opacity-25" />
      <Blob8 className="bottom-0 right-0 opacity-20" />
      <motion.div className="text-center mb-12">
        <motion.p
          className={`${styles.sectionSubText} text-white/60`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          Tools & Technologies
        </motion.p>
        <motion.h2
          className={`${styles.sectionHeadText} text-white`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          My Tech Stack
        </motion.h2>
        <motion.p
          className="mt-4 text-white/70 font-sfMono text-[16px] max-w-2xl 
            tracking-wide leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          A curated collection of tools and frameworks I use to craft modern,
          efficient, and scalable solutions.
        </motion.p>
      </motion.div>
      <motion.div
        className="w-full  flex flex-wrap justify-center gap-14 mt-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        {skills.map((skill, index) => (
          <Tilt
            key={`skill-${index}`}
            options={{ max: 25, scale: 1.05, speed: 450 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, delay: index * 0.2, ease: "easeInOut" }}
              className="w-full  border border-gray-700/50 rounded-2xl p-6 shadow-md shadow-purple-500/15 backdrop-blur-sm
                hover:shadow-purple-500/30 transition-all duration-300
                md:max-w-[400px] sm:max-w-[330px] sm:p-4"
            >
              <motion.h3
                className="text-gray-400 text-[28px] font-semibold text-center mb-5 md:text-[24px]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                {skill.title}
              </motion.h3>
              <motion.div
                className="flex flex-wrap justify-center gap-3 mb-5"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.5, delay: index * 0.2, ease: "easeInOut" }}
              >
                {skill.skills.map((item, index_x) => (
                  <motion.div
                    key={`skill-x-${index_x}`}
                    whileHover={{ scale: 1.05, boxShadow: "0 0 10px rgba(147, 51, 234, 0.5)" }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
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
              </motion.div>
            </motion.div>
          </Tilt>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Tech;

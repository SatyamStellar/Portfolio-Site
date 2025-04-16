import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { technologies } from "../constant";
import { Blob8, Blob5, Blob4 } from "./decoration/Blob1";
import { computer } from "../assets";
import { fadeIn, textVariant } from "../utils/motion";

const TechCard = ({ tech, index }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.1, 0.75)}
    className="relative py-5 bg-n-8/80 rounded-xl bg-zinc-600/10   border border-n-6/50 backdrop-blur-sm
      hover:shadow-lg hover:shadow-white/20  transition-all duration-300 group"
  >
    <div className="flex flex-col items-center  gap-3">
      <div className="relative w-10 h-10 group-hover:scale-125 transition-transform duration-300">
        <img
          src={tech.icon}
          alt={tech.name}
          className="w-full h-full object-contain"
        />
      </div>
      <span className="text-white/70 text-[15px] font-sfMono group-hover:text-white group-hover:text-sm transition-all">
        {tech.name}
      </span>
    </div>
  </motion.div>
);

const Tech = () => {
  return (
    <div className="relative flex flex-col items-center px-4 py-12">
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

      <div className="w-full max-w-5xl">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {technologies.map((tech, index) => (
            <TechCard key={tech.id} tech={tech} index={index} />
          ))}
        </div>
      </div>

      <motion.div
        variants={fadeIn("up", "spring", 0.75)}
        className="relative p-5 px-12 mt-4 bg-n-8/80 rounded-xl bg-zinc-600/10 border border-n-6/50 backdrop-blur-sm
    hover:shadow-lg hover:shadow-white/20  transition-all duration-300 group"
      >
        <div className="flex flex-col items-center gap-3">
          <div className="relative w-10 h-10 hover:shadow-xl transition-transform duration-300 group-hover:scale-125">
            <img
              src={computer}
              className="w-full h-full object-contain"
            />
          </div>
          <span className="text-white/70 text-[15px] font-sfMono transition-all group-hover:text-white group-hover:text-sm">
            Networking
          </span>
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Tech, "tech");

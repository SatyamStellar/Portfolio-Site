import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { technologies } from "../constant";
import { Blob8, Blob5 } from "./decoration/Blob1";
import { nvim } from "../assets";
import { fadeIn, textVariant } from "../utils/motion";

const TechCard = ({ tech, index }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.1, 0.75)}
    className="relative p-4 bg-n-8/80 rounded-xl border border-n-6/50 backdrop-blur-sm
      hover:shadow-xl hover:shadow-n-6/20 transition-all duration-300 group"
  >
    <div className="flex flex-col items-center gap-3">
      <div className="relative w-14 h-14 group-hover:scale-110 transition-transform duration-300">
        <img
          src={tech.icon}
          alt={tech.name}
          className="w-full h-full object-contain"
        />
      </div>
      <span className="text-white/80 text-sm font-sfMono group-hover:text-white transition-colors">
        {tech.name}
      </span>
    </div>
  </motion.div>
);

const Tech = () => {
  return (
    <div className="relative flex flex-col items-center px-4 py-12">
      <Blob5 className="top-10 left-0 opacity-30" />
      <Blob8 className="bottom-0 right-0 opacity-20" />

      {/* Header Section */}
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

      {/* Tech Grid */}
      <div className="w-full max-w-5xl">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {technologies.map((tech, index) => (
            <TechCard key={tech.id} tech={tech} index={index} />
          ))}
        </div>
      </div>

      {/* Featured Tech (Neovim) */}
      <motion.div
        variants={fadeIn("up", "spring", 0.5, 1)}
        className="mt-12 flex flex-col items-center"
      >
        <div className="relative w-20 h-20 bg-conic-gradient rounded-2xl p-1">
          <div className="flex items-center justify-center w-full h-full bg-n-8 rounded-2xl">
            <img src={nvim} width={48} height={48} alt="Neovim" />
          </div>
        </div>
        <span className="mt-3 text-white/90 font-sfMono text-lg">
          Featured: Neovim
        </span>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Tech, "tech");

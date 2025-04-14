import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { technologies } from "../constant";
import { Blob8, Blob5 } from "./decoration/Blob1";
import { nvim } from "../assets";
import { fadeIn, textVariant } from "../utils/motion";

const Tech = () => {
  const innerRingTechs = technologies.slice(0, 5);
  const outerRingTechs = technologies.slice(5, 13);

  return (
    <div className="flex flex-wrap lg:flex-nowrap items-center justify-center gap-10 size-full mt-5 mb-4 px-4">
      <Blob5 className="top-1/4 -left-10 opacity-40" />
      <Blob8 className="bottom-[10%] right-0 opacity-25" />

      <div className="relative flex w-[25rem] lg:w-[30rem] aspect-square border-2 border-n-6 rounded-full mx-auto lg:mx-0 scale-75 md:scale-100 mt-5 lg:mt-0">
        <div className="flex w-40 lg:w-60 aspect-square rounded-full m-auto border-2 border-n-6">
          <div className="w-[6rem] aspect-square m-auto p-[0.2rem] bg-conic-gradient rounded-full z-10 group">
            <div className="flex items-center justify-center size-full bg-n-8 rounded-full group-hover:scale-110 transition-all duration-75 ease-in-out">
              <img src={nvim} width={48} height={48} alt="Neovim" />
            </div>
          </div>
        </div>

        <ul className="absolute inset-0">
          {innerRingTechs.map((tech, index) => {
            const angle = (360 / innerRingTechs.length) * index;
            const radius = 7;

            return (
              <li
                key={`inner-${tech.id}`}
                className="absolute"
                style={{
                  top: '50%',
                  left: '50%',
                  transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(-${radius}rem) rotate(-${angle}deg)`
                }}
              >
                <div className=" z-10 flex items-center justify-center w-16 h-16 bg-n-7 bg-black/10 backdrop-blur-[2.5px] border border-n-1/15 rounded-2xl group transition-all duration-300 hover:scale-110">
                  <img
                    src={tech.icon}
                    alt={tech.name}
                    className="w-9 h-9 object-contain group-hover:scale-90 transition-all duration-75 ease-in-out"
                  />
                </div>
              </li>
            );
          })}
        </ul>

        <ul className="absolute inset-0">
          {outerRingTechs.map((tech, index) => {
            const angle = (360 / outerRingTechs.length) * index;
            const radius = 14.5;

            return (
              <li
                key={`outer-${tech.id}`}
                className="absolute"
                style={{
                  top: '50%',
                  left: '50%',
                  transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(-${radius}rem) rotate(-${angle}deg)`
                }}
              >
                <div className="flex items-center justify-center w-16 h-16 bg-n-7 bg-black/10 backdrop-blur-[2.5px] border border-n-1/15 rounded-2xl group transition-all duration-300 hover:scale-110">
                  <img
                    src={tech.icon}
                    alt={tech.name}
                    className="w-10 h-10 object-contain group-hover:scale-90 transition-all duration-75 ease-in-out"
                  />
                </div>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="w-full lg:w-[50%] text-center lg:text-right">
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Things I play with</p>
          <h2 className={styles.sectionHeadText}>Tech Stack</h2>
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-4 text-white/60 font-sfMono text-[14px] max-w-3xl mx-auto lg:mx-0 tracking-normal leading-[25px]"
          >
            Explore tools and technologies that power modern development.
            <br />
            From design to deployment these are the frameworks, libraries, and
            platforms I use to bring ideas to life.
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "tech");

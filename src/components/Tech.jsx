import { motion } from "framer-motion";

import { SectionWrapper } from "../hoc";

import { styles } from "../styles";
import { technologies } from "../constant";
import { Blob8, Blob5 } from "./decoration/Blob1";
import { nvim } from "../assets";

import { fadeIn, textVariant } from "../utils/motion";

const Tech = () => {
  return (
    <div className="flex flex-wrap lg:flex-nowrap items-center justify-center gap-10 size-full mt-5 mb-4 px-4">
      <Blob5 className="top-1/4 -left-10 opacity-40" />
      <Blob8 className="bottom-[10%] right-0 opacity-25" />
      <div className="relative flex w-[25rem] lg:w-[30rem] aspect-square border border-n-6 rounded-full mx-auto lg:mx-0 scale-75 md:scale-100 mt-5 lg:mt-0">
        <div className="flex w-40 lg:w-60 aspect-square rounded-full m-auto border border-n-6">
          <div className="w-[6rem] aspect-square m-auto p-[0.2rem] bg-conic-gradient rounded-full z-10 group">
            <div className="flex items-center justify-center size-full bg-n-8 rounded-full group-hover:scale-110 transition-all duration-75 ease-in-out">
              <img src={nvim} width={48} height={48} alt="" />
            </div>
          </div>
        </div>
        <ul>
          {technologies.map((app, index) => {
            const angle = (360 / technologies.length) * index;

            return (
              <li
                key={app.id}
                className={`absolute top-0 left-1/2 h-1/2 -ml-[1.8rem] origin-bottom`}
                style={{ transform: `rotate(${angle}deg)` }}
              >
                <div
                  className={`relative bg-primary/50 -top-[1.6rem] flex w-[3.3rem] group lg:w-[4rem] h-[3.3rem] lg:h-[4rem] bg-n-7 border border-n-1/15 rounded-2xl`}
                  style={{ transform: `rotate(-${angle}deg)` }}
                >
                  <img
                    src={app.icon}
                    alt={app.name}
                    className="m-auto object-cover w-[2.2rem] h-auto lg:w-[3.2rem] group-hover:scale-90 transition-all duration-75 ease-in-out"
                  />
                </div>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="w-full lg:w-[50%]  text-center lg:text-right">
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


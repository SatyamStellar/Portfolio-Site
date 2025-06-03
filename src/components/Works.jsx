import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import { styles } from "../styles";
import { github, pplay } from "../assets";
import { projects } from "../constant";

import { Blob2, Blob5 } from "./decoration/Blob1";

const ProjectCard = ({
  index,
  name,
  description,
  tags = [],
  image,
  source_code_link,
  live_link,
}) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.2, delay: index * 0.1, ease: "easeInOut" }}
    >
      {/* Removed Tilt wrapper temporarily for mobile fix */}
      <div className="bg-tertiary/30 overflow-hidden hover:shadow-md hover:shadow-sec/15 p-3 sm:p-5 rounded-2xl w-full max-w-[100%] sm:max-w-[360px]">
        <div className="relative w-full h-[160px] sm:h-[200px]">
          <img
            src={image}
            alt={`${name} preview`}
            className="h-full w-full object-cover rounded-2xl"
          />

          <div className="absolute inset-0 flex justify-end m-2 sm:m-3 gap-1 sm:gap-2 card-img_hover">
            <motion.div
              whileTap={{ scale: 0.85 }}
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-8 h-8 sm:w-10 sm:h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="GitHub source code"
                className="w-1/2 h-1/2 object-contain"
              />
            </motion.div>

            <motion.div
              whileTap={{ scale: 0.85 }}
              onClick={() => window.open(live_link, "_blank")}
              className="black-gradient w-8 h-8 sm:w-10 sm:h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={pplay}
                alt="Live demo"
                className="w-1/2 h-1/2 object-contain"
              />
            </motion.div>
          </div>

          <Blob5 className="absolute bottom-0 left-0 opacity-20 sm:opacity-30" />
        </div>

        <div className="mt-3 sm:mt-5">
          <h3 className="text-sec font-monaco text-xl sm:text-2xl md:text-3xl lg:text-[44px] leading-tight">
            {name}
          </h3>
          <p className="text-white font-semibold text-xs sm:text-sm mt-1 sm:mt-2">
            {description}
          </p>
        </div>

        <div className="flex flex-wrap mt-2 sm:mt-4 gap-1 sm:gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-xs sm:text-sm md:text-[16px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Works = () => {
  return (
    <section id="work" className="relative w-full min-h-screen overflow-visible px-4 pb-10">
      <Blob2 className="absolute top-[5%] left-[2%] opacity-25" />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="mt-20 sm:ml-40"
      >
        <p className={`${styles.sectionSubText} px-4`}>Some of my work</p>
        <h2 className={`${styles.sectionHeadText} px-4`}>Projects.</h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="w-full sm:ml-40 px-4"
      >
        <motion.p className="mt-3 text-white/60 font-moonrising text-xs sm:text-sm max-w-3xl tracking-wide leading-[20px] sm:leading-[24px] md:leading-[30px]">
          These projects demonstrate my expertise with real-world examples,
          including brief descriptions, links to source code, and live demos.
          They show my ability to solve complex problems, work with diverse
          technologies, and manage projects effectively.
        </motion.p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="mt-12 flex flex-wrap justify-center gap-4"
      >
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </motion.div>
    </section>
  );
};

export default Works;


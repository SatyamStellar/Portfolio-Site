import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { github, pplay } from "../assets";
import { projects } from "../constant";
import { fadeIn, textVariant } from "../utils/motion";

import { Blob2, Blob5 } from "./decoration/Blob1"


const ProjectCard = ({ index, name, description, tags, image, source_code_link, live_link }) => {
  return (
    <motion.div
      className="relative"
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}>



      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450
        }}
        className="bg-tertiary/30 overflow-hidden hover:shadow-md hover:shadow-sec/15 p-5 rounded-2xl sm:w-[360px] w-full">

        <div className="relative w-full h-[200px]">
          <img src={image} alt={name} className="h-full w-full object-cover rounded-2xl" />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <motion.div whileTap={{ scale: 0.85 }} onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer">
              <img src={github} alt="github" className="w-1/2 h-1/2 object-contain" />
            </motion.div>
            <motion.div whileTap={{ scale: 0.85 }} onClick={() => window.open(live_link, "_blank")}
              className="black-gradient ml-2 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer">
              <img src={pplay} alt="github" className="w-1/2 h-1/2 text-white object-contain " />
            </motion.div>

          </div>
          <Blob5 className="bottom-0 left-0 opacity-30" />

        </div>
        <div className="mt-5">
          <h3 className="text-sec font-monaco text-[44px]">{name}</h3>
          <p className="text-white font-semibold text-[12px] ">{description}</p>
        </div>
        <div className="flex flex-wrap mt-4 gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[16px] ${tag.color}`}>#{tag.name}</p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  )
}


const Works = () => {
  return (
    <>

      <Blob2 className="top-[5%] left-[2%] opacity-25" />
      <motion.div variants={textVariant()}>

        <p className={styles.sectionSubText}>
          Some of my work
        </p>
        <h2 className={styles.sectionHeadText}>
          Projects.
        </h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-white/60 font-moonrising text-[14px] max-w-3xl tracking-wide leading-[30px]">
          These projects demonstrate my expertise with real-world examples, including brief descriptions, links to source code, and live demos. They show my ability to solve complex problems, work with diverse technologies, and manage projects effectively.
        </motion.p>
      </div>
      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard
            key={`project-${index}`}
            index={index}
            {...project}
          />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Works, "work")

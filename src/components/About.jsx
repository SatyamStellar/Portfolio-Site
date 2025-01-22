import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion';
import Lottie from "lottie-react";

import { services } from "../constant";

import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";
import { Blob4, Blob5, Blob6 } from './decoration/Blob1';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className={`xs:w-[250px] relative overflow-hidden w-full ${index === 0 ? 'lg:col-span-2 lg:w-[35rem] z-[1]' : ''}`}>
      <motion.div variants={fadeIn("left", "spring", 0.5 * index, 1)}
        className={`w-full border-sec group border-[1.5px] p-[1px] rounded-[20px] shadow-card  transition-all ease-in-out duration-100 ${index === 0 ? 'lg:col-span-2' : ''}`}>
        <div options={
          {
            max: index === 0 ? 5 : 10,
            scale: index === 0 ? 1 : 1,
            speed: 600,
          }
        }
          className="bg-tertiary/40 rounded-[20px] py-5 px-12 min-h-[280px] flex flex-col overflow-hidden relative justify-evenly  items-center ${index === 0 ? 'lg:col-span-2' : ''}">
          {index === 0 ? <Blob4 className="-top-1/2  left-1/2 -translate-x-1/2 " /> :
            index === 1 ? <Blob5 className="-top-[20%] -left-[5%]" /> :
              <Blob6 className="-bottom-[20%] -right-[5%]" />}

          <Lottie animationData={icon} style={{ width: index === 0 ? 200 : 140, height: index === 0 ? 180 : 140 }} loop={true} />
          <h3 className="text-white group-hover:text-sec text-[20px] text-center font-consolaMono font-bold transition-all ease-in-out duration-100">{title}</h3>
        </div>
      </motion.div>
    </Tilt >
  )
}

const About = () => {
  return (
    <div className="lg:flex items-center lg:gap-10">
      <div className="lg:w-[50%]">
        <motion.div variants={textVariant()} >
          <p className={styles.sectionSubText}>
            Introduction
          </p>
          <h2 className={styles.sectionHeadText}>
            Overview.
          </h2>
        </motion.div>
        <motion.p variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-white font-sfMono text-[14px] max-w-3xl tracking-normal leading-[25px]">
          - A dynamic tech enthusiast passionate about IT, quick to learn, adept at problem-solving, and fueled by curiosity. With a love for tackling challenges head-on, I'm always eager to explore and innovate.
        </motion.p>
      </div>
      <div className="mt-20 grid md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-2  gap-10 lg:gap-y-5 lg:gap-x-8 place-items-center ">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}

      </div>
    </div>
  )
}

export default SectionWrapper(About, "about")

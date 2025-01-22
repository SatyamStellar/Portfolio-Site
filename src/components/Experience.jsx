import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import 'react-vertical-timeline-component/style.min.css';

import { SectionWrapper } from '../hoc';

import { styles } from "../styles"
import { experiences } from "../constant"

import { textVariant } from "../utils/motion";


const ExperienceCard = ({ experience }) =>
(
  <VerticalTimelineElement
    contentStyle={{ backgroundColor: '#1d212a', color: "#fff" }}
    contentArrowStyle={{ borderRight: '7px solid #1d212a' }}
    date={experience.date}
    iconStyle={{ background: experience.iconBg }}
    icon={
      <div className="w-full h-full  flex justify-center items-center">
        <img src={experience.icon} alt={experience.company_name}
          className="w-[60%] h-[60%] object-contain" />
      </div>

    }
  >
    <div>
      <h3 className="text-sec text-[48px]  font-monaco">{experience.title}</h3>
      <p className="text-white font-sfMono text-[14px] border-b-[1.75px] border-sec w-fit" style={{ margin: 0 }}>{experience.company_name}</p>
      <ul className="mt-5 marker:text-sec list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li key={`experience-point-${index}`}
            className="text-white font-liberationMono text-[14px] pl-1">
            {point}
          </li>
        ))}
      </ul>
    </div>
  </VerticalTimelineElement>
)


const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>
          What I have so far
        </p>
        <h2 className={styles.sectionHeadText}>
          Work Experience.
        </h2>
      </motion.div>
      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  )
}

export default SectionWrapper(Experience, "experience")

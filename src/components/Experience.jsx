import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import 'react-vertical-timeline-component/style.min.css';

import { styles } from "../styles";
import { experiences } from "../constant";

const ExperienceCard = ({ experience, index }) => (
  <VerticalTimelineElement
    contentStyle={{
      backgroundColor: '#1d212a',
      color: "#fff",
      marginBottom: '40px', // Added spacing between elements
      maxWidth: '500px', // Control card width
      marginLeft: index % 2 === 0 ? '50px' : 'auto', // Left for even, right for odd
      marginRight: index % 2 === 0 ? 'auto' : '50px',
    }}
    contentArrowStyle={{
      borderRight: index % 2 === 0 ? '7px solid #1d212a' : 'none',
      borderLeft: index % 2 === 1 ? '7px solid #1d212a' : 'none',
    }}
    date={experience.date}
    iconStyle={{ background: experience.iconBg }}
    position={index % 2 === 0 ? 'left' : 'right'} // Alternate position
    icon={
      <div className="w-full h-full flex justify-center items-center">
        <img src={experience.icon} alt={experience.company_name} className="w-[60%] h-[60%] object-contain" />
      </div>
    }
  >
    <div className="px-5">
      <h3 className="text-sec text-[48px] font-monaco">{experience.title}</h3>
      <p className="text-white font-sfMono text-[14px] border-b-[1.75px] border-sec w-fit" style={{ margin: 0 }}>{experience.company_name}</p>
      <ul className="mt-5 marker:text-sec list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li key={`experience-point-${index}`} className="text-white font-liberationMono text-[14px] pl-1">
            {point}
          </li>
        ))}
      </ul>
    </div>
  </VerticalTimelineElement>
);

const Experience = () => {
  return (
    <>
      <motion.div
        className="mt-20 mx-4 sm:ml-40"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <p className={`${styles.sectionSubText}`}>What I have so far</p>
        <h2 className={styles.sectionHeadText}>Work Experience.</h2>
      </motion.div>
      <motion.div
        className="mt-20 flex flex-col"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <VerticalTimeline className="mt-4" lineColor="#1d212a">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, delay: index * 0.2, ease: "easeInOut" }}
            >
              <ExperienceCard experience={experience} index={index} />
            </motion.div>
          ))}
        </VerticalTimeline>
      </motion.div>
    </>
  );
};

export default Experience;

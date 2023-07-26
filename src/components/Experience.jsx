import React from "react";
import { VerticalTimeline } from "react-vertical-timeline-component";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { styles } from "../style";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = (props) => (
  <VerticalTimelineElement
    contentStyle={{ background: "#1d1836", color: "#fff" }}
    contentArrowStyle={{ borderRight: "7px solid #232631" }}
    date={props.experience.date}
    iconStyle={{ background: props.experience.iconBg }}
    icon={
      <div className="flex justify-center items-center w-full h-full">
        <img
          src={props.experience.icon}
          alt={props.experience.company_name}
          className="w-[100%] h-[100%] rounded-full object-contain"
        />
      </div>
    }
  >
    <div>
      <h3 className="text-white text-[24px] font-bold">
        {props.experience.title}
      </h3>
      <p className="text-secondary text-[16px] font-semibold">
        {props.experience.company_name}
      </p>
      <ul className="mt-5 list-disc ml-5 space-y-2">
        {props.experience.points.map((point,index) => (
          <li
            key={`experience-point-${index}`}
            className="text-[14px] pl-1 tracking-wider text-white-100"
          >
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
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>
          What roles i have been in so far.
        </p>
        <h2 className={styles.sectionHeadText}>Roles</h2>
      </motion.div>
      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");

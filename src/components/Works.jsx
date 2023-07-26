import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../style";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = (props) => (
  <motion.div variants={fadeIn("up", "spring", props.index * 0.5, 0.75)}>
    <Tilt
      options={{
        max: 45,
        scale: 1,
        speed: 450,
      }}
      className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
    >
      <div className="relative w-full h-[230px]">
        <img
          src={props.image}
          alt={props.name}
          className="w-full h-full object-cover rounded-2xl"
        />
        <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
          <div
            onClick={() => window.open(props.source_code_link, "_blank")}
            className="black-gradient w-10 h-10 rounded-full flex justify-center cursor-pointer items-center"
          >
            <img
              src={github}
              alt="github"
              className="object-contain w-3/2 h-3/2 "
            />
          </div>
        </div>
      </div>
      <div className="mt-5 flex justify-center items-center flex-col">
        <h3 className="m-3 text-white-100 font-bold text-[22px]">
          {props.name}
        </h3>
        <p className="text-secondary text-center">{props.description}</p>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {props.tags.map((tag) => (
          <p key={tag.name} className={`text-[14px] ${tag.color}`}>
            #{tag.name}
          </p>
        ))}
      </div>
    </Tilt>
  </motion.div>
);

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Following projects show my skills and experience through real-world
          examples of my work. Each project is briefly described with links to
          code repositories and live demos with it. It reflects my ability to
          solve complex problems by dividing them into smaller sub-problems,
          with different technologies and managing multiple projects efficiently
        </motion.p>
      </div>
      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} {...project} index={index} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "works");

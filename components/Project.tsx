import React, { useRef } from "react";
import { motion } from "framer-motion";
import { BiLink } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
import { useInView } from "framer-motion";

const Project = ({ project }: any) => {
  const variants = {
    hidden: {
      opacity: 0,
      y: 150,
    },
    animate: {
      opacity: 1,
      y: 0,
    },
  };

  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <motion.div
      variants={variants}
      initial={{
        opacity: 0,
        y: 0
      }}
      animate={isInView ? 'animate': 'hidden'}
      ref={ref}
      className={`p-5 w-fit rounded-xl ${project.color} `}
    >
      <h4 className="font-['Mark_Pro'] text-3xl md:text-5xl w-44">
        {project.title}
      </h4>
      <div className="flex gap-3 mt-10 items-center">
        <a href={project.github}>
          <BsGithub fontSize={35} />
        </a>
        <a href={project.link}>
          <BiLink fontSize={35} />
        </a>
      </div>
    </motion.div>
  );
};

export default Project;

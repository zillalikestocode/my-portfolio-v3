import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import projects from "../assets/projects";
import Project from "./Project";

const Projects = () => {

  return (
    <div className="px-10">
      <h4 className="font-['D-Din'] w-fit font-medium text-xl md:text-2xl tracking-[.25em]">
        THINGS I'VE BUILT
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "60%" }}
          transition={{ delay: 0.3, duration: 0.5}}
          className="h-1 bg-fuchsia-500"
        />
      </h4>
      <motion.div className="mt-5 grid-cols-2 grid w-fit gap-5">
        {projects.map((item)=>{
            return (
                <Project project={item} />
            )
        })}
        </motion.div>
    </div>
  );
};

export default Projects;

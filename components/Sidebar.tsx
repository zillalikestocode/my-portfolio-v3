import React from "react";
import { motion } from "framer-motion";
import { CgClose } from "react-icons/cg";
import { useRecoilState } from "recoil";
import { sidebar } from "../atoms/sidebar";

const Sidebar = () => {
  const [side, setSidebar] = useRecoilState(sidebar);
  return (
    <motion.div
      initial={{ x: "-100%" }}
      animate={{ x: 0 }}
      exit={{ x: "-100%" }}
      transition={{ ease: "easeInOut" }}
      className="fixed p-5 top-0 h-screen bg-red-500 left-0 md:w-[500px]"
    >
      <button onClick={() => setSidebar(false)} className="ml-auto flex">
        <CgClose fontSize={35} />
      </button>
    </motion.div>
  );
};

export default Sidebar;

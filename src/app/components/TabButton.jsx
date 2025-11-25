import React from "react";
import { motion } from "framer-motion";

const variants = {
  default: { width: 0 },
  active: { width: "calc(100% - 0.75rem)" },
};

const TabButton = ({ active, selectTab, children }) => {
  const activeColor = "text-[#FF3B3B]"; // warna merah konsisten
  const inactiveColor = "text-[#ADB7BE]";

  return (
    <button onClick={selectTab}>
      <p
        className={`mr-3 font-semibold transition-colors duration-300 ${
          active ? activeColor : `${inactiveColor} hover:text-[#FF3B3B]`
        }`}
      >
        {children}
      </p>

      <motion.div
        animate={active ? "active" : "default"}
        variants={variants}
        className="h-1 bg-[#FF3B3B] mt-2 mr-3 rounded-full"
      ></motion.div>
    </button>
  );
};

export default TabButton;

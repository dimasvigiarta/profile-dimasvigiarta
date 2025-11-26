import React from "react";

const ProjectTag = ({ name, onClick, isSelected }) => {
  // Logic style: Jika dipilih border merah, jika tidak abu-abu
  const buttonStyles = isSelected
    ? "text-white border-red-500 bg-red-500/10"
    : "text-[#ADB7BE] border-slate-600 hover:border-white hover:text-white";

  return (
    <button
      className={`${buttonStyles} rounded-full border-2 px-6 py-3 text-xl cursor-pointer transition-all duration-300`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};

export default ProjectTag;

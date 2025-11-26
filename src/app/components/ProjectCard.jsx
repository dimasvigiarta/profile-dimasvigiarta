import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
  return (
    <div className="group rounded-xl overflow-hidden shadow-lg hover:shadow-red-900/40 hover:scale-[1.02] transition-all duration-500 border border-[#2a2a2a] bg-[#181818]">
      {/* BAGIAN GAMBAR */}
      <div
        className="h-48 md:h-60 relative overflow-hidden group"
        style={{
          background: `url(${imgUrl})`,
          backgroundSize: "cover",
          // PERUBAHAN DI SINI:
          // "center top" artinya: Horizontal tengah, Vertikal mulai dari ATAS.
          backgroundPosition: "center top",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Overlay Hitam saat Hover */}
        <div className="absolute top-0 left-0 w-full h-full bg-[#121212] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 items-center justify-center gap-4">
          {/* Tombol Github */}
          <Link
            href={gitUrl}
            className="h-12 w-12 border-2 relative rounded-full border-[#ADB7BE] hover:border-white hover:bg-white/10 transition-colors group/link"
          >
            <CodeBracketIcon className="h-8 w-8 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white" />
          </Link>

          {/* Tombol Preview */}
          <Link
            href={previewUrl}
            className="h-12 w-12 border-2 relative rounded-full border-[#ADB7BE] hover:border-white hover:bg-white/10 transition-colors group/link"
          >
            <EyeIcon className="h-8 w-8 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white" />
          </Link>
        </div>
      </div>

      {/* BAGIAN TEKS */}
      <div className="text-white py-4 px-4">
        <h5 className="text-lg font-bold mb-2 group-hover:text-red-500 transition-colors duration-300 line-clamp-1">
          {title}
        </h5>
        <p className="text-[#ADB7BE] text-sm leading-relaxed line-clamp-2">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;

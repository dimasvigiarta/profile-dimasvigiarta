"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

// DATA PROJECT KAMU (Path gambar sudah saya samakan dengan punyamu)
const projectsData = [
  {
    id: 1,
    title: "Website Profile",
    description: "Website profile Dimas Indra Vigiarta Berbasis Next JS",
    image: "/images/projects/portofoliodimas.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Kost-ku",
    description: "Website Sistem management Kost Berbasis Laravel",
    image: "/images/projects/Kost-ku.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Uang-ku",
    description: "Sistem Pencacatan uang pribadi Berbasis Laravel",
    image: "/images/projects/uangku.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Cafee-ku",
    description: "Website Sistem management Cafee Berbasis Laravel",
    image: "/images/projects/Cafe-ku.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Design Rumah 1 Lantai",
    description: "Desain Rumah 1 Lantai 15x25m (SketchUp)",
    image: "/images/projects/rumah1.png",
    tag: ["All", "Design"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Interior Design",
    description: "Desain Interior Ruang Tamu Modern",
    image: "/images/projects/interior.png",
    tag: ["All", "Design"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  // State untuk menyimpan tag yang sedang aktif (Default: All)
  const [tag, setTag] = useState("All");
  const ref = useRef(null);

  // Animasi saat di-scroll
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Fungsi ganti tag saat tombol diklik
  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  // Filter data berdasarkan tag
  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  // Konfigurasi animasi kartu
  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects" className="pt-24 pb-12">
      <div className="container mx-auto px-4 sm:px-12">
        {/* JUDUL DENGAN GRADASI MERAH */}
        <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
          My{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF0000] to-[#FF8888]">
            Projects
          </span>
        </h2>

        {/* TOMBOL FILTER */}
        <div className="text-white flex flex-row justify-center items-center gap-2 py-6 mb-8">
          <ProjectTag
            onClick={handleTagChange}
            name="All"
            isSelected={tag === "All"}
          />
          <ProjectTag
            onClick={handleTagChange}
            name="Web"
            isSelected={tag === "Web"}
          />
          <ProjectTag
            onClick={handleTagChange}
            name="Design"
            isSelected={tag === "Design"}
          />
        </div>

        {/* GRID PROJECT */}
        <ul
          ref={ref}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12"
        >
          {filteredProjects.map((project, index) => (
            <motion.li
              key={index}
              variants={cardVariants}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              layout // Properti layout membuat transisi posisi otomatis saat filter berubah
            >
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                imgUrl={project.image}
                gitUrl={project.gitUrl}
                previewUrl={project.previewUrl}
              />
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ProjectsSection;

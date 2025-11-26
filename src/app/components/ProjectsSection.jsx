"use client";
import React, { useState, useRef, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Portfolio Website Next JS",
    description: "Website profile Dimas Indra Vigiarta",
    image: "/images/projects/portofoliodimas.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Kost-ku",
    description: "Website Sistem management Kost Berbasis Laravel",
    image: "/images/projects/KOSTKU.png",
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
    description: "Website Sistem management Cafee Berbasi Laravel",
    image: "/images/projects/cafeeku.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Design",
    description: "Rumah 1 Lantai 15x25m",
    image: "/images/projects/rumah1.png",
    tag: ["All", "Design"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Design",
    description: "Interior Ruang Tamu",
    image: "/images/projects/interior.png",
    tag: ["All", "Design"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById("projects");
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section id="projects" className="pt-24">
      <style jsx>{`
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-scaleIn {
          animation: scaleIn 0.6s ease-out forwards;
        }

        .delay-0 {
          animation-delay: 0s;
        }
        .delay-100 {
          animation-delay: 0.1s;
        }
        .delay-200 {
          animation-delay: 0.2s;
        }
        .delay-300 {
          animation-delay: 0.3s;
        }
        .delay-400 {
          animation-delay: 0.4s;
        }
        .delay-500 {
          animation-delay: 0.5s;
        }
      `}</style>

      <h2
        className={`text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12 ${
          isVisible ? "animate-scaleIn opacity-0" : "opacity-0"
        }`}
      >
        My Projects
      </h2>
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {projectsData.map((project, index) => (
          <div
            key={index}
            className={`${
              isVisible
                ? `animate-scaleIn delay-${index * 100} opacity-0`
                : "opacity-0"
            }`}
          >
            <ProjectCard
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;

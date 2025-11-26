"use client";
import React, { useTransition, useState, useEffect, useRef } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import { motion, useInView } from "framer-motion";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Design & 3D Modeling */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="bg-[#1a1a1a] rounded-lg p-4 border border-[#2a2a2a] hover:border-[#ac0000] transition-all hover:scale-105 hover:shadow-lg hover:shadow-[#ac0000]/20"
        >
          <div className="flex items-center gap-2 mb-3">
            <h3 className="text-lg font-semibold text-white">
              Design & 3D Modeling
            </h3>
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-[#2a2a2a] text-[#ADB7BE] rounded-full text-sm hover:bg-[#ac0000] hover:text-white transition-all cursor-pointer">
              SketchUp
            </span>
            <span className="px-3 py-1 bg-[#2a2a2a] text-[#ADB7BE] rounded-full text-sm hover:bg-[#ac0000] hover:text-white transition-all cursor-pointer">
              Figma
            </span>
            <span className="px-3 py-1 bg-[#2a2a2a] text-[#ADB7BE] rounded-full text-sm hover:bg-[#ac0000] hover:text-white transition-all cursor-pointer">
              Canva
            </span>
          </div>
        </motion.div>

        {/* Frontend Development */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-[#1a1a1a] rounded-lg p-4 border border-[#2a2a2a] hover:border-[#ac0000] transition-all hover:scale-105 hover:shadow-lg hover:shadow-[#ac0000]/20"
        >
          <div className="flex items-center gap-2 mb-3">
            <h3 className="text-lg font-semibold text-white">
              Frontend Development
            </h3>
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-[#2a2a2a] text-[#ADB7BE] rounded-full text-sm hover:bg-[#ac0000] hover:text-white transition-all cursor-pointer">
              HTML & CSS
            </span>
            <span className="px-3 py-1 bg-[#2a2a2a] text-[#ADB7BE] rounded-full text-sm hover:bg-[#ac0000] hover:text-white transition-all cursor-pointer">
              JavaScript
            </span>
            <span className="px-3 py-1 bg-[#2a2a2a] text-[#ADB7BE] rounded-full text-sm hover:bg-[#ac0000] hover:text-white transition-all cursor-pointer">
              React.js
            </span>
            <span className="px-3 py-1 bg-[#2a2a2a] text-[#ADB7BE] rounded-full text-sm hover:bg-[#ac0000] hover:text-white transition-all cursor-pointer">
              Next.js
            </span>
            <span className="px-3 py-1 bg-[#2a2a2a] text-[#ADB7BE] rounded-full text-sm hover:bg-[#ac0000] hover:text-white transition-all cursor-pointer">
              Bootstrap
            </span>
            <span className="px-3 py-1 bg-[#2a2a2a] text-[#ADB7BE] rounded-full text-sm hover:bg-[#ac0000] hover:text-white transition-all cursor-pointer">
              Tailwind CSS
            </span>
          </div>
        </motion.div>

        {/* Backend Development */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="bg-[#1a1a1a] rounded-lg p-4 border border-[#2a2a2a] hover:border-[#ac0000] transition-all hover:scale-105 hover:shadow-lg hover:shadow-[#ac0000]/20"
        >
          <div className="flex items-center gap-2 mb-3">
            <h3 className="text-lg font-semibold text-white">
              Backend Development
            </h3>
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-[#2a2a2a] text-[#ADB7BE] rounded-full text-sm hover:bg-[#ac0000] hover:text-white transition-all cursor-pointer">
              PHP
            </span>
            <span className="px-3 py-1 bg-[#2a2a2a] text-[#ADB7BE] rounded-full text-sm hover:bg-[#ac0000] hover:text-white transition-all cursor-pointer">
              Laravel
            </span>
            <span className="px-3 py-1 bg-[#2a2a2a] text-[#ADB7BE] rounded-full text-sm hover:bg-[#ac0000] hover:text-white transition-all cursor-pointer">
              Node.js
            </span>
            <span className="px-3 py-1 bg-[#2a2a2a] text-[#ADB7BE] rounded-full text-sm hover:bg-[#ac0000] hover:text-white transition-all cursor-pointer">
              REST API
            </span>
          </div>
        </motion.div>

        {/* Database & Tools */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-[#1a1a1a] rounded-lg p-4 border border-[#2a2a2a] hover:border-[#ac0000] transition-all hover:scale-105 hover:shadow-lg hover:shadow-[#ac0000]/20"
        >
          <div className="flex items-center gap-2 mb-3">
            <h3 className="text-lg font-semibold text-white">
              Database & Tools
            </h3>
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-[#2a2a2a] text-[#ADB7BE] rounded-full text-sm hover:bg-[#ac0000] hover:text-white transition-all cursor-pointer">
              MySQL
            </span>
            <span className="px-3 py-1 bg-[#2a2a2a] text-[#ADB7BE] rounded-full text-sm hover:bg-[#ac0000] hover:text-white transition-all cursor-pointer">
              Git & GitHub
            </span>
            <span className="px-3 py-1 bg-[#2a2a2a] text-[#ADB7BE] rounded-full text-sm hover:bg-[#ac0000] hover:text-white transition-all cursor-pointer">
              WordPress
            </span>
            <span className="px-3 py-1 bg-[#2a2a2a] text-[#ADB7BE] rounded-full text-sm hover:bg-[#ac0000] hover:text-white transition-all cursor-pointer">
              VS Code
            </span>
          </div>
        </motion.div>
      </div>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <motion.div
        className="space-y-4"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="bg-[#1a1a1a] rounded-lg p-4 border-l-4 border-[#ac0000] hover:scale-105 transition-all hover:shadow-lg hover:shadow-[#ac0000]/20">
          <h3 className="text-lg font-semibold text-white mb-2">
            S1 Teknik Informatika
          </h3>
          <p className="text-[#ADB7BE]">Universitas Dian Nuswantoro</p>
          <p className="text-[#ADB7BE] text-sm mt-1">
            Cumlaude Graduate • 3.8 Years
          </p>
        </div>
      </motion.div>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <div className="space-y-3 max-h-[400px] overflow-y-auto pr-2">
        {[
          "Certification Scheme Of Associate Data Scientist - BNSP",
          "Young Building Engineering Expert - BNSP",
          "General Occupational Safety Health Expert - BNSP",
          "Halal Product Process Companion",
          "3rd Place - 71-75Kg Class (Adult) Bandung Lautan Api Championship V National Open 2023",
          "3rd Place - 65-70Kg Class (Adult) IPSI Malang Championship 4 National Open 2024",
        ].map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            viewport={{ once: true }}
            className={`bg-[#1a1a1a] rounded-lg p-3 border ${
              index >= 4 ? "border-[#ac0000]" : "border-[#2a2a2a]"
            } hover:scale-105 transition-all hover:border-[#ac0000] hover:shadow-lg hover:shadow-[#ac0000]/20`}
          >
            <p className="text-[#ADB7BE] text-sm">{cert}</p>
          </motion.div>
        ))}
      </div>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about" ref={ref}>
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          <Image
            src="/images/dimas.png"
            width={500}
            height={500}
            alt="Dimas"
            className="rounded-lg hover:scale-105 transition-transform duration-300"
          />
        </motion.div>

        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <motion.h2
            className="text-4xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ac0000] to-[#9e0037]">
              About Me
            </span>
          </motion.h2>

          <motion.p
            className="text-base lg:text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            I was shaped by a discipline that wasnt always visible, forged by a
            long journey that taught me perseverance, and strengthened by every
            small step that slowly showed me that any peak can be reached as
            long as the rhythm and determination are maintained.
          </motion.p>

          <motion.div
            className="flex flex-row justify-start mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              Certifications
            </TabButton>
          </motion.div>

          <motion.div
            className="mt-8"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            {TAB_DATA.find((t) => t.id === tab).content}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <div className="space-y-6">
        {/* Design & 3D Modeling */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-3">
            Design & 3D Modeling
          </h3>
          <ul className="list-disc pl-6 space-y-1 text-[#ADB7BE]">
            <li>SketchUp</li>
            <li>Figma</li>
            <li>Canva</li>
          </ul>
        </div>

        {/* Frontend Development */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-3">
            Frontend Development
          </h3>
          <ul className="list-disc pl-6 space-y-1 text-[#ADB7BE]">
            <li>HTML & CSS</li>
            <li>JavaScript</li>
            <li>React.js & Next.js</li>
            <li>Bootstrap</li>
            <li>Tailwind CSS</li>
          </ul>
        </div>

        {/* Backend Development */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-3">
            Backend Development
          </h3>
          <ul className="list-disc pl-6 space-y-1 text-[#ADB7BE]">
            <li>PHP</li>
            <li>Laravel</li>
            <li>Node.js</li>
          </ul>
        </div>

        {/* Database */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-3">Database</h3>
          <ul className="list-disc pl-6 space-y-1 text-[#ADB7BE]">
            <li>MySQL</li>
          </ul>
        </div>

        {/* Tools & Others */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-3">
            Tools & Others
          </h3>
          <ul className="list-disc pl-6 space-y-1 text-[#ADB7BE]">
            <li>Git & GitHub</li>
            <li>WordPress</li>
            <li>VS Code</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>S1 Teknik Informatika Universitas Dian Nuswantoro</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Certification Scheme Of Associate Data Scientist BNSP</li>
        <li>Young Building Enginering Expert BNSP</li>
        <li>general occupational safety health expert BNSP</li>
        <li>Halal Product Process Companion</li>
        <li>
          3rd Place in the 71-75Kg Class (Adult) Bandung Lautan Api Championship
          V National Open 2023
        </li>
        <li>
          3rd Place in the 65-70Kg Class (Adult) IPSI Malang Championship 4
          National Open 2024
        </li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/dimas.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ac0000] to-[#9e0037]">
              About Me
            </span>
          </h2>
          <p className="text-base lg:text-lg">
            I was shaped by a discipline that wasnt always visible, forged by a
            long journey that taught me perseverance, and strengthened by every
            small step that slowly showed me that any peak can be reached as
            long as the rhythm and determination are maintained.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

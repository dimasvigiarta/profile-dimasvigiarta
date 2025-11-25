"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Sketchup</li>
        <li>Figma</li>
        <li>Canva</li>
        <li>Laravel</li>
        <li>Mysql</li>
        <li>Wordpress</li>
        <li>Boostrap</li>
        <li>Tailwind CSS</li>
        <li>Git-Hub</li>
      </ul>
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
        <li>Pendamping Proses Produk halal</li>
        <li>
          Juara 3 Kelas 71-75Kg Bandung Lautan api Championship V Nasional Open
          2023
        </li>
        <li>
          Juara 3 Kelas 65-70Kg IPSI Malang Championship 4 Nasional Open 2024
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
            I was shaped by a discipline that wasn&apost always visible, forged
            by a long journey that taught me perseverance, and strengthened by
            every small step that slowly showed me that any peak can be reached
            as long as the rhythm and determination are maintained.
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

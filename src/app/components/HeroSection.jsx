"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-3xl sm:text-4xl md:text-5xl lg:text-5xl lg:leading-snug font-extrabold">
            <span className="text-transparent bg-clip-text bg-white">
              Hello, I&aposm{" "}
            </span>
            <br />
            <TypeAnimation
              className="text-transparent bg-clip-text bg-gradient-to-r 
    from-[#ac0000] to-[#b1003e]"
              sequence={[
                "Dimas Indra Vigiarta",
                1000,
                "Full Stack Web Developer",
                1000,
                "3D Modeler (SketchUp)",
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>

          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            My name is Dimas Indra Vigiarta, a cumlaude engineering graduate
            from Dian Nuswantoro University, and I completed 3.8 years of study.
            I am a full-stack web developer and 3D designer (SketchUp). I have
            received a scholarship and am active in the pencak silat student
            activity unit (UKM). My hobbies are running and hiking.
          </p>
          <div>
            <Link
              href="/#contact"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 
bg-gradient-to-br from-[#ff3b3b] to-[#ff1a75] 
hover:opacity-90 text-white"
            >
              Hire Me
            </Link>
            <Link
              href="/"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full 
bg-gradient-to-br from-[#ff4040] to-[#ff0066] 
hover:opacity-90 text-white mt-3"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-gradient-to-r  from-[#FF2A2A]/40 to-[#0A0A0A] w-[200px] h-[300px] lg:w-[300px] lg:h-[450px] relative overflow-hidden">
            <Image
              src="/images/dimas1.png"
              alt="hero image"
              fill
              // object-cover object-center akan bekerja dengan baik untuk mengisi elips ini
              className="object-cover object-center"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

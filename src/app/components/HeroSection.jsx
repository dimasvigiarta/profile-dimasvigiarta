"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        @keyframes glow {
          0%,
          100% {
            box-shadow: 0 0 20px rgba(172, 0, 0, 0.5);
          }
          50% {
            box-shadow: 0 0 40px rgba(172, 0, 0, 0.8),
              0 0 60px rgba(172, 0, 0, 0.6);
          }
        }

        .animate-glow {
          animation: glow 2s ease-in-out infinite;
        }
      `}</style>

      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <motion.h1
            className="text-white mb-4 text-3xl sm:text-4xl md:text-5xl lg:text-5xl lg:leading-snug font-extrabold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="text-transparent bg-clip-text bg-white">
              Hello, I'm{" "}
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
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </motion.h1>

          <motion.p
            className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            My name is Dimas Indra Vigiarta, a cumlaude engineering graduate
            from Dian Nuswantoro University, and I completed 3.8 years of study.
            I am a full-stack web developer and 3D designer (SketchUp). I have
            received a scholarship and am active in the pencak silat student
            activity unit (UKM). My hobbies are running and hiking.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Link
              href="/#contact"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 
bg-gradient-to-br from-[#ff3b3b] to-[#ff1a75] 
hover:opacity-90 hover:scale-105 transition-all duration-300 text-white shadow-lg hover:shadow-[#ff3b3b]/50"
            >
              Hire Me
            </Link>
            <Link
              href="/"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full 
bg-gradient-to-br from-[#ff4040] to-[#ff0066] 
hover:opacity-90 hover:scale-105 transition-all duration-300 text-white mt-3"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-gradient-to-r from-[#FF2A2A]/40 to-[#0A0A0A] w-[200px] h-[300px] lg:w-[300px] lg:h-[450px] relative overflow-hidden animate-float animate-glow">
            <Image
              src="/images/dimas1.png"
              alt="hero image"
              fill
              className="object-cover object-center"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center bg-[#121212] overflow-hidden pt-20 md:pt-0">
      <style jsx>{`
        /* Animasi Melayang (Float) */
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        /* Animasi Glow Neon (Rapat ke garis, tidak melebar kotak) */
        @keyframes glow {
          0%,
          100% {
            box-shadow: 0 0 5px rgba(220, 38, 38, 0.2);
            border-color: rgba(153, 27, 27, 0.4);
          }
          50% {
            /* Glow solid tapi pendek (15px) biar tajam */
            box-shadow: 0 0 15px rgba(220, 38, 38, 0.9),
              0 0 5px rgba(255, 255, 255, 0.1) inset;
            border-color: rgba(239, 68, 68, 1);
          }
        }
        .animate-glow {
          animation: glow 2s ease-in-out infinite;
        }
      `}</style>

      {/* Container Utama */}
      <div className="container mx-auto px-4 sm:px-12 flex flex-col-reverse md:flex-row items-center justify-center md:gap-8">
        {/* --- KOLOM TEKS --- */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full md:w-8/12 text-center md:text-left mt-8 md:mt-0"
        >
          <motion.h1
            className="text-white mb-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="text-transparent bg-clip-text bg-white">
              Hello, I&apos;m{" "}
            </span>
            <br />
            <TypeAnimation
              className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF0000] to-[#FF8888]"
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
            className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl max-w-2xl mx-auto md:mx-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            My name is Dimas Indra Vigiarta, a cumlaude engineering graduate
            from Dian Nuswantoro University. I am a full-stack web developer and
            3D designer (SketchUp). I have received a scholarship and am active
            in the pencak silat student activity unit.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
          >
            <Link
              href="/#contact"
              className="px-6 py-3 w-full sm:w-fit rounded-full bg-gradient-to-br from-[#ff3b3b] to-[#ff1a75] hover:opacity-90 hover:scale-105 transition-all text-white shadow-lg text-center"
            >
              Hire Me
            </Link>
            <Link
              href="/"
              className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-[#ff4040] to-[#ff0066] hover:opacity-90 hover:scale-105 transition-all text-white"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2 text-center">
                Download CV
              </span>
            </Link>
          </motion.div>
        </motion.div>

        {/* --- KOLOM GAMBAR --- */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full md:w-4/12 flex justify-center mt-8 md:mt-0"
        >
          {/* Wrapper agar shadow tidak terpotong margin */}
          <div className="relative p-4 flex items-center justify-center">
            {/* CONTAINER FOTO */}
            {/* 1. bg-gradient... : SUDAH SAYA KEMBALIKAN */}
            {/* 2. overflow-hidden : Agar gradasi tetap di dalam bingkai */}
            {/* 3. border-4 : Agar efek neon kelihatan tegas */}
            <div
              className="
              relative 
              w-[200px] h-[300px] 
              sm:w-[250px] sm:h-[350px] 
              lg:w-[350px] lg:h-[500px] 
              rounded-[40px] md:rounded-full 
              border-4 border-red-900 
              animate-float animate-glow 
              z-10 
              bg-gradient-to-r from-[#FF2A2A]/40 to-[#0A0A0A]
              overflow-hidden
            "
            >
              <Image
                src="/images/dimas1.png"
                alt="Dimas Indra Vigiarta"
                fill
                className="object-cover object-center"
                priority
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

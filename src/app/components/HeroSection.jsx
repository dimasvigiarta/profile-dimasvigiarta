"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";
import HeroBackground from "./HeroBackground";

const HeroSection = () => {
  return (
    // relative: Agar background terkunci di sini
    // z-0: Level dasar, agar tidak menutupi Navbar (z-50)
    <section className="lg:py-16 relative w-full min-h-screen flex items-center justify-center overflow-hidden z-0">
      {/* 1. LAYER BACKGROUND (Paling Belakang) */}
      <div className="absolute inset-0 w-full h-full z-0">
        <HeroBackground />
      </div>

      {/* Style Animasi (Float & Glow Foto) */}
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

      {/* 2. LAYER KONTEN (Di Depan Background) */}
      {/* z-10: Cukup tinggi untuk di atas background, tapi masih di bawah Navbar */}
      <div className="container mx-auto px-4 sm:px-12 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-8 items-center">
          {/* Kolom Teks (Kiri) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="col-span-8 text-center sm:text-left"
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
              {/* Text Animasi dengan warna Neon Red cerah */}
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
              className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              My name is Dimas Indra Vigiarta, a cumlaude engineering graduate
              from Dian Nuswantoro University. I am a full-stack web developer
              and 3D designer (SketchUp). I have received a scholarship and am
              active in the pencak silat student activity unit.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center sm:justify-start"
            >
              <Link
                href="/#contact"
                className="px-6 py-3 w-full sm:w-fit rounded-full bg-gradient-to-br from-[#ff3b3b] to-[#ff1a75] hover:opacity-90 hover:scale-105 transition-all text-white shadow-lg text-center"
              >
                Hire Me
              </Link>
              <Link
                href="/"
                className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-[#ff4040] to-[#ff0066] hover:scale-105 transition-all text-white"
              >
                <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2 text-center">
                  Download CV
                </span>
              </Link>
            </motion.div>
          </motion.div>

          {/* Kolom Gambar (Kanan) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="col-span-4 flex justify-center mt-8 sm:mt-0"
          >
            {/* Foto dengan GRADASI MERAH (Sesuai Permintaan) */}
            <div className="rounded-full bg-gradient-to-r from-[#FF2A2A]/40 to-[#0A0A0A] w-[250px] h-[350px] lg:w-[350px] lg:h-[500px] relative overflow-hidden animate-float animate-glow shadow-2xl border-2 border-red-900/20">
              <Image
                src="/images/dimas1.png"
                alt="Dimas Indra Vigiarta"
                fill
                className="object-cover object-center"
                priority={true}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

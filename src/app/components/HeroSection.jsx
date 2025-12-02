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
        /* 1. Keyframes untuk memutar border */
        @keyframes border-spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        /* 2. STYLE UNTUK WRAPPER BORDER (Lapisan luar) */
        .animated-border-wrapper {
          position: relative;
          z-index: 10;

          /* Lebar Border yang terlihat = 4px (padding) */
          padding: 4px;
          overflow: hidden;

          /* Background Merah Solid untuk Border */
          background: #ff0000;

          /* Shadow tipis untuk mempertegas border */
          box-shadow: 0 0 10px rgba(255, 0, 0, 0.7);
        }

        /* 3. Pseudo-element untuk Cahaya Putih yang Berputar */
        .animated-border-wrapper::before {
          content: "";
          position: absolute;
          /* Ukuran sangat besar untuk mencakup seluruh area rotasi */
          top: -200%;
          left: -200%;
          right: -200%;
          bottom: -200%;

          /* Membuat gradient kerucut untuk efek sweeping memutar (PUTIH MENYALA) */
          background: conic-gradient(
            from 0deg,
            transparent 0%,
            rgba(255, 255, 255, 1) 2%,
            /* Titik Cahaya Putih Paling Terang */ rgba(255, 255, 255, 0.8) 10%,
            transparent 30%,
            transparent 100%
          );

          /* Menerapkan Animasi Putar */
          animation: border-spin 3s linear infinite;
          z-index: 11;
          border-radius: inherit;
        }

        /* 4. STYLE UNTUK ISI GAMBAR (Lapisan dalam) */
        .image-content {
          /* Ini adalah masker yang menutupi tengah border */
          background-color: #121212;
          position: relative;
          z-index: 12;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }
      `}</style>

      {/* Container Utama (TIDAK BERUBAH) */}
      <div className="container mx-auto px-4 sm:px-12 flex flex-col-reverse md:flex-row items-center justify-center md:gap-8">
        {/* --- KOLOM TEKS (TIDAK BERUBAH) --- */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full md:w-8/12 text-center md:text-left mt-8 md:mt-0"
        >
          {/* Teks dan Tombol Tetap Utuh */}
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

        {/* --- KOLOM GAMBAR (Aplikasi Efek Border Oval Berputar) --- */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full md:w-4/12 flex justify-center mt-8 md:mt-0"
        >
          <div className="relative p-4 flex items-center justify-center">
            {/* 🛑 WRAPPER BORDER ANIMASI (LAPISAN LUAR) */}
            <div
              className="
                w-[200px] h-[300px] sm:w-[250px] sm:h-[380px] lg:w-[350px] lg:h-[480px] 
                animated-border-wrapper
              "
              style={{ borderRadius: "50% / 10%" }} // Bentuk Oval
            >
              {/* ✅ LAPISAN ISI (LAPISAN DALAM) */}
              <div
                className="image-content"
                style={{ borderRadius: "50% / 10%" }} // Bentuk Oval
              >
                <div
                  className="
                    relative 
                    w-full h-full 
                    overflow-hidden 
                    // Gradasi Background Internal
                    bg-gradient-to-r from-[#FF2A2A]/40 to-[#0A0A0A] 
                  "
                >
                  <Image
                    src="/images/dimas1.png"
                    alt="Dimas Indra Vigiarta"
                    fill
                    className="object-cover object-top"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

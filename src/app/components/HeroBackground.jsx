"use client";
import React from "react";

const HeroBackground = () => {
  return (
    // Base layer hitam pekat (#121212 agar senada dengan navbar)
    <div className="absolute inset-0 -z-10 h-full w-full bg-[#121212] overflow-hidden">
      {/* 1. CAHAYA MERAH SUDAH DIHAPUS TOTAL DI SINI */}

      {/* 2. PATTERN GRID (DOTS) SEAMLESS */}
      {/* Hanya menyisakan pattern titik-titik putih halus */}
      <div
        className="absolute inset-0 h-full w-full z-10"
        style={{
          // Membuat pola titik-titik halus (Dots)
          backgroundImage:
            "radial-gradient(rgba(255, 255, 255, 0.15) 1.5px, transparent 1.5px)",
          backgroundSize: "40px 40px", // Jarak antar titik
        }}
      ></div>

      {/* Optional: Vignette tipis di pinggir biar titik-titiknya memudar di ujung */}
      <div className="absolute inset-0 z-20 bg-[radial-gradient(transparent_0%,#121212_120%)]"></div>
    </div>
  );
};

export default HeroBackground;

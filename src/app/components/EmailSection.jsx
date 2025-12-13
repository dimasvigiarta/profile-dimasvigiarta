"use client";
import React, { useState } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);
    if (response.status === 200) {
      setEmailSubmitted(true);
    }
  };

  return (
    <section
      id="contact"
      className="relative grid md:grid-cols-2 my-12 md:my-16 py-24 gap-8 md:gap-12 items-center"
    >
      {/* --- BACKGROUND GLOW EFFECT (Senada dengan Hero Section) --- */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-600/20 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

      {/* --- KOLOM KIRI: TEKS & SOSIAL MEDIA --- */}
      <div className="z-10 order-2 md:order-1">
        <h5 className="text-xl font-bold text-white mb-4">
          Let&apos;s Connect <span className="text-red-500">.</span>
        </h5>
        <p className="text-[#ADB7BE] mb-8 max-w-md leading-relaxed">
          I'm currently looking for new opportunities. My inbox is always open.
          Whether you have questions or just want to say hello, I'll do my best
          to respond!
        </p>

        <div className="flex flex-col gap-4">
          <h6 className="text-white font-semibold text-sm uppercase tracking-wider">
            Socials
          </h6>
          <div className="socials flex flex-row gap-4">
            <Link
              href="github.com"
              className="hover:opacity-80 transition-opacity"
            >
              <Image
                src={GithubIcon}
                alt="Github Icon"
                width={40}
                height={40}
              />
            </Link>
            <Link
              href="linkedin.com"
              className="hover:opacity-80 transition-opacity"
            >
              <Image
                src={LinkedinIcon}
                alt="Linkedin Icon"
                width={40}
                height={40}
              />
            </Link>
          </div>
        </div>
      </div>

      {/* --- KOLOM KANAN: FORM (Tanpa Border Kotak Tebal) --- */}
      <div className="z-10 order-1 md:order-2">
        {emailSubmitted ? (
          <div className="bg-[#18191E] border border-green-500/50 p-6 rounded-2xl text-center animate-fadeIn">
            <p className="text-green-400 text-lg font-medium">
              Email sent successfully!
            </p>
          </div>
        ) : (
          <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
            {/* Input Email */}
            <div>
              <label
                htmlFor="email"
                className="text-white block mb-2 text-sm font-medium pl-1"
              >
                Your Email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-xl block w-full p-4 focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all duration-300"
                placeholder="indradimas57@gmail.com.com"
              />
            </div>

            {/* Input Subject */}
            <div>
              <label
                htmlFor="subject"
                className="text-white block mb-2 text-sm font-medium pl-1"
              >
                Subject
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-xl block w-full p-4 focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all duration-300"
                placeholder="Just saying hi"
              />
            </div>

            {/* Textarea Message */}
            <div>
              <label
                htmlFor="message"
                className="text-white block mb-2 text-sm font-medium pl-1"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-xl block w-full p-4 min-h-[150px] focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all duration-300 resize-y"
                placeholder="Let's talk about..."
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-red-600 hover:bg-red-700 text-white font-semibold py-4 px-5 rounded-xl w-full transition-all duration-300 transform hover:-translate-y-1 shadow-lg shadow-red-900/20"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default EmailSection;

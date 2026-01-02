import React from "react";
import { FaHome, FaGithub, FaLinkedin } from "react-icons/fa";
import { PiArrowUpBold } from "react-icons/pi";
import { Link } from "react-router-dom";
import GradientText from '../../Home/Home/Banner/GradientText'

const Footer = () => {
  return (
    <footer className="w-full  bg-slate-900/80 backdrop-blur-xl px-6 py-10 text-white border-t border-white/10">

      {/* Top Icon Section */}
      <div className="flex justify-center gap-10 mb-6">
        <Link
          to="/"
          className="flex flex-col items-center group transition transform hover:scale-110"
        >
         <GradientText colors={["#dbe8ff", "#aecdff", "#ff4d4d", "#dbe8ff", "#aecdff"]} animationSpeed={6} className="custom-class">
            <FaHome className="text-3xl text-pink-400 group-hover:text-pink-300" />
            <span className="text-sm mt-1 tracking-wider">Home</span>
          </GradientText>
        </Link>

        <a
          href="https://www.linkedin.com/in/abdullah-al-hemel-822150395/"
          target="_blank"
          rel="noreferrer"
          className="flex flex-col items-center group transition transform hover:scale-110"
        >
        <GradientText colors={["#dbe8ff", "#aecdff", "#ff4d4d", "#dbe8ff", "#aecdff"]} animationSpeed={6} className="custom-class">
          <FaLinkedin className="text-3xl text-blue-400 group-hover:text-blue-300" />
          <span className="text-sm mt-1 tracking-wider">LinkedIn</span>
        </GradientText>
        </a>


        <a
          href="#"
          target="_blank"
          rel="noreferrer"
          className="flex flex-col items-center group transition transform hover:scale-110"
        >
        <GradientText colors={["#dbe8ff", "#aecdff", "#ff4d4d", "#dbe8ff", "#aecdff"]} animationSpeed={6} className="custom-class">
          <PiArrowUpBold className="text-3xl text-violet-400 group-hover:text-violet-300" />
          <span className="text-sm mt-1 tracking-wider">Top</span>
        </GradientText>
        </a>
      </div>

      {/* Divider Line */}
      <div className="w-24 h-[2px] mx-auto bg-gradient-to-r from-pink-500 to-violet-500 rounded-full mb-6"></div>

      {/* Copyright */}
      <p className="text-center text-xs md:text-sm text-gray-300 tracking-wide">
        © {new Date().getFullYear()} — All Rights Reserved |{" "}
        <span className="text-pink-400 font-semibold">Abdullah Al Hemel</span>
      </p>
    </footer>
  );
};

export default Footer;

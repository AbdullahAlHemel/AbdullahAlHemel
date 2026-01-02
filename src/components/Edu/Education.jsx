import React from "react";
import { motion } from "framer-motion";

// Assets
import EduBg from "../../assets/EduBg.jpg";
import University from "../../assets/czn10.png";
import CertificateImg from "../../../public/web/Screenshot (203).png";

import { GiArmoredBoomerang } from "react-icons/gi";
import GradientText from "../../Home/Home/Banner/GradientText";

// Variants
const sectionFade = { hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } } };
const cardFade = { hidden: { opacity: 0, y: 60 }, show: { opacity: 1, y: 0, transition: { duration: 1.2, ease: "easeOut" } } };
const slideLeft = { hidden: { opacity: 0, x: -80 }, show: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut" } } };
const slideRight = { hidden: { opacity: 0, x: 80 }, show: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut" } } };
const floatY = { animate: { y: [0, -8, 0], transition: { repeat: Infinity, duration: 4, ease: "easeInOut" } } };

const Education = () => {
  return (
    <section 
    
     className="relative w-full overflow-hidden text-white py-24 px-4 sm:px-6 md:px-12">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${EduBg})` }}
      />
      <div
       className="absolute inset-0 bg-gradient-to-br from-black/90 via-blue-900/40 to-black/90 backdrop-blur-sm" />

      <div className="relative max-w-7xl mx-auto z-10">
        {/* Section Title */}
        <GradientText colors={["#dbe8ff", "#aecdff", "#ff4d4d", "#dbe8ff", "#aecdff"]} animationSpeed={6}>
          <motion.h2
            variants={sectionFade}
            initial="hidden"
            animate="show"
            className="text-center text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-wide mb-12 sm:mb-16 bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-300 drop-shadow-2xl"
          >
            Education
          </motion.h2>
        </GradientText>

        {/* University Card */}
        <div
         data-aos="fade-up"
         data-aos-anchor-placement="bottom"
        >
        <motion.div
        
          variants={cardFade}
          initial="hidden"
          animate="show"
          whileHover={{ scale: 1.015 }}
          className="flex flex-col md:flex-row bg-white/10 backdrop-blur-2xl rounded-3xl shadow-[0_0_60px_rgba(0,150,255,0.3)] border border-blue-500/20 p-6 sm:p-10 mb-12"
         >
          {/* University Image */}
          <motion.div variants={slideLeft} initial="hidden" animate="show" className="md:w-1/2 flex justify-center items-center mb-8 md:mb-0">
            <motion.a whileHover={{ scale: 1.07 }} href="https://www.du.ac.bd/">
              <motion.img
                src={University}
                alt="University"
                className="w-64 sm:w-72 md:w-80 rounded-xl drop-shadow-[0_0_30px_rgba(0,200,255,0.6)]"
                {...floatY}
              />
            </motion.a>
          </motion.div>

          {/* University Info */}
          <motion.div variants={sectionFade} initial="hidden" animate="show" transition={{ delay: 0.2 }} className="md:w-1/2 flex flex-col justify-center text-center md:text-left">
            <h3 className="text-2xl sm:text-3xl md:text-3xl font-bold bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
              University of Dhaka
            </h3>
            <p className="mt-2 text-base sm:text-lg text-blue-200">
              QS World University Ranking: <span className="text-cyan-300 font-semibold">#554</span>
            </p>
            
            
            <p className="mt-2 text-lg sm:text-xl text-blue-100 font-medium">BSc in Computer Science and Engineering (CSE)</p>
            <p className="mt-2 text-base sm:text-lg text-blue-200">
               July 2022 – June 2026(expected)
            </p>
          </motion.div>
        </motion.div>
        </div>
        {/* Certification Title */}
        <motion.h2
          variants={sectionFade}
          initial="hidden"
          animate="show"
          className="text-center text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase mt-12 mb-8 sm:mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-indigo-300 to-cyan-300"
        >
          Certification
        </motion.h2>
         <div
         data-aos="fade-up"
         data-aos-anchor-placement="bottom"
        >
        {/* Certificate Card */}
        <motion.div
          variants={cardFade}
          initial="hidden"
          animate="show"
          whileHover={{ scale: 1.015 }}
          className="flex flex-col md:flex-row bg-white/10 backdrop-blur-2xl rounded-3xl shadow-[0_0_60px_rgba(0,120,255,0.25)] border border-blue-500/20 p-6 sm:p-10 mt-6"
        >
          {/* Certificate Text */}
          <motion.div variants={sectionFade} initial="hidden" animate="show" transition={{ delay: 0.2 }} className="md:w-1/2 flex flex-col justify-center text-center md:text-left">
            <h3 className="text-xl sm:text-2xl md:text-2xl font-bold bg-gradient-to-r from-cyan-300 via-blue-300 to-indigo-400 bg-clip-text text-transparent">
              Complete Web Development Course
            </h3>
            <p className="mt-3 text-blue-200 text-sm sm:text-base">
              A full-stack learning journey completed in <span className="text-cyan-300 font-semibold">6 months</span>.
            </p>
            <p className="mt-2 text-blue-300 text-sm sm:text-base">
              By <a href="https://www.programming-hero.com/" className="underline hover:text-blue-200 transition">Programming Hero</a>
            </p>

            {/* View Certificate Button */}
            <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.4 }} className="mt-4 sm:mt-5 flex justify-center md:justify-start">
              <a
                href="https://drive.google.com/file/d/1f_8NX0vKvvXeFtBhsO6QrxgT7jSJlVzS/view?usp=sharing"
                className="flex items-center gap-2 border border-cyan-400 px-4 sm:px-6 py-2 rounded-lg text-cyan-300 font-semibold hover:bg-cyan-500 hover:text-white hover:shadow-[0_0_30px_rgba(0,200,255,0.7)] transition-all duration-300"
              >
                View Certificate <GiArmoredBoomerang className="text-sm sm:text-lg" />
              </a>
            </motion.div>
          </motion.div>

          {/* Certificate Image */}
          <motion.div variants={slideRight} initial="hidden" animate="show" className="md:w-1/2 flex justify-center mt-6 md:mt-0">
            <motion.img
              src={CertificateImg}
              alt="Certificate"
              className="w-64 sm:w-72 md:w-80 rounded-xl drop-shadow-[0_0_30px_rgba(0,200,255,0.5)]"
              whileHover={{ scale: 1.08 }}
              transition={{ duration: 0.55, ease: "easeInOut" }}
              {...floatY}
            />
          </motion.div>
        </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;

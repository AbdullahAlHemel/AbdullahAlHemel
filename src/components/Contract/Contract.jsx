import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import AOS from "aos";
import "aos/dist/aos.css";

import { Parallax } from "react-parallax";

import {
  FaFacebookSquare,
  FaLinkedin,
  FaGithub,
  FaTelegram,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail } from "react-icons/md";

import ContractBg from "../../assets/contract2.jfif"; 
import GradientText from "../../Home/Home/Banner/GradientText";

// Animation Variants
const fadeUp = { hidden: { opacity: 0, y: 60 }, show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } } };
const slideInLeft = { hidden: { opacity: 0, x: -80 }, show: { opacity: 1, x: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } } };
const slideInRight = { hidden: { opacity: 0, x: 80 }, show: { opacity: 1, x: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } } };
const scaleIn = { hidden: { opacity: 0, scale: 0.8 }, show: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: "easeOut" } } };
const staggerContainer = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.2 } } };
const socialIconFloat = { animate: { y: [0, -10, 0], transition: { repeat: Infinity, duration: 4, ease: "easeInOut" } } };
const cardHover = { hover: { scale: 1.03, y: -5, transition: { type: "spring", stiffness: 300, damping: 15 } } };

const Contract = () => {
  const form = useRef();
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => { AOS.init({ duration: 1200 }); }, []);

  const [text] = useTypewriter({ words: ["Connect With"], loop: 0 });

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setIsVisible(entry.isIntersecting), { threshold: 0.1 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => { if (sectionRef.current) observer.unobserve(sectionRef.current); };
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm("service_mr1gwrk", "template_e0eq6kp", form.current, "ZswIewmnJicA0QdtX")
      .then(() => { e.target.reset(); toast.success("✔️ Message Sent Successfully"); })
      .catch((error) => { toast.error("❌ Something went wrong!"); console.error(error.text); });
  };
// https://www.facebook.com/profile.php?id=100024754232380
  const socialLinks = [
    { href: "https://www.linkedin.com/in/abdullah-al-hemel-822150395/", icon: <FaLinkedin />, color: "#0077b5" },
    { href: "http://wa.me/+8801980076426", icon: <IoLogoWhatsapp />, color: "#128c7e" },
    { href: "#", icon: <FaFacebookSquare />, color: "#316FF6" },
    { href: "https://github.com/AbdullahAlHemel", icon: <FaGithub />, color: "black" },
    { href: "#", icon: <FaTelegram />, color: "#0088cc" },
  ];

  const contactInfo = [
    { icon: <FaPhone />, title: "Phone", content: "+880 19800 764 26" },
    { icon: <MdEmail />, title: "Email", content: "abdullahalhemel100@gmail.com" },
    { icon: <FaMapMarkerAlt />, title: "Location", content: "Sharif Osman Hadi Hall, University of Dhaka, 1100, Dhaka" },
  ];

  return (
    <Parallax bgImage={ContractBg} strength={400}>
      <section ref={sectionRef} className="relative py-24 px-6 md:px-12 text-white">
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
        <ToastContainer position="top-right" autoClose={4000} theme="dark" hideProgressBar={false} />

        {/* Section Title */}
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          animate={isVisible ? "show" : "hidden"}
          className="relative z-10 text-center text-4xl sm:text-5xl md:text-6xl lg:text-5xl font-extrabold uppercase bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 mb-12 sm:mb-16"
        >
          {text} <Cursor cursorColor="#0ff" />
        </motion.h2>

        {/* Social Links */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isVisible ? "show" : "hidden"}
          className="relative z-10 flex justify-center flex-wrap gap-4 sm:gap-6 mb-12 sm:mb-20"
        >
          {socialLinks.map((social, i) => (
            <motion.a
              key={i}
              variants={scaleIn}
              whileHover={{ scale: 1.3, rotate: 5, transition: { type: "spring", stiffness: 400 } }}
              whileTap={{ scale: 0.9 }}
              href={social.href}
              className="bg-white/90 p-3 sm:p-4 rounded-full text-3xl sm:text-5xl md:text-6xl shadow-lg backdrop-blur-sm"
              style={{ color: social.color }}
              {...socialIconFloat}
            >
              {social.icon}
            </motion.a>
          ))}
        </motion.div>

        {/* Contact Form & Info */}
        <div className="relative z-10 flex flex-col lg:flex-row max-w-6xl mx-auto gap-8 lg:gap-12">
          {/* Form */}
          <motion.form
            ref={form}
            onSubmit={sendEmail}
            variants={slideInLeft}
            initial="hidden"
            animate={isVisible ? "show" : "hidden"}
            className="text-center lg:w-1/2 bg-white/10 backdrop-blur-lg p-6 sm:p-10 md:p-12 rounded-3xl shadow-xl border border-blue-400/30"
          > 
            <GradientText 
              colors={["#dbe8ff", "#aecdff", "#ff4d4d", "#dbe8ff", "#aecdff"]} 
              animationSpeed={6} 
              className="custom-class"
            >
              <motion.h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">Let's Work</motion.h2>
              <motion.h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 pb-2">Together!</motion.h2>
            </GradientText>
            
            <motion.p className="text-blue-200 text-base sm:text-lg mb-6">
              Turning ideas into stunning visuals, <br /> and coding experiences that truly excite!
            </motion.p>

            {/* Input Fields */}
            <motion.div variants={staggerContainer}>
              <motion.input className="w-full rounded-md p-3 sm:p-4 mb-4 sm:mb-5 text-white font-medium text-base sm:text-lg bg-white/10 border border-white/20 placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all" placeholder="Your Name" type="text" name="User_name" required />
              <motion.input className="w-full rounded-md p-3 sm:p-4 mb-4 sm:mb-5 text-white font-medium text-base sm:text-lg bg-white/10 border border-white/20 placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all" placeholder="Email Address" type="email" name="User_email" required />
              <motion.textarea className="w-full h-40 sm:h-48 p-3 sm:p-4 mb-4 sm:mb-5 text-white font-medium text-base sm:text-lg rounded-md bg-white/10 border border-white/20 placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all" placeholder="Message" name="message" required />
            </motion.div>

            <motion.input
              type="submit"
              value="Send Message"
              className="w-full py-3 sm:py-4 rounded-lg font-bold bg-gradient-to-r from-cyan-400 to-blue-500 text-white cursor-pointer shadow-lg hover:shadow-2xl transition-all"
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(0, 200, 255, 0.5)" }}
              whileTap={{ scale: 0.95 }}
            />
          </motion.form>

          {/* Contact Info */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            animate={isVisible ? "show" : "hidden"}
            className="lg:w-1/2 flex flex-col justify-center gap-6 sm:gap-8"
          >


            {contactInfo.map((info, index) => (
              <motion.div 
              data-aos="fade-up"
              data-aos-anchor-placement="bottom-bottom"
              key={index} variants={cardHover} whileHover="hover" className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 bg-white/10 backdrop-blur-lg p-4 sm:p-6 rounded-3xl shadow-xl border border-white/10">
                <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.6 }} className="w-12 h-12 sm:w-14 sm:h-14 p-2 sm:p-3 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 text-white flex items-center justify-center">
                  {info.icon}
                </motion.div>
                <div className="text-center sm:text-left">
                  <GradientText colors={["#dbe8ff", "#aecdff", "#ff4d4d", "#dbe8ff", "#aecdff"]} animationSpeed={6}>
                    <h3 className="font-extrabold text-xl sm:text-2xl md:text-3xl">{info.title}</h3>
                    <p className="text-sm sm:text-lg md:text-xl text-blue-100">{info.content}</p>
                  </GradientText>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </Parallax>
  );
};

export default Contract;

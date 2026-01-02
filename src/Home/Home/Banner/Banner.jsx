import React from 'react';
import Fp from '../../../assets/OwnPhoto1.png';
import Resume from '../../../assets/Abdullah_FullStackDeveloper.pdf'
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import AOS from 'aos';
import GradientBg from '../../../../public/Gradient-4.png';
import 'aos/dist/aos.css';
import GradientText from './GradientText';
import { motion } from 'framer-motion';
import { FiEye, FiDownload } from "react-icons/fi";

const Banner = () => {
    AOS.init();


    const [text] = useTypewriter({
        words: [
                'Full Stack Developer',
                'Front-End Developer',
                'MERN Stack Developer'
            ],
        loop: true,
    });

    return (
        <div className="relative">
            <div
                className="max-w-7xl m-auto"
                data-aos="zoom-in"
                data-aos-duration="600"
            >
                <div className="flex md:flex-row mx-6 md:mx-0 items-center relative">

                    {/* LEFT TEXT SECTION */}
                    <div className="md:w-2/3 w-full my-auto relative z-20 text-left">
                        <GradientText
                            colors={[
                                "#f8f9ff",
                                "#e6f0ff",
                                "#ff9999",
                                "#f8f9ff",
                                "#e6f0ff"
                            ]}
                            animationSpeed={6}
                        >
                            <h2 className="text-4xl sm:text-4xl md:text-6xl tracking-wide poppins-extrabold">
                                I'm Abdullah
                            </h2>

                            {/* TYPEWRITER SECTION */}
                            <div className="flex justify-start items-center gap-3 flex-wrap w-full">
                                <span className="text-3xl sm:text-4xl md:text-4xl poppins-extrabold">
                                    A
                                </span>

                                <div
                                    className="
                                    inline-flex 
                                    justify-start 
                                    items-center
                                    w-[250px] sm:w-[350px] md:w-[450px]
                                ">
                                    <span className="text-3xl sm:text-4xl md:text-4xl poppins-extrabold">
                                        {text}
                                    </span>

                                    <span style={{ fontSize: "35px", lineHeight: "60px" }}>
                                        <Cursor cursorStyle="|" cursorColor="white" />
                                    </span>
                                </div>
                            </div>

                    <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="
                        mt-6 px-3 py-2 rounded-xl border border-indigo-500 
                        bg-black/30 backdrop-blur 
                        w-fit 
                        flex items-center justify-between gap-3
                    "
                    >
                    {/* Resume Label */}
                    <h3 className="text-base md:text-lg font-semibold text-white whitespace-nowrap">
                        Resume
                    </h3>

                    {/* ICON BUTTONS */}
                    <div className="flex items-center gap-2">

                        {/* VIEW ICON BTN */}
                        <motion.a
                        href={Resume}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="View Resume"
                        className="
                            p-1.5 rounded-lg bg-indigo-600 
                            border-2 border-transparent
                        "
                        whileHover={{
                            scale: 1.2,
                            borderColor: "#8b5cf6",
                            boxShadow: "0 0 10px #8b5cf6",
                        }}
                        animate={{
                            y: [0, -3, 0], // floating effect
                        }}
                        transition={{
                            y: { repeat: Infinity, repeatType: "mirror", duration: 2 },
                            type: "spring",
                            stiffness: 100,
                        }}
                        >
                        <FiEye className="text-white text-lg" />
                        </motion.a>

                        {/* DOWNLOAD ICON BTN */}
                        <motion.a
                        href={Resume}
                        download
                        title="Download Resume"
                        className="
                            p-1.5 rounded-lg bg-gray-900 
                            border-2 border-transparent
                        "
                        whileHover={{
                            scale: 1.2,
                            borderColor: "#8b5cf6",
                            boxShadow: "0 0 10px #8b5cf6",
                        }}
                        animate={{
                            y: [0, -3, 0], // floating effect
                        }}
                        transition={{
                            y: { repeat: Infinity, repeatType: "mirror", duration: 2 },
                            type: "spring",
                            stiffness: 100,
                        }}
                        >
                        <FiDownload className="text-white text-lg" />
                        </motion.a>

                    </div>
                    </motion.div>
                        </GradientText>
                    </div>

                    {/* RIGHT IMAGE SECTION */}
                    <div
                        className="w-full md:w-1/2 p-4 md:p-0 md:pt-8 border-b-4 border-indigo-500
                        rounded-lg bg-cover bg-center bg-no-repeat relative z-10"
                        style={{ backgroundImage: `url(${GradientBg})` }}
                    >
                        <img
                            className="w-full h-auto rounded-lg"
                            src={Fp}
                            alt="Abdullah"
                        />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Banner;

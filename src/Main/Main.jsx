import React from 'react';
import Home from '../Home/Home/Home';
import Projects from '../components/Projects/Projects';
import Skills from '../Home/Home/WhatIDO/Skills';
import Education from '../components/Edu/Education';
import Contact from '../components/Contract/Contract';
import Navbar from '../Main/Navbar'
import Footer from '../components/Footer/Footer'
import Round from '../Home/Round/Round';
import Number from '../components/motion/Number';
import Experience from '../components/Experience/Experience'
const Main = () => {
    return (
        <div className="relative nunito-sans">
            <Navbar />
            
            {/* Home Section */}
            <section id="home">
                <Home />
            </section>
            
            {/* Skills Section */}
            <section id="skills">
                <Skills />
                 <Round/>
            </section>
                
            
            {/* Projects Section */}
            <section id="projects">
                <Projects />
            </section>
            <Number/>
            

            {/* Experience Section */}
            <section id="experience">
                <Experience />
            </section>

              
             
            {/* Education Section */}
            <section id="education">
                <Education />
            </section>
            
            {/* Contact Section */}
            <section id="contact">
                <Contact />
            </section>
            <Footer/>
        </div>
    );
};

export default Main;
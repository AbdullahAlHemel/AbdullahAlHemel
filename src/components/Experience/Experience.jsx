import React from 'react';
import { motion } from 'framer-motion';

import TugonnLogo from '../../assets/tugonn.jpg';
import DuItsLogo from '../../assets/duits.jpg';

const experiences = [
  {
    role: "Full Stack Developer (Remote)",
    company: "TugOnn Schweiz (Switzerland)",
    period: "Jan 2026 – Present",
    logo: TugonnLogo,
    details: [
      "Developing and maintaining web features using React.js, Node.js, Express.js, and MongoDB.",
      "Collaborating with international teams on project implementation and code reviews."
    ]
  },
  {
    role: "Executive Member — Programming & Development Wing",
    company: "Dhaka University IT Society (DUITS)",
    period: "Jul 2025 – Dec 2025",
    logo: DuItsLogo,
    details: [
      "Organized IT workshops, training sessions, and student development events.",
      "Mentored students in coding and web development projects."
    ]
  }
];

const Experience = () => {
  return (
    <section className="relative py-20 bg-gradient-to-br from-[#020617] via-[#020a2b] to-[#020617]">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-blue-400 mb-14 border-b-4 border-blue-500 inline-block pb-2">
          Experience
        </h2>

        <div className="space-y-10">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="bg-gradient-to-br from-[#0b1220] to-[#0f172a]
                         backdrop-blur-md
                         rounded-xl p-6 flex items-start gap-6
                         border border-blue-500/20
                         hover:shadow-blue-500/40
                         hover:border-blue-400/40
                         transition-all duration-300"
            >
              <img
                src={exp.logo}
                alt={exp.company}
                className="w-16 h-16 rounded-lg object-contain bg-[#020617] p-2 border border-blue-500/20"
              />

              <div>
                <h3 className="text-2xl font-semibold text-blue-400">
                  {exp.role}
                </h3>
                <p className="text-gray-300 mb-3">
                  <span className="text-blue-300 font-medium">
                    {exp.company}
                  </span>{" "}
                  | {exp.period}
                </p>

                <ul className="list-disc list-inside text-gray-300 space-y-1">
                  {exp.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

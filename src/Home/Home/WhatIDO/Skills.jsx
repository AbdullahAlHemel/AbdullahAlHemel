import React from "react";
import { 
  SiReact, 
  SiNextdotjs, 
  SiTailwindcss, 
  SiNodedotjs, 
  SiExpress, 
  SiMongodb, 
  SiFirebase, 
  SiGit 
} from "react-icons/si";
import { SiTypescript } from "react-icons/si";

const skills = [
  // Frontend
  { name: "React", icon: <SiReact className="text-blue-500" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-black" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-400" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" /> },

  // Backend
  { name: "Node.js", icon: <SiNodedotjs className="text-green-500" /> },
  { name: "Express.js", icon: <SiExpress className="text-gray-800" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-700" /> },
  { name: "Firebase", icon: <SiFirebase className="text-yellow-500" /> },

  // Tools
  { name: "Git", icon: <SiGit className="text-red-500" /> },
];

const Skills = () => {
  return (
    <div data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom" 
     className="max-w-7xl m-auto overflow-hidden py-16 mt-3" style={{ 
      background: 'linear-gradient(to right, #1A1A2E, #16213E, #0F3460, #533483)' 
    }}>
      <div className="flex animate-marquee gap-10">
        {skills.concat(skills).map((skill, index) => (
          <div
            key={index}
            style={{ 
              background: 'linear-gradient(45deg, #483D8B, #87CEEB, #F0F8FF, #FAF0E6)' 
            }}
            className="flex flex-col items-center justify-center min-w-[120px] p-4 py-6 rounded-xl shadow-lg hover:shadow-[0_0_25px_rgba(147,51,234,0.6)] transition-all duration-300 hover:scale-110 group"
          >
            <div className="text-5xl mb-2 group-hover:scale-110 transition-transform duration-300">
              {skill.icon}
            </div>
            <p className="font-semibold group-hover:text-white transition-colors duration-300">
              {skill.name}
            </p>
          </div>
        ))}
      </div>

      <style jsx>{`
        .animate-marquee {
          display: flex;
          gap: 2.5rem;
          animation: marquee 20s linear infinite;
        }
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
};

export default Skills;
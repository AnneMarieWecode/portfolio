import React, { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaBlog, FaDownload } from "react-icons/fa";
import { SiJavascript, SiReact, SiTailwindcss, SiNodedotjs, SiPython } from "react-icons/si";

export default function AboutMe() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const skills = [
    { name: "JavaScript", level: "Expert", icon: <SiJavascript />, color: "bg-yellow-400" },
    { name: "React", level: "Expert", icon: <SiReact />, color: "bg-blue-400" },
    { name: "Tailwind CSS", level: "Advanced", icon: <SiTailwindcss />, color: "bg-teal-400" },
    { name: "Node.js", level: "Intermediate", icon: <SiNodedotjs />, color: "bg-green-400" },
    { name: "Python", level: "Advanced", icon: <SiPython />, color: "bg-yellow-300" }
  ];

  const achievements = [
    { year: "2023", title: "Led successful product launch", description: "Managed team of 10 developers" },
    { year: "2022", title: "Best Developer Award", description: "Recognition for technical excellence" },
    { year: "2021", title: "Open Source Contributor", description: "Major contributions to React ecosystem" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className={`max-w-7xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'}`}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          <div className="lg:col-span-5 space-y-10">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
              <img
                src="https://plus.unsplash.com/premium_photo-1682050733502-f58b7f499490?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8"
                alt="Professional headshot"
                className="relative rounded-2xl w-full object-cover aspect-square shadow-xl transition duration-300 group-hover:scale-[1.02]"
                onError={(e) => {
                  e.target.src = "https://images.unsplash.com/photo-1633332755192-727a05c4013d";
                }}
              />
            </div>

            <div className="flex justify-center space-x-8">
              <a href="#" className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
                <FaGithub className="relative h-10 w-10 text-gray-700 hover:text-purple-600 transition-colors" />
              </a>
              <a href="#" className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
                <FaLinkedin className="relative h-10 w-10 text-gray-700 hover:text-purple-600 transition-colors" />
              </a>
              <a href="#" className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
                <FaBlog className="relative h-10 w-10 text-gray-700 hover:text-purple-600 transition-colors" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-10">
            <div className="space-y-4">
              <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 mb-4">Agbonou Kossiwa Anne Marie</h1>
              <h2 className="text-3xl font-semibold text-gray-700 dark:text-gray-200 mb-6">Senior Frontend Developer</h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                A passionate frontend developer with 8+ years of experience in building scalable web applications. Specialized in React ecosystem and modern JavaScript. Committed to creating seamless user experiences through clean, efficient code.
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Technical Skills</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className="group relative bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                  >
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
                    <div className="relative flex flex-col items-center space-y-4">
                      <span className="text-4xl text-gray-700 dark:text-gray-200">{skill.icon}</span>
                      <div className="text-center">
                        <p className="font-bold text-lg text-gray-800 dark:text-white">{skill.name}</p>
                        <p className="text-sm text-gray-600 dark:text-gray-300">{skill.level}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Professional Highlights</h3>
              <div className="space-y-6">
                {achievements.map((achievement, index) => (
                  <div key={index} className="group relative bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
                    <div className="relative flex items-start space-x-6">
                      <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">{achievement.year}</div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-2">{achievement.title}</h4>
                        <p className="text-gray-600 dark:text-gray-300">{achievement.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button className="group relative w-full sm:w-auto inline-flex items-center justify-center space-x-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
              <span className="relative flex items-center space-x-2">
                <FaDownload className="h-5 w-5" />
                <span>Download Resume</span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};


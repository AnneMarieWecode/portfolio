import React, { useState } from 'react';
import logo from './assets/logo.jpg'; 
import { Github, Mail, Phone, MapPin, Calendar, Code2, Briefcase, GraduationCap, ChevronRight, Moon, Sun, Languages, Download, User, AlignCenterVertical as Certificate, FolderGit2 } from 'lucide-react';

function App() {
  const [isDark, setIsDark] = useState(false);
  const [isEnglish, setIsEnglish] = useState(false);

  const translations = {
    fr: {
      about: "À Propos",
      skills: "Compétences",
      projects: "Projets",
      certifications: "Certifications",
      contact: "Contact",
      downloadCV: "Télécharger CV",
      intro: "Développeuse Web Full Stack",
      motivation: "Passionnée par le développement web et l'innovation technologique, je suis une développeuse Full Stack créative et déterminée. Mon parcours académique et mes formations spécialisées m'ont permis de développer une expertise solide dans la création d'applications web modernes et performantes. Je suis constamment à la recherche de nouveaux défis pour enrichir mes compétences et créer des solutions numériques innovantes.",
      aboutMe: "À Propos de Moi",
      aboutText: "Développeuse Full Stack basée en Côte d'Ivoire, je combine créativité et expertise technique pour donner vie à des projets web exceptionnels. Diplômée en développement d'applications et certifiée en JavaScript, je suis passionnée par la création d'expériences utilisateur innovantes et intuitives.",
    },
    en: {
      about: "About",
      skills: "Skills",
      projects: "Projects",
      certifications: "Certifications",
      contact: "Contact",
      downloadCV: "Download CV",
      intro: "Full Stack Web Developer",
      motivation: "Passionate about web development and technological innovation, I am a creative and determined Full Stack developer. My academic background and specialized training have allowed me to develop solid expertise in creating modern and performant web applications. I am constantly seeking new challenges to enrich my skills and create innovative digital solutions.",
      aboutMe: "About Me",
      aboutText: "Full Stack Developer based in Ivory Coast, I combine creativity and technical expertise to bring exceptional web projects to life. With a degree in application development and certified in JavaScript, I am passionate about creating innovative and intuitive user experiences.",
    }
  };

  const t = isEnglish ? translations.en : translations.fr;

  const navItems = [
    { label: t.about, icon: User },
    { label: t.certifications, icon: Certificate },
    { label: t.projects, icon: FolderGit2 },
    { label: t.contact, icon: Mail },
  ];

  return (
    <div className={`min-h-screen ${isDark ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'} transition-colors duration-300`}>
      {/* Navigation */}
      <nav className={`fixed w-full ${isDark ? 'bg-gray-800' : 'bg-white'} shadow-lg z-50`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <Code2 className="h-8 w-8 text-pink-600" />
              <span className="ml-2 text-xl font-bold">Anne Marie</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={`#${item.label.toLowerCase()}`}
                  className="flex items-center text-sm font-medium hover:text-pink-600 transition-colors"
                >
                  <item.icon className="h-4 w-4 mr-1" />
                  {item.label}
                </a>
              ))}
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setIsEnglish(!isEnglish)}
                className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
              >
                <Languages className="h-5 w-5" />
              </button>
              <button
                onClick={() => setIsDark(!isDark)}
                className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
              >
                {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="pt-24 pb-16 px-4 animate-fadeIn">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Agbonou Kossiwa Anne Marie
              </h1>
              <h2 className="text-2xl md:text-3xl text-pink-600 mb-6">{t.intro}</h2>
              <p className="text-lg mb-8">{t.motivation}</p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="flex items-center px-6 py-3 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors"
                >
                  <Mail className="h-5 w-5 mr-2" />
                  Contact
                </a>
                <a
                  href="https://drive.google.com/file/d/1UpVp7hB6UwbqccS8Tu64d1jsjZVkOW8C/view?usp=drive_link"
                  download
                  target="_blank"
                  className="flex items-center px-6 py-3 border-2 border-pink-600 text-pink-600 rounded-lg hover:bg-pink-50 transition-colors"
                >
                  <Download className="h-5 w-5 mr-2" />
                  {t.downloadCV}
                </a>
              </div>
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0">
              <img
                src={logo}
                alt="Professional headshot"
                className="rounded-full w-64 h-64 object-cover mx-auto shadow-2xl animate-float"
              />
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section id="about" className={`py-16 ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">{t.aboutMe}</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <p className="text-lg leading-relaxed">{t.aboutText}</p>
              <div className="flex items-center space-x-2">
                <Calendar className="h-5 w-5 text-pink-600" />
                <span>04 Février 2001</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-5 w-5 text-pink-600" />
                <span>Koumassi Divo, Côte d'Ivoire</span>
              </div>
            </div>
            <div className="space-y-8">
              <div className="flex items-start">
                <GraduationCap className="h-8 w-8 text-pink-600 mt-1" />
                <div className="ml-4">
                  <h3 className="text-xl font-semibold">Licence en Développement d'Application (DAS)</h3>
                  <p className="text-pink-600">Université Virtuelle de Côte d'Ivoire (UVCI) | 2024</p>
                </div>
              </div>
              <div className="flex items-start">
                <GraduationCap className="h-8 w-8 text-pink-600 mt-1" />
                <div className="ml-4">
                  <h3 className="text-xl font-semibold">Baccalauréat</h3>
                  <p className="text-pink-600">Lycée Municipal de Koumassi | 2021</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section id="certifications" className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">{t.certifications}</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className={`p-6 rounded-lg ${isDark ? 'bg-gray-800' : 'bg-white'} shadow-lg transform hover:scale-105 transition-all duration-300`}>
              <Certificate className="h-12 w-12 text-pink-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Certification JavaScript</h3>
              <p className="text-pink-600">NAN DIGITAL ACADEMY | 2023</p>
            </div>
            <div className={`p-6 rounded-lg ${isDark ? 'bg-gray-800' : 'bg-white'} shadow-lg transform hover:scale-105 transition-all duration-300`}>
              <Briefcase className="h-12 w-12 text-pink-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Formation Full Stack</h3>
              <p className="text-pink-600">WeCode</p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className={`py-16 ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">{t.skills}</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              'JavaScript', 'HTML/CSS', 'React.js', 'Vue.js',
              'Node.js', 'PHP', 'Bootstrap', 'Tailwind CSS',
              'Figma', 'API Integration', 'Git', 'SQL'
            ].map((skill) => (
              <div
                key={skill}
                className={`p-4 rounded-lg ${
                  isDark ? 'bg-gray-700' : 'bg-white'
                } shadow-lg transform hover:scale-105 transition-all duration-300 hover:shadow-pink-100`}
              >
                <p className="text-center font-semibold">{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">{t.contact}</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className={`p-6 rounded-lg ${isDark ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
              <div className="space-y-4">
                <a
                  href="mailto:annemarieagbonou@gmail.com"
                  className="flex items-center text-lg hover:text-pink-600 transition-colors"
                >
                  <Mail className="h-6 w-6 mr-2" />
                  annemarieagbonou@gmail.com
                </a>
                <div className="flex items-center text-lg">
                  <Phone className="h-6 w-6 mr-2" />
                  <div className="flex flex-col">
                    <span>0172317983</span>
                    <span>0769144813</span>
                  </div>
                </div>
                <p className="flex items-center text-lg">
                  <MapPin className="h-6 w-6 mr-2" />
                  Koumassi Divo, Côte d'Ivoire
                </p>
                <a
                  href="https://github.com/ANNEMARIE05"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-lg hover:text-pink-600 transition-colors"
                >
                  <Github className="h-6 w-6 mr-2" />
                  GitHub
                </a>
              </div>
            </div>
            <div className={`p-6 rounded-lg ${isDark ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Nom</label>
                  <input
                    type="text"
                    className={`w-full p-2 rounded-lg border ${isDark ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'}`}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Email</label>
                  <input
                    type="email"
                    className={`w-full p-2 rounded-lg border ${isDark ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'}`}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Message</label>
                  <textarea
                    rows={4}
                    className={`w-full p-2 rounded-lg border ${isDark ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'}`}
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full py-2 px-4 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors"
                >
                  Envoyer
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className={`py-8 ${isDark ? 'bg-gray-900' : 'bg-gray-100'}`}>
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>© 2024 Anne Marie Agbonou. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
import './App.css'
import React, { useState, useEffect, useRef } from 'react';
import logo from './assets/logo.jpeg'; 
import { Github, Mail, Phone, MapPin, Calendar, Code2, Briefcase, GraduationCap, 
  ChevronRight, Moon, Sun, Languages, Download, User, AlignCenterVertical as Certificate, 
  FolderGit2, ExternalLink, Eye, Menu, X } from 'lucide-react';

function App() {
  const [isEnglish, setIsEnglish] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef(null);

  // Handle scroll for navbar transparency change
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Animation pour les éléments au scroll avec Intersection Observer
  useEffect(() => {
    const appearOptions = {
      threshold: 0.15,
      rootMargin: "0px 0px -100px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('appear');
          if (entry.target.id) {
            setActiveSection(entry.target.id);
          }
        }
      });
    }, appearOptions);

    // Observer for sections
    const sections = document.querySelectorAll('section[id]');
    sections.forEach(section => {
      observer.observe(section);
    });

    // Separate observer for animating elements inside sections
    const animateElements = document.querySelectorAll('.animate-on-scroll');
    animateElements.forEach((el, index) => {
      el.style.animationDelay = `${index * 0.1}s`;
      observer.observe(el);
    });

    return () => {
      sections.forEach(section => observer.unobserve(section));
      animateElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [navRef]);

  // Close menu when clicking on a nav item
  const handleNavItemClick = (id) => {
    setIsMenuOpen(false);
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };

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
      viewProject: "Voir le projet",
      viewCode: "Voir le code",
      projectsTitle: "Mes Projets",
      sendMessage: "Envoyer",
      name: "Nom",
      message: "Message",
      copyright: "© 2025 Anne Marie Agbonou. Tous droits réservés.",
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
      viewProject: "View Project",
      viewCode: "View Code",
      projectsTitle: "My Projects",
      sendMessage: "Send",
      name: "Name",
      message: "Message",
      copyright: "© 2024 Anne Marie Agbonou. All rights reserved.",
    }
  };

  const t = isEnglish ? translations.en : translations.fr;

  const navItems = [
    { label: t.about, icon: User, id: "about" },
    { label: t.skills, icon: Code2, id: "skills" },
    { label: t.projects, icon: FolderGit2, id: "projects" },
    { label: t.certifications, icon: Certificate, id: "certifications" },
    { label: t.contact, icon: Mail, id: "contact" },
  ];

  const projects = [
    {
      title: "E-commerce Platform",
      description: isEnglish 
        ? "A full-stack e-commerce platform with user authentication, product management, and payment integration."
        : "Une plateforme e-commerce full-stack avec authentification utilisateur, gestion de produits et intégration de paiement.",
      image: "/api/placeholder/800/600",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      liveLink: "https://ecommerce-project.com",
      codeLink: "https://github.com/ANNEMARIE05/ecommerce-project"
    },
    {
      title: "Portfolio Website",
      description: isEnglish 
        ? "A responsive portfolio website with dark mode toggle and multi-language support."
        : "Un site web portfolio responsive avec mode sombre et support multilingue.",
      image: "/api/placeholder/800/600",
      tags: ["React", "Tailwind CSS", "Framer Motion"],
      liveLink: "https://portfolio-project.com",
      codeLink: "https://github.com/ANNEMARIE05/portfolio-project"
    },
    {
      title: "Task Manager App",
      description: isEnglish 
        ? "A task management application with drag-and-drop functionality and category filtering."
        : "Une application de gestion de tâches avec fonctionnalité de glisser-déposer et filtrage par catégorie.",
      image: "/api/placeholder/800/600",
      tags: ["Vue.js", "Vuex", "Firebase"],
      liveLink: "https://task-manager-app.com",
      codeLink: "https://github.com/ANNEMARIE05/task-manager"
    }
  ];

  return (
    <div className={`min-h-screen bg-gray-900 text-white transition-colors duration-500`}>
      {/* Navigation */}
      <nav 
        ref={navRef}
        className={`fixed w-full z-50 transition-all duration-500 ${
          scrolled 
            ? `bg-gray-900/90 shadow-lg backdrop-blur-lg py-2` 
            : `bg-transparent py-6`
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Code2 className={`h-8 w-8 text-pink-600 transition-all duration-500 ${scrolled ? 'rotate-90' : 'rotate-0'}`} />
              <span className={`ml-2 text-xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text ${scrolled ? 'text-transparent' : ''}`}>Anne Marie</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`flex items-center text-sm font-medium transition-all duration-300 hover:text-pink-600 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-pink-600 after:transition-all after:duration-300 ${
                    activeSection === item.id 
                      ? 'text-pink-600 after:w-full' 
                      : 'after:w-0 hover:after:w-full'
                  }`}
                >
                  <item.icon className="h-4 w-4 mr-1" />
                  {item.label}
                </a>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <button
                onClick={() => setIsEnglish(!isEnglish)}
                className="p-2 rounded-full hover:bg-pink-100 dark:hover:bg-gray-700 transition-colors duration-300"
                aria-label={isEnglish ? "Switch to French" : "Switch to English"}
              >
                <Languages className="h-5 w-5" />
              </button>
              
              {/* Mobile Menu Button */}
              <button 
                className="md:hidden p-2 rounded-full hover:bg-pink-100 dark:hover:bg-gray-700 transition-colors duration-300"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden absolute w-full top-full left-0 transition-all duration-500 overflow-hidden ${
          isMenuOpen 
            ? 'max-h-96 opacity-100' 
            : 'max-h-0 opacity-0'
        }`}>
          <div className={`bg-gray-800 shadow-lg rounded-b-2xl mx-4`}>
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => handleNavItemClick(item.id)}
                className={`flex items-center space-x-3 px-5 py-4 text-lg border-b border-gray-700 ${
                  activeSection === item.id 
                    ? 'text-pink-600 bg-pink-50 isdark' 
                    : ''
                }`}
              >
                <item.icon className="h-5 w-5" />
                <span>{item.label}</span>
                <ChevronRight className={`h-4 w-4 ml-auto transition-transform ${activeSection === item.id ? 'rotate-90' : ''}`} />
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section with Parallax Effect */}
      <section id="hero" className="min-h-screen flex items-center pt-20 pb-16 px-4 overflow-hidden relative">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-10 w-60 h-60 bg-pink-400 opacity-10 rounded-full blur-3xl animate-blob"></div>
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-purple-400 opacity-10 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/3 w-40 h-40 bg-blue-400 opacity-10 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:w-1/2 animate-fadeInLeft">
              <div className="mb-3 inline-block">
                <span className="bg-gradient-to-r from-pink-600 to-purple-600 text-white text-sm font-medium px-4 py-1 rounded-full">
                  {isEnglish ? "Welcome to my portfolio" : "Bienvenue sur mon portfolio"}
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Agbonou Kossiwa <span className="bg-gradient-to-r from-pink-600 to-purple-600 text-transparent bg-clip-text">Anne Marie</span>
              </h1>
              <h2 className="text-2xl md:text-3xl font-light mb-6 overflow-hidden">
                <span className="typing-animation">{t.intro}</span>
              </h2>
              <p className="text-lg mb-8 opacity-90 max-w-lg leading-relaxed">{t.motivation}</p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="flex items-center px-6 py-3 bg-gradient-to-r from-pink-600 to-pink-500 text-white rounded-lg hover:from-pink-700 hover:to-pink-600 transition-all duration-300 transform hover:translate-y-1 hover:shadow-lg"
                >
                  <Mail className="h-5 w-5 mr-2" />
                  Contact
                </a>
                <a
                  href="https://drive.google.com/file/d/1UpVp7hB6UwbqccS8Tu64d1jsjZVkOW8C/view?usp=drive_link"
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center px-6 py-3 border-2 border-pink-600 text-pink-600 rounded-lg hover:bg-pink-50 dark:hover:bg-gray-800 transition-all duration-300 transform hover:translate-y-1"
                >
                  <Download className="h-5 w-5 mr-2 group-hover:animate-bounce" />
                  {t.downloadCV}
                </a>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center animate-fadeInRight">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full blur-xl opacity-30 animate-pulse"></div>
                <div className="relative rounded-full w-64 h-64 p-2 bg-gradient-to-br from-pink-500 to-purple-600 animate-spin-slow">
                  <img
                    src={logo}
                    alt="Professional headshot"
                    className="rounded-full w-full h-full object-cover border-4 border-white dark:border-gray-800 z-10"
                  />
                </div>
              </div>
            </div>
          </div>
          
          {/* Scroll down indicator */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
            <div className="w-6 h-10 rounded-full border-2 border-pink-600 flex justify-center">
              <div className="w-1 h-2 bg-pink-600 rounded-full mt-2 animate-scrollDown"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section with Card Layout */}
      <section id="about" className={`py-20 bg-gray-800 relative z-10`}>
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-center relative inline-block left-1/2 transform -translate-x-1/2">
            <span className="text-pink-600">#</span> {t.aboutMe}
            <div className="h-1 w-1/2 bg-gradient-to-r from-pink-600 to-purple-600 mt-2 rounded-full mx-auto"></div>
          </h2>
          <p className="text-center mb-12 text-sm opacity-60 max-w-lg mx-auto">{isEnglish ? "Get to know more about me, my background, and what I do" : "Apprenez-en plus sur moi, mon parcours et ce que je fais"}</p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6 animate-on-scroll" data-animation="fadeInLeft">
              <div className={`p-6 rounded-lg bg-gray-700 shadow-xl border-l-4 border-pink-600 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1`}>
                <p className="text-lg leading-relaxed">{t.aboutText}</p>
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-5 w-5 text-pink-600" />
                    <span>04 Février 2001</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-5 w-5 text-pink-600" />
                    <span>Koumassi Divo, Côte d'Ivoire</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6 animate-on-scroll" data-animation="fadeInRight">
              <div className={`p-6 rounded-lg bg-gray-700 shadow-xl hover:shadow-2xl transition-all duration-300`}>
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <GraduationCap className="h-6 w-6 text-pink-600 mr-2" />
                  {isEnglish ? "Education" : "Formation"}
                </h3>
                
                <div className="space-y-6">
                  <div className="flex border-l-2 border-pink-600 pl-4 py-2 transform hover:translate-x-2 transition-transform duration-300">
                    <div>
                      <h4 className="text-lg font-semibold">Licence en Développement d'Application (DAS)</h4>
                      <p className="text-pink-600">Université Virtuelle de Côte d'Ivoire (UVCI) | 2024</p>
                    </div>
                  </div>
                  
                  <div className="flex border-l-2 border-pink-600 pl-4 py-2 transform hover:translate-x-2 transition-transform duration-300">
                    <div>
                      <h4 className="text-lg font-semibold">Baccalauréat</h4>
                      <p className="text-pink-600">Lycée Municipal de Koumassi | 2021</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section with Floating Cards */}
      <section id="skills" className={`py-20 relative overflow-hidden`}>
        <div className="absolute inset-0 pointer-events-none opacity-10">
          <div className="absolute top-1/4 left-1/4 text-8xl font-bold text-pink-600 opacity-5">&lt;/&gt;</div>
          <div className="absolute bottom-1/4 right-1/4 text-8xl font-bold text-pink-600 opacity-5">{ }</div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <h2 className="text-3xl font-bold mb-4 text-center relative inline-block left-1/2 transform -translate-x-1/2">
            <span className="text-pink-600">#</span> {t.skills}
            <div className="h-1 w-1/2 bg-gradient-to-r from-pink-600 to-purple-600 mt-2 rounded-full mx-auto"></div>
          </h2>
          <p className="text-center mb-12 text-sm opacity-60 max-w-lg mx-auto">{isEnglish ? "Technologies and skills I work with" : "Technologies et compétences avec lesquelles je travaille"}</p>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {[
              { name: 'JavaScript', level: '90%' },
              { name: 'HTML/CSS', level: '95%' },
              { name: 'React.js', level: '85%' },
              { name: 'Vue.js', level: '80%' },
              { name: 'Node.js', level: '75%' },
              { name: 'PHP', level: '70%' },
              { name: 'Bootstrap', level: '90%' },
              { name: 'Tailwind CSS', level: '85%' },
              { name: 'Figma', level: '75%' },
              { name: 'API Integration', level: '80%' },
              { name: 'Git', level: '85%' },
              { name: 'SQL', level: '75%' }
            ].map((skill, index) => (
              <div
                key={skill.name}
                className={`animate-on-scroll group p-4 rounded-lg bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border-l-2 border-pink-600`}
                data-animation="fadeInUp"
              >
                <p className="text-center font-semibold mb-2">{skill.name}</p>
                <div className="w-full bg-gray-200 dark rounded-full h-2 mb-1">
                  <div 
                    className="bg-gradient-to-r from-pink-600 to-purple-600 h-2 rounded-full transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-1000"
                    style={{ width: skill.level }}
                  ></div>
                </div>
                <p className="text-xs text-right text-pink-600">{skill.level}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section with Hover Effects */}
      <section id="projects" className={`py-20 bg-gray-800 relative z-10`}>
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-center relative inline-block left-1/2 transform -translate-x-1/2">
            <span className="text-pink-600">#</span> {t.projectsTitle}
            <div className="h-1 w-1/2 bg-gradient-to-r from-pink-600 to-purple-600 mt-2 rounded-full mx-auto"></div>
          </h2>
          <p className="text-center mb-12 text-sm opacity-60 max-w-lg mx-auto">{isEnglish ? "Some of my recent work and projects" : "Quelques-uns de mes travaux et projets récents"}</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                className={`animate-on-scroll rounded-lg overflow-hidden shadow-lg bg-gray-700
                 transform transition-all duration-500 hover:shadow-2xl`}
                data-animation="fadeInUp"
              >
                <div className="relative overflow-hidden group h-48">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-pink-600/90 to-purple-600/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="flex space-x-4 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                      <a 
                        href={project.liveLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-3 bg-white rounded-full text-pink-600 hover:bg-pink-100 transition-colors duration-300 transform hover:scale-110"
                      >
                        <Eye className="h-6 w-6" />
                      </a>
                      <a 
                        href={project.codeLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-3 bg-white rounded-full text-pink-600 hover:bg-pink-100 transition-colors duration-300 transform hover:scale-110"
                      >
                        <Github className="h-6 w-6" />
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-pink-600 transition-colors">{project.title}</h3>
                  <p className="text-sm mb-4 opacity-90">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex} 
                        className="px-2 py-1 text-xs rounded-md bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex justify-between mt-4 pt-4 border-t border-gray-200 dark:border-gray-600">
                    <a 
                      href={project.liveLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-pink-600 hover:text-pink-700 flex items-center group"
                    >
                      {t.viewProject} 
                      <ExternalLink className="h-4 w-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
                    </a>
                    <a 
                      href={project.codeLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-pink-600 hover:text-pink-700 flex items-center group"
                    >
                      {t.viewCode}
                      <Github className="h-4 w-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications with Improved Cards */}
      <section id="certifications" className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-center relative inline-block left-1/2 transform -translate-x-1/2">
            <span className="text-pink-600">#</span> {t.certifications}
          <div className="h-1 w-1/2 bg-gradient-to-r from-pink-600 to-purple-600 mt-2 rounded-full mx-auto"></div>
          </h2>
          <p className="text-center mb-12 text-sm opacity-60 max-w-lg mx-auto">
            {isEnglish ? "Professional certifications and achievements" : "Certifications professionnelles et réalisations"}
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "JavaScript Certification",
                issuer: "freeCodeCamp",
                date: "2023",
                image: "/api/placeholder/400/300",
                link: "https://www.freecodecamp.org/certification/annemarie/javascript-algorithms-and-data-structures"
              },
              {
                title: "React Development",
                issuer: "Meta",
                date: "2023",
                image: "/api/placeholder/400/300",
                link: "https://www.coursera.org/account/accomplishments/verify/ABCDEFG"
              },
              {
                title: "Web Design Fundamentals",
                issuer: "Google",
                date: "2022",
                image: "/api/placeholder/400/300",
                link: "https://www.coursera.org/account/accomplishments/verify/HIJKLMN"
              }
            ].map((cert, index) => (
              <div 
                key={index}
                className={`animate-on-scroll rounded-lg overflow-hidden bg-gray-700 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2`}
                data-animation="fadeInUp"
              >
                <div className="relative h-40 overflow-hidden">
                  <img 
                    src={cert.image} 
                    alt={cert.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className={`absolute bottom-0 left-0 right-0 bg-gray-900/80 backdrop-blur-sm p-2`}>
                    <p className="text-sm font-medium">{cert.issuer} | {cert.date}</p>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-4">{cert.title}</h3>
                  <a 
                    href={cert.link}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-pink-600 to-pink-500 text-white rounded-lg hover:from-pink-700 hover:to-pink-600 transition-all duration-300"
                  >
                    <Certificate className="h-4 w-4 mr-2" />
                    {isEnglish ? "View Certificate" : "Voir le certificat"}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section with Form */}
      <section id="contact" className={`py-20 bg-gray-800 relative z-10`}>
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-center relative inline-block left-1/2 transform -translate-x-1/2">
            <span className="text-pink-600">#</span> {t.contact}
            <div className="h-1 w-1/2 bg-gradient-to-r from-pink-600 to-purple-600 mt-2 rounded-full mx-auto"></div>
          </h2>
          <p className="text-center mb-12 text-sm opacity-60 max-w-lg mx-auto">
            {isEnglish ? "Get in touch with me" : "Contactez-moi"}
          </p>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="animate-on-scroll" data-animation="fadeInLeft">
              <h3 className="text-2xl font-bold mb-6">
                {isEnglish ? "Let's Talk" : "Discutons"}
              </h3>
              <p className="mb-8 opacity-90">
                {isEnglish 
                  ? "Feel free to reach out to me for collaborations, job opportunities, or just to say hello!"
                  : "N'hésitez pas à me contacter pour des collaborations, des opportunités d'emploi, ou simplement pour dire bonjour !"}
              </p>
              
              <div className="space-y-6">
                <div className={`p-4 rounded-lg bg-gray-700 flex items-center transform transition-all duration-300 hover:translate-x-2`}>
                  <div className="p-3 bg-pink-100 text-pink-600 rounded-full mr-4">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm opacity-70">{isEnglish ? "Email" : "Email"}</p>
                    <a href="mailto:annemarieagbonou@gmail.com" className="font-medium hover:text-pink-600 transition-colors">
                      annemarieagbonou@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className={`p-4 rounded-lg bg-gray-700 flex items-center transform transition-all duration-300 hover:translate-x-2`}>
                  <div className="p-3 bg-pink-100 text-pink-600 rounded-full mr-4">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm opacity-70">{isEnglish ? "Phone" : "Téléphone"}</p>
                    <a href="tel:+2250759548254" className="font-medium hover:text-pink-600 transition-colors">
                      +225 01 72 31 79 83
                    </a>
                  </div>
                </div>
                
                <div className={`p-4 rounded-lg bg-gray-700 flex items-center transform transition-all duration-300 hover:translate-x-2`}>
                  <div className="p-3 bg-pink-100 text-pink-600 rounded-full mr-4">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm opacity-70">{isEnglish ? "Location" : "Localisation"}</p>
                    <p className="font-medium">Koumassi Divo, Côte d'Ivoire</p>
                  </div>
                </div>
                
                <div className="flex space-x-4 mt-8">
                  <a 
                    href="https://github.com/ANNEMARIE05" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-pink-100 text-pink-600 rounded-full hover:bg-pink-200 transition-colors transform hover:scale-110"
                  >
                    <Github className="h-6 w-6" />
                  </a>
                  <a 
                    href="https://linkedin.com/in/anne-marie-agbonou" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-pink-100 text-pink-600 rounded-full hover:bg-pink-200 transition-colors transform hover:scale-110"
                  >
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  <a 
                    href="https://twitter.com/AnneMarie" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-pink-100 text-pink-600 rounded-full hover:bg-pink-200 transition-colors transform hover:scale-110"
                  >
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            <div className="animate-on-scroll" data-animation="fadeInRight">
              <form className={`p-8 rounded-2xl shadow-xl bg-gray-700`}>
                <div className="mb-6">
                  <label className="block text-sm font-medium mb-2" htmlFor="name">{t.name}</label>
                  <input 
                    type="text" 
                    id="name" 
                    className={`w-full px-4 py-3 rounded-lg border bg-gray-800 border-gray-600 focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-200 transition-colors`}
                    placeholder={isEnglish ? "Your name" : "Votre nom"}
                  />
                </div>
                
                <div className="mb-6">
                  <label className="block text-sm font-medium mb-2" htmlFor="email">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className={`w-full px-4 py-3 rounded-lg border bg-gray-800 border-gray-600 focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-200 transition-colors`}
                    placeholder={isEnglish ? "Your email" : "Votre email"}
                  />
                </div>
                
                <div className="mb-6">
                  <label className="block text-sm font-medium mb-2" htmlFor="message">{t.message}</label>
                  <textarea 
                    id="message" 
                    rows="5" 
                    className={`w-full px-4 py-3 rounded-lg border bg-gray-800 border-gray-600 focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-200 transition-colors`}
                    placeholder={isEnglish ? "Your message" : "Votre message"}
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full py-3 bg-gradient-to-r from-pink-600 to-pink-500 text-white rounded-lg hover:from-pink-700 hover:to-pink-600 transition-all duration-300 transform hover:translate-y-1 hover:shadow-lg flex items-center justify-center"
                >
                  <Mail className="h-5 w-5 mr-2" />
                  {t.sendMessage}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 bg-gray-900`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <Code2 className="h-6 w-6 text-pink-600" />
              <span className="ml-2 font-bold">Anne Marie</span>
            </div>
            
            <p className="text-sm opacity-70">
              {t.copyright}
            </p>
            
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a 
                href="https://github.com/ANNEMARIE05" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-600 hover:text-pink-700 transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="https://linkedin.com/in/anne-marie-agbonou" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-600 hover:text-pink-700 transition-colors"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a 
                href="https://twitter.com/AnneMarie" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-600 hover:text-pink-700 transition-colors"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-8 right-8 p-3 rounded-full bg-pink-600 text-white shadow-lg transform transition-all duration-300 hover:scale-110 ${
          scrolled ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
      >
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
        </svg>
      </button>
    </div>
  );
}

export default App;
import logo from './assets/logo.jpeg'; 
import "./App.css"
import { useState, useEffect, useRef } from 'react';
import { 
  Github, Mail, Phone, MapPin, Calendar, Code2, Briefcase, GraduationCap, 
  ChevronRight, Moon, Sun, Languages, Download, User, AlignCenterVertical as Certificate, 
  FolderGit2, ExternalLink, Eye, Menu, X, ArrowUp
} from 'lucide-react';

// Simulation d'un logo importé
const logoPlaceholder = "/api/placeholder/120/120";

function App() {
  const [isEnglish, setIsEnglish] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
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
      Experience: "Experience",
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
      Experience: "Experience",
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
      copyright: "© 2025 Anne Marie Agbonou. All rights reserved.",
    }
  };

  const t = isEnglish ? translations.en : translations.fr;

  const navItems = [
    { label: t.about, icon: User, id: "about" },
    { label: t.skills, icon: Code2, id: "skills" },
    { label: t.projects, icon: FolderGit2, id: "projects" },
    { label: t.Experience, icon: Certificate, id: "experience" },
    { label: t.contact, icon: Mail, id: "contact" },
  ];

  const projects = [
    {
      title: "Projet e-commerce my_shop",
      description: isEnglish 
        ? "Development of a responsive website with a secure authentication system, an admin interface (CRUD for users/products/categories), an advanced search engine, and adherence to UX/UI best practices."
        : "Création d'un site responsive avec système d'authentification sécurisé, interface admin (CRUD utilisateurs/produits/catégories), moteur de recherche avancé, et bonnes pratiques UX/UI.",
      image: "/api/placeholder/600/400",
      tags: ["HTML", "Tailwind CSS", "PHP (POO)", "MySQL"],
      liveLink: "#",
      codeLink: "https://github.com/AnneMarieWecode"
    },
    {
      title: "Projet MVVM_TWP",
      description: isEnglish 
        ? "Development of a Trello-inspired web application using Vue.js, connected to a WordPress API. Implemented full functionality for managing lists (categories), cards (posts), and comments."
        : "Développement d'une application web inspirée de Trello avec Vue.js, connectée à une API WordPress. Mise en place des fonctionnalités complètes de gestion des listes (catégories), cartes (articles) et commentaires.",
      image: "/api/placeholder/600/400",
      tags: ["Vue.js", "WordPress", "REST API"],
      liveLink: "#",
      codeLink: "https://github.com/AnneMarieWecode"
    },
    {
      title: "Projet Microservice Dashboard",
      description: isEnglish 
        ? "Developed a React-based dashboard with authentication, dynamic widget integration (Weather, RSS, etc.), automatic refresh, and deployment using Docker Compose."
        : "Développement d'un Dashboard en React avec authentification, ajout de widgets dynamiques via services (Météo, RSS…), rafraîchissement auto, et déploiement avec Docker Compose.",
      image: "/api/placeholder/600/400",
      tags: ["REACT js", "NewsApp API", "Meteo API", "Coctail API", "Bitcoin API"],
      liveLink: "#",
      codeLink: "https://github.com/AnneMarieWecode"
    }
  ];

  const skills = [
    { name: 'JavaScript', value: 90, color: 'from-pink-500 to-purple-600' },
    { name: 'HTML/CSS', value: 95, color: 'from-blue-500 to-teal-400' },
    { name: 'React.js', value: 85, color: 'from-cyan-500 to-blue-600' },
    { name: 'Vue.js', value: 80, color: 'from-green-500 to-emerald-400' },
    { name: 'Wordpress', value: 75, color: 'from-blue-600 to-indigo-600' },
    { name: 'PHP', value: 82, color: 'from-indigo-500 to-purple-500' },
    { name: 'Bootstrap', value: 88, color: 'from-purple-500 to-pink-500' },
    { name: 'Tailwind CSS', value: 90, color: 'from-teal-400 to-cyan-500' },
    { name: 'Figma', value: 78, color: 'from-rose-500 to-pink-600' },
    { name: 'API Integration', value: 85, color: 'from-amber-500 to-orange-600' },
    { name: 'Git', value: 87, color: 'from-red-500 to-rose-500' },
    { name: 'SQL', value: 80, color: 'from-sky-500 to-blue-600' }
  ];

  const experiences = [
    {
      title: "JavaScript Certification",
      issuer: "NAN DIGITAL ACADEMY",
      date: "2023 - 2024",
      image: "/api/placeholder/400/300",
      link: "#"
    },
    {
      title: "Developpement fullstack",
      issuer: "WeCode",
      date: "2023",
      image: "/api/placeholder/400/300",
      link: "#"
    }
  ];

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'} transition-colors duration-500`}>
      {/* Navigation */}
      <nav 
        ref={navRef}
        className={`fixed w-full z-50 transition-all duration-500 ${
          scrolled 
            ? `${darkMode ? 'bg-gray-900/90' : 'bg-white/90'} shadow-lg backdrop-blur-lg py-2` 
            : `bg-transparent py-6`
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <div className={`h-10 w-10 rounded-lg overflow-hidden bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center transition-all duration-500 ${scrolled ? 'rotate-12' : 'rotate-0'}`}>
                <Code2 className="h-6 w-6 text-white" />
              </div>
              <span className={`ml-3 text-xl font-extrabold tracking-tighter ${
                darkMode ? 'text-white' : 'text-gray-900'
              } ${scrolled ? 'opacity-100' : ''}`}>
                Anne Marie
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600 ml-1">.dev</span>
              </span>
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
                  <item.icon className="h-4 w-4 mr-2" />
                  {item.label}
                </a>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <button
                onClick={() => setIsEnglish(!isEnglish)}
                className={`p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300 ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}
                aria-label={isEnglish ? "Switch to French" : "Switch to English"}
              >
                <Languages className="h-5 w-5" />
              </button>
              
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300 ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}
                aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
              >
                {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </button>
              
              {/* Mobile Menu Button */}
              <button 
                className={`md:hidden p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300 ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}
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
          <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg rounded-b-2xl mx-4`}>
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => handleNavItemClick(item.id)}
                className={`flex items-center space-x-3 px-5 py-4 text-lg ${darkMode ? 'border-gray-700' : 'border-gray-200'} border-b ${
                  activeSection === item.id 
                    ? `text-pink-600 ${darkMode ? 'bg-gray-700/30' : 'bg-pink-50'}` 
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
      <section id="hero" className={`min-h-screen flex items-center pt-24 pb-16 px-4 overflow-hidden relative ${
        darkMode ? '' : 'bg-gradient-to-b from-gray-50 to-gray-100'
      }`}>
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-20 right-10 w-60 h-60 bg-pink-400 opacity-10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-purple-400 opacity-10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-1/2 left-1/3 w-40 h-40 bg-blue-400 opacity-10 rounded-full blur-3xl animate-pulse"></div>
          
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        </div>
        
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:w-1/2 space-y-6">
              <div className="mb-3 inline-block overflow-hidden relative">
                <span className="bg-gradient-to-r from-pink-600 to-purple-600 text-white text-sm font-medium px-4 py-1 rounded-full inline-flex items-center">
                  <span className="mr-2 h-2 w-2 bg-white rounded-full animate-pulse"></span>
                  {isEnglish ? "Welcome to my portfolio" : "Bienvenue sur mon portfolio"}
                </span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-4 relative">
                <span className={`${darkMode ? 'text-white' : 'text-gray-900'}`}>Agbonou Kossiwa</span>
                <div className="overflow-hidden inline-block ml-3">
                  <span className="bg-gradient-to-r from-pink-600 to-purple-600 text-transparent bg-clip-text inline-block animate-gradient-x">
                    Anne Marie
                  </span>
                </div>
              </h1>
              
              <div className="h-10 overflow-hidden relative">
                <h2 className="text-2xl md:text-3xl font-light absolute animate-slide-up">
                  <span className="flex items-center">
                    <span className="mr-2 h-2 w-2 bg-pink-600 rounded-full"></span>
                    {t.intro}
                  </span>
                </h2>
              </div>
              
              <p className="text-lg mb-8 opacity-90 max-w-lg leading-relaxed">{t.motivation}</p>
              
              <div className="flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="flex items-center px-6 py-3 bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-lg hover:from-pink-700 hover:to-purple-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg group"
                >
                  <Mail className="h-5 w-5 mr-2 group-hover:animate-bounce" />
                  <span>Contact</span>
                </a>
                <a
                  href="https://drive.google.com/file/d/19K-y48bQbb7Z2DbHkvQtpdjIQwowxx94/view?usp=sharing"
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group flex items-center px-6 py-3 border-2 border-pink-600 rounded-lg ${
                    darkMode ? 'text-pink-600 hover:bg-gray-800' : 'text-pink-600 hover:bg-pink-50'
                  } transition-all duration-300 transform hover:-translate-y-1`}
                >
                  <Download className="h-5 w-5 mr-2 group-hover:animate-bounce" />
                  {t.downloadCV}
                </a>
              </div>
            </div>
            
            <div className="md:w-1/2 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full blur-xl opacity-30 animate-pulse"></div>
                
                {/* Floating Elements */}
                <div className="absolute -top-10 -left-10 w-16 h-16 bg-blue-400 rounded-lg opacity-20 animate-float" style={{ animationDelay: '0s' }}></div>
                <div className="absolute -bottom-5 -right-5 w-12 h-12 bg-pink-400 rounded-full opacity-20 animate-float" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-1/2 -right-8 w-8 h-8 bg-purple-400 rounded-lg opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
                
                <div className="relative rounded-full w-64 h-64 p-2 bg-gradient-to-br from-pink-500 to-purple-600">
                  <div className="absolute inset-0 rounded-full animate-spin-slow">
                    {Array.from({ length: 12 }).map((_, i) => (
                      <div 
                        key={i} 
                        className="absolute w-3 h-3 bg-white rounded-full top-0 left-1/2 -translate-x-1/2 -translate-y-1/2" 
                        style={{ transform: `rotate(${i * 30}deg) translateY(-32px) translateX(-50%)` }}
                      ></div>
                    ))}
                  </div>
                  
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
            <div className="w-6 h-10 rounded-full border-2 border-pink-600 flex justify-center relative overflow-hidden">
              <div className="w-1 h-3 bg-pink-600 rounded-full absolute top-2 animate-scroll-indicator"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section with Card Layout */}
      <section id="about" className={`py-20 relative z-10 ${
        darkMode ? 'bg-gray-800' : 'bg-white'
      }`}>
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-center relative inline-block left-1/2 transform -translate-x-1/2">
            <span className="text-pink-600">#</span> {t.aboutMe}
            <div className="h-1 w-1/2 bg-gradient-to-r from-pink-600 to-purple-600 mt-2 rounded-full mx-auto"></div>
          </h2>
          <p className="text-center mb-12 text-sm opacity-60 max-w-lg mx-auto">{isEnglish ? "Get to know more about me, my background, and what I do" : "Apprenez-en plus sur moi, mon parcours et ce que je fais"}</p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6 animate-on-scroll" data-animation="fadeInLeft">
              <div className={`p-6 rounded-lg ${
                darkMode ? 'bg-gray-700' : 'bg-gray-50'
              } shadow-xl border-l-4 border-pink-600 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden group`}>
                <div className="absolute -right-10 -bottom-10 w-40 h-40 rounded-full bg-pink-600 opacity-5 group-hover:scale-150 transition-transform duration-700"></div>
                
                <p className="text-lg leading-relaxed relative z-10">{t.aboutText}</p>
                <div className="grid grid-cols-2 gap-4 mt-6 relative z-10">
                  <div className="flex items-center space-x-2">
                    <div className="p-2 rounded-full bg-pink-100 dark:bg-pink-900/30 text-pink-600">
                      <Calendar className="h-5 w-5" />
                    </div>
                    <span>04 Février 2001</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="p-2 rounded-full bg-pink-100 dark:bg-pink-900/30 text-pink-600">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <span>Koumassi Divo, Côte d'Ivoire</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6 animate-on-scroll" data-animation="fadeInRight">
              <div className={`p-6 rounded-lg ${
                darkMode ? 'bg-gray-700' : 'bg-gray-50'
              } shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden`}>
                <div className="absolute -left-10 -top-10 w-40 h-40 rounded-full bg-purple-600 opacity-5"></div>
                
                <h3 className="text-xl font-semibold mb-6 flex items-center relative">
                  <div className="p-2 rounded-full bg-pink-100 dark:bg-pink-900/30 text-pink-600 mr-3">
                    <GraduationCap className="h-6 w-6" />
                  </div>
                  {isEnglish ? "Education" : "Formation"}
                </h3>
                
                <div className="space-y-6 relative">
                  <div className={`p-4 rounded-lg ${
                    darkMode ? 'bg-gray-800' : 'bg-white'
                  } border-l-2 border-pink-600 transform hover:translate-x-2 transition-transform duration-300`}>
                    <div>
                      <h4 className="text-lg font-semibold">Licence en Développement d'Application (DAS)</h4>
                      <p className="text-pink-600">Université Virtuelle de Côte d'Ivoire (UVCI) | 2024</p>
                    </div>
                  </div>
                  
                  <div className={`p-4 rounded-lg ${
                    darkMode ? 'bg-gray-800' : 'bg-white'
                  } border-l-2 border-pink-600 transform hover:translate-x-2 transition-transform duration-300`}>
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

      {/* Skills Section with Progress Bars */}
      <section id="skills" className={`py-20 relative overflow-hidden ${
        darkMode ? '' : 'bg-gray-50'
      }`}>
        <div className="absolute inset-0 pointer-events-none opacity-10">
          <div className="absolute top-1/4 left-1/4 text-8xl font-bold text-pink-600 opacity-5">
            HTML
          </div>
          <div className="absolute bottom-1/4 right-1/4 text-8xl font-bold text-purple-600 opacity-5">
            CSS
          </div>
          <div className="absolute top-3/4 left-1/3 text-8xl font-bold text-blue-600 opacity-5">
            JS
          </div>
        </div>
      
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-center relative inline-block left-1/2 transform -translate-x-1/2">
            <span className="text-pink-600">#</span> {isEnglish ? "My Skills" : "Mes Compétences"}
            <div className="h-1 w-1/2 bg-gradient-to-r from-pink-600 to-purple-600 mt-2 rounded-full mx-auto"></div>
          </h2>
          <p className="text-center mb-12 text-sm opacity-60 max-w-lg mx-auto">
            {isEnglish 
              ? "These are the technologies and tools I work with on a daily basis"
              : "Voici les technologies et outils avec lesquels je travaille au quotidien"
            }
          </p>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
            {skills.map((skill, index) => (
              <div 
                key={skill.name} 
                className="animate-on-scroll" 
                data-animation="fadeInUp"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-between mb-1">
                  <span className="font-medium">{skill.name}</span>
                  <span>{skill.value}%</span>
                </div>
                <div className={`w-full h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden`}>
                  <div 
                    className={`h-full rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out`}
                    style={{ width: `${skill.value}%`, animationDelay: `${index * 0.1}s` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={`py-20 relative ${
        darkMode ? 'bg-gray-800' : 'bg-white'
      }`}>
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-center relative inline-block left-1/2 transform -translate-x-1/2">
            <span className="text-pink-600">#</span> {t.projectsTitle}
            <div className="h-1 w-1/2 bg-gradient-to-r from-pink-600 to-purple-600 mt-2 rounded-full mx-auto"></div>
          </h2>
          <p className="text-center mb-12 text-sm opacity-60 max-w-lg mx-auto">
            {isEnglish 
              ? "A showcase of my recent development projects and applications" 
              : "Une présentation de mes projets et applications récents"
            }
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={project.title}
                className={`rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group ${
                  darkMode ? 'bg-gray-700' : 'bg-white'
                } animate-on-scroll`}
                data-animation="fadeInUp"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative overflow-hidden h-48">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-all duration-700 transform group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                    <div className="p-4 w-full">
                      <div className="flex flex-wrap gap-2 mb-2">
                        {project.tags.map(tag => (
                          <span 
                            key={tag} 
                            className="text-xs font-medium px-2 py-1 rounded-full bg-pink-600 text-white"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-2">{project.title}</h3>
                  <p className={`mb-6 text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    {project.description}
                  </p>
                  
                  <div className="flex space-x-3">
                    <a 
                      href={project.liveLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center text-sm font-medium px-3 py-2 rounded bg-gradient-to-r from-pink-600 to-purple-600 text-white hover:from-pink-700 hover:to-purple-700 transition-all duration-300"
                    >
                      <Eye className="h-4 w-4 mr-2" />
                      {t.viewProject}
                    </a>
                    <a 
                      href={project.codeLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={`flex items-center text-sm font-medium px-3 py-2 rounded border border-pink-600 ${
                        darkMode ? 'text-pink-600 hover:bg-gray-600' : 'text-pink-600 hover:bg-pink-50'
                      } transition-all duration-300`}
                    >
                      <Github className="h-4 w-4 mr-2" />
                      {t.viewCode}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Experience Section */}
      <section id="experience" className={`py-20 relative ${
        darkMode ? '' : 'bg-gray-50'
      }`}>
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-center relative inline-block left-1/2 transform -translate-x-1/2">
            <span className="text-pink-600">#</span> {t.Experience}
            <div className="h-1 w-1/2 bg-gradient-to-r from-pink-600 to-purple-600 mt-2 rounded-full mx-auto"></div>
          </h2>
          <p className="text-center mb-12 text-sm opacity-60 max-w-lg mx-auto">
            {isEnglish 
              ? "My professional journey and certifications" 
              : "Mon parcours professionnel et mes certifications"
            }
          </p>
          
          <div className="grid md:grid-cols-2 gap-10">
            {experiences.map((exp, index) => (
              <div 
                key={exp.title}
                className={`rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group ${
                  darkMode ? 'bg-gray-700' : 'bg-white'
                } animate-on-scroll`}
                data-animation={index % 2 === 0 ? "fadeInLeft" : "fadeInRight"}
              >
                <div className="relative overflow-hidden h-48">
                  <img 
                    src={exp.image} 
                    alt={exp.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                      <div className="flex items-center text-pink-400">
                        <Briefcase className="h-4 w-4 mr-2" />
                        <span>{exp.issuer}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="p-6 flex justify-between items-center">
                  <div className="flex items-center">
                    <Calendar className={`h-5 w-5 mr-2 ${darkMode ? 'text-pink-500' : 'text-pink-600'}`} />
                    <span>{exp.date}</span>
                  </div>
                  
                  <a 
                    href={exp.link} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center text-sm ${
                      darkMode ? 'text-pink-500 hover:text-pink-400' : 'text-pink-600 hover:text-pink-700'
                    } transition-colors duration-300`}
                  >
                    <span className="mr-1">{isEnglish ? "View certificate" : "Voir le certificat"}</span>
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-20 relative ${
        darkMode ? 'bg-gray-800' : 'bg-white'
      }`}>
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <div className="absolute bottom-0 right-0 w-72 h-72 bg-pink-400 opacity-20 rounded-full blur-3xl"></div>
          <div className="absolute top-0 left-0 w-72 h-72 bg-purple-400 opacity-20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-center relative inline-block left-1/2 transform -translate-x-1/2">
            <span className="text-pink-600">#</span> {t.contact}
            <div className="h-1 w-1/2 bg-gradient-to-r from-pink-600 to-purple-600 mt-2 rounded-full mx-auto"></div>
          </h2>
          <p className="text-center mb-12 text-sm opacity-60 max-w-lg mx-auto">
            {isEnglish 
              ? "Feel free to reach out to me for collaborations or questions" 
              : "N'hésitez pas à me contacter pour des collaborations ou des questions"
            }
          </p>
          
          <div className="grid md:grid-cols-2 gap-10">
            <div className="animate-on-scroll" data-animation="fadeInLeft">
              <div className={`p-6 rounded-xl ${
                darkMode ? 'bg-gray-700' : 'bg-gray-50'
              } shadow-lg relative overflow-hidden`}>
                <div className="absolute -left-10 -bottom-10 w-40 h-40 rounded-full bg-pink-600 opacity-5"></div>
                
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <Mail className="h-6 w-6 text-pink-600" />
                  {isEnglish ? "Get in Touch" : "Contactez-moi"}
                </h3>
                
                <div className="space-y-4 relative z-10">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-full bg-pink-100 dark:bg-pink-900/30 text-pink-600">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="text-sm opacity-70">Email</h4>
                      <a href="mailto:annemarie.agbonou@gmail.com" className="text-lg hover:text-pink-600 transition-colors">
                        annemarie.agbonou@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-full bg-pink-100 dark:bg-pink-900/30 text-pink-600">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="text-sm opacity-70">{isEnglish ? "Phone" : "Téléphone"}</h4>
                      <a href="tel:+22559123456" className="text-lg hover:text-pink-600 transition-colors">
                        +225 59 12 34 56
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-full bg-pink-100 dark:bg-pink-900/30 text-pink-600">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="text-sm opacity-70">{isEnglish ? "Location" : "Localisation"}</h4>
                      <p className="text-lg">Koumassi, Abidjan, Côte d'Ivoire</p>
                    </div>
                  </div>
                  
                  <div className="pt-6 flex gap-4">
                    <a 
                      href="https://github.com/AnneMarieWecode" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={`p-3 rounded-full ${
                        darkMode 
                          ? 'bg-gray-600 hover:bg-pink-600 text-white' 
                          : 'bg-gray-200 hover:bg-pink-600 hover:text-white'
                      } transition-all duration-300`}
                      aria-label="GitHub"
                    >
                      <Github className="h-6 w-6" />
                    </a>
                    <a 
                      href="https://linkedin.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={`p-3 rounded-full ${
                        darkMode 
                          ? 'bg-gray-600 hover:bg-pink-600 text-white' 
                          : 'bg-gray-200 hover:bg-pink-600 hover:text-white'
                      } transition-all duration-300`}
                      aria-label="LinkedIn"
                    >
                      <Mail className="h-6 w-6" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="animate-on-scroll" data-animation="fadeInRight">
              <form className={`p-6 rounded-xl ${
                darkMode ? 'bg-gray-700' : 'bg-gray-50'
              } shadow-lg`}>
                <h3 className="text-2xl font-bold mb-6">
                  {isEnglish ? "Send me a message" : "Envoyez-moi un message"}
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">
                      {t.name}
                    </label>
                    <input 
                      type="text" 
                      id="name" 
                      className={`w-full px-4 py-3 rounded-lg ${
                        darkMode 
                          ? 'bg-gray-800 focus:ring-2 focus:ring-pink-600 border-gray-700' 
                          : 'bg-white focus:ring-2 focus:ring-pink-600 border-gray-300'
                      } focus:outline-none transition-all duration-300 border`}
                      placeholder={isEnglish ? "Your name" : "Votre nom"}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">
                      Email
                    </label>
                    <input 
                      type="email" 
                      id="email" 
                      className={`w-full px-4 py-3 rounded-lg ${
                        darkMode 
                          ? 'bg-gray-800 focus:ring-2 focus:ring-pink-600 border-gray-700' 
                          : 'bg-white focus:ring-2 focus:ring-pink-600 border-gray-300'
                      } focus:outline-none transition-all duration-300 border`}
                      placeholder={isEnglish ? "Your email" : "Votre email"}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-1">
                      {t.message}
                    </label>
                    <textarea 
                      id="message" 
                      rows="5" 
                      className={`w-full px-4 py-3 rounded-lg ${
                        darkMode 
                          ? 'bg-gray-800 focus:ring-2 focus:ring-pink-600 border-gray-700' 
                          : 'bg-white focus:ring-2 focus:ring-pink-600 border-gray-300'
                      } focus:outline-none transition-all duration-300 border`}
                      placeholder={isEnglish ? "Your message" : "Votre message"}
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit"
                    className="w-full py-3 px-6 bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-lg flex justify-center items-center hover:from-pink-700 hover:to-purple-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
                  >
                    {t.sendMessage}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 ${
        darkMode ? 'bg-gray-900 text-gray-300' : 'bg-gray-100 text-gray-700'
      }`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-lg overflow-hidden bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center">
                  <Code2 className="h-6 w-6 text-white" />
                </div>
                <span className="ml-3 text-xl font-extrabold tracking-tighter">
                  Anne Marie
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600 ml-1">.dev</span>
                </span>
              </div>
              <p className="mt-2 text-sm opacity-70">{t.copyright}</p>
            </div>
            
            <div className="flex gap-4">
              <a 
                href="https://github.com/AnneMarieWecode" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`p-2 rounded-full ${
                  darkMode 
                    ? 'bg-gray-800 hover:bg-pink-600 text-white' 
                    : 'bg-gray-200 hover:bg-pink-600 hover:text-white'
                } transition-all duration-300`}
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="mailto:annemarie.agbonou@gmail.com" 
                className={`p-2 rounded-full ${
                  darkMode 
                    ? 'bg-gray-800 hover:bg-pink-600 text-white' 
                    : 'bg-gray-200 hover:bg-pink-600 hover:text-white'
                } transition-all duration-300`}
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`p-2 rounded-full ${
                  darkMode 
                    ? 'bg-gray-800 hover:bg-pink-600 text-white' 
                    : 'bg-gray-200 hover:bg-pink-600 hover:text-white'
                } transition-all duration-300`}
                aria-label="LinkedIn"
              >
                <Phone className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
      
      {/* Scroll to top button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-6 right-6 p-3 rounded-full bg-pink-600 text-white shadow-lg transition-all duration-300 transform hover:scale-110 z-50 ${
          scrolled ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
        aria-label="Scroll to top"
      >
        <ArrowUp className="h-6 w-6" />
      </button>
      
      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes scroll-indicator {
          0% { transform: translateY(0); opacity: 1; }
          75% { transform: translateY(12px); opacity: 0; }
          100% { transform: translateY(0); opacity: 0; }
        }
        
        @keyframes slide-up {
          0% { transform: translateY(100%); }
          100% { transform: translateY(0); }
        }
        
        @keyframes gradient-x {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes float {
          0% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(5deg); }
          100% { transform: translateY(0px) rotate(0deg); }
        }
        
        @keyframes spin-slow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        .animate-scroll-indicator {
          animation: scroll-indicator 2s infinite;
        }
        
        .animate-slide-up {
          animation: slide-up 0.5s ease-out;
        }
        
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }
        
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        
        .animate-spin-slow {
          animation: spin-slow 15s linear infinite;
        }
        
        .animate-on-scroll {
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.7s ease-out;
        }
        
        .animate-on-scroll.appear {
          opacity: 1;
          transform: translateY(0);
        }
        
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        [data-animation="fadeInLeft"].appear {
          animation: fadeInLeft 0.7s ease-out forwards;
        }
        
        [data-animation="fadeInRight"].appear {
          animation: fadeInRight 0.7s ease-out forwards;
        }
        
        [data-animation="fadeInUp"].appear {
          animation: fadeInUp 0.7s ease-out forwards;
        }
        
        .bg-grid-pattern {
          background-image: 
            linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px);
          background-size: 35px 35px;
        }
      `}</style>
    </div>
  );
}

export default App;
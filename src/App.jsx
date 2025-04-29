import logo from './assets/logo.jpeg';
import "./App.css"
import { useState, useEffect, useRef } from 'react';
import {
  Github, Mail, Phone, MapPin, Calendar, Code2, Briefcase, GraduationCap,
  ChevronRight, Languages, Download, User, AlignCenterVertical as Certificate,
  FolderGit2, ExternalLink, Eye, Menu, X, ArrowUp
} from 'lucide-react';
import { RiTailwindCssFill } from "react-icons/ri";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt, FaCode, FaWordpress, FaVuejs, FaPhp, FaBootstrap, FaFigma } from 'react-icons/fa';


function App() {
  const [isEnglish, setIsEnglish] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef(null);
  
  const skills = [
    { name: 'JavaScript', value: 90, color: 'from-pink-500 to-purple-600' },
    { name: 'HTML', value: 95, color: 'from-blue-500 to-teal-400' },
    { name: 'CSS', value: 80, color: 'from-sky-500 to-blue-600' },
    { name: 'react', value: 85, color: 'from-cyan-500 to-blue-600' },
    { name: 'vuejs', value: 80, color: 'from-green-500 to-emerald-400' },
    { name: 'wordpress', value: 75, color: 'from-blue-600 to-indigo-600' },
    { name: 'php', value: 82, color: 'from-indigo-500 to-purple-500' },
    { name: 'bootstrap', value: 88, color: 'from-purple-500 to-pink-500' },
    { name: 'tailwindcss', value: 90, color: 'from-teal-400 to-cyan-500' },
    { name: 'Figma', value: 78, color: 'from-rose-500 to-pink-600' },
    { name: 'API', value: 85, color: 'from-amber-500 to-orange-600' },
    { name: 'git', value: 87, color: 'from-red-500 to-rose-500' },
  ];

  function getSkillIcon(skillName) {
    switch (skillName.toLowerCase()) {
      case 'javascript': return <FaJs className="text-yellow-400" />;
      case 'react': return <FaReact className="text-blue-400" />;
      case 'vuejs': return <FaVuejs className="text-blue-500" />;
      case 'wordpress': return <FaWordpress className="text-orange-500" />;
      case 'php': return <FaPhp className="text-yellow-400" />;
      case 'bootstrap': return <FaBootstrap className="text-blue-400" />;
      case 'tailwindcss': return <RiTailwindCssFill className="text-teal-400" />;
      case 'figma': return <FaFigma className="text-red-200" />;
      case 'API': return <FaGitAlt className="text-green-500" />;
      case 'git': return <FaGitAlt className="text-green-500" />;
      case 'html': return <FaHtml5 className="text-red-200" />;
      case 'css': return <FaCss3Alt className="text-blue-500" />;

      default: return <FaCode className="text-gray-400" />;
    }
  }
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
      formation: "Formation",
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
      formation: "Education",
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
    { label: t.formation, icon: Certificate, id: "formation" },
    { label: t.contact, icon: Mail, id: "contact" },
  ];

  const projects = [
    {
      title: "Projet e-commerce my_shop",
      description: isEnglish
        ? "Development of a responsive website with a secure authentication system, an admin interface (CRUD for users/products/categories), an advanced search engine, and adherence to UX/UI best practices."
        : "Création d'un site responsive avec système d'authentification sécurisé, interface admin (CRUD utilisateurs/produits/catégories), moteur de recherche avancé, et bonnes pratiques UX/UI.",
      image: "https://img.freepik.com/photos-premium/jeune-couple-smartphone-pres-du-centre-commercial_116547-37604.jpg?uid=R99967860&ga=GA1.1.1775713900.1739299280&semt=ais_hybrid&w=740",
      tags: ["HTML", "Tailwind CSS", "PHP (POO)", "MySQL"],
      liveLink: "#",
      codeLink: "https://github.com/AnneMarieWecode"
    },
    {
      title: "Projet MVVM_TWP",
      description: isEnglish
        ? "Development of a Trello-inspired web application using Vue.js, connected to a WordPress API. Implemented full functionality for managing lists (categories), cards (posts), and comments."
        : "Développement d'une application web inspirée de Trello avec Vue.js, connectée à une API WordPress. Mise en place des fonctionnalités complètes de gestion des listes (catégories), cartes (articles) et commentaires.",
      image: "https://img.freepik.com/vecteurs-libre/illustration-concept-abstrait-gestion-taches_335657-2127.jpg?uid=R99967860&ga=GA1.1.1775713900.1739299280&semt=ais_hybrid&w=740",
      tags: ["Vue.js", "WordPress", "REST API"],
      liveLink: "#",
      codeLink: "https://github.com/AnneMarieWecode"
    },
    {
      title: "Projet Microservice Dashboard",
      description: isEnglish
        ? "Developed a React-based dashboard with authentication, dynamic widget integration (Weather, RSS, etc.), automatic refresh, and deployment using Docker Compose."
        : "Développement d'un Dashboard en React avec authentification, ajout de widgets dynamiques via services (Météo, RSS…), rafraîchissement auto, et déploiement avec Docker Compose.",
      image: "https://img.freepik.com/vecteurs-libre/prendre-notes-concept-illustration_114360-1142.jpg?uid=R99967860&ga=GA1.1.1775713900.1739299280&semt=ais_hybrid&w=740",
      tags: ["REACT js", "NewsApp API", "Meteo API", "Coctail API", "Bitcoin API"],
      liveLink: "#",
      codeLink: "https://github.com/AnneMarieWecode"
    }
  ];



  const experiences = [
    {
      title: "JavaScript Certification",
      issuer: "NAN DIGITAL ACADEMY",
      date: "2023 - 2024",
      image: "data:image/png;base64,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",
      link: "#"
    },
    {
      title: "Developpement fullstack",
      issuer: "WeCode",
      date: "2024 - 2025",
      image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAulBMVEX///8AAAD///1ISEj7+/v///u6urr4+Pi9vb2lpaWNjY1+fn7b29utra3u7u4PDw9YWFjOzs7w8PCwsLCXl5fT09Pk5OQdHR2ioqKLi4tPT087OzsmJiZzc3PIyMhkZGQXFxdvb29AQEAuLi5PUP9YWPjb3fZUVf9KTP9eXvWamprs6/iFhfV8ffZ+fvG0su+Rkvmfn/Vxc/Pv8PlaW/hmZvhnafTZ2fjLzfS/wPVFRP+WlvGoq/KkpfQGfEhgAAAD+UlEQVR4nO3XaXfaOhCAYcssBhubfQ+EEieQ0GajNGl6+///1p2RbKBplnN625Db8z4fEqPYisYajYTnAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH+V6WQSHnoMVtDphIPsuhqGibuqhZ2w+/QD3bAxLkTl4LWOY2Pmv2mM/9GxMcbFFchV7Bonctl76u5awzj99iv9SoSF3znOX1eR4brRTuXq2DWaZyagYnail/t9PxG2ZnlckY7bZl9TLgZP3Nu1oY2iY/v75WX2fiL0PhhT1zQtnuiwK9o0zDO3lRT3b61L+8S+g6pcFH/qKlNMWnsRyqdn73wb0yyump2YiTYdGdOQ8MK+NHyobe+M93Kzsp1j/1F/NXll5uhi4CK0n/rDVwvTnxTUXVwdCUtG47lkjL1eP1tw5fzOuTEnj6ej5Pt+SfilrKGcPVW3EbazTydP1q23IoWzLu94JFM5NqZrYzU9DVzmQn/ksyiXnR8f9f3Vx0+fLoOr6+sbF3ttrxYV7II2fe1pfMhZ1DSdeonO39DWj7kmaeRqbDLfVoxevky3/NLqfLk8PSsF8uvWxjDSTE6KlZmNUH7Oaq5ydX76v2/ILq9Yw5Kh9O00tD3J0ShotYLmdhKT/YxVMoOnaXq6ljxdf14sN4Fv7xnq3/R1jDTdK9rJhUziIcuNTpfu/LEXSFb2pEaY1n62yQxb+egzfulMAjxf2cvV5zT9srb54JacrOlRe7+T1pvHtaPT1HQbhFS+6rHO5g8RZrkpg65vx5l4/t1putisslp6drpIN6tpvs/o6m7E7yVCXS5jt9ykEh7VNRk1yyZxVcTVQXZa1RNNI3tkYJreJl0s77MAff9KPn3pbmdcsnykDwxsH9LTQTeMoX3JWgsS9749WzLmunSCCxmaHwS6GxS07jeltae7XGd1ni6kzNgufJnDhWSsvJ6+LlvN/EIx30C78aFCy7jTmK0nWgvtKU7bjjqx7vpD7+syvZe2ZGZvnNs9RJathri4s3v+3SKVJC3pYUdOCdGJ2y103xkNqhJuvfLiCP604tjkxa663eMHu2VY2qTprbbVTnbrSrYSfy2Jmkqi+ncS6vlap7Oxu6PgvrlYs4Nu+S5N3XnMVhi3ZMp2zzf1qedfPjx8s23BMBtxw854aX27XD589e+X6XIju4Y0FSP3lMQ29tzpQYM9cIBeUi6XszHIVTNvrnSiC5tdwT9X+XZWrFxEYTurPbJAv998vzm7vPx4vc4PqL1qFEqpKpdtyWm1h9HgmW/T74gePp/+Q8nGpafTxydwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/D/8CxOQNZjcAUAYAAAAAElFTkSuQmCC",
      link: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white transition-colors duration-500">
      {/* Navigation */}
      <nav
        ref={navRef}
        className={`fixed w-full z-50 transition-all duration-500 ${scrolled
          ? "bg-gray-900/90 shadow-lg backdrop-blur-lg py-2"
          : "bg-transparent py-6"
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <div className={`h-10 w-10 rounded-lg overflow-hidden bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center transition-all duration-500 ${scrolled ? 'rotate-12' : 'rotate-0'}`}>
                <Code2 className="h-6 w-6 text-white" />
              </div>
              <span className={`ml-3 text-xl font-extrabold tracking-tighter text-white ${scrolled ? 'opacity-100' : ''}`}>
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
                  className={`flex items-center text-sm font-medium transition-all duration-300 hover:text-pink-600 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-pink-600 after:transition-all after:duration-300 ${activeSection === item.id
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
                className="p-2 rounded-full hover:bg-gray-700 transition-colors duration-300 text-white"
                aria-label={isEnglish ? "Switch to French" : "Switch to English"}
              >
                <Languages className="h-5 w-5" />
              </button>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden p-2 rounded-full hover:bg-gray-700 transition-colors duration-300 text-white"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden absolute w-full top-full left-0 transition-all duration-500 overflow-hidden ${isMenuOpen
          ? 'max-h-96 opacity-100'
          : 'max-h-0 opacity-0'
          }`}>
          <div className="bg-gray-800 shadow-lg rounded-b-2xl mx-4">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => handleNavItemClick(item.id)}
                className={`flex items-center space-x-3 px-5 py-4 text-lg border-gray-700 border-b ${activeSection === item.id
                  ? 'text-pink-600 bg-gray-700/30'
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
      <section id="hero" className="min-h-screen flex items-center pt-24 pb-16 px-4 overflow-hidden relative">
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
                <span className="text-white">Agbonou Kossiwa</span>
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
                  className="group flex items-center px-6 py-3 border-2 border-pink-600 rounded-lg text-pink-600 hover:bg-gray-800 transition-all duration-300 transform hover:-translate-y-1"
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
                    className="rounded-full w-full h-full object-cover border-4 border-gray-800 z-10"
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
      <section id="about" className="py-20 relative z-10 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-center relative inline-block left-1/2 transform -translate-x-1/2">
            <span className="text-pink-600">#</span> {t.aboutMe}
            <div className="h-1 w-1/2 bg-gradient-to-r from-pink-600 to-purple-600 mt-2 rounded-full mx-auto"></div>
          </h2>
          <p className="text-center mb-12 text-sm opacity-60 max-w-lg mx-auto">{isEnglish ? "Get to know more about me, my background, and what I do" : "Apprenez-en plus sur moi, mon parcours et ce que je fais"}</p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6 animate-on-scroll" data-animation="fadeInLeft">
              <div className="p-6 rounded-lg bg-gray-700 shadow-xl border-l-4 border-pink-600 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden group">
                <div className="absolute -right-10 -bottom-10 w-40 h-40 rounded-full bg-pink-600 opacity-5 group-hover:scale-150 transition-transform duration-700"></div>

                <p className="text-lg leading-relaxed relative z-10">{t.aboutText}</p>
                <div className="grid grid-cols-2 gap-4 mt-6 relative z-10">
                  <div className="flex items-center space-x-2">
                    <div className="p-2 rounded-full bg-pink-900/30 text-pink-600">
                      <Calendar className="h-5 w-5" />
                    </div>
                    <span>04 Février 2001</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="p-2 rounded-full bg-pink-900/30 text-pink-600">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <span>Koumassi Divo, Côte d'Ivoire</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6 animate-on-scroll" data-animation="fadeInRight">
              <div className="p-6 rounded-lg bg-gray-700 shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden">
                <div className="absolute -left-10 -top-10 w-40 h-40 rounded-full bg-purple-600 opacity-5"></div>

                <h3 className="text-xl font-semibold mb-6 flex items-center relative">
                  <div className="p-2 rounded-full bg-pink-900/30 text-pink-600 mr-3">
                    <GraduationCap className="h-6 w-6" />
                  </div>
                  {isEnglish ? "Education" : "Formation"}
                </h3>

                <div className="space-y-6 relative">
                  <div className="p-4 rounded-lg bg-gray-800 border-l-2 border-pink-600 transform hover:translate-x-2 transition-transform duration-300">
                    <div>
                      <h4 className="text-lg font-semibold">Licence en Développement d'Application (DAS)</h4>
                      <p className="text-pink-600">Université Virtuelle de Côte d'Ivoire (UVCI) | 2024</p>
                    </div>
                  </div>

                  <div className="p-4 rounded-lg bg-gray-800 border-l-2 border-pink-600 transform hover:translate-x-2 transition-transform duration-300">
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
      {/* Skills Section with Floating Circle Icons */}
      <section id="skills" className="py-20 relative overflow-hidden">
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

          {/* Skills Circle Container */}
          <div className="relative h-96 w-full mx-auto mb-12">
            {/* Center Circle */}
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-br from-pink-600 to-purple-600 rounded-full flex items-center justify-center shadow-lg z-10">
              <span className="text-white font-bold text-lg">
                {isEnglish ? "Skills" : "Compétences"}
              </span>
            </div>

            {/* Floating Skill Icons */}
            {skills.map((skill, index) => {
              // Calculate position in a circle
              const totalSkills = skills.length;
              const angle = (index / totalSkills) * 2 * Math.PI;
              const radius = 150; // Distance from center
              const left = `calc(50% + ${Math.cos(angle) * radius}px)`;
              const top = `calc(50% + ${Math.sin(angle) * radius}px)`;

              return (
                <div
                  key={skill.name}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 animate-on-scroll hover:scale-110 transition-transform duration-300"
                  style={{
                    left,
                    top,
                    animationDelay: `${index * 0.1}s`,
                  }}
                  data-animation="fadeInScale"
                >
                  <div className="w-20 h-20 rounded-full flex flex-col items-center justify-center bg-gray-800 border-2 border-opacity-50 shadow-lg group hover:border-opacity-100 cursor-pointer"
                    style={{ borderColor: skill.color.includes('from-') ? skill.color.split('from-')[1].split(' ')[0] : 'border-gray-600' }}
                  >
                    {/* Skill Icon - Replace with actual icons */}
                    <div className="text-2xl mb-1">
                      {getSkillIcon(skill.name)}
                    </div>

                    {/* Skill Name */}
                    <span className="text-xs font-medium">{skill.name}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 relative bg-gray-800">
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
                className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group bg-gray-700 animate-on-scroll"
                data-animation="fadeInUp"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative overflow-hidden h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-all duration-700 transform group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                    <div className="p-4 text-center">
                      <div className="space-x-4">
                        <a
                          href={project.liveLink}
                          className="inline-flex items-center px-4 py-2 rounded-full bg-pink-600 text-white hover:bg-pink-700 transition-colors duration-300"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Eye className="h-4 w-4 mr-2" />
                          {t.viewProject}
                        </a>
                        <a
                          href={project.codeLink}
                          className="inline-flex items-center px-4 py-2 rounded-full bg-gray-800 text-white hover:bg-gray-700 transition-colors duration-300"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="h-4 w-4 mr-2" />
                          {t.viewCode}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tags.map(tag => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-gray-800 text-xs font-medium rounded-full text-pink-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Formation/Certifications Section */}
      <section id="formation" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-center relative inline-block left-1/2 transform -translate-x-1/2">
            <span className="text-pink-600">#</span> {isEnglish ? "Certifications" : "Certifications"}
            <div className="h-1 w-1/2 bg-gradient-to-r from-pink-600 to-purple-600 mt-2 rounded-full mx-auto"></div>
          </h2>
          <p className="text-center mb-12 text-sm opacity-60 max-w-lg mx-auto">
            {isEnglish
              ? "Professional certifications and training I've completed"
              : "Certifications professionnelles et formations que j'ai suivies"
            }
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {experiences.map((exp, index) => (
              <div
                key={exp.title}
                className="p-6 rounded-xl bg-gray-700 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col md:flex-row gap-6 animate-on-scroll"
                data-animation={index % 2 === 0 ? "fadeInLeft" : "fadeInRight"}
              >
                <div className="md:w-1/3 rounded-lg overflow-hidden bg-gray-800 p-4 flex items-center justify-center">
                  <img
                    src={exp.image}
                    alt={exp.title}
                    className="w-full h-auto object-contain"
                  />
                </div>
                <div className="md:w-2/3 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold mb-2">{exp.title}</h3>
                    <div className="flex items-center mb-4">
                      <Briefcase className="h-4 w-4 text-pink-600 mr-2" />
                      <span className="text-gray-300">{exp.issuer}</span>
                    </div>
                    <div className="flex items-center mb-4">
                      <Calendar className="h-4 w-4 text-pink-600 mr-2" />
                      <span className="text-gray-300">{exp.date}</span>
                    </div>
                  </div>
                  <a
                    href={exp.link}
                    className="inline-flex items-center text-pink-600 hover:text-pink-500 transition-colors duration-300 mt-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>{isEnglish ? "View Certificate" : "Voir le certificat"}</span>
                    <ExternalLink className="h-4 w-4 ml-2" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative bg-gray-800">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-20 left-20 w-60 h-60 bg-pink-400 opacity-5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-60 h-60 bg-purple-400 opacity-5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <h2 className="text-3xl font-bold mb-4 text-center relative inline-block left-1/2 transform -translate-x-1/2">
            <span className="text-pink-600">#</span> Contact
            <div className="h-1 w-1/2 bg-gradient-to-r from-pink-600 to-purple-600 mt-2 rounded-full mx-auto"></div>
          </h2>
          <p className="text-center mb-12 text-sm opacity-60 max-w-lg mx-auto">
            {isEnglish
              ? "Feel free to reach out to me for any questions or opportunities"
              : "N'hésitez pas à me contacter pour toute question ou opportunité"
            }
          </p>

          <div className="grid md:grid-cols-5 gap-8 items-start">
            <div className="md:col-span-2 space-y-6 animate-on-scroll" data-animation="fadeInLeft">
              <div className="p-6 rounded-xl bg-gray-700 shadow-xl">
                <h3 className="text-xl font-bold mb-6 relative inline-block">
                  {isEnglish ? "Contact Information" : "Informations de Contact"}
                </h3>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="p-3 rounded-lg bg-gray-800 text-pink-600 mr-4">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-medium">{isEnglish ? "Location" : "Localisation"}</h4>
                      <p className="text-gray-300">Koumassi Divo, Abidjan, Côte d'Ivoire</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="p-3 rounded-lg bg-gray-800 text-pink-600 mr-4">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-medium">Email</h4>
                      <a href="mailto:annemarieagbonou@gmail.com" className="text-gray-300 hover:text-pink-600 transition-colors duration-300">
                        annemarieagbonou@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="p-3 rounded-lg bg-gray-800 text-pink-600 mr-4">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-medium">{isEnglish ? "Phone" : "Téléphone"}</h4>
                      <a href="tel:+2250779090101" className="text-gray-300 hover:text-pink-600 transition-colors duration-300">
                        +225 01 72 31 79 83
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-xl bg-gray-700 shadow-xl">
                <h3 className="text-xl font-bold mb-6 relative inline-block">
                  {isEnglish ? "Follow Me" : "Suivez-moi"}
                </h3>

                <div className="flex space-x-4">
                  <a
                    href="https://github.com/AnneMarieWecode"
                    className="p-3 rounded-lg bg-gray-800 text-white hover:bg-pink-600 transition-colors duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="h-6 w-6" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/agbonou-kossiwa-anne-marie/"
                    className="p-3 rounded-lg bg-gray-800 text-white hover:bg-pink-600 transition-colors duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="p-3 rounded-lg bg-gray-800 text-white hover:bg-pink-600 transition-colors duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div className="md:col-span-3 animate-on-scroll" data-animation="fadeInRight">
              <div className="p-6 rounded-xl bg-gray-700 shadow-xl">
                <h3 className="text-xl font-bold mb-6 relative inline-block">
                  {isEnglish ? "Send Me a Message" : "Envoyez-moi un Message"}
                </h3>

                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2" htmlFor="name">{t.name}</label>
                      <input
                        type="text"
                        id="name"
                        className="w-full p-3 bg-gray-800 rounded-lg border border-gray-700 focus:ring-2 focus:ring-pink-600 focus:border-transparent transition-all duration-300 outline-none"
                        placeholder={isEnglish ? "Your name" : "Votre nom"}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2" htmlFor="email">Email</label>
                      <input
                        type="email"
                        id="email"
                        className="w-full p-3 bg-gray-800 rounded-lg border border-gray-700 focus:ring-2 focus:ring-pink-600 focus:border-transparent transition-all duration-300 outline-none"
                        placeholder={isEnglish ? "Your email" : "Votre email"}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2" htmlFor="subject">{isEnglish ? "Subject" : "Sujet"}</label>
                    <input
                      type="text"
                      id="subject"
                      className="w-full p-3 bg-gray-800 rounded-lg border border-gray-700 focus:ring-2 focus:ring-pink-600 focus:border-transparent transition-all duration-300 outline-none"
                      placeholder={isEnglish ? "Message subject" : "Sujet du message"}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2" htmlFor="message">{t.message}</label>
                    <textarea
                      id="message"
                      rows="5"
                      className="w-full p-3 bg-gray-800 rounded-lg border border-gray-700 focus:ring-2 focus:ring-pink-600 focus:border-transparent transition-all duration-300 outline-none resize-none"
                      placeholder={isEnglish ? "Your message" : "Votre message"}
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full flex justify-center items-center px-6 py-3 bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-lg hover:from-pink-700 hover:to-purple-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg group"
                  >
                    <Mail className="h-5 w-5 mr-2 group-hover:animate-bounce" />
                    <span>{t.sendMessage}</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 bg-gray-900 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-lg overflow-hidden bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center">
                  <Code2 className="h-6 w-6 text-white" />
                </div>
                <span className="ml-3 text-xl font-extrabold tracking-tighter text-white">
                  Anne Marie
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600 ml-1">.dev</span>
                </span>
              </div>
              <p className="mt-2 text-sm text-gray-400 max-w-md">
                {isEnglish
                  ? "Full Stack Developer specializing in creating modern, responsive, and user-friendly web applications."
                  : "Développeuse Full Stack spécialisée dans la création d'applications web modernes, responsives et conviviales."
                }
              </p>
            </div>

            <div className="flex flex-col items-center md:items-end">
              <div className="flex space-x-4 mb-4">
                <a
                  href="https://github.com/AnneMarieWecode"
                  className="p-2 rounded-full bg-gray-800 text-white hover:bg-pink-600 transition-colors duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/agbonou-kossiwa-anne-marie/"
                  className="p-2 rounded-full bg-gray-800 text-white hover:bg-pink-600 transition-colors duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
                <a
                  href="#"
                  className="p-2 rounded-full bg-gray-800 text-white hover:bg-pink-600 transition-colors duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                </a>
              </div>
              <p className="text-sm text-gray-400">{t.copyright}</p>
            </div>
          </div>
        </div>

        {/* Back to top button */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className={`fixed right-6 bottom-6 p-3 rounded-full bg-pink-600 text-white shadow-lg transition-all duration-300 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-opacity-50 ${scrolled ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10 pointer-events-none'
            }`}
          aria-label="Back to top"
        >
          <ArrowUp className="h-6 w-6" />
        </button>
      </footer>

      {/* CSS for additional animations */}
      <style jsx>{`
.bg-grid-pattern {
background-image: radial-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px);
background-size: 20px 20px;
}

.animate-gradient-x {
background-size: 200% 200%;
animation: gradient-x 3s ease infinite;
}

.animate-slide-up {
animation: slide-up 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

.animate-float {
animation: float 4s ease-in-out infinite;
}

.animate-spin-slow {
animation: spin 20s linear infinite;
}

.animate-scroll-indicator {
animation: scroll-indicator 2s ease-in-out infinite;
}

.animate-on-scroll {
opacity: 0;
transform: translateY(30px);
transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

.animate-on-scroll.appear {
opacity: 1;
transform: translateY(0);
}

@keyframes gradient-x {
0%, 100% {
background-position: 0% 50%;
}
50% {
background-position: 100% 50%;
}
}

@keyframes slide-up {
0% {
transform: translateY(100%);
}
100% {
transform: translateY(0);
}
}

@keyframes float {
0%, 100% {
transform: translateY(0);
}
50% {
transform: translateY(-20px);
}
}

@keyframes scroll-indicator {
0%, 100% {
transform: translateY(0);
}
50% {
transform: translateY(6px);
}
}

@keyframes spin {
0% {
transform: rotate(0deg);
}
100% {
transform: rotate(360deg);
}
}

[data-animation="fadeInLeft"].appear {
animation: fadeInLeft 0.7s cubic-bezier(0.39, 0.575, 0.565, 1) both;
}

[data-animation="fadeInRight"].appear {
animation: fadeInRight 0.7s cubic-bezier(0.39, 0.575, 0.565, 1) both;
}

[data-animation="fadeInUp"].appear {
animation: fadeInUp 0.7s cubic-bezier(0.39, 0.575, 0.565, 1) both;
}

@keyframes fadeInLeft {
0% {
transform: translateX(-50px);
opacity: 0;
}
100% {
transform: translateX(0);
opacity: 1;
}
}

@keyframes fadeInRight {
0% {
transform: translateX(50px);
opacity: 0;
}
100% {
transform: translateX(0);
opacity: 1;
}
}

@keyframes fadeInUp {
0% {
transform: translateY(30px);
opacity: 0;
}
100% {
transform: translateY(0);
opacity: 1;
}
}
`}</style>
    </div>
  );
}

export default App;
import React, { useState, useEffect } from 'react';
import { 
  Moon, 
  Sun, 
  Menu, 
  X, 
  User, 
  Code, 
  Award, 
  Briefcase, 
  GraduationCap, 
  Mail, 
  Phone, 
  Github, 
  Linkedin, 
  Instagram,
  ExternalLink,
  BarChart3,
  Database,
  PieChart,
  Terminal,
  BookOpen,
  Star
} from 'lucide-react';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [activeSection, setActiveSection] = useState('home');

  const fullName = "Chandru S";
  const subtitle = "Data Analyst";

  // Typing effect
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullName.length) {
        setTypedText(fullName.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 150);

    return () => clearInterval(timer);
  }, []);

  // Theme toggle
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Smooth scroll and active section detection
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'education', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  const skills = {
    dataAnalysis: ['Python (pandas, NumPy)', 'Excel', 'SQL'],
    visualization: ['Power BI', 'Tableau', 'Matplotlib', 'Seaborn'],
    tools: ['Excel', 'Google Collab', 'VS Code'],
    programming: ['Python', 'Java']
  };

  const projects = [
    {
      title: "Passport Automation System",
      description: "Pre-Final year project concept focusing on Automating the process of approving the passport",
      tech: ["MERN", "OOSE", "Data Verification"],
      type: "Pre-Final Year Project"
    },
    {
      title: "Tableau Dashboard on Forencic Technology",
      description: "Comprehensive Tableau dashboard created during Deloitte Data Analytics Job Simulation certification",
      tech: ["Power BI", "DAX", "Data Modeling"],
      type: "DELOITTE"
    },
    {
      title: "Sales Data Recommendation System",
      description: "Advanced analytics solution developed during TATA internship on Forage",
      tech: ["Python", "Business Intelligence"],
      type: "Forage TATA Internship"
    }
  ];

  const certifications = [
    { name: "Java Certification", provider: "NPTEL" },
    { name: "Python Programming", provider: "GUVI" },
    { name: "MERN Stack Development", provider: "Techsaksham" },
    { name: "Power BI Certification", provider: "Microsoft" },
    { name: "Communication Skills", provider: "TCS ion" },
    { name: "Data Analyst", provider: "TATA" }
    
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark' : ''}`}>
      <div className="bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-purple-900 dark:to-indigo-900 min-h-screen">
        
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-purple-200 dark:border-purple-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  CS
                </div>
              </div>
              
              {/* Desktop Navigation */}
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  {['home', 'about', 'skills', 'projects', 'education', 'contact'].map((item) => (
                    <button
                      key={item}
                      onClick={() => scrollToSection(item)}
                      className={`px-3 py-2 rounded-md text-sm font-medium transition-colors capitalize ${
                        activeSection === item
                          ? 'bg-purple-100 dark:bg-purple-800 text-purple-700 dark:text-purple-300'
                          : 'text-gray-700 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-purple-900'
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setDarkMode(!darkMode)}
                  className="p-2 rounded-full bg-purple-100 dark:bg-purple-800 text-purple-600 dark:text-purple-300 hover:bg-purple-200 dark:hover:bg-purple-700 transition-colors"
                >
                  {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                </button>
                
                {/* Mobile menu button */}
                <div className="md:hidden">
                  <button
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-purple-100 dark:hover:bg-purple-800"
                  >
                    {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden bg-white dark:bg-gray-900 border-t border-purple-200 dark:border-purple-800">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {['home', 'about', 'skills', 'projects', 'education', 'contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors capitalize ${
                      activeSection === item
                        ? 'bg-purple-100 dark:bg-purple-800 text-purple-700 dark:text-purple-300'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-purple-900'
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          )}
        </nav>

        {/* Hero Section */}
        <section id="home" className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="mb-8">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-4 bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
                {typedText}
                <span className="animate-pulse">|</span>
              </h1>
              <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-6">
                {subtitle}
              </p>
              <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
                B.E. CSE  • University College of Engineering Tindivanam
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={() => scrollToSection('projects')}
                className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                View My Work
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-3 border-2 border-purple-600 text-purple-600 dark:text-purple-400 rounded-full font-semibold hover:bg-purple-600 hover:text-white transition-all duration-300 transform hover:scale-105"
              >
                Get In Touch
              </button>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                About Me
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full"></div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mr-4">
                  <User className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                  Passionate Data Analyst
                </h3>
              </div>
              
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                I'm a dedicated data enthusiast with an analytical mindset and a passion for uncovering insights from complex datasets. 
                Currently pursuing my B.E. in Computer Science Engineering at University College of Engineering Tindivanam, 
                I specialize in transforming raw data into compelling stories that drive business decisions.
              </p>
              
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mt-4">
                My focus lies in combining technical expertise with creative visualization to make data accessible and actionable. 
                I believe that great data analysis is not just about numbers—it's about telling the story behind the data and 
                providing insights that can create meaningful impact.

                And also I have prior Knowledge in Programming Language JAVA
              </p>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-800 dark:to-gray-900">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Skills & Expertise
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Data Analysis */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Data Analysis
                </h3>
                <ul className="space-y-2">
                  {skills.dataAnalysis.map((skill, index) => (
                    <li key={index} className="text-gray-600 dark:text-gray-300 flex items-center">
                      <Star size={16} className="text-yellow-500 mr-2" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Visualization */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center mb-4">
                  <PieChart className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Visualization
                </h3>
                <ul className="space-y-2">
                  {skills.visualization.map((skill, index) => (
                    <li key={index} className="text-gray-600 dark:text-gray-300 flex items-center">
                      <Star size={16} className="text-yellow-500 mr-2" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tools */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                  <Database className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Tools
                </h3>
                <ul className="space-y-2">
                  {skills.tools.map((skill, index) => (
                    <li key={index} className="text-gray-600 dark:text-gray-300 flex items-center">
                      <Star size={16} className="text-yellow-500 mr-2" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Programming */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center mb-4">
                  <Terminal className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Programming
                </h3>
                <ul className="space-y-2">
                  {skills.programming.map((skill, index) => (
                    <li key={index} className="text-gray-600 dark:text-gray-300 flex items-center">
                      <Star size={16} className="text-yellow-500 mr-2" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Certifications */}
            <div className="mt-12">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                Certifications
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-300">
                    <div className="flex items-center">
                      <Award className="text-purple-600 mr-3" size={20} />
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white">
                          {cert.name}
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {cert.provider}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Featured Projects
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full"></div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center mr-3">
                        <Briefcase className="text-white" size={18} />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                          {project.title}
                        </h3>
                        <p className="text-sm text-purple-600 dark:text-purple-400">
                          {project.type}
                        </p>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, techIndex) => (
                        <span key={techIndex} className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center">
                      
                      <ExternalLink size={16} className="ml-2" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-800 dark:to-gray-900">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Education
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full"></div>
            </div>
            
            <div className="space-y-6">
              {/* College */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center mr-4">
                    <GraduationCap className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      Bachelor of Engineering - Computer Science Engineering
                    </h3>
                    <p className="text-purple-600 dark:text-purple-400">
                      University College of Engineering Tindivanam
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">
                      Currently in Final Year with (7.8 CGPA)
                    </p>
                  </div>
                </div>
              </div>

              {/* 12th Grade */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center mr-4">
                    <BookOpen className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      Higher Secondary Certificate (12th Grade)
                    </h3>
                    <p className="text-green-600 dark:text-green-400">
                      Score: 505/600
                    </p>
                  </div>
                </div>
              </div>

              {/* 10th Grade */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center mr-4">
                    <BookOpen className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      Secondary School Certificate (10th Grade)
                    </h3>
                    <p className="text-orange-600 dark:text-orange-400">
                      Score: 472/500
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Let's Connect
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full"></div>
              <p className="text-gray-600 dark:text-gray-300 mt-4">
                I'm always open to discussing data projects, internship opportunities, or just connecting with fellow data enthusiasts.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Contact Info */}
              <div className="space-y-6">
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center mr-4">
                      <Mail className="text-white" size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">Email</h3>
                      <p className="text-gray-600 dark:text-gray-300">chandrusurya523@gmail.com</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center mr-4">
                      <Phone className="text-white" size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">Phone</h3>
                      <p className="text-gray-600 dark:text-gray-300">+91 9176024880</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="space-y-6">
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Connect Me</h3>
                  <div className="flex space-x-4">
                    <a href="https://github.com/Druchan" className="w-10 h-10 bg-gradient-to-r from-gray-700 to-gray-900 rounded-lg flex items-center justify-center hover:from-gray-800 hover:to-black transition-all duration-300">
                      <Github className="text-white" size={20} />
                    </a>
                    <a href="https://www.linkedin.com/in/chandru-data-analyst/" className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg flex items-center justify-center hover:from-blue-700 hover:to-blue-900 transition-all duration-300">
                      <Linkedin className="text-white" size={20} />
                    </a>
                    <a href="https://www.instagram.com/_druchan__official_/" className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg flex items-center justify-center hover:from-pink-600 hover:to-purple-700 transition-all duration-300">
                      <Instagram className="text-white" size={20} />
                    </a>
                    
                  </div>
                </div>

                
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto text-center">
            <p className="text-gray-400">
              copyrights © Chandru 2025
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
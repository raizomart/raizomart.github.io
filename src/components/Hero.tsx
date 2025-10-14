import React from 'react';
import { ArrowDown, Github, Mail, Linkedin } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden"
    >
      {/* Animated Background Slideshow */}
      <div className="absolute inset-0 z-0">
        <div className="hero-bg-slideshow">
          {/* Use your uploaded images here */}
          <div
            className="hero-bg-slide active"
            style={{ backgroundImage: 'url(/photoshoot.jpg)' }}
          ></div>
          <div
            className="hero-bg-slide"
            style={{ backgroundImage: 'url(/casualPhoto.jpg)' }}
          ></div>
        </div>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-transparent to-teal-900/30"></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden z-10">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-teal-400/20 rounded-full animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-teal-400/20 to-blue-400/20 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full animate-bounce delay-2000"></div>
        <div className="absolute top-1/4 right-1/4 w-24 h-24 bg-gradient-to-br from-yellow-400/10 to-orange-400/10 rounded-full animate-bounce delay-3000"></div>

        {/* Floating particles */}
        <div className="absolute top-20 left-20 w-2 h-2 bg-blue-400/30 rounded-full animate-ping delay-500"></div>
        <div className="absolute top-40 right-32 w-3 h-3 bg-teal-400/30 rounded-full animate-ping delay-1500"></div>
        <div className="absolute bottom-32 left-1/3 w-2 h-2 bg-purple-400/30 rounded-full animate-ping delay-2500"></div>
        <div className="absolute bottom-20 right-20 w-2 h-2 bg-pink-400/30 rounded-full animate-ping delay-3500"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center relative z-20">
        <div className="max-w-4xl mx-auto">
          {/* Profile Image Placeholder */}
          <div className="w-40 h-40 mx-auto mb-8 relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-teal-500 rounded-full animate-spin-slow"></div>
            <div className="absolute inset-1 bg-gradient-to-br from-teal-400 to-blue-500 rounded-full animate-pulse"></div>
            <div className="absolute inset-2 rounded-full overflow-hidden border-4 border-white shadow-2xl group-hover:scale-110 transition-transform duration-300">
              <img
                src="/profilePicture.jpg"
                alt="Your Profile"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-teal-500 flex items-center justify-center text-white text-4xl font-bold opacity-0">
                YN
              </div>
            </div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400/50 to-teal-500/50 animate-ping"></div>
          </div>

          {/* Animated Name with Background */}
          <div className="relative mb-6">
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-blue-200/20 to-teal-200/20 blur-3xl animate-pulse"></div>
            <h1 className="relative text-5xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-white via-blue-100 to-teal-100 bg-clip-text text-transparent animate-gradient-x mb-2 drop-shadow-lg">
              Raymart Anthony A. Adarme
            </h1>
            <div className="absolute -inset-4 bg-gradient-to-r from-white/10 via-blue-200/10 to-teal-200/10 blur-2xl animate-pulse delay-500"></div>
          </div>

          <p className="text-xl sm:text-2xl text-white/90 mb-4 drop-shadow-md">
            Frontend Developer | UI/UX Designer | Computer Science Student
          </p>

          <p className="text-lg sm:text-xl text-white/80 mb-12 max-w-2xl mx-auto drop-shadow-md">
            4th Year Computer Science student at Our Lady of Fatima University,
            passionate about creating beautiful user experiences and innovative web
            solutions
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button
              onClick={() => scrollToSection('projects')}
              className="bg-white/20 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-white/30 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              View My Work
            </button>
            <a
              href="https://drive.google.com/file/d/10-BZeFx4hwwYROt7eN9OeYR2kcEbZgJR/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600/80 backdrop-blur-sm border border-blue-500/50 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-blue-700/80 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl text-center"
            >
              Download Resume
            </a>
            <button
              onClick={() => scrollToSection('contact')}
              className="border-2 border-white/50 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-white/20 backdrop-blur-sm transform hover:scale-105 transition-all duration-200"
            >
              Get in Touch
            </button>
          </div>

          <div className="flex justify-center space-x-6 mb-12">
            <a
              href="https://github.com/raizomart"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-white transform hover:scale-110 transition-all duration-200 drop-shadow-md"
            >
              <Github size={32} />
            </a>
            <a
              href="https://www.linkedin.com/in/raymart-anthony-adarme-442777323"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-white transform hover:scale-110 transition-all duration-200 drop-shadow-md"
            >
              <Linkedin size={32} />
            </a>
            <a
              href="mailto:adarmanthony@gmail.com"
              className="text-white/80 hover:text-white transform hover:scale-110 transition-all duration-200 drop-shadow-md"
            >
              <Mail size={32} />
            </a>
          </div>

          <button
            onClick={() => scrollToSection('about')}
            className="text-white/70 hover:text-white animate-bounce drop-shadow-md"
          >
            <ArrowDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

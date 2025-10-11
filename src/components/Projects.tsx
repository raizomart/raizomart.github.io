import React from 'react';
import { ExternalLink, Github, Code } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Parking Management System',
      description:
        'Software Engineering Final Project - A comprehensive parking management system with user interface and database integration.',
      image: '/Parkingsystem.jpg', // replaced with your local image
      technologies: ['Java', 'Database', 'UI Design', 'Software Engineering'],
      githubLink: 'https://github.com/yourusername/parking-management',
      liveLink: 'https://your-parking-demo.com',
      featured: true,
    },
    {
      title: 'Pantig Turo App',
      description:
        'Thesis Final Project - An educational mobile application designed to help users learn Filipino language patterns and pronunciation.',
      image: '/Pantigturo.jpg', // replaced with your local image
      technologies: ['Mobile Development', 'UI/UX Design', 'Educational Technology'],
      githubLink: 'https://github.com/yourusername/pantig-turo',
      liveLink: 'https://your-pantig-demo.com',
      featured: true,
    },
    {
      title: 'Arduino Soil Moisture Sensor',
      description:
        'IoT project using Arduino to monitor soil moisture levels with real-time data collection and alerts.',
      image: '/Soilmoisture.jpg', // replaced with your local image
      technologies: ['Arduino', 'C++', 'IoT', 'Sensors'],
      githubLink: 'https://github.com/yourusername/soil-moisture-sensor',
      liveLink: 'https://your-arduino-demo.com',
      featured: false,
    },
    {
      title: 'Unity Game Development',
      description:
        '3D game development project using Unity engine with interactive gameplay and immersive graphics.',
      image: '/Unity.jpg', // replaced with your local image
      technologies: ['Unity 3D', 'C#', 'Game Design', '3D Modeling'],
      githubLink: 'https://github.com/yourusername/unity-game',
      liveLink: 'https://your-game-demo.com',
      featured: false,
    },
    {
      title: 'Priolist - Task Tracker',
      description:
        'A priority-based task management application with intuitive UI and productivity features.',
      image: '/Priolistapp.jpg', // replaced with your local image
      technologies: ['React', 'JavaScript', 'CSS', 'Local Storage'],
      githubLink: 'https://github.com/yourusername/priolist',
      liveLink: 'https://your-priolist-demo.com',
      featured: false,
    },
    {
      title: 'Habinary - Habit Tracker',
      description:
        'A habit tracking application designed to help users build and maintain positive daily routines.',
      image: '/Habinary.png', // replaced with your local image
      technologies: ['HTML', 'CSS', 'JavaScript', 'UI/UX Design'],
      githubLink: 'https://github.com/yourusername/habinary',
      liveLink: 'https://your-habinary-demo.com',
      featured: false,
    },
    {
      title: 'Love Memories',
      description:
        'A romantic web application and mobile app for couples to store and share their special memories together.',
      image: '/Lovememories.jpg', // replaced with your local image
      technologies: ['React', 'CSS', 'JavaScript', 'Responsive Design'],
      githubLink: 'https://github.com/yourusername/love-memories',
      liveLink: 'https://your-love-memories-demo.com',
      featured: false,
    },
    {
      title: 'HTML & CSS Personality Test',
      description:
        'An interactive personality test website built with pure HTML and CSS, featuring engaging animations and results.',
      image: '/MbtiIunleashed.jpg', // replaced with your local image
      technologies: ['HTML', 'CSS', 'JavaScript', 'Web Design'],
      githubLink: 'https://github.com/yourusername/personality-test',
      liveLink: 'https://your-personality-test-demo.com',
      featured: false,
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            My Projects
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A showcase of my best work and personal projects that demonstrate my
            skills and creativity
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
            <Code className="mr-3 text-blue-600" size={28} />
            Featured Projects
          </h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {projects
              .filter((project) => project.featured)
              .map((project, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="flex space-x-4">
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-white text-gray-900 p-3 rounded-full hover:bg-gray-100 transition-colors duration-200"
                        >
                          <Github size={24} />
                        </a>
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition-colors duration-200"
                        >
                          <ExternalLink size={24} />
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <h4 className="text-xl font-bold text-gray-900 mb-3">
                      {project.title}
                    </h4>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex space-x-4">
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-gray-600 hover:text-blue-600 transition-colors duration-200"
                      >
                        <Github size={20} className="mr-2" />
                        Code
                      </a>
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-gray-600 hover:text-blue-600 transition-colors duration-200"
                      >
                        <ExternalLink size={20} className="mr-2" />
                        Live Demo
                      </a>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Other Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects
              .filter((project) => !project.featured)
              .map((project, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  <div className="p-5">
                    <h4 className="text-lg font-bold text-gray-900 mb-2">
                      {project.title}
                    </h4>
                    <p className="text-gray-600 text-sm mb-3 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1 mb-3">
                      {project.technologies.slice(0, 3).map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs font-medium">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>

                    <div className="flex space-x-3">
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-sm text-gray-600 hover:text-blue-600 transition-colors duration-200"
                      >
                        <Github size={16} className="mr-1" />
                        Code
                      </a>
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-sm text-gray-600 hover:text-blue-600 transition-colors duration-200"
                      >
                        <ExternalLink size={16} className="mr-1" />
                        Demo
                      </a>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

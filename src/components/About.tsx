import React from 'react';
import { Heart, Code, BookOpen } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-600 leading-relaxed">
              I'm a passionate Computer Science student at Our Lady of Fatima University in the Philippines, 
              specializing in frontend development and UI/UX design. My journey combines technical programming skills 
              with creative design thinking to build beautiful and functional digital experiences.
            </p>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              As a frontend developer and UI/UX designer, I focus on creating intuitive user interfaces and 
              seamless user experiences. I have hands-on experience with modern web technologies, design tools, 
              and have completed various projects ranging from web applications to mobile app designs.
            </p>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              Beyond coding and design, I enjoy PC assembly and troubleshooting, 3D modeling with Blender, 
              photo and video editing, and working on Arduino projects. I'm also an active member of the 
              Junior Philippine Computing Society (JPCS) at OLFU CCS.
            </p>
          </div>
          
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-blue-50 to-teal-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="bg-blue-600 p-3 rounded-full mr-4">
                  <Code className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">My Passion</h3>
              </div>
              <p className="text-gray-600">
                Creating elegant solutions to complex problems through clean, efficient code.
              </p>
            </div>
            
            <div className="bg-gradient-to-r from-teal-50 to-blue-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="bg-teal-600 p-3 rounded-full mr-4">
                  <BookOpen className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Learning Philosophy</h3>
              </div>
              <p className="text-gray-600">
                Continuous learning and staying curious about emerging technologies and best practices.
              </p>
            </div>
            
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="bg-purple-600 p-3 rounded-full mr-4">
                  <Heart className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Beyond Code</h3>
              </div>
              <p className="text-gray-600">
                Photography, gaming, Rides, and exploring new places fuel my creativity and perspective.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
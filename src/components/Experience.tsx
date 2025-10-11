import React from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: 'IT Intern',
      company: 'Department of Information and Communications Technology (DICT)',
      location: 'Philippines',
      period: 'Jun 2024 - Present',
      description: [
        'Gained hands-on experience in government IT operations and digital transformation initiatives',
        'Assisted in web development projects and digital service implementations',
        'Collaborated with senior developers on frontend development tasks',
        'Participated in training programs on emerging technologies and best practices'
      ],
      type: 'Internship'
    },
    {
      title: 'Active Member',
      company: 'OLFU CCS – JPCS (Junior Philippine Computing Society)',
      location: 'Our Lady of Fatima University',
      period: '2022 - Present',
      description: [
        'Actively participate in computing society activities and technical workshops',
        'Collaborate with fellow computer science students on various projects',
        'Attend seminars and training sessions on latest technology trends',
        'Contribute to community outreach programs promoting digital literacy'
      ],
      type: 'Organization'
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Internship':
        return 'bg-blue-100 text-blue-600';
      case 'Freelance':
        return 'bg-green-100 text-green-600';
      case 'Academic':
        return 'bg-purple-100 text-purple-600';
      case 'Leadership':
        return 'bg-orange-100 text-orange-600';
      default:
        return 'bg-gray-100 text-gray-600';
    }
  };

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Experience
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My professional journey and key experiences that have shaped my development as a programmer
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-blue-200"></div>
          
          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col md:flex-row`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 -translate-y-4 md:translate-y-0">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center border-4 border-white shadow-lg">
                    <Briefcase size={16} className="text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${
                  index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                }`}>
                  <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-1">
                          {experience.title}
                        </h3>
                        <p className="text-lg text-blue-600 font-semibold mb-2">
                          {experience.company}
                        </p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getTypeColor(experience.type)}`}>
                        {experience.type}
                      </span>
                    </div>
                    
                    <div className="flex items-center text-gray-500 mb-4 space-x-4">
                      <div className="flex items-center">
                        <Calendar size={16} className="mr-2" />
                        <span className="text-sm">{experience.period}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin size={16} className="mr-2" />
                        <span className="text-sm">{experience.location}</span>
                      </div>
                    </div>
                    
                    <ul className="space-y-2">
                      {experience.description.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-600 leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
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

export default Experience;
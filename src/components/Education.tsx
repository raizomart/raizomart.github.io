import React from 'react';
import { GraduationCap, Award, BookOpen, Calendar } from 'lucide-react';

const Education: React.FC = () => {
  const education = [
    {
      degree: 'Bachelor of Science in Computer Science (Current)',
      school: 'Our Lady of Fatima University',
      location: 'Philippines',
      period: '2022 - Present',
      status: '3rd Year - In Progress',
      description: 'Currently pursuing Bachelor of Science in Computer Science, specializing in frontend development, UI/UX design, and software engineering principles.',
      coursework: [
        'Data Structures and Algorithms',
        'Software Engineering',
        'Object-Oriented Programming',
        'Web Development',
        'Human-Computer Interaction',
        'Mobile Application Development'
      ]
    },
    {
      degree: 'Bachelor of Science in Computer Science (Transferred)',
      school: 'St. Louis College',
      location: 'Philippines',
      period: '2019 - 2020',
      status: 'Completed',
      description: 'Started Computer Science degree before transferring to Our Lady of Fatima University.',
      coursework: [
        'Introduction to Programming',
        'Mathematics',
        'Computer Fundamentals',
        'Basic Programming Concepts',
        'Logic and Critical Thinking'
      ]
    },
    {
      degree: 'Information and Communication Technology - Senior High',
      school: 'Sta Cecilia College',
      location: 'Philippines',
      period: '2017 - 2019',
      status: 'Completed',
      description: 'ICT strand with focus on computer programming, web development, and digital technologies.',
      coursework: [
        'Computer Programming',
        'Web Development',
        'Database Management',
        'Computer Hardware Servicing',
        'Digital Arts and Design',
        'ICT Applications'
      ]
    },
    {
      degree: 'Elementary Education',
      school: 'St. Therese of the Child Jesus Kidz Academy',
      location: 'Philippines',
      period: '2013 - 2017',
      status: 'Completed',
      description: 'Foundation education with early exposure to computer literacy and basic technology skills.',
      coursework: [
        'Computer Literacy',
        'Mathematics',
        'Science',
        'English',
        'Filipino',
        'Social Studies'
      ]
    }
  ];

  const certifications = [
    {
      title: 'Google AI Essentials',
      issuer: 'Google',
      date: '2024',
      credentialId: 'Google-AI-001',
      image: '/google-ai-essentials (1).jpg'
    },
    {
      title: 'Google UX Design',
      issuer: 'Google',
      date: '2024',
      credentialId: 'Google-UX-002',
      image: '/google-ux-design-professional-certificate.2 (1).jpg'
    },
    {
      title: 'IT Support',
      issuer: 'Google',
      date: '2024',
      credentialId: 'Google-IT-003',
      image: '/google-it-support-professional-certificate-v2 (1).jpg'
    },
    {
      title: 'IT Support',
      issuer: 'Google',
      date: '2024',
      credentialId: 'Google-IT-003',
      image: '/Cisco-Certified-Support-Technician-Cybersecurity.jpg'
    }
  ];

  return (
    <section id="education" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Education & Achievements
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My academic journey, certifications, and recognition that demonstrate my commitment to continuous learning
          </p>
        </div>

        <div className="mb-16">
          {/* Education */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <GraduationCap className="mr-3 text-blue-600" size={28} />
              Education
            </h3>
            
            <div className="grid lg:grid-cols-2 gap-6">
              {education.map((edu, index) => (
                <div key={index} className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex flex-col mb-4">
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-1">{edu.degree}</h4>
                      <p className="text-md text-blue-600 font-semibold mb-2">{edu.school}</p>
                      <div className="flex items-center text-gray-500 mb-2">
                        <Calendar size={16} className="mr-2" />
                        <span>{edu.period}</span>
                        <span className="mx-2">•</span>
                        <span>{edu.location}</span>
                      </div>
                    </div>
                    <div className="mt-2">
                      <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                        edu.status === 'Completed' ? 'bg-green-100 text-green-600' : 'bg-blue-100 text-blue-600'
                      }`}>
                        {edu.status}
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{edu.description}</p>
                  
                  <div>
                    <h5 className="text-sm font-semibold text-gray-900 mb-2">Key Subjects:</h5>
                    <div className="flex flex-wrap gap-2">
                      {edu.coursework.map((course, courseIndex) => (
                        <span
                          key={courseIndex}
                          className="px-2 py-1 bg-white text-gray-600 rounded-full text-xs border"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <BookOpen className="mr-3 text-purple-600" size={28} />
            Certifications
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100">
                <div className="text-center">
                  <div className="mb-4 flex justify-center">
                    <img 
                      src={cert.image} 
                      alt={cert.title}
                      className="w-full max-w-[200px] h-auto object-contain rounded-lg shadow-sm"
                    />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">{cert.title}</h4>
                  <p className="text-purple-600 font-semibold mb-2">{cert.issuer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
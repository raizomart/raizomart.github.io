import React from 'react';
import { Code2, Database, Globe, Palette } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Web Development',
      icon: <Code2 size={24} />,
      color: 'blue',
      skills: [
        'HTML',
        'CSS',
        'JavaScript',
        'React/ReactJS',
        'TypeScript'
      ]
    },
    {
      title: 'Programming Languages',
      icon: <Globe size={24} />,
      color: 'teal',
      skills: [
        'Python',
        'Java',
        'C++',
        'Tailwind CSS',
        'Arduino Programming'
      ]
    },
    {
      title: 'Design & Creative Tools',
      icon: <Database size={24} />,
      color: 'purple',
      skills: [
        'Figma',
        'UI/UX Design',
        'Blender',
        'Unity 3D',
        'Canva'
      ]
    },
    {
      title: 'Other Skills',
      icon: <Palette size={24} />,
      color: 'orange',
      skills: [
        'PC Assembly & Troubleshooting',
        'Photo/Video Editing',
        'MS Office Suite',
        'Problem Solving',
        'Team Leadership'
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: 'bg-blue-600 border-blue-200 text-blue-600',
      teal: 'bg-teal-600 border-teal-200 text-teal-600',
      purple: 'bg-purple-600 border-purple-200 text-purple-600',
      orange: 'bg-orange-600 border-orange-200 text-orange-600'
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive overview of my technical skills and proficiency levels
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8"
            >
              <div className="flex items-center mb-6">
                <div className={`p-3 rounded-full ${getColorClasses(category.color).split(' ')[0]} mr-4`}>
                  <div className="text-white">
                    {category.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className={`px-4 py-2 rounded-full text-sm font-medium border-2 ${getColorClasses(category.color).split(' ')[1]} ${getColorClasses(category.color).split(' ')[2]} bg-white hover:${getColorClasses(category.color).split(' ')[0]} hover:text-white transition-all duration-200 cursor-default`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
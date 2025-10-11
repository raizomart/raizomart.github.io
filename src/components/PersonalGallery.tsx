import React from 'react';
import { Camera, Heart, MapPin } from 'lucide-react';

const PersonalGallery: React.FC = () => {
  const galleryItems = [
    {
      image: '/casualPhoto.jpg',
      title: 'Casual Moments',
      description: 'Capturing authentic moments in my daily life',
      location: 'Philippines',
      icon: <Camera size={20} />
    },
    {
      image: '/photoshoot.jpg',
      title: 'Professional Portrait',
      description: 'Professional photography showcasing my personal brand',
      location: 'Philippines',
      icon: <Camera size={20} />
    },
    {
      image: '/Familypic.jpg',
      title: 'Family Time',
      description: 'Dinner with my whole Family',
      location: 'SM Valenzuela (Philippines)',
      icon: <Camera size={20} />
    },
    {
      image: '/Topartist.jpg',
      title: 'My top Artist',
      description: 'The top Artist I most listening',
      location: 'Spotify',
      icon: <Camera size={20} />
    },
    {
      image: '/Travel.jpg',
      title: 'Moving to United States',
      description: 'Moving and live to United States with my Father',
      location: 'Las Vegas, Nevada',
      icon: <Camera size={20} />
    },
    {
      image: '/Gaming.jpg',
      title: 'Free time Gaming',
      description: 'Playing a Filipino Story Game',
      location: 'Home',
      icon: <Camera size={20} />
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Behind the Scenes
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A glimpse into my world beyond coding - capturing moments and exploring creativity
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="gallery-item opacity-0 group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="flex items-center mb-2">
                    <div className="p-2 bg-white/20 rounded-full mr-3 backdrop-blur-sm">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-bold">{item.title}</h3>
                  </div>
                  <p className="text-white/90 mb-2">{item.description}</p>
                  <div className="flex items-center text-white/70 text-sm">
                    <MapPin size={14} className="mr-1" />
                    <span>{item.location}</span>
                  </div>
                </div>
              </div>

              {/* Corner Badge */}
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {item.icon}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Let's Create Something Amazing Together
            </h3>
            <p className="text-gray-600 mb-6">
              Whether it's a coding project or capturing the perfect shot, I'm always excited about new collaborations and creative challenges.
            </p>
            <button
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalGallery;
import React from 'react';
import '../home/Home2.css';

const Home2 = () => {
  const cards = [
    {
      title: 'Updated Computer Labs',
      desc: 'State-of-the-art labs with high-speed systems & the latest tech.',
      image: '/lab.png',
      reverse: false,
    },
    {
      title: 'Smart Classrooms',
      desc: 'Digital boards, projectors, and tech-rich classrooms to boost engagement.',
      image: '/smartclass.png',
      reverse: true,
    },
    {
      title: 'Holistic Learning',
      desc: 'CCMAS focuses on overall development with hands-on training and mentoring.',
      image: '/group.png',
      reverse: false,
    },
  ];

  return (
    <section className="bg-blue-50 py-16 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-12">
        
        {/* Left: Heading + GIF + Motivational Text */}
        <div className="lg:w-1/3 w-full text-left flex flex-col items-center lg:items-start">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-2">Why Choose</h2>
          <h2 className="text-5xl md:text-6xl font-extrabold text-purple-600">CCMAS?</h2>
          <p className="text-gray-700 mt-4 text-base md:text-lg">
            Discover a transformative learning experience built for the future.
          </p>

          {/* Sliding GIF */}
          <div className="my-8 w-80 h-auto slide-left-right">
            <img
              src="/new.gif"
              alt="Student climbing success"
              className="w-full h-auto"
            />
          </div>

          {/* Motivational Quote */}
          <div className="motivational-text text-center mt-2 px-2">
            <p className="text-xl font-semibold text-purple-700 animate-bounce-fade">
              Are you ready to rise with <span className="font-bold text-blue-900">CCMAS</span>?
            </p>
          </div>
        </div>

        {/* Right Zigzag Cards */}
        <div className="lg:w-2/3 w-full space-y-12">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row ${
                card.reverse ? 'md:flex-row-reverse' : ''
              } items-center gap-6 md:gap-8 group`}
            >
              {/* Image */}
              <div className="w-full md:w-1/2 transform transition duration-300 group-hover:scale-[1.03]">
                <img
                  src={card.image}
                  alt={card.title}
                  className="rounded-xl shadow-lg w-full h-60 sm:h-72 md:h-64 lg:h-72 object-cover"
                />
              </div>

              {/* Text */}
              <div className="w-full md:w-1/2 text-center md:text-left">
                <h3 className="text-2xl font-semibold text-blue-800 mb-2">{card.title}</h3>
                <p className="text-gray-600 text-sm md:text-base">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home2;
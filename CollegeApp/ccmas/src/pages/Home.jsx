import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../home/Home.css';
import Footer from '../componets/Footer';
const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

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
    {
      title: 'Placement Assistance',
      desc: 'Dedicated training, resume building, and interview prep to land your dream job.',
      image: '/placement.png',
      reverse: true,
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-100 via-white to-purple-100 py-16 px-4 text-center">
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob"></div>

        <div className="relative z-10">
          <h1 className="text-5xl sm:text-6xl font-extrabold text-blue-900 mb-4 animate-fade-in">
            Welcome to <span className="text-purple-600">CCMAS</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto animate-fade-in delay-200">
            Discover top-notch courses, expert mentors, and a vibrant campus life. Your future starts here!
          </p>
          <button className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 hover:scale-105 transform transition duration-300 animate-fade-in delay-400">
            Explore Courses
          </button>
        </div>
      </section>

      {/* Why Choose CCMAS Section */}
      <section className="bg-blue-50 py-16 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-12">
          <div className="lg:w-1/3 w-full text-left flex flex-col items-center lg:items-start">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-2">Why Choose</h2>
            <h2 className="text-5xl md:text-6xl font-extrabold text-purple-600">CCMAS?</h2>
            <p className="text-gray-700 mt-4 text-base md:text-lg">
              Discover a transformative learning experience built for the future.
            </p>

            <div className="my-8 w-80 h-auto gif-slide">
              <img
                src="/new.gif"
                alt="Student climbing success"
                className="w-full h-auto"
              />
            </div>

            <div className="motivational-text text-center mt-2 px-2 flex flex-col items-center">
              <p className="text-xl font-semibold text-purple-700 animate-bounce-fade">
                Are you ready to rise with <span className="font-bold text-blue-900">CCMAS</span>?
              </p>
              <button className="mt-4 px-6 py-2 bg-purple-600 text-white font-medium rounded-lg shadow-md hover:bg-purple-700 transition duration-300">
                Apply Now
              </button>
            </div>
          </div>

          <div className="lg:w-2/3 w-full space-y-12">
            {cards.map((card, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row ${
                  card.reverse ? 'md:flex-row-reverse' : ''
                } items-center gap-6 md:gap-8 group`}
                data-aos="zoom-in-up"
              >
                <div className="w-full md:w-1/2 transform transition duration-300 group-hover:scale-[1.03]">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="rounded-xl shadow-lg w-full h-60 sm:h-72 md:h-64 lg:h-72 object-cover"
                  />
                </div>

                <div className="w-full md:w-1/2 text-center md:text-left">
                  <h3 className="text-2xl font-semibold text-blue-800 mb-2">{card.title}</h3>
                  <p className="text-gray-600 text-sm md:text-base">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-16 bg-blue-50">
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-12 max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-10">Leadership Speaks</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Chairman */}
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-2">
              <div className="text-center">
                <img
                  src="/chairman.png"
                  alt="Chairman"
                  className="w-28 h-28 mx-auto rounded-full mb-4 shadow"
                />
                <h3 className="text-xl font-semibold text-purple-700">Mr. Ashish Kumar Nayak</h3>
                <p className="text-sm text-gray-500 mb-3">Chairman, CCMAS</p>
                <p className="text-gray-700 text-sm italic">
                  Strategic leader growing CCMAS with excellence in academics and infrastructure.
                </p>
              </div>
            </div>

            {/* Vice Chairman */}
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-2">
              <div className="text-center">
                <img
                  src="/vice-chaiman.png"
                  alt="Vice Chairman"
                  className="w-28 h-28 mx-auto rounded-full mb-4 shadow"
                />
                <h3 className="text-xl font-semibold text-purple-700">Mr. Swaraj Nayak</h3>
                <p className="text-sm text-gray-500 mb-3">Vice Chairman, CCMAS</p>
                <p className="text-gray-700 text-sm italic">
                  Ensures coordination and contributes actively to the institution’s growth.
                </p>
              </div>
            </div>

            {/* Principal */}
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-2">
              <div className="text-center">
                <img
                  src="/principal.png"
                  alt="Principal"
                  className="w-28 h-28 mx-auto rounded-full mb-4 shadow"
                />
                <h3 className="text-xl font-semibold text-purple-700">Mrs. Jayalaxmi Subudhi</h3>
                <p className="text-sm text-gray-500 mb-3">Principal, CCMAS</p>
                <p className="text-gray-700 text-sm italic">
                  Visionary leader fostering innovation and academic excellence at CCMAS.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


      <Footer></Footer>
    </div>
  );
};

export default Home;
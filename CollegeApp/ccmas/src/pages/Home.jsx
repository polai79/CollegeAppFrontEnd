import React from 'react'
function Home() {
  return (
    <div>
  <section className="relative overflow-hidden bg-gradient-to-br from-blue-100 via-white to-purple-100 py-16 px-4 text-center">
  {/* Decorative background blob */}
  <div className="absolute top-0 left-0 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob animation-delay-2000"></div>
  <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob"></div>

  {/* Main Content */}
  <div className="relative z-10">
    <h1 className="text-5xl sm:text-6xl font-extrabold text-blue-900 mb-4 animate-fade-in">
      Welcome to <span className="text-purple-600">CCMAS</span>
    </h1>
    <p className="text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto animate-fade-in delay-200">
      Discover top-notch courses, expert mentors, and a vibrant campus life. Your future starts here!
    </p>
    <button
      className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 hover:scale-105 transform transition duration-300 animate-fade-in delay-400"
    >
       Explore Courses
    </button>
  </div>
</section>



    </div>



  )
}

export default Home
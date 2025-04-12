import React from 'react'

const Nav = () => {
  return (
    <div><section className="py-12 bg-white">
    <h2 className="text-3xl font-semibold text-center mb-8">Why Choose CCMAS?</h2>
    <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto px-4">
      {/* Card */}
      <div className="bg-gray-50 p-6 rounded shadow">
        <h3 className="font-bold text-xl mb-2">🎓 Expert Faculty</h3>
        <p className="text-gray-600">Learn from experienced professors and real-world industry mentors.</p>
      </div>
      {/* More cards... */}
    </div>
  </section></div>
  )
}

export default Nav
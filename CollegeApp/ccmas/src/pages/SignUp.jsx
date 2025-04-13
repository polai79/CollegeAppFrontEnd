import React, { useState } from 'react';

const SignUp = ({ onClose }) => {
  const [role, setRole] = useState('Student');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [course, setCourse] = useState('');
  const [dob, setDob] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      name: fullName,
      email,
      phoneNumber: phone,
      course,
      dob,
      role,
    };

    try {
      const response = await fetch('http://localhost:8080/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Signup successful! OTP sent to email.');
      } else {
        alert('Signup failed.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Light Blur Effect */}
      <div
        className="absolute inset-0 backdrop-blur-sm bg-transparent"
        onClick={onClose}
      ></div>

      {/* Notebook Layout */}
      <div className="relative z-50 flex flex-col md:flex-row w-full max-w-5xl bg-white rounded-2xl shadow-2xl overflow-hidden mx-4">
        {/* Left Side - Info Section */}
        <div className="hidden md:flex flex-col justify-center items-center bg-blue-100 text-blue-900 w-full md:w-1/2 p-8">
          <h2 className="text-3xl font-bold mb-2">CCMAS</h2>
          <p className="text-center text-sm">
            Centralized College Management Authentication System <br />
            One place for all roles: <strong>Student</strong>, <strong>Staff</strong>, and <strong>Admin</strong>.
          </p>
          <img src="https://cdn-icons-png.flaticon.com/512/3135/3135789.png" alt="Illustration" className="w-40 h-40 mt-4" />
        </div>

        {/* Right Side - Form Section */}
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-2xl font-bold text-purple-700 text-center mb-4">
            Create an Account
          </h2>

          {/* Role Selector */}
          <div className="flex justify-center gap-4 mb-4">
            {['Student', 'Staff', 'Admin'].map((r) => (
              <label key={r} className="flex items-center gap-2 text-sm">
                <input
                  type="radio"
                  value={r}
                  checked={role === r}
                  onChange={() => setRole(r)}
                />
                {r}
              </label>
            ))}
          </div>

          {/* Dynamic Heading */}
          <h3 className="text-lg text-center font-semibold text-blue-600 mb-2">
            {role === 'Student' && 'Enter Student Details'}
            {role === 'Staff' && 'Enter Staff Details'}
            {role === 'Admin' && 'Enter Admin Details'}
          </h3>

          {/* FORM */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-3 border rounded-md"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />

            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 border rounded-md"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full p-3 border rounded-md"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />

            {role === 'Student' && (
              <select
                value={course}
                onChange={(e) => setCourse(e.target.value)}
                className="w-full p-3 border rounded-md text-gray-700"
              >
                <option value="" disabled>Select Course</option>
                <option value="MSc">MSc</option>
                <option value="BBA">BBA</option>
                <option value="BCA">BCA</option>
              </select>
            )}

            <input
              type="date"
              className="w-full p-3 border rounded-md"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
            />

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition"
            >
              Generate Email OTP
            </button>
          </form>

          <p className="mt-4 text-center text-sm text-gray-600">
            Already have an account?{' '}
            <a href="" className="text-purple-600 font-medium hover:underline">
              Login
            </a>
          </p>

          <button
            className="absolute top-3 right-4 text-gray-500 hover:text-red-500 text-2xl"
            onClick={onClose}
          >
            &times;
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
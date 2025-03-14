import React from 'react';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div className="p-6 space-y-10 bg-gray-100 min-h-screen">
      {/* Navigation Bar */}
      <div className="flex justify-between items-center py-4 bg-white shadow-md px-6 rounded-2xl">
        <h1 className="text-3xl font-bold text-blue-600">Udayam AI Labs</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded">Contact Us</button>
      </div>

      {/* Hero Section */}
      <motion.div className="text-center space-y-4 py-10" animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ duration: 1 }}>
        <h1 className="text-5xl font-bold text-blue-700">Empowering Schools with AI Education</h1>
        <p className="text-lg text-gray-600">Bridging the gap between learning and real-world AI applications.</p>
        <button className="bg-blue-700 text-white px-6 py-2 rounded mt-4">Get In Touch</button>
      </motion.div>

      {/* Services Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-bold">AI Training for Students</h2>
          <p>Interactive learning with AI tools like PictoBlox, AutoDraw, and more.</p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-bold">AI Integration for Teachers</h2>
          <p>Empowering teachers to effectively integrate AI tools in teaching.</p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-bold">Customized AI Workshops</h2>
          <p>Hands-on learning and project-based AI training sessions.</p>
        </div>
      </div>

      {/* About Section */}
      <div className="space-y-4 py-10">
        <h2 className="text-2xl font-bold">About Us</h2>
        <p>
          At Udayam AI Labs, we bridge the gap between academic learning and real-world AI applications.
          We collaborate with schools to deliver AI training programs that are accessible, engaging, and
          aligned with CBSE guidelines.
        </p>
      </div>

      {/* Contact Section */}
      <div className="space-y-4 py-10">
        <h2 className="text-2xl font-bold">Contact Us</h2>
        <p>Email: udayamailabs@gmail.com | Phone: +91 8600302429</p>
      </div>

      {/* Footer */}
      <div className="text-center py-6 bg-white shadow-md rounded-2xl">
        <p>© 2025 Udayam AI Labs. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Home;

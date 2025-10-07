"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-gray-900 text-white px-6 py-12 md:px-16"
    >
      {/* Left Side - Photo */}
      <motion.div
        className="md:w-1/2 flex justify-center mb-8 md:mb-0"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <img
          src="/profile.png" // Replace with your actual image path
          alt="Vivek Saha"
          className="w-72 h-72 rounded-full object-cover shadow-lg border-4 border-gray-700"
        />
      </motion.div>

      {/* Right Side - About Info */}
      <motion.div
        className="md:w-1/2 md:pl-12 text-center md:text-left"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold mb-4 text-blue-400">About Me</h2>
        <p className="text-lg leading-relaxed mb-6 text-gray-300">
          Hi, I'm <span className="font-semibold text-white">Vivek Saha</span>,
          a passionate Computer Science Engineering student currently pursuing my
          B.Tech (3rd Year). I enjoy solving problems, building modern web
          applications, and exploring the field of Artificial Intelligence and
          full-stack development.
        </p>

        <h3 className="text-2xl font-semibold mb-3 text-blue-400">Education</h3>
        <div className="space-y-4 text-gray-300">
          <div className="border-l-4 border-blue-500 pl-4">
            <h4 className="font-semibold text-white">B.Tech in CSE</h4>
            <p>Ongoing – 3rd Year (2025)</p>
            <p>Aryan Institute of Engineering and Technology | Bhubaneswar</p>
          </div>

          <div className="border-l-4 border-blue-500 pl-4">
            <h4 className="font-semibold text-white">12th Standard</h4>
            <p>Year of Passing – 2023</p>
            <p>Gopalpur Higher Secondary School (Science Stream) | Balasore</p>
            <p>Board – CHSE Board</p>
          </div>

          <div className="border-l-4 border-blue-500 pl-4">
            <h4 className="font-semibold text-white">10th Standard</h4>
            <p>Year of Passing – 2021</p>
            <p>KCA PUBLIC SCHOOL | Gopalpur, Balasore</p>
            <p>Board – CBSE Board</p>
          </div>
        </div>

        <div className="mt-8">
          <a
            href="/projects"
            className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-6 py-2 rounded-lg transition"
          >
            View My Projects
          </a>
        </div>
      </motion.div>
    </section>
  );
}

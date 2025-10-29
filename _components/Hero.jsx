"use client";
import { motion } from "framer-motion";

export default function Home() {
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="bg-gradient-to-b from-gray-900 to-black text-white">
      {/* HERO SECTION */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-4">
        <motion.h1
          className="text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Hi, I'm Vivek 👋
        </motion.h1>

        <motion.p
          className="text-xl text-gray-300 max-w-xl mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          A passionate <span className="text-blue-400">Full Stack Developer</span> building interactive, AI-driven, and user-friendly web applications.
        </motion.p>

        <motion.div
          className="flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <button
            onClick={() => handleScroll("projects")}
            className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-lg transition-transform hover:scale-105"
          >
            View My Work
          </button>
          <button
            onClick={() => handleScroll("about")}
            className="bg-gray-800 hover:bg-gray-700 text-white py-2 px-6 rounded-lg transition-transform hover:scale-105"
          >
            About Me
          </button>
          <button
            onClick={() => handleScroll("skills")}
            className="bg-gray-800 hover:bg-gray-700 text-white py-2 px-6 rounded-lg transition-transform hover:scale-105"
          >
            Skills
          </button>
          <button
            onClick={() => handleScroll("contact")}
            className="bg-gray-800 hover:bg-gray-700 text-white py-2 px-6 rounded-lg transition-transform hover:scale-105"
          >
            Contact
          </button>
        </motion.div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="min-h-screen flex flex-col items-center justify-center px-6 py-20 text-center">
        <h2 className="text-4xl font-semibold mb-6 text-blue-400">About Me</h2>
        <p className="max-w-2xl text-gray-300 text-lg leading-relaxed">
          I'm Vivek, a Computer Science Engineering student passionate about building scalable, user-focused web applications.
          I enjoy working with modern technologies like React, Node.js, and AI integrations to create meaningful digital experiences.
        </p>
      </section>

      {/* SKILLS SECTION */}
      <section id="skills" className="min-h-screen flex flex-col items-center justify-center px-6 py-20 text-center">
        <h2 className="text-4xl font-semibold mb-6 text-blue-400">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-gray-300 text-lg">
          <div className="bg-gray-800 p-4 rounded-lg">HTML</div>
          <div className="bg-gray-800 p-4 rounded-lg">CSS</div>
          <div className="bg-gray-800 p-4 rounded-lg">JavaScript</div>
          <div className="bg-gray-800 p-4 rounded-lg">React.js</div>
          <div className="bg-gray-800 p-4 rounded-lg">Next.js</div>
          <div className="bg-gray-800 p-4 rounded-lg">Node.js</div>
          <div className="bg-gray-800 p-4 rounded-lg">Express.js</div>
          <div className="bg-gray-800 p-4 rounded-lg">MongoDB</div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="min-h-screen flex flex-col items-center justify-center px-6 py-20 text-center">
        <h2 className="text-4xl font-semibold mb-6 text-blue-400">Projects</h2>
        <div className="grid gap-6 md:grid-cols-2 max-w-5xl">
          <div className="bg-gray-800 p-6 rounded-xl hover:scale-105 transition-transform">
            <h3 className="text-2xl font-semibold mb-2">AI Chatbot</h3>
            <p className="text-gray-400 mb-4">
              Real-time AI chatbot built with React, Node.js, and Socket.io for dynamic conversations.
            </p>
            <a href="#" className="text-blue-400 hover:underline">View Project →</a>
          </div>

          <div className="bg-gray-800 p-6 rounded-xl hover:scale-105 transition-transform">
            <h3 className="text-2xl font-semibold mb-2">Music Recommendation System</h3>
            <p className="text-gray-400 mb-4">
              Full-stack app using AI to suggest songs based on user preferences and mood detection.
            </p>
            <a href="#" className="text-blue-400 hover:underline">View Project →</a>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="min-h-screen flex flex-col items-center justify-center px-6 py-20 text-center">
        <h2 className="text-4xl font-semibold mb-6 text-blue-400">Contact</h2>
        <p className="text-gray-300 mb-4 text-lg">
          Interested in collaborating or hiring me? Let’s connect!
        </p>
        <a
          href="mailto:vivek@example.com"
          className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-lg transition-transform hover:scale-105"
        >
          Send Email
        </a>
      </section>
    </main>
  );
}

"use client";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaDownload, FaEye } from "react-icons/fa";
import { SiLeetcode, SiCodeforces, SiGeeksforgeeks } from "react-icons/si";

// 🧠 Projects Data
const projects = [
  {
    title: "Learnify",
    description:
      "An AI-powered online learning platform that helps users learn through personalized video lessons and real-time chapter tracking. It integrates YouTube API for video learning, Google Gemini API for smart course generation, and a responsive dashboard for progress management.",
    tech: "Next.js, React.js, Tailwind CSS, Node.js, Express.js, PostgreSQL (Neon), Google Gemini API, YouTube API, Vercel",
    image: "/learnify.png",
    demo: "https://learnify-two-theta.vercel.app/",
    source: "https://github.com/viveksaha18/Learnify",
  },
  {
    title: "Interview Ready",
    description:
      "A web app that helps users practice interviews with AI-driven feedback using Google Gemini API. It includes features to record answers, review them, and track user progress over time.",
    tech: "Next.js, React.js, Tailwind CSS, Node.js, Express.js, PostgreSQL (Neon), Vercel, Google Gemini API",
    image: "/interviewReady.png",
    demo: "https://interview-ready-delta.vercel.app/",
    source: "https://github.com/viveksaha18/Interview-Ready",
  },
  {
    title: "Student Attendance Tracking System",
    description:
      "A web application to efficiently manage and track student attendance. It includes features for adding, updating, and viewing attendance data with a MySQL database integration.",
    tech: "Next.js, React.js, Tailwind CSS, Node.js, Express.js, MySQL",
    image: "/student-attendance-tracking.png",
    demo: "https://github.com/viveksaha18/student-attendance-tracking-system",
    source: "https://github.com/viveksaha18/student-attendance-tracking-system",
  },
];

// 🧩 Skills and Profiles
const skills = ["C/C++", "MySQL", "JavaScript", "React.js"];
const codingProfiles = [
  { name: "LeetCode", icon: <SiLeetcode />, link: "https://leetcode.com/u/viveksaha/" },
  { name: "GFG", icon: <SiGeeksforgeeks />, link: "https://www.geeksforgeeks.org/user/viveksa0eo7/" },
  { name: "Codeforces", icon: <SiCodeforces />, link: "https://codeforces.com/profile/yourusername" },
];
const socialLinks = [
  { name: "LinkedIn", icon: <FaLinkedin />, link: "https://www.linkedin.com/in/yourusername" },
  { name: "GitHub", icon: <FaGithub />, link: "https://github.com/yourusername" },
];

// 📄 Home Page
export default function Page() {
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="bg-gradient-to-b from-gray-900 to-black text-white">
      {/* 🏠 HERO SECTION */}
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
          {["about", "skills", "projects", "contact"].map((section) => (
            <button
              key={section}
              onClick={() => handleScroll(section)}
              className="bg-gray-800 hover:bg-blue-600 text-white py-2 px-6 rounded-lg transition-transform hover:scale-105 capitalize"
            >
              {section}
            </button>
          ))}
        </motion.div>
      </section>

      {/* 👤 ABOUT SECTION */}
      <section
        id="about"
        className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-gray-900 text-white px-6 py-12 md:px-16"
      >
        <motion.div
          className="md:w-1/2 flex justify-center mb-8 md:mb-0"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="/profile.png"
            alt="Vivek Saha"
            className="w-72 h-72 rounded-full object-cover shadow-lg border-4 border-gray-700"
          />
        </motion.div>

        <motion.div
          className="md:w-1/2 md:pl-12 text-center md:text-left"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-4 text-blue-400">About Me</h2>
          <p className="text-lg leading-relaxed mb-6 text-gray-300">
            Hi, I'm <span className="font-semibold text-white">Vivek Saha</span>, a passionate Computer Science Engineering student (3rd Year). I enjoy solving problems, building modern web apps, and exploring AI and full-stack development.
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
              <p>2023 – Gopalpur Higher Secondary School (Science)</p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h4 className="font-semibold text-white">10th Standard</h4>
              <p>2021 – KCA PUBLIC SCHOOL | CBSE Board</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ⚙️ SKILLS SECTION */}
      <section
        id="skills"
        className="min-h-screen bg-gray-900 text-white px-6 py-16 md:px-20"
      >
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-extrabold mb-14 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"
        >
          My Skills
        </motion.h2>

        <div className="flex flex-wrap justify-center gap-6 mb-16">
          {skills.map((skill, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.1 }}
              className="bg-gray-800 px-8 py-3 rounded-full text-lg font-medium text-blue-300 border border-blue-500/40 shadow-md hover:bg-blue-500 hover:text-white transition"
            >
              {skill}
            </motion.div>
          ))}
        </div>

        <h3 className="text-3xl font-semibold mb-6 text-purple-400 text-center">
          Coding Profiles
        </h3>
        <div className="flex justify-center gap-10 flex-wrap mb-16">
          {codingProfiles.map((profile, idx) => (
            <motion.a
              key={idx}
              href={profile.link}
              target="_blank"
              whileHover={{ scale: 1.2 }}
              className="flex flex-col items-center text-gray-300 hover:text-white text-5xl transition"
            >
              {profile.icon}
              <span className="text-sm mt-2">{profile.name}</span>
            </motion.a>
          ))}
        </div>

        <h3 className="text-3xl font-semibold mb-6 text-blue-400 text-center">
          Social Links
        </h3>
        <div className="flex justify-center gap-10 flex-wrap mb-16">
          {socialLinks.map((social, idx) => (
            <motion.a
              key={idx}
              href={social.link}
              target="_blank"
              whileHover={{ scale: 1.2 }}
              className="text-gray-300 hover:text-white text-5xl transition"
            >
              {social.icon}
            </motion.a>
          ))}
        </div>
      </section>

      {/* 💻 PROJECTS SECTION */}
      {/* PROJECTS SECTION */}
<section
  id="projects"
  className="min-h-screen flex flex-col items-center justify-center px-6 py-20 text-center bg-gray-900 text-white"
>
  <h2 className="text-4xl font-semibold mb-6 text-blue-400">Projects</h2>

  <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl">
    {/* Project 1 - Learnify */}
    <div className="bg-gray-800 p-6 rounded-xl hover:scale-105 transition-transform duration-300 shadow-lg border border-gray-700">
      <img
        src="/learnify.png"
        alt="Learnify"
        className="rounded-lg mb-4 w-full h-48 object-cover"
      />
      <h3 className="text-2xl font-semibold mb-2 text-blue-300">Learnify</h3>
      <p className="text-gray-400 mb-4">
        An AI-powered online learning platform integrating YouTube API & Gemini
        AI for personalized course generation and progress tracking.
      </p>
      <div className="flex justify-center gap-4">
        <a
          href="https://learnify-two-theta.vercel.app/"
          target="_blank"
          className="text-blue-400 hover:underline"
        >
          Demo →
        </a>
        <a
          href="https://github.com/viveksaha18/Learnify"
          target="_blank"
          className="text-gray-400 hover:text-blue-400 transition"
        >
          Source →
        </a>
      </div>
    </div>

    {/* Project 2 - Interview Ready */}
    <div className="bg-gray-800 p-6 rounded-xl hover:scale-105 transition-transform duration-300 shadow-lg border border-gray-700">
      <img
        src="/interviewReady.png"
        alt="Interview Ready"
        className="rounded-lg mb-4 w-full h-48 object-cover"
      />
      <h3 className="text-2xl font-semibold mb-2 text-blue-300">
        Interview Ready
      </h3>
      <p className="text-gray-400 mb-4">
        An AI-based web app that helps users practice mock interviews with
        real-time Gemini AI feedback and performance tracking.
      </p>
      <div className="flex justify-center gap-4">
        <a
          href="https://interview-ready-delta.vercel.app/"
          target="_blank"
          className="text-blue-400 hover:underline"
        >
          Demo →
        </a>
        <a
          href="https://github.com/viveksaha18/Interview-Ready"
          target="_blank"
          className="text-gray-400 hover:text-blue-400 transition"
        >
          Source →
        </a>
      </div>
    </div>

    {/* Project 3 - Student Attendance Tracking System */}
    <div className="bg-gray-800 p-6 rounded-xl hover:scale-105 transition-transform duration-300 shadow-lg border border-gray-700">
      <img
        src="/student-attendance-tracking.png"
        alt="Student Attendance Tracking System"
        className="rounded-lg mb-4 w-full h-48 object-cover"
      />
      <h3 className="text-2xl font-semibold mb-2 text-blue-300">
        Student Attendance Tracking System
      </h3>
      <p className="text-gray-400 mb-4">
        A web app to efficiently manage student attendance using MySQL for data
        storage and a clean dashboard UI.
      </p>
      <div className="flex justify-center gap-4">
        <a
          href="https://github.com/viveksaha18/student-attendance-tracking-system"
          target="_blank"
          className="text-blue-400 hover:underline"
        >
          Demo →
        </a>
        <a
          href="https://github.com/viveksaha18/student-attendance-tracking-system"
          target="_blank"
          className="text-gray-400 hover:text-blue-400 transition"
        >
          Source →
        </a>
      </div>
    </div>
  </div>
</section>


      {/* 📬 CONTACT SECTION */}
      <section
        id="contact"
        className="min-h-screen flex flex-col items-center justify-center text-center px-6 py-20 bg-gray-900"
      >
        <h2 className="text-4xl font-semibold mb-6 text-blue-400">
          Contact Me
        </h2>
        <p className="text-gray-300 mb-6 text-lg max-w-lg">
          I’m open to collaborations, internships, or freelance projects.
          Feel free to connect with me!
        </p>
        <a
          href="mailto:viveksaha096@gmail.com"
          className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-lg transition-transform hover:scale-105"
        >
          Send an Email
        </a>
      </section>
    </main>
  );
}

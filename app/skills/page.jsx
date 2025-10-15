"use client";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaDownload, FaEye } from "react-icons/fa";
import { SiLeetcode, SiCodeforces, SiGeeksforgeeks } from "react-icons/si";

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

export default function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen bg-gray-900 text-white px-6 py-16 md:px-20 relative overflow-hidden"
    >
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-extrabold mb-14 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"
      >
        My Skills
      </motion.h2>

      <motion.div
        className="flex flex-wrap justify-center gap-6 mb-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {skills.map((skill, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.1 }}
            className="bg-gray-800 px-8 py-3 rounded-full text-lg font-medium text-blue-300 border border-blue-500/40 shadow-md hover:bg-blue-500 hover:text-white transition cursor-default"
          >
            {skill}
          </motion.div>
        ))}
      </motion.div>

      <div className="mt-12 text-center">
        <h3 className="text-3xl font-semibold mb-6 text-purple-400">Coding Profiles</h3>
        <div className="flex justify-center gap-10 flex-wrap">
          {codingProfiles.map((profile, idx) => (
            <motion.a
              key={idx}
              href={profile.link}
              target="_blank"
              whileHover={{ scale: 1.2, rotate: 5 }}
              className="flex flex-col items-center text-gray-300 hover:text-white transition"
            >
              <div className="text-5xl">{profile.icon}</div>
              <span className="text-sm mt-2">{profile.name}</span>
            </motion.a>
          ))}
        </div>
      </div>

      <div className="mt-16 text-center">
        <h3 className="text-3xl font-semibold mb-6 text-blue-400">Social Links</h3>
        <div className="flex justify-center gap-10 flex-wrap">
          {socialLinks.map((social, idx) => (
            <motion.a
              key={idx}
              href={social.link}
              target="_blank"
              whileHover={{ scale: 1.2, rotate: -5 }}
              className="text-gray-300 hover:text-white text-5xl transition"
            >
              {social.icon}
            </motion.a>
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mt-20 text-center"
      >
        <h3 className="text-3xl font-semibold mb-8 text-green-400">My Resume</h3>
        <div className="flex justify-center gap-6 flex-wrap">
          <motion.a
            href="/resume.pdf"
            target="_blank"
            whileHover={{ scale: 1.1 }}
            className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full shadow-lg transition"
          >
            <FaEye /> View Resume
          </motion.a>
          <motion.a
            href="/resume.pdf"
            download="Vivek_Saha_Resume.pdf"
            whileHover={{ scale: 1.1 }}
            className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg transition"
          >
            <FaDownload /> Download Resume
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}

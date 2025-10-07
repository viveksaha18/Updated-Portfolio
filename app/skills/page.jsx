"use client";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode, SiCodeforces, SiGeeksforgeeks } from "react-icons/si";

  const skills = ["C/C++", "MySQL", "JavaScript", "React.js"];

const codingProfiles = [
  { name: "LeetCode", icon: <SiLeetcode />, link: "https://leetcode.com/yourusername" },
  { name: "GFG", icon: <SiGeeksforgeeks />, link: "https://auth.geeksforgeeks.org/user/yourusername" },
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
      className="min-h-screen bg-gray-900 text-white px-6 py-12 md:px-16"
    >
      <h2 className="text-4xl font-bold mb-12 text-center text-blue-400">
        My Skills
      </h2>

      {/* Skills Progress Bars */}
       <motion.div
        className="flex flex-wrap justify-center gap-6 mb-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {skills.map((skill, idx) => (
          <div
            key={idx}
            className="bg-gray-700 px-6 py-3 rounded-full text-lg font-medium text-blue-300 hover:bg-blue-500 hover:text-white transition cursor-default"
          >
            {skill}
          </div>
        ))}
      </motion.div>

      {/* Coding Profiles */}
      <div className="mt-12 text-center">
        <h3 className="text-2xl font-semibold mb-6 text-blue-400">
          Coding Profiles
        </h3>
        <div className="flex justify-center gap-8 flex-wrap">
          {codingProfiles.map((profile, idx) => (
            <motion.a
              key={idx}
              href={profile.link}
              target="_blank"
              className="text-gray-300 hover:text-white text-4xl transition flex flex-col items-center"
              whileHover={{ scale: 1.2 }}
            >
              {profile.icon}
              <span className="text-sm mt-1">{profile.name}</span>
            </motion.a>
          ))}
        </div>
      </div>

      {/* Social Links */}
      <div className="mt-12 text-center">
        <h3 className="text-2xl font-semibold mb-6 text-blue-400">Social Links</h3>
        <div className="flex justify-center gap-8">
          {socialLinks.map((social, idx) => (
            <motion.a
              key={idx}
              href={social.link}
              target="_blank"
              className="text-gray-300 hover:text-white text-4xl transition"
              whileHover={{ scale: 1.2 }}
            >
              {social.icon}
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

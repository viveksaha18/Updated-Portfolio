"use client";
import { motion } from "framer-motion";

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

export default function Page() {
  return (
    <section
      id="projects"
      className="min-h-screen bg-gray-900 text-white px-6 py-12 md:px-16"
    >
      <h2 className="text-4xl font-bold mb-12 text-center text-blue-400">
        Projects
      </h2>

      <div className="space-y-16">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            className="flex flex-col md:flex-row items-center md:items-start gap-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: idx * 0.2 }}
          >
            <div className="md:w-1/2 flex flex-col justify-center items-center text-center">
              <img
                src={project.image}
                alt={project.title}
                className="rounded-2xl shadow-lg border-4 border-gray-700 object-cover w-full md:w-[400px] h-[250px]"
              />
              <p className="text-sm text-gray-400 mt-2 italic">
                (Project Screenshot)
              </p>
            </div>

            <div className="md:w-1/2 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-semibold mb-3 text-blue-300">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-3">{project.description}</p>
                <p className="text-gray-400 mb-4">
                  <span className="font-semibold text-blue-400">
                    Tech Stack:
                  </span>{" "}
                  {project.tech}
                </p>
              </div>
              <div className="flex gap-4">
                <a
                  href={project.demo}
                  target="_blank"
                  className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg font-medium transition"
                >
                  Demo
                </a>
                <a
                  href={project.source}
                  target="_blank"
                  className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-lg font-medium transition"
                >
                  Source Code
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

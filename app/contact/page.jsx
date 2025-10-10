"use client";
import { motion } from "framer-motion";

export default function Page() {
  return (
    <section
      id="contact"
      className="min-h-screen bg-gray-900 text-white px-6 py-12 md:px-16"
    >
      <h2 className="text-4xl font-bold mb-12 text-center text-blue-400">
        Contact Me
      </h2>

      <div className="flex flex-col md:flex-row gap-12 max-w-6xl mx-auto">
        {/* Left Side - Contact Info */}
        <motion.div
          className="md:w-1/2 space-y-6"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl font-semibold mb-4 text-blue-300">
            Get in Touch
          </h3>
          <p>Email: <a href="mailto:viveksaha096@gmail.com" className="text-blue-400 hover:underline">viveksaha096@gmail.com</a></p>
          <p>Phone: <a href="tel:8093189895" className="text-blue-400 hover:underline">+91 8093189895</a></p>
          <p>Location: <span className="text-blue-400">Bhunbhaneswar, Odisha, India</span></p>
          <p className="text-gray-300">
            Feel free to reach out for internships, collaborations, or just to say hi!
          </p>
        </motion.div>

        {/* Right Side - Contact Form */}
        <motion.form
          className="md:w-1/2 flex flex-col gap-4"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <input
            type="text"
            placeholder="Your Name"
            className="bg-gray-800 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="bg-gray-800 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            placeholder="Your Message"
            rows={5}
            className="bg-gray-800 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-6 py-2 rounded-lg transition"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
}

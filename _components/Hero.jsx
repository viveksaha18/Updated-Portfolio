"use client";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function Hero() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/projects");
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center bg-gradient-to-b from-gray-900 to-black px-4">
      
      <motion.h1 
        className="text-5xl font-bold mb-4" 
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }}
      >
        Hi, I'm Vivek 👋
      </motion.h1>

      <motion.p
        className="text-xl text-gray-300 max-w-xl mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        A passionate <span className="text-blue-400">Full Stack Developer</span> building interactive, AI-driven, and user-friendly web applications.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <Button
          onClick={handleClick}
          className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-lg cursor-pointer"
        >
          View My Work
        </Button>
      </motion.div>

    </section>
  );
}

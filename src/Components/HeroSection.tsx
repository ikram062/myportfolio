import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="min-h-screen pt-24 px-6 bg-gradient-to-br from-pink-50 to-green-50">
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center min-h-[80vh] text-center">
        <motion.h1 
          className="text-6xl md:text-7xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-pink-400 to-green-400 bg-clip-text text-transparent">
            Ikram Ghala
          </span>
        </motion.h1>
        <motion.p 
          className="text-2xl md:text-3xl text-gray-600 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Frontend Developer
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <a 
            href="#contact" 
            className="px-8 py-3 bg-gradient-to-r from-pink-300 to-green-300 text-white rounded-full text-lg shadow-lg hover:shadow-xl transition-shadow"
          >
            Let's Connect
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default HeroSection;

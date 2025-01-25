import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Header = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-white/80 backdrop-blur-sm shadow-lg"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <motion.h1 
          className="text-3xl font-bold bg-gradient-to-r from-pink-300 to-green-300 bg-clip-text text-transparent"
          whileHover={{ scale: 1.05 }}
        >
          Ikram Ghala
        </motion.h1>
        <nav className="flex items-center gap-8">
          <Link 
            to="/" 
            className="text-gray-700 hover:text-pink-400 transition-colors"
          >
            Home
          </Link>
          <button 
            onClick={() => scrollToSection('about')}
            className="text-gray-700 hover:text-pink-400 transition-colors"
          >
            About
          </button>
          <button 
            onClick={() => scrollToSection('projects')}
            className="text-gray-700 hover:text-pink-400 transition-colors"
          >
            Projects
          </button>
          <Link 
            to="/contact" 
            className="px-4 py-2 bg-gradient-to-r from-pink-300 to-green-300 text-white rounded-full shadow-md hover:shadow-lg transition-shadow"
          >
            Contact
          </Link>
        </nav>
      </div>
    </motion.header>
  );
}

export default Header;

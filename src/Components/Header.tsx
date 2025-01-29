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
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/*Logo*/}
        <Link 
          to="/" 
          className="text-xl font-bold flex items-center gap-2"
        >
          <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
            <span className="text-white">IG</span>
          </div>
        </Link>

        {/* Navigation */}
        <nav className="fixed left-1/2 -translate-x-1/2 py-2 px-4 bg-white/10 backdrop-blur-md rounded-full">
          <ul className="flex items-center gap-8">
            <li>
              <Link to="/" className="text-sm hover:opacity-70 transition-opacity">
                Home
              </Link>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-sm hover:opacity-70 transition-opacity"
              >
                About
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('projects')}
                className="text-sm hover:opacity-70 transition-opacity"
              >
                Projects
              </button>
            </li>
            <li>
              <Link to="/contact" className="text-sm hover:opacity-70 transition-opacity">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </motion.header>
  );
}

export default Header;

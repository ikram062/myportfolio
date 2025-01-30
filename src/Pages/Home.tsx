import About from "@/Components/About"
import HeroSection from "@/Components/HeroSection"
import Projects from "@/Components/Projects"
import Extra from "@/Components/Extra"
import { motion } from "framer-motion"


const Home = () => {
  return (
    <div className="bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <HeroSection />

        <motion.div
          id="about"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="py-20"
        >
          <About />
        </motion.div>

        <motion.div
          id="projects"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="py-20"
        >
          <Projects />
        </motion.div>

        <Extra/>
        
      </div>
    </div>
  )
}

export default Home
import { motion } from "framer-motion"

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-pink-100 to-green-100 py-8 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-gray-700 mb-4 md:mb-0"
        >
          © 2024 Ikram Ghala. All rights reserved.
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex gap-6"
        >
          <a href="https://www.linkedin.com/in/ikram-ghala-aab727287/" target="_blank" className="text-gray-700 hover:text-pink-400 transition-colors">
            LinkedIn
          </a>
          <a href="https://github.com/ikram062" target="_blank" className="text-gray-700 hover:text-pink-400 transition-colors">
            GitHub
          </a>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer


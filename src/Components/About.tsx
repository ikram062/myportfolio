import { motion } from "framer-motion"

const About = () => {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-pink-400 to-green-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-600">
              I'm a passionate frontend developer with expertise in creating beautiful and functional web experiences.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-gradient-to-br from-pink-50 to-green-50 rounded-lg shadow-md">
                <h3 className="font-semibold text-gray-800">Frontend</h3>
                <p className="text-gray-600">React, Vue, TypeScript</p>
              </div>
              <div className="p-4 bg-gradient-to-br from-pink-50 to-green-50 rounded-lg shadow-md">
                <h3 className="font-semibold text-gray-800">Backend</h3>
                <p className="text-gray-600">Node.js, Express</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-pink-300 to-green-300 shadow-xl">
              <img
                src="/placeholder.svg?height=400&width=400"
                alt="Profile"
                className="w-full h-full object-cover rounded-2xl mix-blend-overlay"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About


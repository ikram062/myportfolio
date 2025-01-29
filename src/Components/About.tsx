import { motion } from "framer-motion"

const About = () => {
  return (
    <div className="space-y-12">
      <motion.h2
        className="text-3xl font-bold text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        About Me
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <p className="text-lg text-gray-600 leading-relaxed">
            I specialize in creating beautiful, functional websites with modern technologies. My approach combines clean
            code with engaging user experiences.
          </p>

          <div className="grid grid-cols-2 gap-4">
          <div className="p-4 rounded-xl bg-gradient-to-br from-pink-50 to-green-50">
              <h3 className="font-semibold mb-2">Languages</h3>
              <p className="text-gray-600 text-sm">C, Python, Java, Javascript</p>
            </div>
            <div className="p-4 rounded-xl bg-gradient-to-br from-pink-50 to-green-50">
              <h3 className="font-semibold mb-2">Frontend</h3>
              <p className="text-gray-600 text-sm">HTML, CSS, Javascript, React, Tailwind</p>
            </div>
            <div className="p-4 rounded-xl bg-gradient-to-br from-pink-50 to-green-50">
              <h3 className="font-semibold mb-2">Backend</h3>
              <p className="text-gray-600 text-sm">Node.js, Express</p>
            </div>
            <div className="p-4 rounded-xl bg-gradient-to-br from-pink-50 to-green-50">
              <h3 className="font-semibold mb-2">Version Control</h3>
              <p className="text-gray-600 text-sm">Git, Github</p>
            </div>
            <div className="p-4 rounded-xl bg-gradient-to-br from-pink-50 to-green-50">
              <h3 className="font-semibold mb-2">Databases</h3>
              <p className="text-gray-600 text-sm">Mongodb</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="aspect-square rounded-2xl overflow-hidden">
            <img src="/dog-programming.jfif" alt="About Me" className="w-full h-full object-cover" />
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default About
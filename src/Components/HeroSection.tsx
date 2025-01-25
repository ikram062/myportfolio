import { motion } from "framer-motion"

const HeroSection = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center items-center text-center py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-6"
      >
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
          Hi, I'm <span className="inline-block">Ikram Ghala!</span>
        </h1>

        <div className="space-y-2">
          <p className="text-2xl md:text-4xl text-gray-500">
            I'm a <span className="font-semibold text-black">Frontend Developer</span>
          </p>
          <p className="text-2xl md:text-4xl text-gray-500">
            at{" "}
            <span className="bg-gradient-to-r from-pink-300 to-green-300 bg-clip-text text-transparent">
              Creative Studio
            </span>
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col items-center gap-4 pt-8"
        >
          <button className="px-8 py-3 bg-black text-white rounded-full text-lg hover:bg-gray-800 transition-colors">
            Book a call
          </button>
          <p className="text-gray-600">Feel free to explore my portfolio and reach out—I'd love to connect!</p>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default HeroSection


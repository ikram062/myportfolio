import { motion } from "framer-motion"

const Contact = () => {
  return (
    <section className="min-h-screen pt-24 px-6 bg-gradient-to-br from-pink-50 to-green-50">
      <div className="max-w-3xl mx-auto py-20">
        <motion.h1
          className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-pink-400 to-green-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Get in Touch
        </motion.h1>
        <motion.form
          className="space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div>
            <label htmlFor="name" className="block text-gray-700 mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-300"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-300"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-gray-700 mb-2">
              Message
            </label>
            <textarea
              id="message"
              rows={6}
              className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-300"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full px-8 py-3 bg-gradient-to-r from-pink-300 to-green-300 text-white rounded-full shadow-lg hover:shadow-xl transition-shadow"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  )
}

export default Contact


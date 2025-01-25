import { motion } from "framer-motion"

const Projects = () => {
  const projects = [
    {
      id: 1,
      image: "/placeholder.svg?height=300&width=400",
      title: "Project One",
      description: "Description for project one",
    },
    {
      id: 2,
      image: "/placeholder.svg?height=300&width=400",
      title: "Project Two",
      description: "Description for project two",
    },
    {
      id: 3,
      image: "/placeholder.svg?height=300&width=400",
      title: "Project Three",
      description: "Description for project three",
    },
  ]

  return (
    <section className="py-20 px-6 bg-gradient-to-bl from-pink-50 to-green-50">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-pink-400 to-green-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          My Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <img src={project.image || "/placeholder.svg"} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
                <button className="mt-4 px-4 py-2 bg-gradient-to-r from-pink-300 to-green-300 text-white rounded-full text-sm hover:shadow-md transition-shadow">
                  View Project
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects


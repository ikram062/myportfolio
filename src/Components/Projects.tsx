import { motion } from "framer-motion"

const Projects = () => {
  const projects = [
    {
      id: 1,
      image: "/placeholder.svg?height=300&width=400",
      title: "Project One",
      description: "A modern web application",
    },
    {
      id: 2,
      image: "/placeholder.svg?height=300&width=400",
      title: "Project Two",
      description: "Interactive dashboard",
    },
    {
      id: 3,
      image: "/placeholder.svg?height=300&width=400",
      title: "Project Three",
      description: "E-commerce platform",
    },
  ]

  return (
    <div className="space-y-12">
      <motion.h2
        className="text-3xl font-bold text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        Featured Projects
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className="group"
          >
            <div className="relative overflow-hidden rounded-xl aspect-[4/3]">
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className="w-full h-full object-cover transition-transform group-hover:scale-105"
              />
            </div>
            <div className="mt-4">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="text-gray-600 mt-2">{project.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Projects


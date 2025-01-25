import { motion } from "framer-motion"

const Projects = () => {
  const projects = [
    {
      id: 1,
      image: "/placeholder.svg?height=400&width=600",
      title: "E-commerce Platform",
      category: "Web Development",
      description: "A modern e-commerce solution with real-time inventory",
    },
    {
      id: 2,
      image: "/placeholder.svg?height=400&width=600",
      title: "Mobile Banking App",
      category: "Mobile Development",
      description: "Secure and intuitive mobile banking experience",
    },
    {
      id: 3,
      image: "/placeholder.svg?height=400&width=600",
      title: "Portfolio Website",
      category: "Web Design",
      description: "Clean and modern portfolio for a photographer",
    },
  ]

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <div className="flex justify-between items-end">
            <h2 className="text-4xl font-bold">Featured Projects</h2>
            <div className="text-sm opacity-60">01 — 03</div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group"
              >
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-6">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform 
                              duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="space-y-3">
                  <div className="text-sm opacity-60">{project.category}</div>
                  <h3 className="text-xl font-medium">{project.title}</h3>
                  <p className="text-gray-600">{project.description}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects


import { motion } from "framer-motion";

const HeroSection = () => {
  const tags = ["Frontend", "Backend", "UI/UX", "Mobile", "Web3"];

  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img src="/dark-pink-background.jfif" alt="Hero Background" className="w-full h-full object-cover"/>
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-12"
        >
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold max-w-4xl leading-tight">
            Creating beautiful digital experiences with code
          </h1>

          {/* Tags */}
          <div className="flex flex-wrap gap-3">
            {tags.map((tag) => (
              <motion.button
                key={tag}
                className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm 
                          hover:bg-white/20 transition-colors text-sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {tag}
              </motion.button>
            ))}
          </div>

          {/* Project Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            <ProjectCard 
              number="01"
              title="E-commerce Platform"
              image="/placeholder.svg?height=200&width=300"
              tech="React & Node.js"
            />
            <ProjectCard 
              number="02"
              title="Portfolio Website"
              image="/placeholder.svg?height=200&width=300"
              tech="Next.js & Tailwind"
            />
            <ProjectCard 
              number="03"
              title="Mobile App"
              image="/placeholder.svg?height=200&width=300"
              tech="React Native"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const ProjectCard = ({ number, title, image, tech }: {
  number: string;
  title: string;
  image: string;
  tech: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: Number(number.split('')[1]) * 0.2 }}
    className="group relative rounded-2xl overflow-hidden"
  >
    <img
      src={image || "/placeholder.svg"}
      alt={title}
      className="w-full h-48 object-cover transition-transform 
                group-hover:scale-105 duration-500"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent 
                    flex flex-col justify-end p-6">
      <div className="text-sm opacity-60 mb-2">
        {number} • {tech}
      </div>
      <h3 className="text-lg font-medium">{title}</h3>
    </div>
  </motion.div>
);

export default HeroSection;

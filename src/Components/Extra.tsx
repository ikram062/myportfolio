import { motion } from "framer-motion";

const Extra = () => {
  return (
    <div>
      <motion.section
        className="grid grid-cols-1 md:grid-cols-3 gap-8 py-20"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="bg-gray-50 rounded-2xl p-6">
          <h3 className="text-xl font-semibold mb-4">My Experience</h3>
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="w-2 h-2 rounded-full bg-black mt-2 mr-3"></div>
              <div>
                <h4 className="font-medium">Frontend Developer</h4>
                <p className="text-gray-600 text-sm">2023 - Present</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 rounded-full bg-black mt-2 mr-3"></div>
              <div>
                <h4 className="font-medium">UI/UX Designer</h4>
                <p className="text-gray-600 text-sm">2022 - 2023</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 rounded-2xl p-6">
          <h3 className="text-xl font-semibold mb-4">What I'm Listening To</h3>
          <div className="aspect-square rounded-xl bg-gray-200 overflow-hidden">
            <img
              src="/placeholder.svg?height=300&width=300"
              alt="Playlist Cover"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="bg-gray-50 rounded-2xl p-6">
          <h3 className="text-xl font-semibold mb-4">Currently Reading</h3>
          <div className="aspect-[3/4] rounded-xl bg-gray-200 overflow-hidden">
            <img
              src="/placeholder.svg?height=400&width=300"
              alt="Book Cover"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Extra;

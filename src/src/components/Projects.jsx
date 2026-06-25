import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";

function Projects() {
  const projects = [
    {
      title: "Bharathiar University",
      category: "Educational Website",
      description:
        "Designed a clean and responsive university website with an improved user experience.",
      link: "https://b-u.ac.in/",
    },
    {
      title: "Ashwin Hospital",
      category: "Healthcare Website",
      description:
        "Designed a modern healthcare interface focused on accessibility and easy navigation.",
      link: "https://www.ashwinhospital.com/",
    },
    {
      title: "Ambal Auto",
      category: "Business Website",
      description:
        "Created an attractive business website showcasing products and services professionally.",
      link: "https://www.ambalauto.com/",
    },
    {
      title: "Glam International Academy",
      category: "Education Website",
      description:
        "Designed an elegant educational platform with responsive layouts and user-friendly pages.",
      link: "https://glaminternationalacademy.com/",
    },
  ];

  return (
    <section
      id="projects"
      className="bg-slate-900 text-white py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-bold">
            Live <span className="text-cyan-400">Projects</span>
          </h2>

          <div className="w-28 h-1 bg-cyan-400 mx-auto rounded-full mt-4"></div>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto">
            Some of the professional websites designed and delivered for
            clients.
          </p>
        </motion.div>

        {/* Project Cards */}

        <div className="grid md:grid-cols-2 gap-8">

          {projects.map((project, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 hover:border-cyan-400 hover:-translate-y-3 duration-500 shadow-lg"
            >

              {/* Placeholder */}

              <div className="h-52 bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center">

                <h1 className="text-3xl font-bold">
                  {project.title}
                </h1>

              </div>

              {/* Content */}

              <div className="p-8">

                <span className="text-cyan-400 font-semibold">
                  {project.category}
                </span>

                <h2 className="text-2xl font-bold mt-3">
                  {project.title}
                </h2>

                <p className="text-gray-400 mt-4 leading-7">
                  {project.description}
                </p>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-3 mt-8 bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-full duration-300"
                >
                  Visit Website
                  <FaExternalLinkAlt />
                </a>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;
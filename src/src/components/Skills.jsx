import { motion } from "framer-motion";
import {
  FaFigma,
 
  FaHtml5,
  FaCss3Alt,
  FaUsers,
  FaLaptopCode,
} from "react-icons/fa";

function Skills() {
  const skills = [
    {
      icon: <FaFigma />,
      name: "Figma",
      percent: "95%",
    },
   
   
    {
      icon: <FaLaptopCode />,
      name: "Illustrator",
      percent: "85%",
    },
    {
      icon: <FaHtml5 />,
      name: "HTML",
      percent: "90%",
    },
    {
      icon: <FaCss3Alt />,
      name: "CSS",
      percent: "88%",
    },
    {
      icon: <FaUsers />,
      name: "Wireframing",
      percent: "96%",
    },
    {
      icon: <FaLaptopCode />,
      name: "Responsive Design",
      percent: "94%",
    },
  ];

  return (
    <section
      id="skills"
      className="py-24 px-6 bg-slate-900 text-white"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold">
            My <span className="text-cyan-400">Skills</span>
          </h2>

          <div className="w-28 h-1 bg-cyan-400 rounded-full mx-auto mt-4"></div>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto">
            Professional design tools and technologies used to create
            modern and user-friendly digital products.
          </p>
        </motion.div>

        {/* Skills Grid */}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {skills.map((skill, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              className="bg-slate-800 rounded-2xl p-8 hover:-translate-y-3 duration-500 border border-slate-700 hover:border-cyan-400 shadow-lg"
            >

              <div className="text-5xl text-cyan-400 mb-6 flex justify-center">
                {skill.icon}
              </div>

              <h3 className="text-2xl font-semibold text-center">
                {skill.name}
              </h3>

              <div className="mt-6">

                <div className="flex justify-between mb-2">
                  <span>Progress</span>
                  <span>{skill.percent}</span>
                </div>

                <div className="w-full h-3 bg-slate-700 rounded-full">

                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: skill.percent }}
                    transition={{ duration: 1.5 }}
                    viewport={{ once: true }}
                    className="h-3 rounded-full bg-cyan-400"
                  />

                </div>

              </div>

            </motion.div>

          ))}

        </div>

        {/* Bottom Section */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 mt-20"
        >

          <div className="bg-slate-800 rounded-xl p-8 text-center">
            <h1 className="text-5xl font-bold text-cyan-400">8+</h1>
            <p className="mt-3 text-gray-400">
              Core Skills
            </p>
          </div>

          <div className="bg-slate-800 rounded-xl p-8 text-center">
            <h1 className="text-5xl font-bold text-cyan-400">4+</h1>
            <p className="mt-3 text-gray-400">
              Years Experience
            </p>
          </div>

          <div className="bg-slate-800 rounded-xl p-8 text-center">
            <h1 className="text-5xl font-bold text-cyan-400">100%</h1>
            <p className="mt-3 text-gray-400">
              Client Satisfaction
            </p>
          </div>

        </motion.div>

      </div>
    </section>
  );
}

export default Skills;
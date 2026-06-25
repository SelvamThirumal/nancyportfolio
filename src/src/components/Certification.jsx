import { motion } from "framer-motion";
import { FaCertificate, FaAward } from "react-icons/fa";

function Certification() {
  const certificates = [
    {
      title: "UI / UX Designer",
      organization: "Yellow Summer",
      description:
        "Completed professional UI/UX Design training covering wireframing, prototyping, responsive design, user research, design systems, and Figma.",
    },
    {
      title: "Graphic Design",
      organization: "Professional Experience",
      description:
        "Hands-on experience in Photoshop, Illustrator, branding, social media creatives, banners, posters, and marketing materials.",
    },
  ];

  return (
    <section
      id="certification"
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
            My <span className="text-cyan-400">Certification</span>
          </h2>

          <div className="w-28 h-1 bg-cyan-400 rounded-full mx-auto mt-4"></div>

          <p className="text-gray-400 mt-6">
            Professional certifications and achievements.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 gap-8">

          {certificates.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-slate-800 rounded-2xl p-8 border border-slate-700 hover:border-cyan-400 hover:-translate-y-3 duration-500"
            >
              <div className="w-20 h-20 rounded-full bg-cyan-500 flex items-center justify-center text-4xl mb-6">
                {index === 0 ? <FaCertificate /> : <FaAward />}
              </div>

              <h3 className="text-2xl font-bold">
                {item.title}
              </h3>

              <p className="text-cyan-400 mt-2">
                {item.organization}
              </p>

              <p className="text-gray-400 mt-5 leading-7">
                {item.description}
              </p>

              <button className="mt-8 px-6 py-3 bg-cyan-500 hover:bg-cyan-600 rounded-full duration-300">
                View Certificate
              </button>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Certification;
import { motion } from "framer-motion";
import { FaGraduationCap, FaCertificate } from "react-icons/fa";

function Education() {
  const education = [
    {
      icon: <FaGraduationCap />,
      title: "Bachelor of Science in Computer Science",
      institute: "Nandha Arts & Science College",
      location: "Erode, Tamil Nadu",
      year: "Completed",
      grade: "GPA : 8.0 / 10",
    },
  ];

  const certifications = [
    {
      icon: <FaCertificate />,
      title: "UI / UX Designer",
      institute: "Yellow Summer",
      year: "Certified",
    },
  ];

  return (
    <section
      id="education"
      className="bg-slate-950 text-white py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-bold">
            Education &
            <span className="text-cyan-400"> Certification</span>
          </h2>

          <div className="w-28 h-1 bg-cyan-400 rounded-full mx-auto mt-4"></div>

          <p className="text-gray-400 mt-6">
            Academic qualifications and professional certifications.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* Education */}

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-slate-900 rounded-2xl p-8 border border-slate-800"
          >
            <h3 className="text-3xl font-bold text-cyan-400 mb-8">
              Education
            </h3>

            {education.map((item, index) => (
              <div
                key={index}
                className="bg-slate-800 rounded-xl p-6 mb-6 hover:border-cyan-400 border border-transparent transition-all duration-300"
              >
                <div className="text-5xl text-cyan-400 mb-4">
                  {item.icon}
                </div>

                <h4 className="text-2xl font-semibold">
                  {item.title}
                </h4>

                <p className="text-gray-300 mt-2">
                  {item.institute}
                </p>

                <p className="text-gray-400">
                  {item.location}
                </p>

                <div className="flex justify-between mt-5">
                  <span className="text-cyan-400">
                    {item.year}
                  </span>

                  <span className="font-semibold">
                    {item.grade}
                  </span>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Certification */}

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-slate-900 rounded-2xl p-8 border border-slate-800"
          >
            <h3 className="text-3xl font-bold text-cyan-400 mb-8">
              Certification
            </h3>

            {certifications.map((item, index) => (
              <div
                key={index}
                className="bg-slate-800 rounded-xl p-6 hover:border-cyan-400 border border-transparent transition-all duration-300"
              >
                <div className="text-5xl text-cyan-400 mb-4">
                  {item.icon}
                </div>

                <h4 className="text-2xl font-semibold">
                  {item.title}
                </h4>

                <p className="text-gray-300 mt-2">
                  {item.institute}
                </p>

                <span className="inline-block mt-5 bg-cyan-500 px-4 py-2 rounded-full">
                  {item.year}
                </span>
              </div>
            ))}
          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default Education;
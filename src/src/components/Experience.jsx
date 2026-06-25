import { motion } from "framer-motion";
import {
  FaBriefcase,
  FaFigma,
  FaPalette,
  FaUsers,
  FaLaptopCode,
} from "react-icons/fa";

function Experience() {
  const experience = [
    {
      company: "People Click Techno Solution",
      role: "UI/UX Designer & Graphic Designer",
      period: "Sep 2025 - Present",
      icon: <FaFigma />,
      description:
        "Designed user-centric UI/UX solutions, conducted user research, created wireframes and interactive prototypes, collaborated with developers, and mentored junior designers.",
    },
    {
      company: "Vites Technologies LLP",
      role: "UI/UX Designer & Graphic Designer",
      period: "Jan 2024 - Aug 2025",
      icon: <FaLaptopCode />,
      description:
        "Designed responsive web and mobile interfaces, performed usability testing, collaborated with developers, and followed modern UI design trends.",
    },
    {
      company: "Enova Solution Pvt Ltd",
      role: "UI/UX Designer & Graphic Designer",
      period: "Sep 2020 - Dec 2023",
      icon: <FaPalette />,
      description:
        "Led UX research, created responsive interfaces, maintained design systems, improved user flows, and supported front-end implementation.",
    },
    {
      company: "Fireball Technologies",
      role: "Business Analyst",
      period: "Jun 2018 - Aug 2020",
      icon: <FaUsers />,
      description:
        "Managed e-commerce product listings, optimized online catalogs, supported marketing campaigns, and improved customer engagement.",
    },
    {
      company: "S & T Machinery",
      role: "Business Analyst",
      period: "Feb 2017 - May 2018",
      icon: <FaBriefcase />,
      description:
        "Managed catalog operations, supervised analysts, coordinated with suppliers, and improved workflow efficiency.",
    },
  ];

  return (
    <section
      id="experience"
      className="bg-slate-950 text-white py-24 px-6"
    >
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-bold">
            Work <span className="text-cyan-400">Experience</span>
          </h2>

          <div className="w-28 h-1 bg-cyan-400 mx-auto mt-4 rounded-full"></div>

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            My professional journey in UI/UX Design, Graphic Design and
            Business Analysis.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">

          {/* Vertical Line */}
          <div className="absolute left-5 top-0 h-full w-1 bg-cyan-500"></div>

          {experience.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative flex gap-8 mb-12"
            >
              {/* Icon */}
              <div className="z-10 w-12 h-12 rounded-full bg-cyan-500 flex items-center justify-center text-white text-xl shadow-lg">
                {item.icon}
              </div>

              {/* Card */}
              <div className="flex-1 bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-cyan-400 hover:shadow-cyan-500/20 hover:shadow-xl transition duration-500">

                <span className="text-cyan-400 font-semibold">
                  {item.period}
                </span>

                <h3 className="text-2xl font-bold mt-2">
                  {item.role}
                </h3>

                <h4 className="text-lg text-gray-300 mt-2">
                  {item.company}
                </h4>

                <p className="text-gray-400 mt-4 leading-7">
                  {item.description}
                </p>

              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Experience;
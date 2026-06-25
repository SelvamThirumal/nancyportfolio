import { motion } from "framer-motion";
import {
  FaFigma,
  FaPaintBrush,
  FaMobileAlt,
  FaLaptopCode,
} from "react-icons/fa";

function About() {
  const cards = [
    {
      icon: <FaFigma />,
      title: "UI/UX Design",
      desc: "Designing modern, user-friendly interfaces with Figma and Adobe XD.",
    },
    {
      icon: <FaPaintBrush />,
      title: "Graphic Design",
      desc: "Creative branding, banners, posters and marketing materials.",
    },
    {
      icon: <FaMobileAlt />,
      title: "Responsive Design",
      desc: "Creating seamless experiences across mobile, tablet and desktop.",
    },
    {
      icon: <FaLaptopCode />,
      title: "Developer Friendly",
      desc: "Working closely with developers for pixel-perfect implementation.",
    },
  ];

  // Animation variants for card containers
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 70, damping: 16 },
    },
  };

  return (
    <section
      id="about"
      className="py-32 px-6 bg-[#030712] text-white relative overflow-hidden"
    >
      {/* Background Decorative Ambient Orb */}
      <div className="absolute w-[450px] h-[450px] bg-cyan-500/5 blur-[130px] rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-black tracking-tight">
            About <span className="text-cyan-400">Me</span>
          </h2>

          <div className="w-20 h-[3px] bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mt-5 rounded-full"></div>

          <p className="text-gray-400 max-w-3xl mx-auto mt-8 text-base md:text-lg leading-relaxed font-medium">
            I am a passionate UI/UX Designer with over 4 years of experience
            creating engaging digital experiences. My expertise includes
            user research, wireframing, prototyping, responsive design,
            design systems, branding and collaboration with development teams.
          </p>
        </motion.div>

        {/* Feature Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-24"
        >
          {cards.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ 
                y: -10, 
                borderColor: "rgba(34, 211, 238, 0.4)",
                boxShadow: "0 15px 30px -10px rgba(6, 182, 212, 0.15)"
              }}
              className="bg-gradient-to-b from-white/[0.05] to-white/[0.01] rounded-2xl p-8 text-center border border-white/5 backdrop-blur-sm transition-colors duration-300 group"
            >
              {/* Animated Icon Ring */}
              <div className="text-4xl text-cyan-400 flex justify-center mb-6 mx-auto w-16 h-16 items-center rounded-2xl bg-cyan-500/10 border border-cyan-500/10 group-hover:scale-110 group-hover:bg-cyan-500/20 group-hover:border-cyan-400/30 transition-all duration-300">
                {item.icon}
              </div>

              <h3 className="text-xl font-bold mb-3 tracking-wide text-gray-100 group-hover:text-cyan-400 transition-colors duration-300">
                {item.title}
              </h3>

              <p className="text-gray-400 text-sm md:text-base leading-relaxed font-medium">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Premium Data Statistics Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-20"
        >
          {[
            { value: "4+", label: "Years Experience" },
            { value: "50+", label: "UI Designs" },
            { value: "20+", label: "Happy Clients" },
            { value: "100%", label: "User Focused" },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.03 }}
              className="bg-gradient-to-br from-white/[0.04] to-white/[0.01] rounded-2xl p-6 md:p-8 text-center border border-white/5 backdrop-blur-md relative overflow-hidden"
            >
              <h1 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 tracking-tight">
                {stat.value}
              </h1>
              <p className="mt-3 text-gray-400 font-semibold tracking-wide text-xs md:text-sm uppercase leading-tight">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

export default About;
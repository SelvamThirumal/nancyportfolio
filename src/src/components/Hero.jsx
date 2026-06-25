import { motion } from "framer-motion";
import {
  FaBehance,
  FaLinkedin,
  FaArrowDown,
} from "react-icons/fa";

function Hero() {
  // Sophisticated custom spring entry animations
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (custom = 0) => ({
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 60, damping: 15, delay: custom }
    })
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 md:px-16 overflow-hidden bg-[#030712] text-white">
      
      {/* Premium Ambient Background Mesh */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute w-[500px] h-[500px] bg-cyan-500/10 blur-[150px] rounded-full -top-20 -left-20 animate-pulse duration-[6s]"></div>
        <div className="absolute w-[600px] h-[600px] bg-purple-500/10 blur-[180px] rounded-full bottom-0 right-0 animate-pulse duration-[8s]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      </div>

      {/* Main Responsive Grid Layout */}
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 py-20 lg:py-0">
        
        {/* LEFT COLUMN: Main Typography & Action Buttons */}
        <div className="lg:col-span-7 text-left flex flex-col justify-center">
          
          <motion.h3
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-cyan-400 text-lg md:text-xl font-semibold tracking-widest uppercase mb-2"
          >
            Hello, I'm
          </motion.h3>

          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-7xl xl:text-8xl font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-gray-400 drop-shadow-2xl"
          >
            Nancy <span className="text-cyan-400">S</span>
          </motion.h1>

          <motion.h2
            initial="hidden"
            animate="visible"
            custom={0.3}
            variants={fadeInUp}
            className="text-2xl md:text-4xl text-gray-200 mt-6 font-bold tracking-wide leading-tight"
          >
            UI / UX Designer &{" "}
            <span className="text-cyan-400 block sm:inline-block bg-cyan-400/10 px-4 py-1 rounded-full border border-cyan-400/20 shadow-[0_0_30px_rgba(34,211,238,0.15)] mt-2 sm:mt-0">
              Graphic Designer
            </span>
          </motion.h2>

          <motion.p
            initial="hidden"
            animate="visible"
            custom={0.5}
            variants={fadeInUp}
            className="max-w-2xl mt-8 text-gray-400 text-base md:text-lg leading-relaxed font-medium"
          >
            Passionate UI/UX Designer with 4+ years of experience creating
            engaging, responsive and user-friendly digital experiences.
            Specialized in Figma, Adobe XD, Photoshop, Wireframing,
            Prototyping and User Experience Design.
          </motion.p>

          {/* Premium Call to Action Buttons */}
          <motion.div
            initial="hidden"
            animate="visible"
            custom={0.7}
            variants={fadeInUp}
            className="flex justify-start gap-5 flex-wrap mt-10"
          >
            <motion.a
              whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(6, 182, 212, 0.4)" }}
              whileTap={{ scale: 0.98 }}
              href="#contact"
              className="px-8 py-4 rounded-full bg-cyan-500 text-black font-bold tracking-wide shadow-lg shadow-cyan-500/20 transition-colors duration-300 hover:bg-cyan-400"
            >
              Hire Me
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05, background: "rgba(6, 182, 212, 0.05)" }}
              whileTap={{ scale: 0.98 }}
              href="/Nancy-Resume.pdf"
              className="px-8 py-4 rounded-full border border-cyan-500/40 text-cyan-400 font-semibold tracking-wide backdrop-blur-sm transition-colors duration-300 hover:border-cyan-400 hover:text-white"
            >
              Download CV
            </motion.a>
          </motion.div>
        </div>


        {/* RIGHT COLUMN: Glassmorphic Experience Card & Social Handles */}
        <div className="lg:col-span-5 flex flex-col items-center lg:items-end justify-center w-full">
          
          {/* Glassmorphic Experience Counter Card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 50, delay: 0.8 }}
            className="w-full max-w-[340px] bg-gradient-to-b from-white/10 to-white/[0.02] backdrop-blur-2xl px-10 py-10 rounded-3xl border border-white/10 shadow-2xl relative group overflow-hidden text-center lg:text-right"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
            
            <h2 className="text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 tracking-tight">
              4+
            </h2>
            <p className="text-gray-300 font-medium tracking-wide text-sm uppercase mt-4 leading-snug">
              Years of Professional <br /> Experience
            </p>
          </motion.div>

          {/* Social Icons Floating aligned on right side */}
          <motion.div
            initial="hidden"
            animate="visible"
            custom={1}
            variants={fadeInUp}
            className="flex lg:justify-end gap-6 mt-10 text-3xl w-full max-w-[340px] justify-center"
          >
            <motion.a
              whileHover={{ y: -5, scale: 1.1, color: "#22d3ee" }}
              whileTap={{ scale: 0.9 }}
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 p-3 bg-white/5 rounded-full border border-white/5 hover:border-cyan-500/20 transition-all duration-300"
            >
              <FaLinkedin />
            </motion.a>

            <motion.a
              whileHover={{ y: -5, scale: 1.1, color: "#22d3ee" }}
              whileTap={{ scale: 0.9 }}
              href="https://www.behance.net/"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 p-3 bg-white/5 rounded-full border border-white/5 hover:border-cyan-500/20 transition-all duration-300"
            >
              <FaBehance />
            </motion.a>
          </motion.div>
        </div>

      </div>

      {/* Center Animated Scroll Down Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-cyan-400/80 text-3xl"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        >
          <FaArrowDown />
        </motion.div>
      </motion.div>

    </section>
  );
}

export default Hero;
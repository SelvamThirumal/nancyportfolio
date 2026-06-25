import { motion } from "framer-motion";

function ParticleBackground() {
  const particles = Array.from({ length: 50 });

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-slate-950">

      {/* Gradient Glow */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/20 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 blur-[120px] rounded-full"></div>

      {/* Floating Particles */}
      {particles.map((_, index) => {
        const size = Math.random() * 8 + 3;
        const left = Math.random() * 100;
        const delay = Math.random() * 5;
        const duration = Math.random() * 12 + 10;

        return (
          <motion.span
            key={index}
            className="absolute rounded-full bg-cyan-400/50"
            style={{
              width: size,
              height: size,
              left: `${left}%`,
              top: "110%",
            }}
            animate={{
              y: ["0vh", "-120vh"],
              opacity: [0, 1, 1, 0],
              scale: [0.5, 1, 1.3, 0.5],
            }}
            transition={{
              duration,
              delay,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        );
      })}

      {/* Grid Effect */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      ></div>

    </div>
  );
}

export default ParticleBackground;
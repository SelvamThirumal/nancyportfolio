import { motion } from "framer-motion";

function AnimatedBlob() {
  return (
    <>
      <motion.div
        className="fixed top-20 left-10 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl -z-10"
        animate={{
          x: [0, 80, -40, 0],
          y: [0, 60, -40, 0],
          scale: [1, 1.2, 0.9, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="fixed bottom-20 right-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl -z-10"
        animate={{
          x: [0, -80, 50, 0],
          y: [0, -60, 40, 0],
          scale: [1, 0.8, 1.2, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </>
  );
}

export default AnimatedBlob;
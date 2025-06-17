"use client"
import { motion } from "framer-motion"

const Card = ({ title, desc }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="bg-dark-800/50 backdrop-blur-sm rounded-xl border border-dark-700 flex flex-col p-6 gap-4 hover:shadow-dark-lg hover:border-purple-500/30 transition-all duration-300 h-full group"
    >
      <h2 className="text-white text-xl font-bold tracking-tight group-hover:text-purple-300 transition-colors duration-300">
        {title}
      </h2>
      <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
    </motion.div>
  )
}

export default Card

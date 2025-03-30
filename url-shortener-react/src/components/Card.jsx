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
      className="bg-white rounded-xl border border-slate-200 flex flex-col p-6 gap-4 hover:shadow-lg hover:shadow-slate-200/50 transition-all duration-300 h-full"
    >
      <h2 className="text-slate-900 text-xl font-bold tracking-tight">{title}</h2>
      <p className="text-slate-600 text-sm leading-relaxed">{desc}</p>
    </motion.div>
  )
}

export default Card


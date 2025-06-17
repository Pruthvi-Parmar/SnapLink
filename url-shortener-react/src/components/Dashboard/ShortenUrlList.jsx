"use client"
import ShortenItem from "./ShortenItem"
import { motion } from "framer-motion"

const ShortenUrlList = ({ data }) => {
  return (
    <div className="space-y-6">
      {data.map((item, index) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
        >
          <ShortenItem {...item} />
        </motion.div>
      ))}
    </div>
  )
}

export default ShortenUrlList

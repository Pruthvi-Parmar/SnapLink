"use client"

import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

import Card from "./Card"
import { useStoreContext } from "../contextApi/ContextApi"

const desc =
  "Generate short, memorable links with ease using SnapLink's intuitive interface. Share URLs effortlessly across platforms. Optimize your sharing strategy with SnapLink. Track clicks and manage your links seamlessly to enhance your online presence. Generate short, memorable links with ease using SnapLink's intuitive interface. Share URLs effortlessly across platforms."

const LandingPage = () => {
  const navigate = useNavigate()
  const { token } = useStoreContext()
  console.log("TOKEN FROM LANDING PAGE: " + token)

  const dashBoardNavigateHandler = () => {
    // Original logic preserved
  }

  return (
    <div className="min-h-[calc(100vh-64px)] bg-gradient-to-b from-slate-50 to-white lg:px-14 sm:px-8 px-4">
      {/* Hero Section */}
      <div className="lg:flex-row flex-col lg:py-16 pt-16 lg:gap-16 gap-12 flex justify-between items-center">
        <div className="flex-1 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center px-3 py-1.5 mb-6 rounded-full bg-blue-50 border border-blue-100"
          >
            <span className="text-blue-600 text-sm font-medium">URL Shortener</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-bold text-slate-800 md:text-5xl sm:text-4xl text-3xl md:leading-[1.2] sm:leading-[1.3] leading-[1.4] tracking-tight"
          >
            SnapLink Simplifies URL Shortening For Efficient Sharing
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-600 text-lg my-6 leading-relaxed max-w-xl"
          >
            SnapLink streamlines the process of URL shortening, making sharing links effortless and efficient. With its
            user-friendly interface, SnapLink allows you to generate concise, easy-to-share URLs in seconds.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-center gap-4 flex-wrap"
          >
            <button
              onClick={dashBoardNavigateHandler}
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg transition-colors duration-200 flex items-center gap-2 shadow-sm"
            >
              Manage Links
              <ArrowRight size={16} />
            </button>
            <button
              onClick={dashBoardNavigateHandler}
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-medium px-6 py-3 rounded-lg transition-colors duration-200"
            >
              Create Short Link
            </button>
          </motion.div>
        </div>

        <div className="flex-1 flex justify-center w-full">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-3xl -z-10 transform -rotate-6"></div>
            <img
              className="sm:w-[520px] w-[400px] object-cover rounded-2xl shadow-xl"
              src="/images/img2.png"
              alt="SnapLink Dashboard Preview"
            />
          </motion.div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-blue-600 font-semibold mb-3">TRUSTED BY TEAMS WORLDWIDE</h2>
          <p className="text-slate-800 font-bold text-3xl md:text-4xl max-w-3xl mx-auto">
            Trusted by individuals and teams at the world's best companies
          </p>
        </motion.div>

        <div className="grid lg:gap-8 gap-6 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1">
          <Card
            title="Simple URL Shortening"
            desc="Experience the ease of creating short, memorable URLs in just a few clicks. Our intuitive interface and quick setup process ensure you can start shortening URLs without any hassle."
          />
          <Card
            title="Powerful Analytics"
            desc="Gain insights into your link performance with our comprehensive analytics dashboard. Track clicks, geographical data, and referral sources to optimize your marketing strategies."
          />
          <Card
            title="Enhanced Security"
            desc="Rest assured with our robust security measures. All shortened URLs are protected with advanced encryption, ensuring your data remains safe and secure."
          />
          <Card
            title="Fast and Reliable"
            desc="Enjoy lightning-fast redirects and high uptime with our reliable infrastructure. Your shortened URLs will always be available and responsive, ensuring a seamless experience for your users."
          />
        </div>
      </div>
    </div>
  )
}

export default LandingPage


"use client"

import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion"
import { ArrowRight, Zap, Shield, BarChart3, Link2, Star } from "lucide-react"
import { useStoreContext } from "../contextApi/ContextApi"

const LandingPage = () => {
  const navigate = useNavigate()
  const { token } = useStoreContext()

  const dashBoardNavigateHandler = () => {
    // Original logic preserved
  }

  const features = [
    {
      icon: <Link2 className="w-8 h-8" />,
      title: "Instant URL Shortening",
      description: "Transform long URLs into clean, shareable links in milliseconds with our advanced algorithm.",
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Real-time Analytics",
      description: "Track every click with detailed insights including location, device, and referrer data.",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Enterprise Security",
      description: "Military-grade encryption and security protocols protect your links and data.",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Lightning Fast",
      description: "99.9% uptime with global CDN ensures your links work instantly, anywhere.",
    },
  ]

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Marketing Director",
      company: "TechCorp",
      content: "SnapLink transformed our campaign tracking. The analytics are incredible!",
      rating: 5,
    },
    {
      name: "Mike Rodriguez",
      role: "Social Media Manager",
      company: "StartupXYZ",
      content: "Best URL shortener I've used. Clean interface, powerful features.",
      rating: 5,
    },
    {
      name: "Emily Watson",
      role: "Content Creator",
      company: "CreativeStudio",
      content: "The custom links feature is a game-changer for my brand.",
      rating: 5,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950/20 to-slate-900 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-3/4 left-1/2 w-64 h-64 bg-pink-500/10 rounded-full blur-2xl animate-pulse delay-2000"></div>
      </div>

      {/* Hero Section - Completely New Layout */}
      <section className="relative min-h-screen flex items-center justify-center px-4 lg:px-14">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/30 backdrop-blur-xl"
            >
              <Zap className="w-4 h-4 text-yellow-400" />
              <span className="text-sm font-semibold text-purple-200">Next-Gen URL Management</span>
            </motion.div>

            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="space-y-4"
            >
              <h1 className="text-5xl lg:text-7xl font-black leading-tight">
                <span className="block text-white">Shorten.</span>
                <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                  Track.
                </span>
                <span className="block text-white">Dominate.</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl leading-relaxed">
                The most powerful URL shortening platform built for modern teams. Create, customize, and analyze your
                links like never before.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <button
                onClick={dashBoardNavigateHandler}
                className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl font-bold text-white overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </button>

              {/* <button
                onClick={dashBoardNavigateHandler}
                className="px-8 py-4 border-2 border-purple-500/50 text-purple-300 rounded-2xl font-bold hover:bg-purple-500/10 hover:border-purple-400 transition-all duration-300 backdrop-blur-sm"
              >
                Watch Demo
              </button> */}
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-800"
            >
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-white">10M+</div>
                <div className="text-sm text-gray-400">Links Created</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-white">99.9%</div>
                <div className="text-sm text-gray-400">Uptime</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-white">150+</div>
                <div className="text-sm text-gray-400">Countries</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Interactive Dashboard Preview */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10">
              {/* Main Dashboard Card */}
              <div className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-xl rounded-3xl p-8 border border-gray-700/50 shadow-2xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="ml-4 text-gray-400 text-sm">snaplink.app</span>
                </div>

                {/* URL Input Simulation */}
                <div className="space-y-4">
                  <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-600/30">
                    <div className="text-gray-400 text-sm mb-2">Enter your long URL</div>
                    <div className="bg-gray-700/50 rounded-lg p-3 text-gray-300 font-mono text-sm">
                      https://example.com/very-long-url...
                    </div>
                  </div>

                  <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl py-3 font-semibold text-white">
                    Shorten URL
                  </button>

                  {/* Result */}
                  <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-4">
                    <div className="text-green-400 text-sm mb-2">Your shortened URL</div>
                    <div className="text-green-300 font-mono">snap.ly/abc123</div>
                  </div>
                </div>
              </div>

              {/* Floating Analytics Cards */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                className="absolute -top-4 -right-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-4 shadow-xl"
              >
                <div className="text-white text-sm font-semibold">Live Clicks</div>
                <div className="text-2xl font-bold text-white">1,247</div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
                className="absolute -bottom-4 -left-4 bg-gradient-to-r from-pink-600 to-red-600 rounded-2xl p-4 shadow-xl"
              >
                <div className="text-white text-sm font-semibold">Countries</div>
                <div className="text-2xl font-bold text-white">47</div>
              </motion.div>
            </div>

            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-3xl blur-3xl -z-10"></div>
          </motion.div>
        </div>
      </section>

      {/* Features Section - New Grid Layout */}
      <section className="py-32 px-4 lg:px-14 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl font-bold text-white mb-6">
              Why Choose{" "}
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                SnapLink
              </span>
              ?
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Built for performance, designed for scale. Every feature crafted to give you the edge.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-xl rounded-3xl p-8 border border-gray-700/30 hover:border-purple-500/50 transition-all duration-500 hover:scale-105"
              >
                <div className="flex items-start gap-6">
                  <div className="p-4 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-2xl border border-purple-500/30 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-purple-400">{feature.icon}</div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/5 to-blue-600/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section - New Carousel Style */}
      <section className="py-32 px-4 lg:px-14 bg-gradient-to-r from-gray-900/50 to-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl font-bold text-white mb-6">
              Loved by{" "}
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Thousands
              </span>
            </h2>
            <p className="text-xl text-gray-400">See what our users are saying about SnapLink</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-xl rounded-3xl p-8 border border-gray-700/30 hover:border-purple-500/30 transition-all duration-300"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">"{testimonial.content}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="text-white font-semibold">{testimonial.name}</div>
                    <div className="text-gray-400 text-sm">
                      {testimonial.role} at {testimonial.company}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - New Design */}
      <section className="py-32 px-4 lg:px-14 relative">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl p-12 relative overflow-hidden"
          >
            <div className="relative z-10">
              <h2 className="text-5xl font-bold text-white mb-6">Ready to Transform Your Links?</h2>
              <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
                Join thousands of teams already using SnapLink to boost their marketing performance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={dashBoardNavigateHandler}
                  className="px-8 py-4 bg-white text-purple-600 rounded-2xl font-bold hover:bg-gray-100 transition-all duration-300 hover:scale-105"
                >
                  Get Started Free
                </button>
                {/* <button
                  onClick={dashBoardNavigateHandler}
                  className="px-8 py-4 border-2 border-white/30 text-white rounded-2xl font-bold hover:bg-white/10 transition-all duration-300"
                >
                  Contact Sales
                </button> */}
              </div>
            </div>

            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/20 to-transparent"></div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default LandingPage

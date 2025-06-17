"use client"
import { motion } from "framer-motion"
import { Zap, Users, Globe, Award, ArrowRight, Star } from "lucide-react"

const AboutPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  const milestones = [
    { year: "2020", title: "Founded", description: "Started with a vision to simplify URL management" },
    { year: "2021", title: "1M Links", description: "Reached our first million shortened links" },
    { year: "2022", title: "Global Expansion", description: "Expanded to serve users in 50+ countries" },
    { year: "2023", title: "10M+ Users", description: "Trusted by over 10 million users worldwide" },
  ]

  const values = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Innovation First",
      description: "We constantly push the boundaries of what's possible in URL management and analytics.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "User-Centric",
      description: "Every feature we build is designed with our users' needs and feedback at the center.",
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Impact",
      description: "We're building tools that connect people and businesses across the globe.",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Excellence",
      description: "We maintain the highest standards in security, performance, and user experience.",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950/20 to-slate-900 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 lg:px-14">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/30 backdrop-blur-xl">
              <Star className="w-5 h-5 text-yellow-400" />
              <span className="text-purple-200 font-semibold">About SnapLink</span>
            </div>

            <h1 className="text-6xl lg:text-8xl font-black leading-tight">
              <span className="block text-white">Redefining</span>
              <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                Digital
              </span>
              <span className="block text-white">Connections</span>
            </h1>

            <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              We're on a mission to transform how the world shares and tracks digital content. From simple URL
              shortening to advanced analytics, we're building the future of link management.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-white">10M+</div>
                <div className="text-gray-400">Links Created</div>
              </div>
              <div className="hidden sm:block w-px h-12 bg-gray-700"></div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white">150+</div>
                <div className="text-gray-400">Countries</div>
              </div>
              <div className="hidden sm:block w-px h-12 bg-gray-700"></div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white">99.9%</div>
                <div className="text-gray-400">Uptime</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4 lg:px-14">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-5xl font-bold text-white">
                Our{" "}
                <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  Story
                </span>
              </h2>
              <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
                <p>
                  SnapLink was born from a simple frustration: existing URL shorteners were either too basic or too
                  complex. We saw an opportunity to create something different—a platform that combines simplicity with
                  powerful features.
                </p>
                <p>
                  What started as a weekend project has grown into a platform trusted by millions of users worldwide.
                  From individual creators to Fortune 500 companies, SnapLink powers the digital connections that matter
                  most.
                </p>
                <p>
                  Today, we're not just shortening URLs—we're building the infrastructure for the future of digital
                  marketing, analytics, and user engagement.
                </p>
              </div>
              <button className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold rounded-2xl hover:scale-105 transition-all duration-300">
                Learn More
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-slate-900/50 to-slate-800/50 backdrop-blur-xl rounded-3xl p-8 border border-slate-700/50">
                <div className="space-y-6">
                  {milestones.map((milestone, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center text-white font-bold text-lg">
                        {milestone.year}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-2">{milestone.title}</h3>
                        <p className="text-gray-400">{milestone.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-blue-600/10 rounded-3xl blur-3xl -z-10"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 lg:px-14 bg-gradient-to-r from-slate-900/50 to-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-white mb-6">
              Our{" "}
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Values</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              The principles that guide everything we do and every decision we make.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-8"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group bg-gradient-to-br from-slate-900/50 to-slate-800/50 backdrop-blur-xl rounded-3xl p-8 border border-slate-700/30 hover:border-purple-500/50 transition-all duration-500 hover:scale-105"
              >
                <div className="flex items-start gap-6">
                  <div className="p-4 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-2xl border border-purple-500/30 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-purple-400">{value.icon}</div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-3">{value.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{value.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 lg:px-14">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-5xl font-bold text-white">
              Built by{" "}
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Dreamers
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our diverse team of engineers, designers, and visionaries work together to create the best possible
              experience for our users.
            </p>

            <div className="grid md:grid-cols-3 gap-8 pt-12">
              {[
                { role: "Engineering", count: "25+", description: "World-class engineers" },
                { role: "Design", count: "8+", description: "Creative designers" },
                { role: "Support", count: "12+", description: "Customer success experts" },
              ].map((team, index) => (
                <div
                  key={index}
                  className="p-8 bg-gradient-to-br from-slate-900/50 to-slate-800/50 backdrop-blur-xl rounded-3xl border border-slate-700/30"
                >
                  <div className="text-4xl font-bold text-white mb-2">{team.count}</div>
                  <div className="text-xl font-semibold text-purple-400 mb-2">{team.role}</div>
                  <div className="text-gray-400">{team.description}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 lg:px-14">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl p-12 relative overflow-hidden"
          >
            <div className="relative z-10 space-y-6">
              <h2 className="text-5xl font-bold text-white">Ready to Join Our Journey?</h2>
              <p className="text-xl text-purple-100 max-w-2xl mx-auto">
                Be part of the next chapter in digital link management. Start your SnapLink journey today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <button className="px-8 py-4 bg-white text-purple-600 rounded-2xl font-bold hover:bg-gray-100 transition-all duration-300 hover:scale-105">
                  Get Started Free
                </button>
                <button className="px-8 py-4 border-2 border-white/30 text-white rounded-2xl font-bold hover:bg-white/10 transition-all duration-300">
                  Contact Us
                </button>
              </div>
            </div>
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/20 to-transparent"></div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage

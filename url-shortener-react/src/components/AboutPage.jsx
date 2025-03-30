import React from "react";
import { motion } from "framer-motion";
import { Link2, BarChart2, Shield, Zap } from 'lucide-react';

const AboutPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="min-h-[calc(100vh-64px)] bg-gradient-to-b from-slate-50 to-white lg:px-14 sm:px-8 px-5 py-16">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="inline-flex items-center px-3 py-1.5 mb-6 rounded-full bg-blue-50 border border-blue-100">
            <span className="text-blue-600 text-sm font-medium">About Us</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6 tracking-tight">
            About <span className="text-blue-600">Snap</span>Link
          </h1>
          <p className="text-slate-600 text-lg leading-relaxed max-w-3xl">
            SnapLink simplifies URL shortening for efficient sharing. Our platform allows you to easily
            generate, manage, and track your shortened links. With powerful analytics and robust security,
            SnapLink is the perfect solution for individuals and businesses looking to optimize their
            online presence and streamline their link management.
          </p>
        </motion.div>

        {/* Features Section */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 gap-10 max-w-4xl"
        >
          <motion.div variants={itemVariants} className="bg-white rounded-xl p-6 shadow-lg shadow-blue-100/40 border border-slate-100 hover:shadow-xl hover:shadow-blue-100/50 transition-all duration-300">
            <div className="flex items-start gap-5">
              <div className="bg-blue-50 p-3 rounded-lg">
                <Link2 className="text-blue-600 h-6 w-6" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-slate-800 mb-2">Simple URL Shortening</h2>
                <p className="text-slate-600">
                  Experience the ease of creating short, memorable URLs in just a
                  few clicks. Our intuitive interface and quick setup process
                  ensure you can start shortening URLs without any hassle.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="bg-white rounded-xl p-6 shadow-lg shadow-blue-100/40 border border-slate-100 hover:shadow-xl hover:shadow-blue-100/50 transition-all duration-300">
            <div className="flex items-start gap-5">
              <div className="bg-green-50 p-3 rounded-lg">
                <BarChart2 className="text-green-600 h-6 w-6" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-slate-800 mb-2">Powerful Analytics</h2>
                <p className="text-slate-600">
                  Gain insights into your link performance with our comprehensive
                  analytics dashboard. Track clicks, geographical data, and
                  referral sources to optimize your marketing strategies.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="bg-white rounded-xl p-6 shadow-lg shadow-blue-100/40 border border-slate-100 hover:shadow-xl hover:shadow-blue-100/50 transition-all duration-300">
            <div className="flex items-start gap-5">
              <div className="bg-purple-50 p-3 rounded-lg">
                <Shield className="text-purple-600 h-6 w-6" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-slate-800 mb-2">Enhanced Security</h2>
                <p className="text-slate-600">
                  Rest assured with our robust security measures. All shortened
                  URLs are protected with advanced encryption, ensuring your data
                  remains safe and secure.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="bg-white rounded-xl p-6 shadow-lg shadow-blue-100/40 border border-slate-100 hover:shadow-xl hover:shadow-blue-100/50 transition-all duration-300">
            <div className="flex items-start gap-5">
              <div className="bg-red-50 p-3 rounded-lg">
                <Zap className="text-red-500 h-6 w-6" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-slate-800 mb-2">Fast and Reliable</h2>
                <p className="text-slate-600">
                  Enjoy lightning-fast redirects and high uptime with our reliable
                  infrastructure. Your shortened URLs will always be available and
                  responsive, ensuring a seamless experience for your users.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Stats Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 bg-blue-600 rounded-2xl p-10 text-white"
        >
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-2">Trusted by thousands worldwide</h2>
            <p className="text-blue-100 max-w-2xl mx-auto">
              Join the thousands of individuals and businesses who trust SnapLink for their URL shortening needs.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <p className="text-4xl font-bold mb-1">10M+</p>
              <p className="text-blue-100">Links Created</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold mb-1">5K+</p>
              <p className="text-blue-100">Active Users</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold mb-1">99.9%</p>
              <p className="text-blue-100">Uptime</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold mb-1">50+</p>
              <p className="text-blue-100">Countries</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPage;

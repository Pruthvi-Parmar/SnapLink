import { Facebook, Twitter, Instagram, Linkedin, Mail, MapPin, Phone, Zap, ArrowRight } from "lucide-react"

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 border-t border-purple-500/20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, purple 2px, transparent 2px)`,
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      <div className="relative z-10">
        {/* Newsletter Section */}
        <div className="border-b border-slate-800/50 py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-14">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold text-white mb-4">
                Stay ahead of the{" "}
                <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  curve
                </span>
              </h2>
              <p className="text-xl text-gray-400 mb-8">
                Get the latest updates, tips, and exclusive features delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-4 bg-slate-800/50 border border-slate-700/50 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-500/50 backdrop-blur-xl"
                />
                <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold rounded-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2">
                  Subscribe
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-14">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
              {/* Brand Section */}
              <div className="lg:col-span-2 space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center">
                    <Zap className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <span className="text-3xl font-black bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                      SNAP
                    </span>
                    <span className="text-3xl font-black bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                      LINK
                    </span>
                  </div>
                </div>
                <p className="text-gray-400 text-lg leading-relaxed max-w-md">
                  The next-generation URL shortening platform built for modern teams. Transform your links, amplify your
                  reach.
                </p>
                <div className="flex space-x-4">
                  {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                    <a
                      key={index}
                      href="#"
                      className="group w-12 h-12 bg-slate-800/50 border border-slate-700/50 rounded-2xl flex items-center justify-center hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-600 hover:border-transparent transition-all duration-300"
                    >
                      <Icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Product Links */}
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-white">Product</h3>
                <ul className="space-y-4">
                  {["URL Shortener", "Analytics", "QR Codes", "Custom Domains", "API Access", "Integrations"].map(
                    (item) => (
                      <li key={item}>
                        <a
                          href="#"
                          className="text-gray-400 hover:text-purple-400 transition-colors duration-300 flex items-center gap-2 group"
                        >
                          <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                          {item}
                        </a>
                      </li>
                    ),
                  )}
                </ul>
              </div>

              {/* Company Links */}
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-white">Company</h3>
                <ul className="space-y-4">
                  {["About Us", "Careers", "Press", "Blog", "Partners", "Contact"].map((item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="text-gray-400 hover:text-purple-400 transition-colors duration-300 flex items-center gap-2 group"
                      >
                        <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact Info */}
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-white">Get in Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3 p-4 bg-slate-800/30 rounded-2xl border border-slate-700/30">
                    <MapPin className="w-5 h-5 text-purple-400 mt-0.5" />
                    <div>
                      <p className="text-white font-medium">Headquarters</p>
                      <p className="text-gray-400 text-sm">San Francisco, CA</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-slate-800/30 rounded-2xl border border-slate-700/30">
                    <Mail className="w-5 h-5 text-purple-400 mt-0.5" />
                    <div>
                      <p className="text-white font-medium">Email</p>
                      <p className="text-gray-400 text-sm">hello@snaplink.app</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-slate-800/30 rounded-2xl border border-slate-700/30">
                    <Phone className="w-5 h-5 text-purple-400 mt-0.5" />
                    <div>
                      <p className="text-white font-medium">Support</p>
                      <p className="text-gray-400 text-sm">24/7 Available</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800/50 py-8">
          <div className="max-w-7xl mx-auto px-6 lg:px-14">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
              <p className="text-gray-500 text-center lg:text-left">
                &copy; {new Date().getFullYear()} SnapLink. All rights reserved. Built with ❤️ for the future.
              </p>
              <div className="flex flex-wrap justify-center gap-8">
                {["Privacy Policy", "Terms of Service", "Cookie Policy", "Security"].map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="text-gray-500 hover:text-purple-400 transition-colors duration-300 text-sm"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

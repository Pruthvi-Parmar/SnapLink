import { Facebook, Twitter, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8 z-40 relative">
      <div className="container mx-auto px-6 lg:px-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          {/* Company Info */}
          <div>
            <h2 className="text-2xl font-bold mb-4">
              <span className="text-blue-400">Snap</span>Link
            </h2>
            <p className="text-slate-300 mb-6 leading-relaxed">
              Simplifying URL shortening for efficient sharing. Create, manage, and track your links with ease.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-slate-800 p-2 rounded-full hover:bg-blue-600 transition-colors duration-200">
                <Facebook size={18} />
              </a>
              <a href="#" className="bg-slate-800 p-2 rounded-full hover:bg-blue-600 transition-colors duration-200">
                <Twitter size={18} />
              </a>
              <a href="#" className="bg-slate-800 p-2 rounded-full hover:bg-blue-600 transition-colors duration-200">
                <Instagram size={18} />
              </a>
              <a href="#" className="bg-slate-800 p-2 rounded-full hover:bg-blue-600 transition-colors duration-200">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="/" className="text-slate-300 hover:text-blue-400 transition-colors duration-200">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="text-slate-300 hover:text-blue-400 transition-colors duration-200">
                  About
                </a>
              </li>
              <li>
                <a href="/dashboard" className="text-slate-300 hover:text-blue-400 transition-colors duration-200">
                  Dashboard
                </a>
              </li>
              <li>
                <a href="/login" className="text-slate-300 hover:text-blue-400 transition-colors duration-200">
                  Login
                </a>
              </li>
              <li>
                <a href="/register" className="text-slate-300 hover:text-blue-400 transition-colors duration-200">
                  Register
                </a>
              </li>
            </ul>
          </div>

          {/* Features */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Features</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-slate-300 hover:text-blue-400 transition-colors duration-200">
                  URL Shortening
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-300 hover:text-blue-400 transition-colors duration-200">
                  Analytics Dashboard
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-300 hover:text-blue-400 transition-colors duration-200">
                  Custom Links
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-300 hover:text-blue-400 transition-colors duration-200">
                  QR Codes
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-300 hover:text-blue-400 transition-colors duration-200">
                  API Access
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-blue-400 mt-0.5" />
                <span className="text-slate-300">123 Tech Street, San Francisco, CA 94107</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-blue-400" />
                <span className="text-slate-300">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-blue-400" />
                <span className="text-slate-300">support@snaplink.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 mt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} SnapLink. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-slate-400 text-sm hover:text-blue-400 transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="#" className="text-slate-400 text-sm hover:text-blue-400 transition-colors duration-200">
              Terms of Service
            </a>
            <a href="#" className="text-slate-400 text-sm hover:text-blue-400 transition-colors duration-200">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer


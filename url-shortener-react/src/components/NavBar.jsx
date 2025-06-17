"use client"

import { useState, useEffect } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { Menu, X, Zap, User, LogOut, BarChart3 } from "lucide-react"
import { useStoreContext } from "../contextApi/ContextApi"

const Navbar = () => {
  const navigate = useNavigate()
  const { token, setToken } = useStoreContext()
  const path = useLocation().pathname
  const [navbarOpen, setNavbarOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const onLogOutHandler = () => {
    setToken(null)
    localStorage.removeItem("JWT_TOKEN")
    navigate("/login")
  }

  const closeNavbar = () => {
    setNavbarOpen(false)
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-slate-950/80 backdrop-blur-2xl border-b border-purple-500/20 shadow-2xl shadow-purple-500/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo - Completely New Design */}
          <Link to="/" className="group flex items-center space-x-3">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div className="absolute -inset-1 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl blur opacity-30 group-hover:opacity-60 transition-opacity"></div>
            </div>
            <div className="hidden sm:block">
              <span className="text-2xl font-black bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                SNAP
              </span>
              <span className="text-2xl font-black bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                LINK
              </span>
            </div>
          </Link>

          {/* Desktop Navigation - New Pill Design */}
          <div className="hidden lg:flex items-center">
            <div className="flex items-center space-x-1 bg-slate-900/50 backdrop-blur-xl rounded-2xl p-2 border border-slate-700/50">
              <Link
                to="/"
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  path === "/"
                    ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg"
                    : "text-gray-300 hover:text-white hover:bg-slate-800/50"
                }`}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  path === "/about"
                    ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg"
                    : "text-gray-300 hover:text-white hover:bg-slate-800/50"
                }`}
              >
                About
              </Link>
              {token && (
                <Link
                  to="/dashboard"
                  className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 flex items-center gap-2 ${
                    path === "/dashboard"
                      ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg"
                      : "text-gray-300 hover:text-white hover:bg-slate-800/50"
                  }`}
                >
                  <BarChart3 className="w-4 h-4" />
                  Dashboard
                </Link>
              )}
            </div>
          </div>

          {/* Auth Buttons - New Design */}
          <div className="hidden lg:flex items-center space-x-4">
            {!token ? (
              <>
                <Link
                  to="/login"
                  className="px-6 py-3 text-gray-300 hover:text-white font-medium transition-colors duration-300 flex items-center gap-2"
                >
                  <User className="w-4 h-4" />
                  Sign In
                </Link>
                <Link
                  to="/register"
                  className="group relative px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25"
                >
                  <span className="relative z-10">Get Started</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </Link>
              </>
            ) : (
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                  <User className="w-5 h-5 text-white" />
                </div>
                <button
                  onClick={onLogOutHandler}
                  className="px-6 py-3 bg-slate-800/50 hover:bg-slate-700/50 text-gray-300 hover:text-white font-medium rounded-xl transition-all duration-300 flex items-center gap-2 border border-slate-700/50"
                >
                  <LogOut className="w-4 h-4" />
                  Sign Out
                </button>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setNavbarOpen(!navbarOpen)}
            className="lg:hidden p-2 rounded-xl bg-slate-800/50 border border-slate-700/50 backdrop-blur-xl"
          >
            {navbarOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu - Completely New Slide Design */}
      <div
        className={`lg:hidden fixed inset-0 z-40 transition-all duration-500 ${navbarOpen ? "visible" : "invisible"}`}
      >
        <div
          className={`absolute inset-0 bg-slate-950/80 backdrop-blur-xl transition-opacity duration-500 ${
            navbarOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={closeNavbar}
        />
        <div
          className={`absolute top-0 right-0 h-full w-80 bg-gradient-to-br from-slate-900 to-slate-800 border-l border-purple-500/20 transform transition-transform duration-500 ${
            navbarOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="p-8 space-y-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-white">SnapLink</span>
              </div>
              <button onClick={closeNavbar} className="p-2 text-gray-400 hover:text-white">
                <X className="w-6 h-6" />
              </button>
            </div>

            <nav className="space-y-4">
              <Link
                to="/"
                onClick={closeNavbar}
                className={`block px-6 py-4 rounded-2xl font-medium transition-all duration-300 ${
                  path === "/"
                    ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white"
                    : "text-gray-300 hover:text-white hover:bg-slate-800/50"
                }`}
              >
                Home
              </Link>
              <Link
                to="/about"
                onClick={closeNavbar}
                className={`block px-6 py-4 rounded-2xl font-medium transition-all duration-300 ${
                  path === "/about"
                    ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white"
                    : "text-gray-300 hover:text-white hover:bg-slate-800/50"
                }`}
              >
                About
              </Link>
              {token && (
                <Link
                  to="/dashboard"
                  onClick={closeNavbar}
                  className={`block px-6 py-4 rounded-2xl font-medium transition-all duration-300 ${
                    path === "/dashboard"
                      ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white"
                      : "text-gray-300 hover:text-white hover:bg-slate-800/50"
                  }`}
                >
                  Dashboard
                </Link>
              )}
            </nav>

            <div className="pt-8 border-t border-slate-700/50 space-y-4">
              {!token ? (
                <>
                  <Link
                    to="/login"
                    onClick={closeNavbar}
                    className="block w-full px-6 py-4 text-center bg-slate-800/50 text-gray-300 hover:text-white font-medium rounded-2xl transition-all duration-300"
                  >
                    Sign In
                  </Link>
                  <Link
                    to="/register"
                    onClick={closeNavbar}
                    className="block w-full px-6 py-4 text-center bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold rounded-2xl transition-all duration-300"
                  >
                    Get Started
                  </Link>
                </>
              ) : (
                <button
                  onClick={() => {
                    onLogOutHandler()
                    closeNavbar()
                  }}
                  className="w-full px-6 py-4 bg-slate-800/50 text-gray-300 hover:text-white font-medium rounded-2xl transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <LogOut className="w-4 h-4" />
                  Sign Out
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

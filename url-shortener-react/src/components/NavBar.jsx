"use client"

import { useState, useEffect } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { Menu, X } from "lucide-react"
import { useStoreContext } from "../contextApi/ContextApi"

const Navbar = () => {
  const navigate = useNavigate()
  const { token, setToken } = useStoreContext()
  const path = useLocation().pathname
  const [navbarOpen, setNavbarOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Add scroll effect
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
    <div
      className={`h-16 z-50 sticky top-0 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-200/80" : "bg-transparent"
      }`}
    >
      <div className="lg:px-14 sm:px-8 px-4 w-full flex justify-between items-center h-full">
        <Link to="/" className="flex items-center">
          <h1
            className={`font-bold text-2xl ${scrolled ? "text-blue-600" : "text-blue-600"} transition-colors duration-300`}
          >
            Snap<span className="text-slate-800">Link</span>
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-8">
            <li>
              <Link
                className={`font-medium transition-colors duration-200 ${
                  path === "/" ? "text-blue-600" : "text-slate-600 hover:text-blue-600"
                }`}
                to="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className={`font-medium transition-colors duration-200 ${
                  path === "/about" ? "text-blue-600" : "text-slate-600 hover:text-blue-600"
                }`}
                to="/about"
              >
                About
              </Link>
            </li>
            {token && (
              <li>
                <Link
                  className={`font-medium transition-colors duration-200 ${
                    path === "/dashboard" ? "text-blue-600" : "text-slate-600 hover:text-blue-600"
                  }`}
                  to="/dashboard"
                >
                  Dashboard
                </Link>
              </li>
            )}
          </ul>

          <div className="flex items-center gap-3">
            {!token ? (
              <>
                <Link to="/login" className="text-slate-700 font-medium hover:text-blue-600 transition-colors">
                  Sign in
                </Link>
                <Link
                  to="/register"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-lg transition-colors duration-200"
                >
                  Sign up
                </Link>
              </>
            ) : (
              <button
                onClick={onLogOutHandler}
                className="bg-slate-100 hover:bg-slate-200 text-slate-800 font-medium px-4 py-2 rounded-lg transition-colors duration-200"
              >
                Sign out
              </button>
            )}
          </div>
        </div>

        {/* Mobile Navigation Toggle */}
        <button
          onClick={() => setNavbarOpen(!navbarOpen)}
          className="md:hidden flex items-center"
          aria-label={navbarOpen ? "Close menu" : "Open menu"}
        >
          {navbarOpen ? (
            <X className={`${scrolled ? "text-slate-800" : "text-blue-600"} w-6 h-6`} />
          ) : (
            <Menu className={`${scrolled ? "text-slate-800" : "text-blue-600"} w-6 h-6`} />
          )}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`md:hidden fixed inset-x-0 top-16 bg-white border-b border-slate-200 shadow-lg transition-all duration-300 ease-in-out z-50 ${
          navbarOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"
        }`}
      >
        <div className="px-4 py-6 space-y-6">
          <ul className="space-y-4">
            <li>
              <Link
                className={`block font-medium text-lg ${path === "/" ? "text-blue-600" : "text-slate-700"}`}
                to="/"
                onClick={closeNavbar}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className={`block font-medium text-lg ${path === "/about" ? "text-blue-600" : "text-slate-700"}`}
                to="/about"
                onClick={closeNavbar}
              >
                About
              </Link>
            </li>
            {token && (
              <li>
                <Link
                  className={`block font-medium text-lg ${path === "/dashboard" ? "text-blue-600" : "text-slate-700"}`}
                  to="/dashboard"
                  onClick={closeNavbar}
                >
                  Dashboard
                </Link>
              </li>
            )}
          </ul>

          <div className="pt-4 border-t border-slate-200">
            {!token ? (
              <div className="flex flex-col gap-3">
                <Link
                  to="/login"
                  className="w-full text-center bg-slate-100 hover:bg-slate-200 text-slate-800 font-medium py-3 rounded-lg transition-colors"
                  onClick={closeNavbar}
                >
                  Sign in
                </Link>
                <Link
                  to="/register"
                  className="w-full text-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg transition-colors"
                  onClick={closeNavbar}
                >
                  Sign up
                </Link>
              </div>
            ) : (
              <button
                onClick={() => {
                  onLogOutHandler()
                  closeNavbar()
                }}
                className="w-full bg-slate-100 hover:bg-slate-200 text-slate-800 font-medium py-3 rounded-lg transition-colors"
              >
                Sign out
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar


"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { Link, useNavigate } from "react-router-dom"
import api from "../api/api"
import toast from "react-hot-toast"
import { Loader2, Eye, EyeOff, Zap, Users, TrendingUp, ArrowRight, CheckCircle } from "lucide-react"

const RegisterPage = () => {
  const navigate = useNavigate()
  const [loader, setLoader] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
    mode: "onTouched",
  })

  const registerHandler = async (data) => {
    setLoader(true)
    try {
      const { data: response } = await api.post("/api/auth/public/register", data)
      reset()
      navigate("/login")
      toast.success("Registration Successful!")
    } catch (error) {
      console.log(error)
      toast.error("Registration Failed!")
    } finally {
      setLoader(false)
    }
  }

  const benefits = [
    "Unlimited URL shortening",
    "Advanced analytics dashboard",
    "Custom branded domains",
    "QR code generation",
    "Team collaboration tools",
    "24/7 premium support",
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950/20 to-slate-900 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-2/3 left-1/4 w-64 h-64 bg-pink-500/10 rounded-full blur-2xl animate-pulse delay-2000"></div>
      </div>

      <div className="w-full max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* Left Side - Benefits & Branding */}
        <div className="hidden lg:block space-y-8">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-3xl flex items-center justify-center">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <div>
              <span className="text-4xl font-black bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                SNAP
              </span>
              <span className="text-4xl font-black bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                LINK
              </span>
            </div>
          </div>

          <div className="space-y-6">
            <h1 className="text-5xl font-bold text-white leading-tight">
              Join{" "}
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                10,000+
              </span>{" "}
              teams already using SnapLink
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed">
              Start your journey with the most powerful URL management platform. Create your account in seconds and
              unlock unlimited possibilities.
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 gap-4">
            <div className="p-6 bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-2xl border border-purple-500/30 backdrop-blur-xl">
              <Users className="w-8 h-8 text-purple-400 mb-3" />
              <div className="text-2xl font-bold text-white">10K+</div>
              <div className="text-purple-200 text-sm">Active Users</div>
            </div>
            <div className="p-6 bg-gradient-to-br from-blue-600/20 to-green-600/20 rounded-2xl border border-blue-500/30 backdrop-blur-xl">
              <TrendingUp className="w-8 h-8 text-blue-400 mb-3" />
              <div className="text-2xl font-bold text-white">50M+</div>
              <div className="text-blue-200 text-sm">Links Created</div>
            </div>
          </div>

          {/* Benefits List */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">What you'll get:</h3>
            <div className="space-y-3">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side - Registration Form */}
        <div className="w-full max-w-md mx-auto lg:mx-0">
          <div className="bg-slate-900/50 backdrop-blur-2xl rounded-3xl p-8 border border-slate-700/50 shadow-2xl">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4 lg:hidden">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-white mb-2">Create Account</h2>
              <p className="text-gray-400">Start your SnapLink journey today</p>
            </div>

            <form onSubmit={handleSubmit(registerHandler)} className="space-y-6">
              <div className="space-y-4">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Choose a username"
                    className={`w-full px-6 py-4 bg-slate-800/50 border rounded-2xl text-white placeholder-gray-400 focus:outline-none transition-all duration-300 ${
                      errors.username
                        ? "border-red-400 focus:border-red-400 focus:ring-2 focus:ring-red-400/30"
                        : "border-slate-600/50 focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/30"
                    }`}
                    {...register("username", { required: "Username is required" })}
                  />
                  {errors.username && (
                    <p className="text-red-400 text-sm mt-2 flex items-center gap-2">
                      <span className="w-4 h-4 rounded-full bg-red-400 flex items-center justify-center text-white text-xs">
                        !
                      </span>
                      {errors.username.message}
                    </p>
                  )}
                </div>

                <div className="relative">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className={`w-full px-6 py-4 bg-slate-800/50 border rounded-2xl text-white placeholder-gray-400 focus:outline-none transition-all duration-300 ${
                      errors.email
                        ? "border-red-400 focus:border-red-400 focus:ring-2 focus:ring-red-400/30"
                        : "border-slate-600/50 focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/30"
                    }`}
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+com+$/,
                        message: "Invalid email format",
                      },
                    })}
                  />
                  {errors.email && (
                    <p className="text-red-400 text-sm mt-2 flex items-center gap-2">
                      <span className="w-4 h-4 rounded-full bg-red-400 flex items-center justify-center text-white text-xs">
                        !
                      </span>
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Create a password (min. 6 characters)"
                    className={`w-full px-6 py-4 bg-slate-800/50 border rounded-2xl text-white placeholder-gray-400 focus:outline-none transition-all duration-300 pr-12 ${
                      errors.password
                        ? "border-red-400 focus:border-red-400 focus:ring-2 focus:ring-red-400/30"
                        : "border-slate-600/50 focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/30"
                    }`}
                    {...register("password", {
                      required: "Password is required",
                      minLength: { value: 6, message: "Minimum 6 characters required" },
                    })}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                  {errors.password && (
                    <p className="text-red-400 text-sm mt-2 flex items-center gap-2">
                      <span className="w-4 h-4 rounded-full bg-red-400 flex items-center justify-center text-white text-xs">
                        !
                      </span>
                      {errors.password.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  className="w-5 h-5 rounded border-slate-600 bg-slate-800 text-purple-500 focus:ring-purple-500/30 mt-0.5"
                  required
                />
                <label className="text-gray-400 text-sm leading-relaxed">
                  I agree to the{" "}
                  <Link to="/terms" className="text-purple-400 hover:text-purple-300 transition-colors">
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link to="/privacy" className="text-purple-400 hover:text-purple-300 transition-colors">
                    Privacy Policy
                  </Link>
                </label>
              </div>

              <button
                disabled={loader}
                type="submit"
                className="group relative w-full px-6 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {loader ? (
                    <>
                      <Loader2 size={20} className="animate-spin" />
                      Creating account...
                    </>
                  ) : (
                    <>
                      Create Account
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </button>

              <div className="text-center pt-4 border-t border-slate-700/50">
                <p className="text-gray-400">
                  Already have an account?{" "}
                  <Link className="font-medium text-purple-400 hover:text-purple-300 transition-colors" to="/login">
                    Sign in here
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RegisterPage

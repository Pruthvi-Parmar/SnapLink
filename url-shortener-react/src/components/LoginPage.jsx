"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { Link, useNavigate } from "react-router-dom"
import api from "../api/api"
import toast from "react-hot-toast"
import { useStoreContext } from "../contextApi/ContextApi"
import { Loader2, Eye, EyeOff, Zap, Shield, ArrowRight } from "lucide-react"

const LoginPage = () => {
  const navigate = useNavigate()
  const [loader, setLoader] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const { setToken } = useStoreContext()

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

  const loginHandler = async (data) => {
    setLoader(true)
    try {
      const { data: response } = await api.post("/api/auth/public/login", data)
      console.log(response.token)
      setToken(response.token)
      localStorage.setItem("JWT_TOKEN", JSON.stringify(response.token))
      toast.success("Login Successful!")
      reset()
      navigate("/dashboard")
    } catch (error) {
      console.log(error)
      toast.error("Login Failed!")
    } finally {
      setLoader(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950/20 to-slate-900 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="w-full max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Side - Branding */}
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
              Welcome back to the{" "}
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">future</span>{" "}
              of link management
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed">
              Access your dashboard and continue optimizing your link performance with advanced analytics and insights.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-4 p-4 bg-slate-800/30 rounded-2xl border border-slate-700/30">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-white font-semibold">Enterprise Security</h3>
                <p className="text-gray-400 text-sm">Your data is protected with military-grade encryption</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-slate-800/30 rounded-2xl border border-slate-700/30">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-white font-semibold">Lightning Fast</h3>
                <p className="text-gray-400 text-sm">99.9% uptime with global CDN infrastructure</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Login Form */}
        <div className="w-full max-w-md mx-auto lg:mx-0">
          <div className="bg-slate-900/50 backdrop-blur-2xl rounded-3xl p-8 border border-slate-700/50 shadow-2xl">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4 lg:hidden">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-white mb-2">Sign In</h2>
              <p className="text-gray-400">Access your SnapLink dashboard</p>
            </div>

            <form onSubmit={handleSubmit(loginHandler)} className="space-y-6">
              <div className="space-y-4">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Username"
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
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
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

              <div className="flex items-center justify-between">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    className="w-5 h-5 rounded border-slate-600 bg-slate-800 text-purple-500 focus:ring-purple-500/30"
                  />
                  <span className="text-gray-400 text-sm">Remember me</span>
                </label>
                <Link
                  to="/forgot-password"
                  className="text-purple-400 hover:text-purple-300 text-sm font-medium transition-colors"
                >
                  Forgot password?
                </Link>
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
                      Signing in...
                    </>
                  ) : (
                    <>
                      Sign In
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </button>

              <div className="text-center pt-4 border-t border-slate-700/50">
                <p className="text-gray-400">
                  Don't have an account?{" "}
                  <Link className="font-medium text-purple-400 hover:text-purple-300 transition-colors" to="/register">
                    Create one now
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

export default LoginPage

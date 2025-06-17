"use client"

import { useState } from "react"
import { useStoreContext } from "../../contextApi/ContextApi"
import { useForm } from "react-hook-form"
import { X, Link2, Zap, Loader2, CheckCircle, AlertCircle } from "lucide-react"
import api from "../../api/api"
import toast from "react-hot-toast"

const CreateNewShorten = ({ setOpen, refetch }) => {
  const { token } = useStoreContext()
  const [loading, setLoading] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      originalUrl: "",
    },
    mode: "onTouched",
  })

  const createShortUrlHandler = async (data) => {
    setLoading(true)
    try {
      const { data: res } = await api.post("/api/urls/shorten", data, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: "Bearer " + token,
        },
      })

      const shortenUrl = `${import.meta.env.VITE_REACT_FRONT_END_URL + "/s/" + `${res.shortUrl}`}`
      navigator.clipboard.writeText(shortenUrl).then(() => {
        toast.success("Short URL created and copied to clipboard!", {
          position: "bottom-center",
          duration: 3000,
        })
      })

      reset()
      setOpen(false)
    } catch (error) {
      toast.error("Failed to create short URL")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-xl">
      <div className="w-full max-w-2xl bg-slate-900/90 backdrop-blur-2xl rounded-3xl border border-slate-700/50 shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="relative p-8 bg-gradient-to-r from-purple-600/10 to-blue-600/10 border-b border-slate-700/30">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center">
                <Link2 className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">Create New Link</h2>
                <p className="text-gray-400">Transform your long URL into a powerful short link</p>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              disabled={loading}
              className="p-2 text-gray-400 hover:text-white hover:bg-slate-800/50 rounded-xl transition-all duration-200 disabled:opacity-50"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(createShortUrlHandler)} className="p-8 space-y-8">
          {/* URL Input */}
          <div className="space-y-4">
            <label className="block text-white font-semibold text-lg">
              Enter your URL
              <span className="text-red-400 ml-1">*</span>
            </label>

            <div className="relative">
              <input
                type="url"
                placeholder="https://example.com/your-very-long-url-here"
                className={`w-full px-6 py-4 bg-slate-800/50 border rounded-2xl text-white placeholder-gray-400 focus:outline-none transition-all duration-300 text-lg ${
                  errors.originalUrl
                    ? "border-red-400 focus:border-red-400 focus:ring-2 focus:ring-red-400/30"
                    : "border-slate-600/50 focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/30"
                }`}
                {...register("originalUrl", {
                  required: "URL is required",
                  pattern: {
                    value:
                      /^(https?:\/\/)?(([a-zA-Z0-9\u00a1-\uffff-]+\.)+[a-zA-Z\u00a1-\uffff]{2,})(:\d{2,5})?(\/[^\s]*)?$/,
                    message: "Please enter a valid URL",
                  },
                })}
              />

              {errors.originalUrl && (
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                  <AlertCircle className="w-5 h-5 text-red-400" />
                </div>
              )}
            </div>

            {errors.originalUrl && (
              <div className="flex items-center gap-2 text-red-400 text-sm">
                <AlertCircle className="w-4 h-4" />
                {errors.originalUrl.message}
              </div>
            )}
          </div>

          {/* Features Info */}
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-gradient-to-r from-purple-600/10 to-blue-600/10 rounded-2xl border border-purple-500/20">
              <Zap className="w-6 h-6 text-purple-400 mb-2" />
              <h3 className="text-white font-semibold text-sm">Instant</h3>
              <p className="text-gray-400 text-xs">Created in milliseconds</p>
            </div>
            <div className="p-4 bg-gradient-to-r from-blue-600/10 to-green-600/10 rounded-2xl border border-blue-500/20">
              <CheckCircle className="w-6 h-6 text-blue-400 mb-2" />
              <h3 className="text-white font-semibold text-sm">Secure</h3>
              <p className="text-gray-400 text-xs">Protected & encrypted</p>
            </div>
            <div className="p-4 bg-gradient-to-r from-green-600/10 to-emerald-600/10 rounded-2xl border border-green-500/20">
              <Link2 className="w-6 h-6 text-green-400 mb-2" />
              <h3 className="text-white font-semibold text-sm">Trackable</h3>
              <p className="text-gray-400 text-xs">Full analytics included</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button
              type="button"
              onClick={() => setOpen(false)}
              disabled={loading}
              className="flex-1 px-6 py-4 bg-slate-800/50 text-gray-300 font-semibold rounded-2xl hover:bg-slate-700/50 transition-all duration-300 disabled:opacity-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="flex-1 group relative px-6 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              <span className="relative z-10 flex items-center justify-center gap-3">
                {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Creating Link...
                  </>
                ) : (
                  <>
                    <Zap className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    Create Short Link
                  </>
                )}
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CreateNewShorten

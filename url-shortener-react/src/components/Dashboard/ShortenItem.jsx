"use client"

import dayjs from "dayjs"
import { useEffect, useState } from "react"
import CopyToClipboard from "react-copy-to-clipboard"
import { ExternalLink, Calendar, MousePointer, Copy, Check, BarChart3, ChevronDown, ChevronUp } from "lucide-react"
import api from "../../api/api"
import { Link, useNavigate } from "react-router-dom"
import { useStoreContext } from "../../contextApi/ContextApi"
import { Hourglass } from "react-loader-spinner"
import Graph from "./Graph"

const ShortenItem = ({ originalUrl, shortUrl, clickCount, createdDate }) => {
  const { token } = useStoreContext()
  const navigate = useNavigate()
  const [isCopied, setIsCopied] = useState(false)
  const [analyticToggle, setAnalyticToggle] = useState(false)
  const [loader, setLoader] = useState(false)
  const [selectedUrl, setSelectedUrl] = useState("")
  const [analyticsData, setAnalyticsData] = useState([])

  const subDomain = import.meta.env.VITE_REACT_FRONT_END_URL.replace(/^https?:\/\//, "")
  const fullShortUrl = `${subDomain}/s/${shortUrl}`

  const analyticsHandler = (shortUrl) => {
    if (!analyticToggle) {
      setSelectedUrl(shortUrl)
    }
    setAnalyticToggle(!analyticToggle)
  }

  const fetchMyShortUrl = async () => {
    setLoader(true)
    try {
      const { data } = await api.get(
        `/api/urls/analytics/${selectedUrl}?startDate=2024-12-01T00:00:00&endDate=2025-12-31T23:59:59`,
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: "Bearer " + token,
          },
        },
      )
      setAnalyticsData(data)
      setSelectedUrl("")
    } catch (error) {
      navigate("/error")
      console.log(error)
    } finally {
      setLoader(false)
    }
  }

  useEffect(() => {
    if (selectedUrl) {
      fetchMyShortUrl()
    }
  }, [selectedUrl])

  useEffect(() => {
    if (isCopied) {
      const timer = setTimeout(() => setIsCopied(false), 2000)
      return () => clearTimeout(timer)
    }
  }, [isCopied])

  return (
    <div className="group bg-slate-900/50 backdrop-blur-xl rounded-3xl border border-slate-700/30 hover:border-purple-500/30 transition-all duration-500 overflow-hidden">
      {/* Main Content */}
      <div className="p-8">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left Side - Link Info */}
          <div className="flex-1 space-y-4">
            {/* Short URL */}
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center">
                  <ExternalLink className="w-5 h-5 text-white" />
                </div>
                <Link
                  target="_blank"
                  to={import.meta.env.VITE_REACT_FRONT_END_URL + "/s/" + shortUrl}
                  className="text-xl font-bold text-purple-400 hover:text-purple-300 transition-colors flex items-center gap-2 group/link"
                >
                  {fullShortUrl}
                  <ExternalLink className="w-4 h-4 opacity-0 group-hover/link:opacity-100 transition-opacity" />
                </Link>
              </div>

              {/* Original URL */}
              <div className="pl-13">
                <p className="text-gray-400 text-sm break-all">{originalUrl}</p>
              </div>
            </div>

            {/* Stats Row */}
            <div className="flex flex-wrap items-center gap-6 pt-4">
              <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-xl border border-green-500/20">
                <MousePointer className="w-4 h-4 text-green-400" />
                <span className="text-green-400 font-semibold">{clickCount.toLocaleString()}</span>
                <span className="text-green-300 text-sm">{clickCount === 1 ? "click" : "clicks"}</span>
              </div>

              <div className="flex items-center gap-2 px-4 py-2 bg-slate-800/50 rounded-xl border border-slate-700/50">
                <Calendar className="w-4 h-4 text-gray-400" />
                <span className="text-gray-300 text-sm">{dayjs(createdDate).format("MMM DD, YYYY")}</span>
              </div>

              <div className="px-4 py-2 bg-blue-500/10 rounded-xl border border-blue-500/20">
                <span className="text-blue-400 text-sm font-medium">Active</span>
              </div>
            </div>
          </div>

          {/* Right Side - Actions */}
          <div className="flex flex-col sm:flex-row lg:flex-col gap-3 lg:w-48">
            <CopyToClipboard
              onCopy={() => setIsCopied(true)}
              text={import.meta.env.VITE_REACT_FRONT_END_URL + "/s/" + shortUrl}
            >
              <button className="group/copy flex items-center justify-center gap-3 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-2xl hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25">
                {isCopied ? (
                  <>
                    <Check className="w-4 h-4" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 group-hover/copy:scale-110 transition-transform" />
                    Copy
                  </>
                )}
              </button>
            </CopyToClipboard>

            <button
              onClick={() => analyticsHandler(shortUrl)}
              className="flex items-center justify-center gap-3 px-6 py-3 bg-gradient-to-r from-pink-600 to-rose-600 text-white font-semibold rounded-2xl hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/25"
            >
              <BarChart3 className="w-4 h-4" />
              Analytics
              {analyticToggle ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>

      {/* Analytics Section */}
      {analyticToggle && (
        <div className="border-t border-slate-700/30 bg-slate-800/30 backdrop-blur-xl">
          <div className="p-8">
            <div className="flex items-center gap-3 mb-6">
              <BarChart3 className="w-5 h-5 text-purple-400" />
              <h3 className="text-xl font-bold text-white">Detailed Analytics</h3>
            </div>

            <div className="h-80 relative">
              {loader ? (
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <Hourglass
                    visible={true}
                    height="50"
                    width="50"
                    ariaLabel="hourglass-loading"
                    colors={["#8b5cf6", "#3b82f6"]}
                  />
                  <p className="text-gray-400 mt-4">Loading analytics...</p>
                </div>
              ) : analyticsData.length === 0 ? (
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-full flex items-center justify-center mb-4 border border-purple-500/30">
                    <BarChart3 className="w-8 h-8 text-purple-400" />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">No Analytics Data</h4>
                  <p className="text-gray-400 text-center text-sm max-w-md">
                    Share this link to start collecting engagement data and analytics insights.
                  </p>
                </div>
              ) : (
                <Graph graphData={analyticsData} />
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ShortenItem

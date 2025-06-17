"use client"

import { useState } from "react"
import Graph from "./Graph"
import { useStoreContext } from "../../contextApi/ContextApi"
import { useFetchMyShortUrls, useFetchTotalClicks } from "../../hooks/useQuery"
import ShortenPopUp from "./ShortenPopUp"
import { Plus, Link2, TrendingUp, Users, BarChart3, Calendar, ExternalLink } from "lucide-react"
import ShortenUrlList from "./ShortenUrlList"
import { useNavigate } from "react-router-dom"
import Loader from "../Loader"

const DashboardLayout = () => {
  const { token } = useStoreContext()
  const navigate = useNavigate()
  const [shortenPopUp, setShortenPopUp] = useState(false)

  const { isLoading, data: myShortenUrls, refetch } = useFetchMyShortUrls(token, onError)
  const { isLoading: loader, data: totalClicks } = useFetchTotalClicks(token, onError)

  function onError() {
    navigate("/error")
  }

  // Calculate stats
  const totalLinks = myShortenUrls?.length || 0
  const totalClicksCount = totalClicks?.reduce((sum, item) => sum + item.count, 0) || 0
  const avgClicksPerLink = totalLinks > 0 ? Math.round(totalClicksCount / totalLinks) : 0

  const statsCards = [
    {
      title: "Total Links",
      value: totalLinks,
      icon: <Link2 className="w-6 h-6" />,
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-500/10 to-cyan-500/10",
      change: "+12%",
    },
    {
      title: "Total Clicks",
      value: totalClicksCount.toLocaleString(),
      icon: <TrendingUp className="w-6 h-6" />,
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-500/10 to-pink-500/10",
      change: "+23%",
    },
    {
      title: "Avg. Clicks/Link",
      value: avgClicksPerLink,
      icon: <BarChart3 className="w-6 h-6" />,
      gradient: "from-green-500 to-emerald-500",
      bgGradient: "from-green-500/10 to-emerald-500/10",
      change: "+8%",
    },
    {
      title: "Active Today",
      value: Math.floor(totalClicksCount * 0.15),
      icon: <Users className="w-6 h-6" />,
      gradient: "from-orange-500 to-red-500",
      bgGradient: "from-orange-500/10 to-red-500/10",
      change: "+15%",
    },
  ]

  if (loader) {
    return <Loader />
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950/20 to-slate-900 pt-24 pb-12">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8 space-y-8">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
          <div className="space-y-2">
            <h1 className="text-4xl lg:text-5xl font-black text-white">
              Dashboard{" "}
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Overview
              </span>
            </h1>
            <p className="text-gray-400 text-lg">Monitor your link performance and analytics in real-time</p>
          </div>

          <button
            onClick={() => setShortenPopUp(true)}
            className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 flex items-center gap-3"
          >
            <Plus className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" />
            <span className="relative z-10">Create New Link</span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {statsCards.map((stat, index) => (
            <div
              key={index}
              className={`group relative bg-gradient-to-br ${stat.bgGradient} backdrop-blur-xl rounded-3xl p-6 border border-slate-700/30 hover:border-purple-500/30 transition-all duration-500 hover:scale-105`}
            >
              <div className="flex items-start justify-between mb-4">
                <div
                  className={`p-3 bg-gradient-to-r ${stat.gradient} rounded-2xl text-white group-hover:scale-110 transition-transform duration-300`}
                >
                  {stat.icon}
                </div>
                <div className="text-right">
                  <div className="text-green-400 text-sm font-semibold">{stat.change}</div>
                  <div className="text-gray-500 text-xs">vs last month</div>
                </div>
              </div>
              <div className="space-y-1">
                <div className="text-3xl font-bold text-white">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.title}</div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>

        {/* Analytics Chart */}
        <div className="bg-slate-900/50 backdrop-blur-xl rounded-3xl border border-slate-700/30 p-8 hover:border-purple-500/30 transition-all duration-500">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8 gap-4">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                <BarChart3 className="w-6 h-6 text-purple-400" />
                Click Analytics
              </h2>
              <p className="text-gray-400">Track your link performance over time</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 px-4 py-2 bg-slate-800/50 rounded-xl border border-slate-700/50">
                <Calendar className="w-4 h-4 text-gray-400" />
                <span className="text-gray-300 text-sm">Last 30 days</span>
              </div>
              {/* <button className="p-2 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:bg-slate-700/50 transition-colors">
                <ExternalLink className="w-4 h-4 text-gray-400" />
              </button> */}
            </div>
          </div>

          <div className="h-96 relative">
            {totalClicks.length === 0 ? (
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="w-24 h-24 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-full flex items-center justify-center mb-6 border border-purple-500/30">
                  <BarChart3 className="w-12 h-12 text-purple-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">No Data Available</h3>
                <p className="text-gray-400 text-center max-w-md">
                  Start sharing your shortened links to see analytics and engagement data here.
                </p>
              </div>
            ) : (
              <Graph graphData={totalClicks} />
            )}
          </div>
        </div>

        {/* Links Section */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-bold text-white flex items-center gap-3">
              <Link2 className="w-7 h-7 text-purple-400" />
              Your Links
            </h2>
            {totalLinks > 0 && (
              <div className="text-gray-400">
                {totalLinks} link{totalLinks !== 1 ? "s" : ""} created
              </div>
            )}
          </div>

          {!isLoading && totalLinks === 0 ? (
            <div className="bg-slate-900/50 backdrop-blur-xl rounded-3xl border border-slate-700/30 p-12 text-center">
              <div className="w-24 h-24 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-6 border border-purple-500/30">
                <Link2 className="w-12 h-12 text-purple-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">No Links Created Yet</h3>
              <p className="text-gray-400 mb-8 max-w-md mx-auto">
                Create your first shortened link to start tracking clicks and analyzing your audience engagement.
              </p>
              <button
                onClick={() => setShortenPopUp(true)}
                className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold rounded-2xl hover:scale-105 transition-all duration-300 flex items-center gap-3 mx-auto"
              >
                <Plus className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" />
                Create Your First Link
              </button>
            </div>
          ) : (
            <ShortenUrlList data={myShortenUrls} />
          )}
        </div>
      </div>

      <ShortenPopUp refetch={refetch} open={shortenPopUp} setOpen={setShortenPopUp} />
    </div>
  )
}

export default DashboardLayout

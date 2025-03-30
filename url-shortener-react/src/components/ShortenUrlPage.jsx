"use client"

import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { Loader2 } from "lucide-react"

const ShortenUrlPage = () => {
  const { url } = useParams()

  useEffect(() => {
    if (url) {
      window.location.href = import.meta.env.VITE_BACKEND_URL + `/${url}`
    }
  }, [url])

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-slate-50 to-white">
      <Loader2 size={40} className="text-blue-600 animate-spin mb-4" />
      <p className="text-slate-700 text-lg font-medium">Redirecting you to your destination...</p>
    </div>
  )
}

export default ShortenUrlPage


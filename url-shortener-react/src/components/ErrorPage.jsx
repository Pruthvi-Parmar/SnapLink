import React from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { AlertTriangle, Home, ArrowLeft } from 'lucide-react'

const ErrorPage = ({ message }) => {
    const navigate = useNavigate();
    
    return (
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-64px)] bg-gradient-to-b from-slate-50 to-white p-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-md w-full bg-white p-8 rounded-2xl shadow-xl shadow-red-100/30 border border-slate-100 text-center"
        >
          <div className="bg-red-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
            <AlertTriangle className="h-10 w-10 text-red-500" />
          </div>
          
          <h1 className="text-2xl md:text-3xl font-bold mb-3 text-slate-800">
            Oops! Something went wrong
          </h1>
          
          <p className="text-slate-600 mb-8">
            {message ? message : "An unexpected error has occurred. Please try again later."}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button 
              onClick={() => navigate(-1)}
              className="px-4 py-3 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 transition-colors duration-200 flex items-center justify-center gap-2 font-medium"
            >
              <ArrowLeft size={18} />
              Go Back
            </button>
            
            <button 
              onClick={() => navigate("/")}
              className="px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center gap-2 font-medium"
            >
              <Home size={18} />
              Back to Home
            </button>
          </div>
        </motion.div>
      </div>
    )
}

export default ErrorPage

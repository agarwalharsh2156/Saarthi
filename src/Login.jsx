import React from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

export const Login = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center px-4">
      <motion.div 
        className="text-center max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-gray-200 mb-8">
          Login Page
        </h1>
        <p className="text-xl text-gray-400 mb-8">
          This is where users would log in to access Saarthi.
        </p>
        <motion.button
          onClick={() => navigate('/')}
          className="bg-gray-200 text-black font-bold py-3 px-6 rounded-full text-lg hover:bg-white hover:scale-105 transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Back to Home
        </motion.button>
      </motion.div>
    </div>
  )
}

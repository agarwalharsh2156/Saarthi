import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { motion } from 'framer-motion'

export const Dashboard = () => {
  const { currentUser, logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = async () => {
    try {
      await logout()
      navigate('/login')
    } catch (error) {
      console.error('Logout failed:', error.message)
    }
  }

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center px-4">
      <motion.div 
        className="text-center max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold text-gray-200 mb-6">
          Welcome to Dashboard
        </h1>
        
        {currentUser && (
          <p className="text-xl text-gray-400 mb-8">
            Hello, {currentUser.email}!
          </p>
        )}
        
        <div className="space-y-4">
          <motion.button
            onClick={() => navigate('/menu')}
            className="bg-gray-200 text-black font-bold py-4 px-8 rounded-full text-lg md:text-xl hover:bg-white hover:scale-105 transition-all duration-300 shadow-lg mr-4"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Destinations
          </motion.button>
          
          <motion.button
            onClick={handleLogout}
            className="bg-red-600 text-white font-bold py-4 px-8 rounded-full text-lg md:text-xl hover:bg-red-700 hover:scale-105 transition-all duration-300 shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Logout
          </motion.button>
        </div>
      </motion.div>
    </div>
  )
}

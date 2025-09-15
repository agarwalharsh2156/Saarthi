import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FormInput } from './FormInput'

/**
 * AuthCard Component - Animated Login/Signup UI with sliding overlay
 * 
 * Customization:
 * - Colors: Update tailwind.config.js custom colors (primary, muted, card, cta-bg, cta-text)
 * - Card size: Modify max-w-[900px] h-[520px] classes in the main card div
 * - Animation duration: Change duration in panelVariants and formVariants
 * - Overlay color: Update gray gradient classes for overlay styling
 */

export const AuthCard = (props) => {
  const [isSignup, setIsSignup] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  })

  useEffect(() => {
    if (isAnimating) {
      const timer = setTimeout(() => {
        setIsAnimating(false)
      }, 400) // Half of the 0.8s animation duration
      return () => clearTimeout(timer)
    }
  }, [isAnimating])

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  // inside AuthCard.jsx handleSubmit
  const handleSubmit = (e) => {
    e.preventDefault()
    props?.onSuccess?.()
  }

  const panelVariants = {
    left: { x: 0 },
    right: { x: '100%' }
  }

  const formVariants = {
    hidden: { opacity: 0, x: -20, scale: 0.95 },
    visible: { opacity: 1, x: 0, scale: 1 }
  }

  const activeFormVariants = {
    hidden: { opacity: 0, x: -20, scale: 0.95 },
    visible: { opacity: 1, x: 0, scale: isAnimating ? 1.05 : 1 },
    settled: { scale: 1 }
  }

  const overlayContentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <motion.div 
        className="relative p-[2px] rounded-2xl bg-gradient-to-r from-gray-700 via-gray-600 to-gray-800 max-w-[900px] h-[520px] w-full"
        whileHover={{ 
          background: "linear-gradient(to right, #6b7280, #4b5563, #6b7280)",
          boxShadow: "0 0 25px rgba(255,255,255,0.1)"
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <div className="w-full h-full bg-[#0f0f0f]/90 backdrop-blur-xl rounded-2xl border border-gray-800 shadow-[0_10px_30px_rgba(0,0,0,0.6)] hover:border-gray-400 hover:shadow-[0_0_25px_rgba(255,255,255,0.1)] transition-all duration-500 ease-in-out overflow-hidden relative">
        {/* Sliding Overlay Panel */}
        <motion.div
          className="absolute top-0 bottom-0 w-1/2 bg-gradient-to-br from-gray-700/70 via-gray-800/60 to-gray-900/50 backdrop-blur-xl border border-gray-700/30 shadow-lg rounded-2xl z-10 flex items-center justify-center"
          variants={panelVariants}
          animate={isSignup ? 'right' : 'left'}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        >
          <motion.div
            className="text-center px-8"
            variants={overlayContentVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold text-gray-200 mb-4">
              {isSignup ? 'Welcome Back!' : 'Hello, Welcome!'}
            </h2>
            <p className="text-gray-400 mb-8 text-lg">
              {isSignup 
                ? 'Sign in to your account to continue your journey.' 
                : 'Join us and discover amazing places around the world.'
              }
            </p>
            <button
              onClick={() => {
                setIsAnimating(true)
                setIsSignup(!isSignup)
              }}
              className="px-8 py-3 bg-gray-800/40 text-gray-200 rounded-full border border-gray-600/50 hover:bg-gray-700/50 hover:border-gray-500/70 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gray-400/50 backdrop-blur-sm"
            >
              {isSignup ? 'Login' : 'Register'}
            </button>
          </motion.div>
        </motion.div>

        {/* Login Form (Right Side) */}
        <motion.div
          className="absolute top-0 right-0 w-1/2 h-full p-8 flex flex-col justify-center"
          variants={isSignup ? formVariants : activeFormVariants}
          animate={isSignup ? 'hidden' : 'visible'}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        >
          <div className="max-w-sm mx-auto w-full">
            <h2 className="text-2xl font-bold text-primary mb-8 text-center">Login</h2>
            <form onSubmit={handleSubmit}>
              <FormInput
                label="Email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter your email"
                required
              />
              <FormInput
                label="Password"
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Enter your password"
                required
              />
              <button
                type="submit"
                className="w-full bg-cta-bg text-cta-text font-bold py-3 px-6 rounded-lg hover:bg-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-card"
              >
                Login
              </button>
            </form>
          </div>
        </motion.div>

        {/* Signup Form (Left Side) */}
        <motion.div
          className="absolute top-0 left-0 w-1/2 h-full p-8 flex flex-col justify-center"
          variants={isSignup ? activeFormVariants : formVariants}
          animate={isSignup ? 'visible' : 'hidden'}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        >
          <div className="max-w-sm mx-auto w-full">
            <h2 className="text-2xl font-bold text-primary mb-8 text-center">Sign Up</h2>
            <form onSubmit={handleSubmit}>
              <FormInput
                label="Username"
                type="text"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                placeholder="Choose a username"
                required
              />
              <FormInput
                label="Email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter your email"
                required
              />
              <FormInput
                label="Password"
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Create a password"
                required
              />
              <button
                type="submit"
                className="w-full bg-cta-bg text-cta-text font-bold py-3 px-6 rounded-lg hover:bg-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-card mb-6"
              >
                Sign Up
              </button>
              
              {/* Social Login Placeholders */}
              <div className="text-center">
                <p className="text-muted text-sm mb-4">Or continue with</p>
                <div className="flex justify-center space-x-4">
                  <button
                    type="button"
                    className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors duration-200"
                    aria-label="Google"
                  >
                    <svg className="w-5 h-5 text-white" viewBox="0 0 24 24">
                      <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                      <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                    </svg>
                  </button>
                  <button
                    type="button"
                    className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors duration-200"
                    aria-label="Facebook"
                  >
                    <svg className="w-5 h-5 text-white" viewBox="0 0 24 24">
                      <path fill="currentColor" d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </button>
                  <button
                    type="button"
                    className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors duration-200"
                    aria-label="Twitter"
                  >
                    <svg className="w-5 h-5 text-white" viewBox="0 0 24 24">
                      <path fill="currentColor" d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </motion.div>
        </div>
      </motion.div>
    </div>
  )
}

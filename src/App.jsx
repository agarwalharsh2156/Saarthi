import React from 'react'
import { motion } from 'framer-motion'
import { Routes, Route, useNavigate } from 'react-router-dom'
import { Login } from './Login'
import { Auth } from './pages/Auth'
import { ImageCard } from './ImageCard'
import { Menu } from './pages/Menu'
import { Scene } from './pages/Scene' 

// Character-by-character animation component
const AnimatedText = ({ text, className, delay = 0 }) => {
  const letters = text.split('')
  
  return (
    <motion.div
      className={className}
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.05,
            delayChildren: delay
          }
        }
      }}
    >
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { 
              opacity: 1, 
              y: 0,
              transition: { duration: 0.3 }
            }
          }}
        >
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
      ))}
    </motion.div>
  )
}

// Landing Page Component
const LandingPage = () => {
  const navigate = useNavigate()

  const handleExperienceClick = () => {
    navigate('/auth')
  }

  const galleryItems = [
    { imageSrc: '/images/Taj%20mahal.jpg', title: 'Taj Mahal', description: 'A symbol of love built by Shah Jahan.' },
    { imageSrc: '/images/Golden%20temple.jpg', title: 'Golden Temple', description: 'Harmandir Sahib gurdwara in Amritsar.' },
    { imageSrc: '/images/hawamahal.jpg', title: 'Hawa Mahal', description: 'The “Palace of Winds” in Jaipur.' },
    { imageSrc: '/images/kerela.jpg', title: 'Kerala Backwaters', description: 'Serene lagoons and canals in Kerala.' },
    { imageSrc: '/images/kochi.jpg', title: 'Kochi', description: 'Historic port city on India’s southwest coast.' },
  ]

  const [hoveredIndex, setHoveredIndex] = React.useState(null)

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center px-4">
      <motion.div 
        className="text-center max-w-7xl mx-auto"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.3,
              delayChildren: 0.2
            }
          }
        }}
      >
        {/* Main Title */}
        <AnimatedText 
          text="Saarthi - Virtual Tourist Guide"
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-200 mb-6"
          delay={0}
        />
        
        {/* Subtitle */}
        <AnimatedText 
          text="Your companion for immersive tourism"
          className="text-xl md:text-2xl lg:text-3xl text-gray-400 mb-8"
          delay={0.5}
        />
        
        {/* Problem Statement */}
        <AnimatedText 
          text="We built this to help tourists experience places virtually before visiting in reality."
          className="text-base sm:text-lg md:text-xl text-gray-300 font-medium mb-10 max-w-3xl mx-auto leading-relaxed"
          delay={1.0}
        />

        {/* Image Gallery */}
        <motion.div
          className="mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 place-items-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.5 }}
        >
          {galleryItems.map((item, index) => (
            <div key={index} className="w-full lg:w-auto">
              <ImageCard
                imageSrc={item.imageSrc}
                title={item.title}
                description={item.description}
                isDimmed={hoveredIndex !== null && hoveredIndex !== index}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
              />
            </div>
          ))}
        </motion.div>
        
        {/* Experience It Button */}
        <motion.button
          onClick={handleExperienceClick}
          className="bg-gray-200 text-black font-bold py-4 px-8 rounded-full text-lg md:text-xl hover:bg-white hover:scale-105 transition-all duration-300 shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.9, duration: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Experience It
        </motion.button>
      </motion.div>
    </div>
  )
}

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/scene/:slug" element={<Scene />} />
      {/* <Route path="*" element={<Navigate to="/menu" replace />} /> */}
    </Routes>
  )
}

import React, { useState } from 'react'
import { motion } from 'framer-motion'

export const ImageCard = ({ imageSrc, title, description, isDimmed = false, onHoverStart, onHoverEnd }) => {
  const [isHovered, setIsHovered] = useState(false)

  const handleHoverStart = () => {
    setIsHovered(true)
    onHoverStart && onHoverStart()
  }

  const handleHoverEnd = () => {
    setIsHovered(false)
    onHoverEnd && onHoverEnd()
  }

  return (
    <motion.div
      className="relative rounded-xl overflow-hidden shadow-lg bg-black/40"
      onHoverStart={handleHoverStart}
      onHoverEnd={handleHoverEnd}
      initial={false}
      animate={{
        filter: isDimmed ? 'blur(2px) brightness(0.7)' : 'none',
        opacity: isDimmed ? 0.7 : 1,
      }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      whileHover={{ scale: 1.03, zIndex: 10 }}
    >
      <motion.img
        src={imageSrc}
        alt={title}
        className="w-full h-64 object-cover select-none grayscale hover:grayscale-0"
        draggable={false}
        initial={false}
        animate={{
          filter: isHovered ? 'grayscale(0%)' : 'grayscale(100%)',
        }}
        transition={{ duration: 0.3 }}
      />

      <motion.div
        className="absolute inset-x-0 bottom-0 p-4"
        initial={false}
        animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
        transition={{ duration: 0.25 }}
      >
        <div className="rounded-lg bg-gradient-to-t from-black/90 to-black/30 p-4 space-y-1">
          <h4 className="text-xl font-bold text-gray-100 tracking-wide drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">{title}</h4>
          <p className="text-sm font-normal text-gray-300 leading-snug drop-shadow-[0_1px_1px_rgba(0,0,0,0.7)]">{description}</p>
        </div>
      </motion.div>
    </motion.div>
  )
}

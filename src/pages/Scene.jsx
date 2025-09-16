// src/pages/Scene.jsx
import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { TajMahalScene } from '../components/scenes/TajMahalScene'
import { ChevronUp, ChevronDown, Gauge, Mountain } from 'lucide-react'

export const Scene = () => {
    const { slug } = useParams()
    const navigate = useNavigate()
    const [aframeLoaded, setAframeLoaded] = useState(false)
    const [speed, setSpeed] = useState(50) // Current speed
    const [elevation, setElevation] = useState(10) // Current Y position

    useEffect(() => {
        if (typeof window !== 'undefined') {
            import('aframe').then(() => {
                setAframeLoaded(true)
            }).catch(err => {
                console.error('Failed to load A-Frame:', err)
            })
        }
    }, [])

    const handleBackToMenu = () => navigate('/menu')

    // Speed Control Functions
    const increaseSpeed = () => {
        const newSpeed = Math.min(speed + 50, 400) // Max speed: 400
        setSpeed(newSpeed)
        const camera = document.querySelector('#rig')
        if (camera) {
            camera.setAttribute('wasd-controls', `acceleration: ${newSpeed}`)
        }
    }

    const decreaseSpeed = () => {
        const newSpeed = Math.max(speed - 50, 50) // Min speed: 50
        setSpeed(newSpeed)
        const camera = document.querySelector('#rig')
        if (camera) {
            camera.setAttribute('wasd-controls', `acceleration: ${newSpeed}`)
        }
    }

    // Elevation Control Function
    const elevateCamera = () => {
        const newElevation = Math.min(elevation + 5, 50) // Max elevation: 50
        setElevation(newElevation)
        const camera = document.querySelector('#rig')
        if (camera) {
            const currentPosition = camera.getAttribute('position')
            camera.setAttribute('position', `${currentPosition.x} ${newElevation} ${currentPosition.z}`)
        }
    }

    const lowerCamera = () => {
        const newElevation = Math.max(elevation - 5, 10) // Min elevation: 10
        setElevation(newElevation)
        const camera = document.querySelector('#rig')
        if (camera) {
            const currentPosition = camera.getAttribute('position')
            camera.setAttribute('position', `${currentPosition.x} ${newElevation} ${currentPosition.z}`)
        }
    }

    if (!aframeLoaded) {
        return (
            <div className="h-screen w-screen bg-black flex items-center justify-center">
                <div className="text-center">
                    <div className="size-16 border-4 border-accent/30 border-t-accent rounded-full animate-spin mb-4"></div>
                    <p className="text-white font-poiret text-xl">Loading A-Frame...</p>
                </div>
            </div>
        )
    }

    const renderScene = () => {
        switch (slug) {
            case 'taj-mahal':
                return <TajMahalScene />
            // Add other scenes here later
            default:
                return <div className="h-screen flex items-center justify-center text-white">Scene not found: {slug}</div>
        }
    }

    return (
        <div className="relative h-screen w-screen bg-black overflow-hidden">
            {/* Back Button */}
            <button
                onClick={handleBackToMenu}
                className="absolute top-6 left-6 z-50 px-4 py-2 bg-black/50 backdrop-blur-md border border-white/20 rounded-lg text-white hover:bg-white/10 transition-all duration-200 flex items-center gap-2"
            >
                <svg className="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
                Back to Menu
            </button>

            {/* Gaming-Style Bottom Control Bar */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-50">
                <div className="bg-black/70 backdrop-blur-md border border-white/20 rounded-xl px-6 py-3">
                    <div className="flex items-center gap-8">
                        {/* Speed Controls */}
                        <div className="flex items-center gap-3">
                            <div className="flex items-center gap-2">
                                <Gauge className="size-4 text-accent" />
                                <span className="text-white text-sm">Speed</span>
                                <span className="text-accent font-bold text-sm bg-accent/20 px-2 py-1 rounded">{speed}</span>
                            </div>
                            <div className="flex gap-1">
                                <button onClick={increaseSpeed} className="p-1.5 bg-white/10 hover:bg-white/20 rounded transition-all">
                                    <ChevronUp className="size-4 text-white" />
                                </button>
                                <button onClick={decreaseSpeed} className="p-1.5 bg-white/10 hover:bg-white/20 rounded transition-all">
                                    <ChevronDown className="size-4 text-white" />
                                </button>
                            </div>
                        </div>

                        {/* Separator */}
                        <div className="w-px h-8 bg-white/20"></div>

                        {/* Elevation Controls */}
                        <div className="flex items-center gap-3">
                            <div className="flex items-center gap-2">
                                <Mountain className="size-4 text-accent" />
                                <span className="text-white text-sm">Height</span>
                                <span className="text-accent font-bold text-sm bg-accent/20 px-2 py-1 rounded">{elevation}m</span>
                            </div>
                            <div className="flex gap-1">
                                <button onClick={elevateCamera} className="p-1.5 bg-white/10 hover:bg-white/20 rounded transition-all">
                                    <ChevronUp className="size-4 text-white" />
                                </button>
                                <button onClick={lowerCamera} className="p-1.5 bg-white/10 hover:bg-white/20 rounded transition-all">
                                    <ChevronDown className="size-4 text-white" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Render the scene component */}
            {renderScene()}
        </div>
    )
}

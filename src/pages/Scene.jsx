// src/pages/Scene.jsx
import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { TajMahalScene } from '../components/scenes/TajMahalScene'
import { ChevronUp, ChevronDown, Gauge, Mountain } from 'lucide-react'
import { AncientHoseScene } from '../components/scenes/AncientHouseScene'
import { CharMinarScene } from '../components/scenes/CharMinarScene'
import { BaaMisikyyScene } from '../components/scenes/BaaMiskiyyScene'

export const Scene = () => {
    const { slug } = useParams()
    const navigate = useNavigate()
    const [aframeLoaded, setAframeLoaded] = useState(false)
    const [speed, setSpeed] = useState(50) // Current speed
    const [elevation, setElevation] = useState(10) // Current Y position\
    const [showLoadingScreen, setShowLoadingScreen] = useState(true)
    const [loadingProgress, setLoadingProgress] = useState(0)

    useEffect(() => {
        if (typeof window !== 'undefined') {
            import('aframe').then(() => {
                setAframeLoaded(true)
            }).catch(err => {
                console.error('Failed to load A-Frame:', err)
            })
        }
    }, [])

    useEffect(() => {
        if (showLoadingScreen) {
            // advance the progress bar every 200 ms
            const progressInterval = setInterval(() => {
                setLoadingProgress(prev => {
                    if (prev >= 100) {
                        clearInterval(progressInterval);
                        return 100;
                    }
                    return prev + 2;         // 2 % × 50 ticks = 100 % in 10 s
                });
            }, 200);

            // hide the loading screen after 10 s
            const hideTimer = setTimeout(() => {
                setShowLoadingScreen(false);
            }, 15000);

            // cleanup
            return () => {
                clearInterval(progressInterval);
                clearTimeout(hideTimer);
            };
        }
    }, [showLoadingScreen]);


    const handleBackToMenu = () => navigate('/menu')

    // Speed Control Functions
    const increaseSpeed = () => {
        const newSpeed = Math.min(speed + 50, 400) // Max speed: 400
        setSpeed(newSpeed)
        const camera = document.querySelector('#camera-rig')
        if (camera) {
            camera.setAttribute('wasd-controls', `acceleration: ${newSpeed}`)
        }
    }

    const decreaseSpeed = () => {
        const newSpeed = Math.max(speed - 50, 50) // Min speed: 50
        setSpeed(newSpeed)
        const camera = document.querySelector('#camera-rig')
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
                    {/* <div className="size-16 border-4 border-accent/30 border-t-accent rounded-full animate-spin mb-4"></div> */}
                    <p className="text-white font-poiret text-xl">Loading A-Frame...</p>
                </div>
            </div>
        )
    }

    const renderScene = () => {
        switch (slug) {
            case 'taj-mahal':
                return <TajMahalScene />
            case 'ancient-stone-house':
                return <AncientHoseScene/>
            case 'charminar':
                return <CharMinarScene/>
            case 'baa_miskiyy_maldives':
                return <BaaMisikyyScene/>
            default:
                return <div className="h-screen flex items-center justify-center text-white">Scene not found: {slug}</div>
        }
    }

    return (
        <div className="relative h-screen w-screen bg-black overflow-hidden">
            {/* Loading Screen */}
            {showLoadingScreen && (
                <div className="fixed inset-0 z-[100] bg-gradient-to-br from-gray-900 via-black to-gray-800 flex items-center justify-center overflow-hidden">
                    {/* Animated Background Grid */}
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute inset-0" style={{
                            backgroundImage: 'linear-gradient(rgba(124, 117, 246, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(124, 117, 246, 0.3) 1px, transparent 1px)',
                            backgroundSize: '50px 50px',
                            animation: 'gridMove 10s linear infinite'
                        }}></div>
                    </div>

                    {/* Main Loading Content */}
                    <div className="relative z-10 text-center max-w-md mx-auto px-6">
                        {/* Game Title */}
                        <div className="mb-8">
                            <h1 className="text-4xl font-bold text-white mb-2 font-poiret tracking-wider">
                                SAARTHI
                            </h1>
                            <div className="h-1 w-24 bg-gradient-to-r from-accent to-blue-400 mx-auto mb-4 rounded-full animate-pulse"></div>
                            <p className="text-accent text-lg font-medium">
                                {slug.charAt(0).toUpperCase() + slug.slice(1).replace('-', ' ')}
                            </p>
                        </div>

                        {/* Loading Progress Circle */}
                        <div className="relative w-32 h-32 mx-auto mb-8">
                            <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 120 120">
                                <circle cx="60" cy="60" r="54" stroke="rgba(124, 117, 246, 0.2)" strokeWidth="4" fill="transparent" />
                                <circle
                                    cx="60" cy="60" r="54"
                                    stroke="url(#progressGradient)" strokeWidth="4" fill="transparent"
                                    strokeLinecap="round" strokeDasharray="339.292"
                                    strokeDashoffset={339.292 - (339.292 * loadingProgress) / 100}
                                    className="transition-all duration-200 ease-out"
                                />
                                <defs>
                                    <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                        <stop offset="0%" stopColor="#7C75F6" />
                                        <stop offset="100%" stopColor="#00E5FF" />
                                    </linearGradient>
                                </defs>
                            </svg>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <span className="text-2xl font-bold text-white font-mono">
                                    {Math.round(loadingProgress)}%
                                </span>
                            </div>
                        </div>

                        {/* Loading Bar */}
                        <div className="w-full bg-gray-800/50 rounded-full h-2 mb-6 overflow-hidden border border-accent/30">
                            <div
                                className="bg-gradient-to-r from-accent to-blue-400 h-full rounded-full transition-all duration-200 ease-out relative overflow-hidden"
                                style={{ width: `${loadingProgress}%` }}
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
                            </div>
                        </div>

                        {/* Loading Text */}
                        <div className="text-center">
                            <p className="text-white/80 text-sm font-mono mb-2">
                                {loadingProgress < 20 && "Initializing 3D Environment..."}
                                {loadingProgress >= 20 && loadingProgress < 40 && "Loading Assets..."}
                                {loadingProgress >= 40 && loadingProgress < 60 && "Preparing Textures..."}
                                {loadingProgress >= 60 && loadingProgress < 80 && "Setting up Camera..."}
                                {loadingProgress >= 80 && loadingProgress < 95 && "Finalizing Scene..."}
                                {loadingProgress >= 95 && "Ready to Explore!"}
                            </p>

                            <div className="flex justify-center gap-1 mt-4">
                                <div className="w-2 h-2 bg-accent rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                                <div className="w-2 h-2 bg-accent rounded-full animate-bounce" style={{ animationDelay: '200ms' }}></div>
                                <div className="w-2 h-2 bg-accent rounded-full animate-bounce" style={{ animationDelay: '400ms' }}></div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Back Button */}
            <button
                onClick={handleBackToMenu}
                className="absolute top-6 left-6 z-50 px-4 py-2 bg-black/50 backdrop-blur-md border border-white/20 rounded-lg text-white hover:bg-white/10 hover:text-black hover:border-black/40 transition-all duration-200 flex items-center gap-2"
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

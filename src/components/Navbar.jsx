// src/components/Navbar.jsx
import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Navbar = () => {
    const navigate = useNavigate()
    const handleLogout = () => navigate('/auth')

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-black/15 backdrop-blur-md border-b border-accent/40 shadow-lg">
            <div className="mx-auto max-w-7xl px-6 py-4">
                <div className="flex items-center justify-between">
                    {/* Brand Name Only */}
                    <span className="text-white font-poiret font-bold text-xl tracking-wide">
                        Saarthi
                    </span>

                    {/* Logout Button */}
                    <button
                        onClick={handleLogout}
                        className="group flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-200"
                    >
                        <svg
                            className="size-4 text-white/70 group-hover:text-white transition-colors"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                        </svg>
                        <span className="text-white/70 group-hover:text-white text-sm font-medium transition-colors">
                            Logout
                        </span>
                    </button>
                </div>
            </div>
        </nav>
    )
}

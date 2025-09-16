// src/components/SiteCard.jsx
import React from 'react'
import { useNavigate } from 'react-router-dom'

export const SiteCard = ({ slug, name, image, summary }) => {
    const navigate = useNavigate()
    const handleClick = () => navigate(`/scene/${slug}`)

    return (
        <div
            onClick={handleClick}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && handleClick()}
            className="group relative overflow-hidden rounded-xl bg-card/80 backdrop-blur-sm border border-white/10 hover:border-accent/50 transition-all duration-300 cursor-pointer hover:scale-[1.02] hover:bg-card/90"
        >
            <div className="aspect-[4/3] w-full overflow-hidden">
                <img
                    src={image}
                    alt={name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>

            <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 font-poiret tracking-wide">
                    {name}
                </h3>
                <p className="text-base font-medium text-gray-200 line-clamp-3 leading-relaxed mb-4">
                    {summary}
                </p>

                <div className="flex items-center gap-2 text-accent group-hover:text-white transition-colors">
                    <span className="text-base font-bold tracking-wide">EXPLORE</span>
                    <svg
                        className="size-5 transition-transform group-hover:translate-x-1"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 5l7 7-7 7" />
                    </svg>
                </div>
            </div>

            <div className="absolute inset-0 ring-1 ring-inset ring-white/5 group-hover:ring-accent/30 transition-colors rounded-xl" />
        </div>
    )
}

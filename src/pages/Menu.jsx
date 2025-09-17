// src/pages/Menu.jsx
import React from 'react'
import { Navbar } from '../components/Navbar'
import { SiteCard } from '../components/SiteCard'

const SITES = [
    {
        slug: 'taj-mahal',
        name: 'Taj Mahal',
        image: '/images/Taj mahal.jpg',
        summary: 'Ivory‑white marble mausoleum in Agra; a UNESCO icon on the Yamuna’s right bank.'
    },
    {
        slug: 'ancient-stone-house',
        name: 'Ancient Stone Hose',
        image: '/images/ancient-house.png',
        summary: 'It was found in almost all the major cities throughout the Roman territories.'
    },
    {
        slug: 'charminar',
        name: 'Charminar',
        image: '/images/charminar.png',
        summary: 'The Charminar is a monument located in Hyderabad, Telangana, India. Constructed in 1591, the landmark is a symbol of Hyderabad.'
    },
    {
        slug: 'baa_miskiyy_maldives',
        name: 'Baa Miskiyy',
        image: '/images/baa-miskiyy.png',
        summary: 'Baa Miskiyy means Old Mosque and this scene represents a Baa Miskiyy in Maldives.'
    }
]

export const Menu = () => (
    <div className="min-h-screen bg-black text-primary">
        <Navbar />

        <main className="mx-auto max-w-6xl px-4 pt-24 pb-16">
            <header className="mb-12 text-center">
                <h1 className="text-4xl font-bold text-primary mb-4 font-poiret">
                    Choose Your Journey
                </h1>
                <p className="text-lg text-muted max-w-2xl mx-auto">
                    Select a historical site to begin your immersive 3D experience through India's architectural heritage.
                </p>
            </header>

            <section className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
                {SITES.map((s) => (
                    <SiteCard key={s.slug} {...s} />
                ))}
            </section>
        </main>
    </div>
)

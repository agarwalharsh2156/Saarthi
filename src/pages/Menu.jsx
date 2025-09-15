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
        slug: 'hawa-mahal',
        name: 'Hawa Mahal',
        image: '/images/hawamahal.jpg',
        summary: 'Jaipur’s “Palace of Winds,” a five‑storey pink sandstone facade with 953 jharokhas.'
    },
    {
        slug: 'golden-temple',
        name: 'Golden Temple',
        image: '/images/Golden temple.jpg',
        summary: 'Sri Harmandir Sahib in Amritsar; holiest Gurdwara, famed for its gilded sanctum and sarovar.'
    },
    {
        slug: 'kochi',
        name: 'Kochi',
        image: '/images/kochi.jpg',
        summary: 'Historic port city in Kerala, known for Chinese fishing nets, Fort Kochi, and blend of cultures.'
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

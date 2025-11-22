// src/pages/Menu.jsx
import React from 'react'
import { Navbar } from '../components/Navbar'
import { SiteCard } from '../components/SiteCard'

const SITES = [
    {
        slug: 'arabic-city',
        name: 'Arabic City',
        image: '/images/arabic_city.png',
        summary: 'A prominent medieval Arab city was Baghdad, a thriving cosmopolitan center founded in 762 CE'
    },

    {
        slug: 'egyptian-temple',
        name: 'Egyptian Temple',
        image: '/images/egyptian-temple.png',
        summary: 'Egyptian temples were sacred structures built to honor gods, house their divine statues, and commemorate pharaohs in ancient Egypt, serving as religious centers for rituals and offerings.'
    },
    {
        slug: 'charminar',
        name: 'Charminar',
        image: '/images/charminar.png',
        summary: 'The Charminar is a monument located in Hyderabad, Telangana, India. Constructed in 1591, the landmark is a symbol of Hyderabad.'
    },
    {
        slug: 'taj-mahal',
        name: 'Taj Mahal',
        image: '/images/Taj mahal.jpg',
        summary: 'Ivory‑white marble mausoleum in Agra; a UNESCO icon on the Yamuna’s right bank.'
    },
    {
        slug: 'ancient-stone-house',
        name: 'Ancient Stone House',
        image: '/images/ancient-house.png',
        summary: 'It was found in almost all the major cities throughout the Roman territories.'
    },
    {
        slug: 'baa-miskiyy-maldives',
        name: 'Baa Miskiyy',
        image: '/images/baa-miskiyy.png',
        summary: 'Baa Miskiyy means Old Mosque and this scene represents a Baa Miskiyy in Maldives.'
    },
    {
        slug: 'ajanta-ellora',
        name: 'Ajanta Ellora Caves',
        image: '/images/ajanta-ellora.png',
        summary: 'The Ajanta and Ellora Caves are UNESCO World Heritage Sites located in Maharashtra, India, renowned for their ancient rock-cut architecture, murals, and sculptures.'
    },
    {
        slug: 'aztec-temple',
        name: 'Aztec Temple',
        image: '/images/aztec-temple.png',
        summary: 'An Aztec temple, called a teocalli, was a pyramid-like structure serving as a central religious and civic hub in their cities, most famously the Templo Mayor in Tenochtitlan.'
    },
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

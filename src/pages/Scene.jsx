import React from 'react'
import { useParams } from 'react-router-dom'

export const Scene = () => {
    const { slug } = useParams()
    return <div className="p-6 text-primary">Loading scene: {slug}</div>
}

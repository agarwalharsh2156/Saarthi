// src/components/scenes/TajMahalScene.jsx
import React, { useEffect } from 'react'
import 'aframe'


export const CharMinarScene = () => {

    return (
        <div className="h-screen w-screen bg-black">
            <a-scene
                embedded
                style={{ height: '100vh', width: '100vw' }}
                vr-mode-ui="enabled: true"
            >

                <a-sky src="/3d-assets/background/horn-koppe_spring_4k.jpg" />

                <a-entity
                    id="ground-entity"
                    gltf-model="/3d-assets/models/floor/seamless__floor_tiled_texture_iv.glb"
                    position="0 0 0"
                    scale="80 80 80"
                />

                <a-entity
                    id="charminar"
                    gltf-model="/3d-assets/models/charminar/charminar.glb"
                    position="0 10 0"
                    scale="100 100 100"
                />

                {/* Lighting */}
                {/* <a-light type="ambient" color="#ffffffff" intensity="0.8" /> */}
                <a-light type="directional" position="0 30 50" intensity="2.5" />
                <a-light type="directional" position="0 30 -50" intensity="2.5" />
                <a-light type="directional" position="-50 30 -25" intensity="2.5" />
                <a-light type="directional" position="50 30 -25" intensity="2.5" />
                

                {/* Camera */}
                <a-entity 
                    id="rig" 
                    position="20 10 100"
                >
                    <a-camera
                        id="camera-rig"
                        wasd-controls="acceleration: 50"
                        look-controls="pointerLockEnabled: false"
                    />
                </a-entity>

            </a-scene>
        </div>
    )
}

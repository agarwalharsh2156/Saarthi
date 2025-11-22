// src/components/scenes/TajMahalScene.jsx
import 'aframe'


export const ArabicCityScene = () => {

    return (
        <div className="h-screen w-screen bg-black">
            <a-scene
                embedded
                style={{ height: '100vh', width: '100vw' }}
                vr-mode-ui="enabled: true"
            >

                <a-sky src="/3d-assets/background/horn-koppe_spring_4k.jpg" radius='1000'/>

                <a-entity
                    id="arabic-city"
                    gltf-model="\3d-assets\models\arabic_city\arabic_city.glb"
                    position="0 0 0"
                    scale="40 40 40"
                />

                {/* Lighting */}
                <a-light type="ambient" color="#ffffff" intensity="4" />
                {/* <a-light type="directional" position="0 150 50" intensity="2.5" />
                <a-light type="directional" position="0 150 -50" intensity="2.5" />
                <a-light type="directional" position="-50 150 -25" intensity="2.5" />
                <a-light type="directional" position="50 150 -25" intensity="2.5" /> */}
                

                {/* Camera */}
                <a-entity 
                    id="rig" 
                    position="-20 10 -160"
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

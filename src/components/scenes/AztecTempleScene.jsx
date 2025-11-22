// src/components/scenes/TajMahalScene.jsx
import 'aframe'


export const AztecTempleScene = () => {

    return (
        <div className="h-screen w-screen bg-black">
            <a-scene
                embedded
                style={{ height: '100vh', width: '100vw' }}
                vr-mode-ui="enabled: true"
            >

                <a-sky src="/3d-assets/background/horn-koppe_spring_4k.jpg" radius='1000'/>

                <a-entity
                    id="aztec-temple"
                    gltf-model="\3d-assets\models\aztec_temple\aztec_temple.glb"
                    position="0 0 0"
                    scale="50 50 50"
                />

                {/* Lighting */}
                <a-light type="ambient" color="#ffffff" intensity="4" />
                {/* <a-light type="directional" position="0 30 50" intensity="2.5" />
                <a-light type="directional" position="0 30 -50" intensity="2.5" />
                <a-light type="directional" position="-50 30 -25" intensity="2.5" />
                <a-light type="directional" position="50 30 -25" intensity="2.5" />
                 */}

                {/* Camera */}
                <a-entity 
                    id="rig" 
                    position="0 10 -85"
                    rotation="0 -180 0"
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

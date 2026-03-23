import { Suspense, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Center, ContactShadows, Environment, Html, OrbitControls, useGLTF } from "@react-three/drei";
import * as THREE from "three";
import "./HomeMapView.css";

interface HomeMapModelProps {
    modelUrl: string;
    isHovered: boolean;
}

const HomeMapModel = ({ modelUrl, isHovered }: HomeMapModelProps) => {
    const groupRef = useRef<THREE.Group>(null);
    const { scene } = useGLTF(modelUrl);

    useFrame((state) => {
        if (!groupRef.current) {
            return;
        }

        const targetY = isHovered ? state.pointer.x * 0.3 : 0;
        const targetZ = isHovered ? -state.pointer.y * 0.2 : 0;

        groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, 0.95, 0.08);
        groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetY, 0.08);
        groupRef.current.rotation.z = THREE.MathUtils.lerp(groupRef.current.rotation.z, targetZ, 0.08);
    });

    return (
        <group ref={groupRef}>
            <Center>
                <primitive object={scene} scale={0.1} />
            </Center>
        </group>
    );
};

const HomeMapLoading = () => {
    return (
        <Html center>
            <span className="home-map__loading">Loading model...</span>
        </Html>
    );
};

const HomeMapView = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <section id="home-map" className="home-map">
            <div className="home-map__header">
                <h2 className="home-map__title">3D map view</h2>
                <p className="home-map__description">Explore booth zones and event routes before your visit day.</p>
            </div>
            <div
                className="home-map__canvas-wrap"
                onPointerEnter={() => setIsHovered(true)}
                onPointerLeave={() => setIsHovered(false)}
            >
                <Canvas camera={{ position: [0, 0, 5], fov: 45 }} dpr={[1, 2]}>
                    <ambientLight intensity={0.6} />
                    <directionalLight position={[5, 5, 5]} intensity={1} />
                    <Suspense fallback={<HomeMapLoading />}>
                        <HomeMapModel modelUrl="/models/map.glb" isHovered={isHovered} />
                        <ContactShadows position={[0, -1.4, 0]} opacity={0.3} scale={8} blur={2.5} />
                        <Environment preset="city" />
                    </Suspense>
                    <OrbitControls
                        enablePan={false}
                        enableZoom
                        minPolarAngle={Math.PI / 2}
                        maxPolarAngle={Math.PI / 2}
                        minDistance={2}
                        maxDistance={50}
                    />
                </Canvas>
                <span className="home-map__hint">Hover to rotate • Scroll to zoom</span>
            </div>
        </section>
    );
};

export default HomeMapView;

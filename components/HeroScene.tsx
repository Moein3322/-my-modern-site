"use client"
import { Canvas } from "@react-three/fiber";
import { MeshDistortMaterial, Sphere, Float } from "@react-three/drei";

export default function HeroScene() {
  return (
    <div className="absolute inset-0 -z-10 h-screen w-full">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[-10, -10, -5]} color="#3b82f6" intensity={2} />
        
        <Float speed={4} rotationIntensity={1} floatIntensity={2}>
          <Sphere args={[1, 100, 200]} scale={2.4}>
            <MeshDistortMaterial
              color="#3b82f6"
              attach="material"
              distort={0.5}
              speed={2}
              roughness={0.2}
              metalness={0.8}
            />
          </Sphere>
        </Float>
      </Canvas>
    </div>
  );
}

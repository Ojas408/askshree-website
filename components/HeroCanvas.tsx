'use client'

import { Canvas } from '@react-three/fiber'
import { Suspense, useRef } from 'react'
import { OrbitControls, Html } from '@react-three/drei'
import { Mesh } from 'three'

export default function HeroCanvas(){
  const meshRef = useRef<Mesh | null>(null)

  return (
    <div className="w-full h-screen">
      <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={0.8} />
        <Suspense fallback={<Html center>Loading...</Html>}>
          <mesh ref={meshRef} position={[0, 0.4, 0]} rotation={[0.2, 0.6, 0]}>
            <boxGeometry args={[2.2, 0.6, 0.2]} />
            <meshStandardMaterial color={"#2A7DE1"} metalness={0.6} roughness={0.1} />
          </mesh>
        </Suspense>
        <OrbitControls enableZoom={false} enablePan={false} autoRotate={true} autoRotateSpeed={0.8} />
      </Canvas>
    </div>
  )
}

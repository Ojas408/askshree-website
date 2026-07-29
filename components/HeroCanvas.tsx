'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { Suspense, useRef, useEffect } from 'react'
import { OrbitControls, Html, Points, shaderMaterial } from '@react-three/drei'
import * as THREE from 'three'
import { extend } from '@react-three/fiber'

export default function HeroCanvas(){
  const meshRef = useRef<THREE.Mesh | null>(null)
  const pointsRef = useRef<any>(null)

  useEffect(() => {
    // simple mouse parallax
    const onMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1
      const y = -(e.clientY / window.innerHeight) * 2 + 1
      if(meshRef.current){
        meshRef.current.rotation.y = x * 0.3
        meshRef.current.rotation.x = y * 0.1
      }
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  useFrame((state, delta) => {
    if(meshRef.current){
      meshRef.current.rotation.z += delta * 0.05
    }
    if(pointsRef.current){
      pointsRef.current.rotation.y += delta * 0.02
    }
  })

  // particles positions
  const particles = new Float32Array(500 * 3)
  for(let i=0;i<500;i++){
    const i3 = i*3
    particles[i3] = (Math.random() - 0.5) * 10
    particles[i3+1] = (Math.random() - 0.5) * 6
    particles[i3+2] = (Math.random() - 0.5) * 10
  }

  return (
    <div className="w-full h-screen">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={0.8} />
        <Suspense fallback={<Html center>Loading...</Html>}>
          <group>
            <mesh ref={meshRef} position={[0, 0.5, 0]}>
              <boxGeometry args={[2.6, 0.8, 0.2]} />
              <meshStandardMaterial color={"#123C73"} metalness={0.7} roughness={0.15} />
            </mesh>

            <points ref={pointsRef} position={[0, -0.5, -1]}> 
              <bufferGeometry>
                <bufferAttribute attachObject={['attributes','position']} count={particles.length/3} array={particles} itemSize={3} />
              </bufferGeometry>
              <pointsMaterial size={0.04} color={'#5FB3FF'} opacity={0.7} transparent />
            </points>

          </group>
        </Suspense>
        <OrbitControls enableZoom={false} enablePan={false} autoRotate={true} autoRotateSpeed={0.6} />
      </Canvas>
    </div>
  )
}

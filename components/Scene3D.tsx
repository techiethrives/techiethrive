'use client'

import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { useRef, useMemo, useState, useEffect } from 'react'
import * as THREE from 'three'

function WaveParticles() {
  const pointsRef = useRef<THREE.Points>(null)
  const [mouse, setMouse] = useState({ x: 0, y: 0 })
  
  // Listen to mouse movement
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMouse({
        x: (event.clientX / window.innerWidth) * 2 - 1,
        y: -(event.clientY / window.innerHeight) * 2 + 1
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  // Grid dimensions - HORIZONTAL orientation
  const gridX = 100  // Width
  const gridY = 40   // Height (less than width for horizontal)
  const separation = 0.8
  const count = gridX * gridY

  const particlesData = useMemo(() => {
    const positions = new Float32Array(count * 3)
    const colors = new Float32Array(count * 3)
    
    // Your brand colors
    const color1 = new THREE.Color('#002b27')
    const color2 = new THREE.Color('#b98025')
    const color3 = new THREE.Color('#afb743')

    let i = 0
    for (let ix = 0; ix < gridX; ix++) {
      for (let iy = 0; iy < gridY; iy++) {
        const x = ix * separation - (gridX * separation) / 2
        const y = iy * separation - (gridY * separation) / 2
        const z = 0

        positions[i * 3] = x
        positions[i * 3 + 1] = y
        positions[i * 3 + 2] = z

        // Gradient color from left to right
        const mixFactor = ix / gridX
        const color = new THREE.Color()
        if (mixFactor < 0.5) {
          color.lerpColors(color1, color2, mixFactor * 2)
        } else {
          color.lerpColors(color2, color3, (mixFactor - 0.5) * 2)
        }

        colors[i * 3] = color.r
        colors[i * 3 + 1] = color.g
        colors[i * 3 + 2] = color.b

        i++
      }
    }

    return { positions, colors }
  }, [])

  // Animate wave motion - HORIZONTAL with cursor effect
  useFrame((state) => {
    if (pointsRef.current) {
      const positions = pointsRef.current.geometry.attributes.position.array as Float32Array
      const time = state.clock.elapsedTime * 0.3 // SLOWER: 0.3x speed

      let i = 0
      for (let ix = 0; ix < gridX; ix++) {
        for (let iy = 0; iy < gridY; iy++) {
          const x = positions[i * 3]
          const y = positions[i * 3 + 1]

          // Horizontal wave patterns (moves left to right)
          const wave1 = Math.sin((x * 0.3 + time * 2)) * 1.5
          const wave2 = Math.cos((y * 0.4 + time * 1.2)) * 1.2
          const wave3 = Math.sin((x * 0.2 - y * 0.2 + time * 0.8)) * 1
          
          // Cursor influence - creates ripple effect near mouse
          const dx = (x / 40) - mouse.x
          const dy = (y / 16) - mouse.y
          const distance = Math.sqrt(dx * dx + dy * dy)
          const cursorEffect = Math.max(0, 1 - distance / 2) * 3
          const cursorWave = Math.sin(distance * 3 - time * 4) * cursorEffect

          positions[i * 3 + 2] = wave1 + wave2 + wave3 + cursorWave

          i++
        }
      }

      pointsRef.current.geometry.attributes.position.needsUpdate = true
      
      // Very subtle rotation - slower
      pointsRef.current.rotation.x = Math.sin(time * 0.15) * 0.05
      pointsRef.current.rotation.y = time * 0.02
    }
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={particlesData.positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={count}
          array={particlesData.colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.15}
        vertexColors
        transparent
        opacity={0.7}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}

export default function Scene3D() {
  return (
    <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 0 }}>
      <Canvas
        camera={{ position: [0, 0, 35], fov: 75 }}
        style={{ 
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'transparent'
        }}
        gl={{ 
          alpha: true, 
          antialias: true,
          powerPreference: 'high-performance'
        }}
      >
        <WaveParticles />
      </Canvas>
    </div>
  )
}

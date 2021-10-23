import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useTexture } from '@react-three/drei'

export default function Particles({ count, color, size, move = false, url }) {
  const mesh = useRef()
  const star = useTexture('/star2.png')

  const [positions] = useMemo(() => {
    const positions = new Float32Array(count * 3)
    const sizes = new Float32Array(count * 3)
    for (let i = 0; i < count * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 35
    }

    return [positions, sizes]
  }, [count, color, size])

  useFrame((state) => {
    if (!move) return
    if (mesh.current.position.x < -10) mesh.current.position.set(5, 0, -200)
    else
      mesh.current.position.set(
        mesh.current.position.x - 0.24,
        mesh.current.position.y - 0.024,
        mesh.current.position.z + 20
      )

    console.log(mesh.current.position)
    /*
    // Makes the light follow the mouse
    light.current.position.set(
      mouse.current[0] / aspect,
      -mouse.current[1] / aspect,
      0
    )
    // Run through the randomized data to calculate some movement
    particles.forEach((particle, i) => {
      let { t, factor, speed, xFactor, yFactor, zFactor } = particle
      // There is no sense or reason to any of this, just messing around with trigonometric functions
      t = particle.t += speed / 2
      const a = Math.cos(t) + Math.sin(t * 1) / 10
      const b = Math.sin(t) + Math.cos(t * 2) / 10
      const s = Math.cos(t)
      particle.mx += (mouse.current[0] - particle.mx) * 0.01
      particle.my += (mouse.current[1] * -1 - particle.my) * 0.01
      // Update the dummy object
      dummy.position.set(
        (particle.mx / 10) * a +
          xFactor +
          Math.cos((t / 10) * factor) +
          (Math.sin(t * 1) * factor) / 10,
        (particle.my / 10) * b +
          yFactor +
          Math.sin((t / 10) * factor) +
          (Math.cos(t * 2) * factor) / 10,
        (particle.my / 10) * b +
          zFactor +
          Math.cos((t / 10) * factor) +
          (Math.sin(t * 3) * factor) / 10
      )
      dummy.scale.set(s, s, s)
      dummy.rotation.set(s * 5, s * 5, s * 5)
      dummy.updateMatrix()
      // And apply the matrix to the instanced item
      mesh.current.setMatrixAt(i, dummy.matrix)
    })
    mesh.current.instanceMatrix.needsUpdate = true
    */
  })

  return (
    <>
      <points ref={mesh}>
        <bufferGeometry>
          <bufferAttribute
            attachObject={['attributes', 'position']}
            count={positions.length / 3}
            itemSize={3}
            array={positions}
          />
        </bufferGeometry>
        <pointsMaterial
          size={size || 0.01}
          color={color || 'white'}
          map={star}
          transparent={true}
        />
      </points>
    </>
  )
}

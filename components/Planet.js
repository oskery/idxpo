import { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export default function Planet() {
  const planet = useRef()
  const { nodes } = useGLTF('/makemake.glb')

  console.log(nodes)
  //useFrame(() => (planet.current.rotation.y += 0.0002))

  return (
    <>
      <mesh
        ref={planet}
        visible
        position={[0, 0, 0]}
        geometry={nodes.Cube008.geometry}
        material={nodes.Cube008.material}
      />
    </>
  )
}

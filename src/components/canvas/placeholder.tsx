import { View } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'

import { MeshBasicNodeMaterial, uv, vec3 } from 'three/examples/jsm/nodes/Nodes.js'

const placeholderMaterial = new MeshBasicNodeMaterial()
placeholderMaterial.colorNode = vec3(uv(), 1.0)
placeholderMaterial.toneMapped = false

export const PlaceholderImpl = () => {
  const meshRef = useRef<any>()
  useFrame(() => {
    meshRef.current.rotation.x += 0.01
    meshRef.current.rotation.y += 0.01
  })

  return (
    <mesh scale={[150, 150, 150]} ref={meshRef}>
      <boxGeometry args={[1, 1, 1]} />
      {/* <primitive object={placeholderMaterial} /> */}
      <meshNormalMaterial />
    </mesh>
  )
}

export const Placeholder = ({ className = '' }) => {
  return (
    <View className={className}>
      <PlaceholderImpl />
    </View>
  )
}

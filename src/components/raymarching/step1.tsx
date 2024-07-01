import { useThree } from '@react-three/fiber'
import { useEffect } from 'react'
import { Vector2 } from 'three'

import { MeshBasicNodeMaterial, uniform, uv, vec3 } from 'three/nodes'

const resolution = uniform(new Vector2(1, 1))

const raymarchMaterial = new MeshBasicNodeMaterial()

raymarchMaterial.colorNode = vec3(uv(), 1)

export const Step1 = () => {
  const { width, height } = useThree((state) => state.viewport)
  useEffect(() => {
    const onResolutionChange = () => {
      resolution.value.x = window.innerWidth
      resolution.value.y = window.innerHeight
    }
    onResolutionChange()

    window.addEventListener('resize', onResolutionChange)

    return () => {
      window.removeEventListener('resize', onResolutionChange)
    }
  }, [])

  return (
    <mesh scale={[width, height, 1]}>
      <planeGeometry args={[1, 1]} />
      <primitive object={raymarchMaterial} attach='material' />
    </mesh>
  )
}

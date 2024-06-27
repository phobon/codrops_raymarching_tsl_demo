import { Canvas, CanvasProps, useFrame } from '@react-three/fiber'
import { useEffect, useState } from 'react'

import { AdaptiveDpr, Preload, StatsGl, View } from '@react-three/drei'
import { PerspectiveCamera } from '@/utils/perspective_camera'

import WebGPUCapabilities from 'three/examples/jsm/capabilities/WebGPU.js'
import WebGPURenderer from 'three/examples/jsm/renderers/webgpu/WebGPURenderer.js'
import { ACESFilmicToneMapping, SRGBColorSpace } from 'three'

export type WebGPUCanvasProps = any

const WebGPUCanvas = ({
  webglFallback = true,
  frameloop = 'always',
  debug,
  ...props
}: React.PropsWithChildren<WebGPUCanvasProps>) => {
  const [canvasFrameloop, setCanvasFrameloop] = useState<CanvasProps['frameloop']>('never')
  const [initialising, setInitialising] = useState(true)

  useEffect(() => {
    if (initialising) return

    setCanvasFrameloop(frameloop)
  }, [initialising, frameloop])

  const webGPUAvailable = WebGPUCapabilities.isAvailable()

  return (
    <Canvas
      {...props}
      id='gl'
      frameloop={canvasFrameloop}
      gl={(canvas) => {
        const renderer = new WebGPURenderer({
          canvas: canvas as HTMLCanvasElement,
          antialias: true,
          alpha: true,
          // forceWebGL: true,
        })
        renderer.toneMapping = ACESFilmicToneMapping
        renderer.outputColorSpace = SRGBColorSpace
        renderer.init().then(() => {
          setInitialising(false)
        })

        return renderer
      }}
    >
      <Preload all />
      <AdaptiveDpr />

      <View.Port />
      {webGPUAvailable && <ViewFrame />}

      {debug ? <StatsGl className='static__statsgl' /> : null}

      <PerspectiveCamera makeDefault />
    </Canvas>
  )
}

/**
 * Utility component to claer the renderer's frame buffer when using gl.scissor (from <View />)
 * @returns
 */
const ViewFrame = () => {
  useFrame(({ gl }) => {
    gl.clear()
  })

  return null
}

export default WebGPUCanvas

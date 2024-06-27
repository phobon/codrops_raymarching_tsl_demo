import { useImgTracker } from '@/utils/use_tracker'
import { useMediaQuery } from '@uidotdev/usehooks'
import { ImageBase } from './image_base'
import { useRef } from 'react'
import { useMotionValueEvent } from 'framer-motion'
import { useVideoTexture } from '@react-three/drei'
import { Image as DreiImage } from '@react-three/drei'

const Video = ({ progress, src, fallback, videoDimensions, ...props }: any) => {
  const desktop = useMediaQuery('only screen and (min-width: 768px)')
  const { viewRef, trackRef, hidden } = useImgTracker({
    hide: desktop,
  })

  return (
    <ImageBase {...props} src={fallback} ref={trackRef} viewRef={viewRef} hidden={hidden}>
      <VideoImpl src={src} trackRef={trackRef} progress={progress} videoDimensions={videoDimensions} />
    </ImageBase>
  )
}

const VideoImpl = ({ src, trackRef, progress }: any) => {
  const ref = useRef<any>()
  // useMotionValueEvent(scrollYProgress, 'change', (latest) => {
  // ref.current.material.grayscale = 1 - latest
  // ref.current.material.zoom = 1 + latest * 0.1
  // ref.current.material.opacity = clamp(latest * 3, 0, 1)
  // })

  useMotionValueEvent(progress, 'change', (latest) => {
    if (!ref.current) {
      return
    }

    ref.current.material.uniforms.u_progress.value = latest
  })

  const texture = useVideoTexture(src)
  const containerWidth = trackRef?.current?.width || 0
  const containerHeight = trackRef?.current?.height || 0

  return <DreiImage ref={ref} texture={texture} transparent scale={[containerWidth, containerHeight]} />
}

export default Video

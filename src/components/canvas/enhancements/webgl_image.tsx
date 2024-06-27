import { useMediaQuery } from '@uidotdev/usehooks'
import { ImageBase, ImageProps } from './image_base'
import { useImgTracker } from '@/utils/use_tracker'
import { useRef } from 'react'
import { useImageAsTexture } from '@/utils/use_image_as_texture'
import * as THREE from 'three'
import { Image as DreiImage } from '@react-three/drei'

const Image = ({ ...props }: ImageProps) => {
  const desktop = useMediaQuery('only screen and (min-width: 768px)')
  const { viewRef, trackRef, hidden } = useImgTracker({
    hide: desktop,
  })

  return (
    <ImageBase {...props} ref={trackRef} viewRef={viewRef} hidden={hidden}>
      <ImageImpl trackRef={trackRef} />
    </ImageBase>
  )
}

const ImageImpl = ({ trackRef }: any) => {
  const ref = useRef<any>()

  // Load texture from the <img/> and suspend until it's ready
  const texture = useImageAsTexture(trackRef)
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping
  const width = trackRef?.current?.width || 0
  const height = trackRef?.current?.height || 0
  // const imageBounds: [number, number] = [texture!.image.width, texture!.image.height]

  return <DreiImage ref={ref} texture={texture} transparent scale={[width, height]} />
}

export default Image

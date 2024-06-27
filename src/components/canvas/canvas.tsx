import { Canvas as _Canvas } from '@react-three/fiber'

import { AdaptiveDpr, Preload, StatsGl, View } from '@react-three/drei'
import { PerspectiveCamera } from '@/utils/perspective_camera'
export type SceneProps = {
  debug?: boolean
  frameloop?: 'always' | 'demand' | 'never'
} & any

const Canvas = ({ debug = false, frameloop = 'always', ...props }: SceneProps) => {
  return (
    <_Canvas id='__canvas' {...props} frameloop={frameloop}>
      <Preload all />

      <AdaptiveDpr />

      <View.Port />

      {debug ? <StatsGl className='static__statsgl' /> : null}

      <PerspectiveCamera makeDefault />
    </_Canvas>
  )
}

// const FBOScene = ({ ...props }) => {
//   const renderTarget = useFBO()
//   return (
//     <SceneFBORenderer renderTarget={renderTarget} {...props}>
//       <meshStandardMaterial map={renderTarget.texture} />
//     </SceneFBORenderer>
//   )
// }

export default Canvas

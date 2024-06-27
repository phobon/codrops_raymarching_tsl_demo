import { View } from '@react-three/drei'
import React, { forwardRef, useImperativeHandle, useRef } from 'react'
import { css } from '@/design/css'
import { PerspectiveCamera } from '@/utils/perspective_camera'
import { cn } from '@/utils/cn'

export type ImageProps = {
  width: number
  height: number
  priority?: boolean
  viewRef?: React.MutableRefObject<any>
  hidden?: boolean
} & React.ImgHTMLAttributes<HTMLImageElement>

export const ImageBase = forwardRef<HTMLImageElement, ImageProps>(
  (
    {
      className,
      src,
      alt,
      children,
      width,
      height,
      priority,
      loading = 'eager',
      crossOrigin = 'anonymous',
      viewRef,
      hidden,
    },
    ref,
  ) => {
    const imgRef = useRef<any>()
    useImperativeHandle(ref, () => imgRef.current!)

    const imageLoading = loading === 'eager' || priority === true ? 'eager' : 'lazy'

    return (
      <span
        className={cn(
          css({
            position: 'relative',
            backgroundColor: '#000',
          }),
          className,
        )}
      >
        <img
          ref={imgRef}
          src={src}
          className={css({
            width: {
              base: 'initial',
              md: '100%',
            },
            height: {
              base: '100%',
              md: 'initial',
            },
            objectFit: {
              base: 'cover',
              md: 'initial',
            },
          })}
          alt={alt}
          crossOrigin={crossOrigin}
          width={width}
          height={height}
          loading={imageLoading}
        />

        {hidden ? (
          <View
            className={css({
              position: 'absolute',
              inset: 0,
              pointerEvents: 'none',
            })}
            ref={viewRef}
          >
            <PerspectiveCamera makeDefault />
            {children}
          </View>
        ) : null}
      </span>
    )
  },
)

import { useRef, useEffect } from 'react'
import { css } from '@/design/css'
import { cn } from '@/utils/cn'
import { useLayoutStore } from '@/stores/use_layout_store'

import { gridStyles } from '../common'
import { ReactLenis } from 'lenis/react'
import Canvas from '@/components/canvas/canvas'

export type MainProps = {
  debug?: boolean
} & any

export const Main = ({ className, children }: MainProps) => {
  const ref = useRef<any>()

  useEffect(() => {
    const setCurrentTheme = (theme: 'light' | 'dark') => {
      document.documentElement.setAttribute('data-color-mode', theme)
    }

    const currentTheme = useLayoutStore.getState().theme
    setCurrentTheme(currentTheme)

    const unsubscribe = useLayoutStore.subscribe(({ theme }) => {
      setCurrentTheme(theme)
    })

    return () => {
      unsubscribe()
    }
  }, [])

  return (
    <ReactLenis
      root
      options={{
        syncTouch: true,
      }}
    >
      <main
        ref={ref}
        className={cn(
          css({
            width: '100%',
            position: 'relative',
            overflow: 'auto',
            touchAction: 'auto',
          }),
          className,
          gridStyles,
          'static__main',
        )}
      >
        {children}

        <Canvas
          style={{
            position: 'fixed',
            inset: 0,
            width: '100dvw',
            height: '100dvh',
            pointerEvents: 'none',
          }}
          eventSource={ref}
          eventPrefix='client'
          debug={false}
        />
      </main>
    </ReactLenis>
  )
}

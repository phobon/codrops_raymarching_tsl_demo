import { Placeholder } from '@/components/canvas/placeholder'
import { css } from '@/design/css'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <Placeholder
      className={css({
        gridColumn: '1 / -1',
        height: '100%',
      })}
    />
  )
}

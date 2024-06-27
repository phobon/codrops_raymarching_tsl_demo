import { Descriptor } from '@/components/layout/descriptor'
import { css } from '@/design/css'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about')({
  component: About,
})

function About() {
  return (
    <div
      className={css({
        display: 'grid',
        gridTemplateColumns: 'subgrid',
        gridColumn: '1 / -1',
        px: {
          base: '$4',
          md: '$5',
        },
      })}
    >
      <Descriptor title='About'>An example of an about page</Descriptor>
    </div>
  )
}

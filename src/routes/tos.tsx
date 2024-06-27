import { Descriptor } from '@/components/layout/descriptor'
import { css } from '@/design/css'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/tos')({
  component: TermsOfService,
})

function TermsOfService() {
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
      <Descriptor title='Terms of Service'>An example of a TOS page</Descriptor>
    </div>
  )
}

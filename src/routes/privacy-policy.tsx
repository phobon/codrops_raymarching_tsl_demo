import { Descriptor } from '@/components/layout/descriptor'
import { css } from '@/design/css'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/privacy-policy')({
  component: PrivacyPolicy,
})

function PrivacyPolicy() {
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
      <Descriptor title='Privacy Policy'>An example of a privacy policy page</Descriptor>
    </div>
  )
}

import { cn } from '@/utils/cn'
import { css } from '@/design/css'
import { gridStyles } from '../common'
import { Link } from '@tanstack/react-router'

export const Footer = ({ ...props }) => {
  return (
    <footer
      className={cn(
        css({
          width: '100%',
          overflow: 'hidden',
          flexDirection: 'column',
          backgroundColor: '$slate12',
          color: '$slate1',
          py: '$3',
          fontSize: '$2',
          zIndex: 1,
        }),
        gridStyles,
        'static__footer',
      )}
      {...props}
    >
      <nav
        className={css({
          gridColumn: {
            base: 'initial',
            md: '7 / span 1',
            lg: '9 / span 1',
          },
          display: {
            base: 'none',
            md: 'grid',
          },
          gridAutoRows: 'auto',
          alignItems: 'center',
          justifyContent: 'start',
        })}
      >
        <Link
          to='/privacy-policy'
          className={css({
            '&.active': {
              fontWeight: 'bold',
            },
          })}
        >
          Privacy Policy
        </Link>
        <Link
          to='/tos'
          className={css({
            '&.active': {
              fontWeight: 'bold',
            },
          })}
        >
          Terms of Service
        </Link>
      </nav>
    </footer>
  )
}

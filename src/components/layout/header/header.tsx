import { Link } from '@tanstack/react-router'

import { cn } from '@/utils/cn'
import { css } from '@/design/css'
import { gridStyles } from '../common'
// import { Link } from '@/utils/navigation_helpers'
// import AuthButton from '@/components/auth/auth_button'

export const Header = ({ ...props }) => {
  return (
    <header
      className={cn(
        css({
          width: '100%',
          top: 0,
          position: 'sticky',
          overflow: 'hidden',
          flexDirection: 'column',
          py: '$4',
          fontSize: '$2',
          zIndex: 1,
        }),
        gridStyles,
        'static__header',
      )}
      {...props}
    >
      <Link
        to='/'
        className={css({
          gridColumn: '1 / span 1',
          pl: {
            base: '$4',
            md: '$5',
          },
        })}
      >
        Static°
      </Link>
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
          to='/'
          className={css({
            '&.active': {
              fontWeight: 'bold',
            },
          })}
        >
          Home
        </Link>
        <Link
          to='/about'
          className={css({
            '&.active': {
              fontWeight: 'bold',
            },
          })}
        >
          About
        </Link>
      </nav>

      <div
        className={css({
          gridColumn: {
            base: '-2 / -1',
            md: '9 / span 1',
            lg: '11 / span 2',
          },
          color: '#000',
          textAlign: 'right',
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'flex-start',
          pr: {
            base: '$4',
            md: '$5',
          },
        })}
      >
        {/* <AuthButton /> */}
      </div>
    </header>
  )
}

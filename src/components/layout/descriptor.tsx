import { css } from '@/design/css'

export const Descriptor = ({ title, children }: any) => {
  return (
    <div
      className={css({
        position: 'relative',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: '$2',
        gridColumn: '1 / -1',
      })}
    >
      <h2
        className={css({
          fontSize: '$8',
          fontWeight: 'bold',
          lineHeight: '1.2',
          color: '$slate11',
        })}
      >
        {title}
      </h2>
      <p
        className={css({
          color: '$slate10',
          fontSize: '$2',
        })}
      >
        {children}
      </p>
    </div>
  )
}

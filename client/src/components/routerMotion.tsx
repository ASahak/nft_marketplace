import { memo } from 'react'
import { domAnimation, LazyMotion, m } from 'framer-motion'

const variants = {
  initial: { opacity: 0, x: 0, y: -5, zIndex: 2 },
  in: { opacity: 1, x: 0, y: 0, zIndex: 2 }
}
const pageTransition = {
  ease: 'linear',
  duration: 0.2
}

export const RouterMotion = memo(
  ({ keyProp, children, transition, ...rest }: Record<string, any>) => {
    return (
      <LazyMotion features={domAnimation}>
        <m.div
          key={keyProp}
          initial="initial"
          animate="in"
          variants={variants}
          transition={transition ?? pageTransition}
          {...rest}
        >
          {children}
        </m.div>
      </LazyMotion>
    )
  }
)

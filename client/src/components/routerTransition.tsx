import { memo, type ReactNode, useEffect } from 'react'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { Box } from '@chakra-ui/react'
import { dispatchBus, useHash } from '@/hooks'

const variants = {
  initial: { opacity: 0, x: 0, y: -5, zIndex: 2 },
  in: { opacity: 1, x: 0, y: 0, zIndex: 2 }
}
const pageTransition = {
  ease: 'linear',
  duration: 0.2
}

export const RouterTransition = memo(
  ({
    children,
    routerName,
    tvDashboardMode
  }: {
    children: ReactNode
    routerName: string
    tvDashboardMode?: boolean
  }) => {
    const hash = useHash()

    const animationCompleted = () => {
      if (hash) {
        return
      }
      dispatchBus('scroll-to-top')
      window.scrollTo(0, 0)
    }

    useEffect(() => {
      animationCompleted()
    }, [routerName, hash])

    return (
      <LazyMotion features={domAnimation}>
        <m.main
          key={routerName}
          initial="initial"
          animate="in"
          variants={variants}
          transition={hash ? { duration: 0 } : pageTransition}
          style={{
            paddingBottom: 0,
            minHeight: tvDashboardMode ? '100%' : '0',
            flex: 1,
            height: '100%',
            display: 'flex'
          }}
        >
          <Box
            flex={1}
            w="full"
            h={tvDashboardMode ? 'full' : 'initial'}
            minHeight="auto"
            display="flex"
          >
            {children}
          </Box>
        </m.main>
      </LazyMotion>
    )
  }
)

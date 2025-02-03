'use client'

import { memo, type ReactNode, useEffect, useState } from 'react'
import { Box } from '@chakra-ui/react'
import { dispatchBus, useHash } from '@/hooks'
import { RouterMotion } from '@/components'

export const RouterTransition = memo(
  ({
    children,
    routerName,
    disableMotionOnMount
  }: {
    children: ReactNode
    routerName: string
    disableMotionOnMount?: boolean
  }) => {
    const hash = useHash()
    const [disableAnimation, setDisableAnimation] =
      useState(disableMotionOnMount)

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

    useEffect(() => {
      setDisableAnimation(false)
    }, [])

    return (
      <RouterMotion
        keyProp={routerName}
        transition={hash || disableAnimation ? { duration: 0 } : null}
        style={{
          minHeight: '0',
          flex: 1,
          height: '100%',
          display: 'flex'
        }}
      >
        <Box flex={1} w="full" h={'initial'} minHeight="auto" display="flex">
          {children}
        </Box>
      </RouterMotion>
    )
  }
)

'use client'

import {
  useEffect,
  useRef,
  useState,
  memo,
  useCallback,
  forwardRef,
  useImperativeHandle,
  ReactNode
} from 'react'
import { useMeasure } from 'react-use'
import { Scrollbars } from 'react-custom-scrollbars-2'
import { isMobile } from 'react-device-detect'
import { Box } from '@chakra-ui/react'

interface CustomScrollbarProps {
  children: ReactNode
  renderTrackVerticalStyle?: React.CSSProperties
  renderTrackHorizontal?: React.CSSProperties
  disableOnMobile?: boolean
  autoHideX?: boolean
  [key: string]: any
}

interface CustomScrollbarRef {
  getScrollRef: () => Scrollbars | null
}

export const CustomScrollbar = memo(
  forwardRef<CustomScrollbarRef, CustomScrollbarProps>(
    (
      {
        children,
        renderTrackVerticalStyle,
        renderTrackHorizontal,
        disableOnMobile = false,
        autoHideX = true,
        ...rest
      },
      ref
    ) => {
      const [scrollRef, { width, height }] = useMeasure<HTMLDivElement>()
      const scrollBarRef = useRef<Scrollbars | null>(null)
      const [scrollAble, setScrollAble] = useState({ x: false, y: false })

      const scrollBarRefCb = useCallback(
        (node: Scrollbars | null) => {
          scrollBarRef.current = node
          if (node !== null) {
            scrollRef(node.container)
          }
        },
        [scrollRef]
      )

      useImperativeHandle(
        ref,
        () => ({
          getScrollRef: () => scrollBarRef.current
        }),
        []
      )

      useEffect(() => {
        if (scrollBarRef.current) {
          setScrollAble({
            y:
              scrollBarRef.current.getScrollHeight() >
              scrollBarRef.current.getClientHeight(),
            x:
              scrollBarRef.current.getScrollWidth() >
              scrollBarRef.current.getClientWidth()
          })
        }
      }, [width, height])

      return isMobile && disableOnMobile ? (
        <>{children}</>
      ) : (
        <Scrollbars
          ref={scrollBarRefCb}
          autoHide
          renderThumbVertical={(props) => (
            <Box
              {...props}
              className="increase-height-hover"
              style={{
                width: '.4rem',
                borderRadius: '8px',
                backgroundColor: 'var(--chakra-colors-brand-500)'
              }}
            />
          )}
          renderThumbHorizontal={(props) => (
            <Box
              {...props}
              className="increase-width-hover"
              style={{
                borderRadius: '8px',
                backgroundColor: 'var(--chakra-colors-brand-500)',
                height: '.4rem'
              }}
            />
          )}
          renderTrackVertical={({ style, ...props }) => (
            <Box
              bg="gray.100"
              style={{
                ...style,
                width: 'fit-content',
                borderRadius: '10px',
                height: scrollAble.y ? '100%' : 'auto',
                zIndex: 99,
                right: 0,
                top: 0,
                ...(renderTrackVerticalStyle ?? {})
              }}
              {...props}
            />
          )}
          renderTrackHorizontal={({ style, ...props }) => (
            <Box
              bg="gray.100"
              style={{
                ...style,
                height: 'fit-content',
                borderRadius: '10px',
                width: scrollAble.x ? '100%' : 'auto',
                zIndex: 99,
                left: 0,
                bottom: 0,
                ...(renderTrackHorizontal ?? {})
              }}
              {...(!autoHideX && { opacity: '1 !important' })}
              {...props}
            />
          )}
          {...rest}
        >
          {children}
        </Scrollbars>
      )
    }
  )
)

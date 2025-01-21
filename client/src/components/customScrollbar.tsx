'use client'

import {
  memo,
  type PropsWithChildren,
  useCallback,
  useEffect,
  useRef,
  useState
} from 'react'
import { Scrollbars } from 'react-custom-scrollbars-2'
import { isMobile } from 'react-device-detect'
import { Box } from '@chakra-ui/react'
import { useMeasure } from 'react-use'
import { EVENT_BUS, UI_SCROLLBAR_SIZE } from '@/utils/constants/global'
import { dispatchBus, useBus } from '@/hooks'

interface IProps extends PropsWithChildren, Record<string, any> {
  disableOnMobile?: boolean
  scrollBarOffset?: { y?: string; x?: string }
  scrollBusKey?: keyof typeof EVENT_BUS
  renderTrackVerticalStyle?: Record<string, any>
  renderTrackHorizontalStyle?: Record<string, any>
}

export const CustomScrollbar = memo(
  ({
    children,
    renderTrackVerticalStyle,
    renderTrackHorizontalStyle,
    disableOnMobile,
    scrollBusKey,
    scrollBarOffset,
    ...rest
  }: IProps) => {
    const [scrollRef, { width, height }] = useMeasure()
    const scrollBarRef = useRef<Scrollbars | null>(null)
    const [scrollAble, setScrollAble] = useState({ x: false, y: false })

    useBus(
      EVENT_BUS.reCalcScrollbar,
      () => {
        if (scrollBarRef.current) {
          setScrollAble(computeScrollAbility())
        }
      },
      []
    )

    const scrollBarRefCb = useCallback((node: Scrollbars) => {
      scrollBarRef.current = node
      if (node !== null) {
        scrollRef(node.container)
      }
    }, [])

    const onScroll = () => {
      if (
        scrollBusKey &&
        scrollBarRef.current &&
        scrollBarRef.current instanceof Scrollbars
      ) {
        dispatchBus({
          type: scrollBusKey,
          payload: { scrollY: scrollBarRef.current.getScrollTop() }
        })
      }
    }

    const computeScrollAbility = () => ({
      y:
        (scrollBarRef.current as Scrollbars).getScrollHeight() >
        (scrollBarRef.current as Scrollbars).getClientHeight(),
      x:
        (scrollBarRef.current as Scrollbars).getScrollWidth() >
        (scrollBarRef.current as Scrollbars).getClientWidth()
    })

    useEffect(() => {
      if (scrollBarRef.current) {
        setScrollAble(computeScrollAbility())
      }
    }, [width, height])

    return isMobile && disableOnMobile ? (
      children
    ) : (
      <Scrollbars
        onScroll={onScroll}
        ref={scrollBarRefCb}
        autoHide
        renderView={({ style, children }) => (
          <Box style={style} pr={scrollBarOffset?.y || '0'}>
            {children}
          </Box>
        )}
        renderThumbVertical={(props) => (
          <Box
            {...props}
            className="increase-height-hover"
            style={{
              width: UI_SCROLLBAR_SIZE,
              borderRadius: '8px',
              backgroundColor: 'var(--chakra-colors-gray-550)'
            }}
          />
        )}
        renderThumbHorizontal={(props) => (
          <Box
            {...props}
            className="increase-width-hover"
            style={{
              borderRadius: '8px',
              backgroundColor: 'var(--chakra-colors-gray-550)',
              height: UI_SCROLLBAR_SIZE
            }}
          />
        )}
        renderTrackVertical={({ style, ...props }) => (
          <Box
            bg="transparent"
            style={{
              ...style,
              width: 'fit-content',
              borderRadius: '10px',
              height: scrollAble.y ? '100%' : 'auto',
              zIndex: 999,
              right: 0,
              top: 0,
              ...(renderTrackVerticalStyle ?? {})
            }}
            {...props}
          />
        )}
        renderTrackHorizontal={({ style, ...props }) => (
          <Box
            bg="transparent"
            style={{
              ...style,
              height: 'fit-content',
              borderRadius: '10px',
              width: scrollAble.x ? '100%' : 'auto',
              zIndex: 999,
              left: 0,
              bottom: 0,
              ...(renderTrackHorizontalStyle ?? {})
            }}
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

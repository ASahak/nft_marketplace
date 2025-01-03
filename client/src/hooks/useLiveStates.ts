'use client'

import { useRef } from 'react'

export const useLiveStates = (value: any) => {
  const state = useRef(null)
  state.current = value

  return state
}

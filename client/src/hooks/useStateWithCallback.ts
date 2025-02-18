'use client'

import {
  type SetStateAction,
  useCallback,
  useEffect,
  useRef,
  useState
} from 'react'

export const useStateWithCallback = <T>(
  initialState: T
): [T, (state: T | SetStateAction<T>, cb?: (state: T) => void) => void] => {
  const [state, setState] = useState(initialState)
  const cbRef = useRef<((state: T) => void) | undefined>(undefined) // init mutable ref container for callbacks

  const setStateCallback = useCallback(
    (state: T | SetStateAction<T>, cb?: (state: T) => void) => {
      cbRef.current = cb // store current, passed callback in ref
      setState(state)
    },
    []
  ) // keep object reference stable, exactly like `useState`

  useEffect(() => {
    // cb.current is `undefined` on initial render,
    // so we only invoke callback on state *updates*
    if (cbRef.current) {
      cbRef.current(state)
      cbRef.current = undefined // reset callback after execution
    }
  }, [state])

  return [state, setStateCallback]
}

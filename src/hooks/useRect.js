import { useState, useRef, useEffect } from 'react'

export const useRect = () => {
  const ref = useRef()
  const [rect, setRect] = useState({})

  const screenWidth = typeof window !== 'undefined' && window.innerWidth

  rect.screenWidth = screenWidth

  const set = () =>
    setRect(ref && ref.current ? ref.current.getBoundingClientRect() : {})

  const useEffectInEvent = (event, useCapture) => {
    useEffect(() => {
      set()
      typeof window !== 'undefined' &&
        window.addEventListener(event, set, useCapture)
      return () =>
        typeof window !== 'undefined' &&
        window.removeEventListener(event, set, useCapture)
    }, [])
  }

  useEffectInEvent('resize')
  useEffectInEvent('scroll', true)

  return [rect, ref]
}

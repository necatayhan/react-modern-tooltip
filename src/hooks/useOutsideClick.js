import { useEffect } from 'react'

const useOutsideClick = (ref, ref2, isOpenTooltip, handleSetState) => {
  const escapeClick = (evt) => {
    evt = evt || window.event

    if ((evt.key === 'Escape' || evt.key === 'Esc') && isOpenTooltip) {
      handleSetState(false)
    }
  }

  const handleClickOutside = (event) => {
    if (
      event.target !== ref.current &&
      !ref.current?.contains(event.target) &&
      event.target !== ref2.current &&
      !ref2.current?.contains(event.target)
    ) {
      handleSetState(false)
    }
  }

  useEffect(() => {
    typeof window !== 'undefined' &&
      window.addEventListener('click', handleClickOutside, true)
    typeof window !== 'undefined' &&
      window.addEventListener('keydown', escapeClick, true)

    return () => {
      typeof window !== 'undefined' &&
        window.removeEventListener('click', handleClickOutside, true)
      typeof window !== 'undefined' &&
        window.removeEventListener('keydown', escapeClick, true)
    }
  })

  return null
}

export default useOutsideClick

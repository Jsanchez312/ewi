import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Scrolls the viewport to the top on every route change, so
 * navigating to a new page never lands mid-scroll from wherever
 * the previous page happened to be.
 */
export default function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

import { useEffect } from 'react'

export function useScrollListener(setScrollPercentage) {
  const handleScroll = () => {
    const docHeight = document.body.clientHeight
    const scroll = window.scrollY
    const windowHeight = window.innerHeight
    const bodyHeight = docHeight - windowHeight
    const scrollPercentage = scroll / bodyHeight
    // setScrollPercentage(scrollPercentage)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
}

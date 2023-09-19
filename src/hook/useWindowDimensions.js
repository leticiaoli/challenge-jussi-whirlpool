import { useState, useEffect } from 'react';

export default function useWindowDimensions() {
  const getWindowDimensions = () => {
    const notebookBreakpoint = 1024
    const width = window?.innerWidth
    const isMobile = width < notebookBreakpoint

    return {
      width,
      isMobile,
    }
  }

  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  )

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions())
    }
    window.addEventListener('resize', handleResize)
  }, [])


  return windowDimensions
}
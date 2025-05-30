import { useState, useEffect } from 'react';

export default function useWindowWidth() {
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 0
  );

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    
    // Set initial width on mount
    setWindowWidth(window.innerWidth);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowWidth;
}
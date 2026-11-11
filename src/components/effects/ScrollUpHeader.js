import { useState, useEffect } from 'react';

export function useScrollDirection() {
  const [scrollDirection, setScrollDirection] = useState('up');

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const updateScrollDirection = () => {
      const scrollY = window.scrollY;
      
      // Determine direction
      const direction = scrollY > lastScrollY ? 'down' : 'up';
      
      // Prevent updates if direction hasn't changed or if near the very top/bottom bounds
      if (direction !== scrollDirection && (scrollY - lastScrollY > 5 || scrollY - lastScrollY < -5)) {
        setScrollDirection(direction);
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };

    window.addEventListener('scroll', updateScrollDirection);
    
    return () => {
      window.removeEventListener('scroll', updateScrollDirection);
    };
  }, [scrollDirection]);

  return scrollDirection;
}

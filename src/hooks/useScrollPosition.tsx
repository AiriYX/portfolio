
import { useState, useEffect } from 'react';

export const useScrollPosition = () => {
  const [hasScrolledPastThreshold, setHasScrolledPastThreshold] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const pageHeight = document.documentElement.scrollHeight - window.innerHeight;
      const threshold = pageHeight / 3;

      setHasScrolledPastThreshold(scrollPosition > threshold);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return hasScrolledPastThreshold;
};

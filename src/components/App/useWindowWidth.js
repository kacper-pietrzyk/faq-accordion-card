import { useState, useEffect } from 'react';

function useWindowWidth() {
  const [windowWidth, setwindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setwindowWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowWidth;
}

export default useWindowWidth;
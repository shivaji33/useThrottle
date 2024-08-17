import {useCallback, useRef } from 'react';

function useThrottle(fn, delay) {
  const lastRange = useRef(null);
  const timeoutRef = useRef(null);

  const throttledFn = useCallback(() => {
    if (Date.now() - lastRange.current >= delay) {
      lastRange.current = Date.now();
      fn();
    } else {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        lastRange.current = Date.now();
        fn();
      }, delay - (Date.now() - lastRange.current));
    }
  }, [fn, delay]);

  return throttledFn;
}

export default useThrottle;
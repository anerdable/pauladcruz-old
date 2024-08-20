import { useEffect } from 'react';

const useKonamiCode = (callback: () => void) => {
  useEffect(() => {
    const konamiCode = [
      'ArrowUp',
      'ArrowUp',
      'ArrowDown',
      'ArrowDown',
      'ArrowLeft',
      'ArrowRight',
      'ArrowLeft',
      'ArrowRight',
      'b',
      'a'
    ];
    let konamiIndex = 0;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === konamiCode[konamiIndex]) {
        konamiIndex++;
        if (konamiIndex === konamiCode.length) {
          callback();
          konamiIndex = 0;
        }
      } else {
        konamiIndex = 0;
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [callback]);
};

export default useKonamiCode;

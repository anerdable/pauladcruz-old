import React, { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import './KonamiPopup.css';

interface KonamiPopupProps {
  onClose: () => void;
}

const KonamiPopup: React.FC<KonamiPopupProps> = ({ onClose }) => {
  const popupRef = useRef<HTMLDivElement | null>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
      onClose();
    }
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  });
  

  return (
    <div className="konami-popup">
      <div className="konami-content" ref={popupRef}>
        <button className="close-button" onClick={onClose} aria-label="Close">
          <FontAwesomeIcon icon={faTimes} />
        </button>
        <iframe
          src="https://giphy.com/embed/kT8wr0q0ZvTYi8hH51"
          width="480"
          height="367"
          className="giphy-embed"
          allowFullScreen
          title="Giphy GIF"
        ></iframe>
      </div>
    </div>
  );
};

export default KonamiPopup;
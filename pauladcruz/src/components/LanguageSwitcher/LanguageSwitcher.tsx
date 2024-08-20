import React, { useContext, useState, useRef, useEffect } from 'react';
import { LanguageContext } from '../../contexts/LanguageContext';
import './LanguageSwitcher.css';

const LanguageSwitcher: React.FC = () => {
  const { language, changeLanguage } = useContext(LanguageContext);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLUListElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  const toggleDropdown = (event: React.MouseEvent) => {
    event.stopPropagation();
    setDropdownOpen(prevState => !prevState);
  };

  const handleLanguageChange = (lang: 'en' | 'sv') => {
    changeLanguage(lang);
    setDropdownOpen(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current && 
      !dropdownRef.current.contains(event.target as Node) &&
      buttonRef.current &&
      !buttonRef.current.contains(event.target as Node)
    ) {
      setDropdownOpen(false);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Escape') {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="language-switcher">
      <button
        className={`language-button ${dropdownOpen ? 'open' : ''}`}
        onClick={toggleDropdown}
        aria-haspopup="true"
        aria-expanded={dropdownOpen}
        ref={buttonRef}
      >
        {language === 'sv' ? '🇸🇪' : '🇬🇧'}
      </button>
      {dropdownOpen && (
        <ul
          className="language-dropdown"
          ref={dropdownRef}
          onKeyDown={handleKeyDown}
        >
          <li
            className={language === 'en' ? 'disabled' : ''}
            tabIndex={0}
            onClick={() => language !== 'en' && handleLanguageChange('en')}
            onKeyDown={(e) => e.key === 'Enter' && language !== 'en' && handleLanguageChange('en')}
          >
            🇬🇧 English
          </li>
          <li
            className={language === 'sv' ? 'disabled' : ''}
            tabIndex={0}
            onClick={() => language !== 'sv' && handleLanguageChange('sv')}
            onKeyDown={(e) => e.key === 'Enter' && language !== 'sv' && handleLanguageChange('sv')}
          >
            🇸🇪 Svenska
          </li>
        </ul>
      )}
    </div>
  );
};

export default LanguageSwitcher;

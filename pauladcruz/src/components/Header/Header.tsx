import React from 'react';
import { useLocation } from 'react-router-dom';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';
import './Header.css';
import { useContext } from 'react';
import { LanguageContext } from '../../contexts/LanguageContext';
import { translations } from '../../translations/translations';
import logo from '../../assets/self.png'; 

const Header: React.FC = () => {
  const { language } = useContext(LanguageContext);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="header">
      <div className="logo-container">
        <a href="/">
          <img src={logo} alt="Logo" className="logo" />
        </a>
      </div>
      <nav>
        <ul className="nav-list">
          <li className={isActive('/') ? 'active' : ''}>
            <a href="/">{translations[language].home}</a>
          </li>
          <li className={isActive('/about') ? 'active' : ''}>
            <a href="/about">{translations[language].about}</a>
          </li>
        </ul>
      </nav>
      <LanguageSwitcher />
    </header>
  );
};

export default React.memo(Header);

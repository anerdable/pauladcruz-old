import React from 'react';
import { useLocation, Link } from 'react-router-dom';
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
        <Link to="/">
          <img src={logo} alt="Logo" className="logo" />
        </Link>
      </div>
      <nav>
        <ul className="nav-list">
          <li className={isActive('/') ? 'active' : ''}>
            <Link to="/">{translations[language].home}</Link>
          </li>
          <li className={isActive('/about') ? 'active' : ''}>
            <Link to="/about">{translations[language].about}</Link>
          </li>
        </ul>
      </nav>
      <LanguageSwitcher />
    </header>
  );
};

export default React.memo(Header);

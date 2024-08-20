import React, { useContext } from 'react';
import { LanguageContext } from '../../contexts/LanguageContext';
import { translations } from '../../translations/translations';
import './HomePage.css';

const HomePage: React.FC = () => {
  const { language } = useContext(LanguageContext);

  return (
    <div className="homepage">
      <h2>{translations[language].welcome}</h2>
    </div>
  );
};

export default HomePage;
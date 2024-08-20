import React, { useState, useContext } from 'react';
import playingcard from '../../assets/playingcard.png';
import './AboutPage.css';
import { translations } from '../../translations/translations';
import { LanguageContext } from '../../contexts/LanguageContext';
import TrueFalseGame from '../../games/TrueOrFalse/TrueFalseGame';

const AboutPage: React.FC = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const { language } = useContext(LanguageContext);
  const t = translations[language];

  const handleCardClick = (index: number) => {
    if (activeCard === index) {
      setActiveCard(null); 
    } else {
      setActiveCard(index); 
    }
  };

  return (
    <div className="about-page">
      <div className="cards-container">
        {[t.game1Title, t.trueFalseGameTitle, t.game3Title].map((title, index) => (
          <div
            key={index}
            className={`card-wrapper ${activeCard === index ? 'active' : ''}`}
          >
            <h2 className='card-title'>{title}</h2>
            <div
              className={`card ${activeCard === index ? 'flipped' : ''}`}
            >
              <div className="card-inner">
                <div className="card-front" onClick={() => handleCardClick(index)}>
                  <img src={playingcard} alt="PlayingCard" className="playing-card" />
                </div>
                <div className="card-back">
                  {activeCard === 1 && index === 1 && <TrueFalseGame />}
                  <div className="exit-area" onClick={() => handleCardClick(index)}></div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutPage;

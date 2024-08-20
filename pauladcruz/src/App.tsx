import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import HomePage from './pages/HomePage/HomePage';
import './App.css';
import PhaserGame from './games/PhaserGame';
import Header from './components/Header/Header';
import AboutPage from './pages/AboutPage/AboutPage';
import useKonamiCode from './hooks/useKonamiCode';
import KonamiPopup from './components/Popups/KonamiPopup/KonamiPopup';
import Footer from './components/Footer/Footer';

const App: React.FC = () => {
  const [konamiTriggered, setKonamiTriggered] = useState(false);

  useKonamiCode(() => {
    setKonamiTriggered(true);
  });

  const closePopup = () => {
    setKonamiTriggered(false);
  };

  return (
    <LanguageProvider>
      <Router>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </main>
        <PhaserGame />
        {konamiTriggered && <KonamiPopup onClose={closePopup} />}
        <Footer />
      </Router>
    </LanguageProvider>
  );
};

export default App;

import React, { useState } from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import HomePage from './pages/HomePage/HomePage';
import TimelinePage from './pages/TimelinePage/TimelinePage';
import './App.css';
import PhaserGame from './games/PhaserGame';
import Header from './components/Header/Header';
import AboutPage from './pages/AboutPage/AboutPage';
import useKonamiCode from './hooks/useKonamiCode';
import KonamiPopup from './components/Popups/KonamiPopup/KonamiPopup';
import Footer from './components/Footer/Footer';

const MainContent: React.FC = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        {/* <Route path="/timeline" element={<TimelinePage />} /> */}
      </Routes>
    </main>
  );
};

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
        <MainContent />
        <PhaserGame />
        {konamiTriggered && <KonamiPopup onClose={closePopup} />}
        <Footer />
      </Router>
    </LanguageProvider>
  );
};

export default App;

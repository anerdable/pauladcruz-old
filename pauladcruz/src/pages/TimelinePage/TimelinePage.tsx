import React, { useState, useContext, useEffect } from 'react';
import { LanguageContext } from '../../contexts/LanguageContext';
import { translations } from '../../translations/translations';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faStar, faMicrophone, faTimes } from '@fortawesome/free-solid-svg-icons';
import './TimelinePage.css';

interface CVEvent {
  title: string;
  details: string;
  position: { top: string };
  type?: 'mission' | 'certification' | 'publication';
}

const TimelinePage: React.FC = () => {
  const { language } = useContext(LanguageContext);
  const [selectedEvent, setSelectedEvent] = useState<string | null>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedEvent(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const cvEvents: Record<string, CVEvent> = {
    event1: {
      title: translations[language].carestream,
      details: translations[language].carestreamDetails,
      position: { top: '5%' },
      type: 'mission',
    },
    publication1: {
      title: translations[language].publicationB3TechTalk,
      details: translations[language].b3TechTalkDetails,
      position: { top: '12%' },
      type: 'publication',
    },
    publication2: {
      title: translations[language].publicationCoachChangersHub,
      details: translations[language].coachChangersHubDetails,
      position: { top: '19%' },
      type: 'publication',
    },
    publication3: {
      title: translations[language].publicationDatatjejPodcast,
      details: translations[language].datatjejPodcastDetails,
      position: { top: '26%' },
      type: 'publication',
    },
    event2: {
      title: translations[language].protector,
      details: translations[language].protectorDetails,
      position: { top: '33%' },
      type: 'mission',
    },
    event3: {
      title: translations[language].kammarkollegiet,
      details: translations[language].kammarkollegietDetails,
      position: { top: '40%' },
      type: 'mission',
    },
    certificate1: {
      title: translations[language].certifiedAccessibility,
      details: translations[language].accessibilityDetails,
      position: { top: '47%' },
      type: 'certification',
    },
    event4: {
      title: translations[language].ving,
      details: translations[language].vingDetails,
      position: { top: '54%' },
      type: 'mission',
    },
    certificate2: {
      title: translations[language].certifiedSAFe,
      details: translations[language].safeDetails,
      position: { top: '61%' },
      type: 'certification',
    },
    certificate3: {
      title: translations[language].certifiedScrumMaster,
      details: translations[language].scrumMasterDetails,
      position: { top: '68%' },
      type: 'certification',
    },
    event5: {
      title: translations[language].skatteverket,
      details: translations[language].skatteverketDetails,
      position: { top: '75%' },
      type: 'mission',
    },
    event6: {
      title: translations[language].magello,
      details: translations[language].magelloDetails,
      position: { top: '82%' },
      type: 'mission',
    },
    event7: {
      title: translations[language].scania,
      details: translations[language].scaniaDetails,
      position: { top: '89%' },
      type: 'mission',
    },
    event8: {
      title: translations[language].trendhim,
      details: translations[language].trendhimDetails,
      position: { top: '96%' },
      type: 'mission',
    },
  };

  const handleClose = () => {
    setSelectedEvent(null);
  };

  return (
    <div className="timeline-page">
      <div className="timeline-container">
        <BoringTimeline events={cvEvents} onSelectEvent={setSelectedEvent} />
      </div>

      {selectedEvent && (
        <div className="event-details">
          <button className="close-button" onClick={handleClose} aria-label="Close details">
            <FontAwesomeIcon icon={faTimes} />
          </button>
          <h3>{cvEvents[selectedEvent].title}</h3>
          <p>{cvEvents[selectedEvent].details}</p>
        </div>
      )}
    </div>
  );
};

const BoringTimeline: React.FC<{ events: Record<string, CVEvent>; onSelectEvent: (id: string) => void }> = ({ events, onSelectEvent }) => (
  <div className="boring-timeline">
    <div className="vertical-line"></div>
    {Object.entries(events).map(([id, event]) => (
      <button
        key={id}
        className={`event-item ${event.type}`}
        style={{ top: event.position.top }}
        onClick={() => onSelectEvent(id)}
        aria-label={`${event.type === 'certification' ? 'Certification' : event.type === 'publication' ? 'Publication' : 'Mission'}: ${event.title}`}
      >
        <FontAwesomeIcon icon={event.type === 'certification' ? faStar : event.type === 'publication' ? faMicrophone : faUser} /> {event.title}
      </button>
    ))}
  </div>
);

export default TimelinePage;

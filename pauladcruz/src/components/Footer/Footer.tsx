import React, { useContext } from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { LanguageContext } from '../../contexts/LanguageContext';
import { translations } from '../../translations/translations';

const Footer: React.FC = () => {
  const { language } = useContext(LanguageContext);
  const t = translations[language];

  const phoneNumber = "+46 79-335 15 44";
  const emailAddress = "hello@pauladcruz.com"; 
  const linkedInUrl = "https://www.linkedin.com/in/pauladcruz/";

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-contact">
          <p>
            <FontAwesomeIcon icon={faMapMarkerAlt} /> Stockholm, Sweden
          </p>
          <p>
            <a href={`tel:${phoneNumber}`} className="contact-info">
              <FontAwesomeIcon icon={faPhone} /> {phoneNumber}
            </a>
          </p>
          <p>
            <a href={`mailto:${emailAddress}`} className="contact-info">
              <FontAwesomeIcon icon={faEnvelope} /> {emailAddress}
            </a>
          </p>
        </div>
        <div className="footer-social">
          <p className="social-text">
            {t.followMe}! 
            <a href={linkedInUrl} target="_blank" rel="noopener noreferrer" className="linkedin-link">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

// Navbar.jsx
import React, { useState } from 'react';
import AboutPage from './AboutPage';
import ServicesPage from './ServicesPage';
import './Navbar.css'; // Importez les styles CSS pour la barre de navigation

function Navbar() {
  const [activePage, setActivePage] = useState('about');

  const handleTabClick = (pageName) => {
    setActivePage(pageName);
  };

  return (
    <nav className="navbar-container">
      <ul>
        <li><a href="#" onClick={() => handleTabClick('about')}>A propos</a></li>
        <li><a href="#" onClick={() => handleTabClick('services')}>Services</a></li>
      </ul>
      {activePage === 'about' && <AboutPage />}
      {activePage === 'services' && <ServicesPage />}
    </nav>
  );
}

export default Navbar;

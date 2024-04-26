// App.jsx
import React, { useState } from 'react';
import TabBar from './TabBar';
import TabContent from './TabContent';
import './App.css'; // Import des styles CSS pour le fichier App

function App() {
  const [activeTab, setActiveTab] = useState('APEGG');

  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className="app-container">
      <TabBar activeTab={activeTab} onTabChange={handleTabChange} />
      <TabContent activeTab={activeTab} />
    </div>
  );
}

export default App;

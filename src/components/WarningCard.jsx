import React from 'react';
import '../styles/WarningCard.css';

const WarningCard = ({ title, pdfPath, icon }) => {
  const handleClick = (e) => {
    e.preventDefault();
    window.open(pdfPath, '_blank');
  };

  return (
    <div className="warning-card">
      <div className="warning-card-content">
        <div className="warning-icon">{icon}</div>
        <h3 className="warning-title">{title}</h3>
        <button 
          onClick={handleClick}
          className="warning-button"
        >
          Uyarıyı Görüntüle
        </button>
      </div>
    </div>
  );
};

export default WarningCard; 
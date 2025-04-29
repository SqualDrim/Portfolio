import { useState, useEffect } from "react";
import "./App.css";

function Popup({ onClose }: { onClose: () => void }) {  
  const [fadeIn, setFadeIn] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  const handleButtonClick = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
    }, 500);
  };

  const handleRedirect = () => {
    window.open("https://www.linkedin.com/in/kilian-breviere", "_blank");
  };

  return (
    <div className={`popup-overlay ${isClosing ? "closing" : ""}`}>
      <div className={`popup-container ${fadeIn ? "show" : ""}`}>
        <img src="linkedin-1.png" alt="LinkedIn" className="linkedin-logo" />
        <h2>Bienvenue sur mon LinkedIn !</h2>
        <div className="popup-buttons">
          <button className="popup-button linkedin" onClick={handleRedirect}>
            Visiter
          </button>
          <button className="popup-button close" onClick={handleButtonClick}>
            Fermer
          </button>
        </div>
      </div>
    </div>
  );
}

export default Popup;

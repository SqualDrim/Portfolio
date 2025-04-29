import { useState } from "react";

function Experience({ onClose }: { onClose: () => void }) {
  const [isClosing, setIsClosing] = useState(false);

  const handleButtonClick = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose(); // Appelle la fonction onClose après l'animation
    }, 500); // Durée de l'animation
  };

  return (
    <div
      className={`Experience ${isClosing ? "closing" : ""}`}
    >
      <div
        className="boutonRouge"
        style={{
          cursor: "pointer",
        }}
        onClick={handleButtonClick}
      >

      </div>
    </div>
  );
}

export default Experience;

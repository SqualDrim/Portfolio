import { useState } from "react";

function Formation({ onClose }: { onClose: () => void }) {
  const [isClosing, setIsClosing] = useState(false);

  const handleButtonClick = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose(); // Appelle la fonction onClose après l'animation
    }, 500); // Durée de l'animation
  };

  return (
    <div
      className={`Formation ${isClosing ? "closing" : ""}`}
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

export default Formation;

import { useState } from "react";

interface ProjetProps {
    setIszoomedProjet: (zoomedProjet: boolean) => void;
    isOtherZoomed: boolean;
    isActiveProjet: boolean; // ⬅ Nouvelle prop
}

function Projet({ setIszoomedProjet, isOtherZoomed, isActiveProjet }: ProjetProps) {
    const [iszoomedProjet, setzoomedProjet] = useState(false);

    const handleClick = () => {
        const newZoomState = !iszoomedProjet;
        setzoomedProjet(newZoomState);
        setIszoomedProjet(newZoomState);
    };

    if (isOtherZoomed) return null; // Cache totalement la div si un autre élément est zoomé

    return (
        <>
        <div
            className={`${iszoomedProjet ? "projet-1" : isActiveProjet ? "projet-2" : "projet-hidden"}`}
            onClick={handleClick}
            
        ></div>
        {iszoomedProjet && <div className="feuilleProjet"></div>}
        </>
    );
}

export default Projet;

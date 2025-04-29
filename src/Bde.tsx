import { useState } from "react";

interface BdeProps {
    setIszoomedBde: (zoomedBde: boolean) => void;
    isOtherZoomed: boolean; // ⬅ Ajout
}

function Bde({ setIszoomedBde, isOtherZoomed }: BdeProps) {
    const [iszoomedBde, setzoomedBde] = useState(false);

    const handleClick = () => {
        const newZoomState = !iszoomedBde;
        setzoomedBde(newZoomState);
        setIszoomedBde(newZoomState);
    };

    if (isOtherZoomed) return null; // ⬅ Cache totalement la div si Langue est zoomé


    return (
        <>
            <div className={`${iszoomedBde ? "bde-1" : "bde"}`} onClick={handleClick}></div>
            {iszoomedBde && <div className="feuilleBde">
                <p className="text-bde">Président du comité d'intégration De 2024 à 2025</p>
                <p className="text-bde2">Trésorier du comité d'intégration De 2023 à 2024</p>
                <p className="text-bde3">
                    <li>Gérer la trésorie </li> 
                    <li>Gérer un évènement</li> 
                    <li>Gérer les imprévus</li>
                    <li>Gérer les communications</li>
                    </p>
                </div>}
        </>
    );
}

export default Bde;

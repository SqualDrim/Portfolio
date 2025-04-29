import { useState } from "react";

interface TrompetteProps {
    setIszoomedTrompette: (zoomedTrompette: boolean) => void;
    isOtherZoomed: boolean; // ⬅ Ajout
}

function Trompette({ setIszoomedTrompette, isOtherZoomed }: TrompetteProps) {
    const [iszoomedTrompette, setzoomedTrompette] = useState(false);

    const handleClick = () => {
        const newZoomState = !iszoomedTrompette;
        setzoomedTrompette(newZoomState);
        setIszoomedTrompette(newZoomState);
    };

    if (isOtherZoomed) return null; // ⬅ Cache totalement la div si Langue est zoomé


    return (
        <>
            <div className={`${iszoomedTrompette ? "trompette-1" : "trompette"}`} onClick={handleClick}></div>
            {iszoomedTrompette && <div className="feuilleTrompette">
                <p className="text-trompette">Professeur de Cuivres</p>
                <p className="text-trompette2">Depuis septembre 2022</p>
                <p className="text-trompette3">Professeur de Cuivres</p>
                <p className="text-trompette4">Élèves allant de 7 à 25 ans</p>
                </div>}
        </>
    );
}

export default Trompette;

import { useState } from "react";

interface PianoProps {
    setIszoomedPiano: (zoomedPiano: boolean) => void;
    isOtherZoomed: boolean;
}

function Piano({ setIszoomedPiano, isOtherZoomed }: PianoProps) {
    const [iszoomedPiano, setzoomedPiano] = useState(false);

    const handleClick = () => {
        const newZoomState = !iszoomedPiano;
        setzoomedPiano(newZoomState);
        setIszoomedPiano(newZoomState);
    };

    if (isOtherZoomed) return null; // ⬅ Cache totalement la div si Langue est zoomé

    return (
        <>
            <div className={`${iszoomedPiano ? "piano-1" : "piano"}`} onClick={handleClick}></div>
            <div className={`${iszoomedPiano ? "piano2-1" : "piano2"}`} onClick={handleClick}></div>
            {iszoomedPiano && <div className="feuillePiano">
                <p className="text-piano">Musicien depuis 16 ans</p>
                <p className="text-piano2">Présent dans l'Harmonie depuis 10 ans</p>
                <p className="text-piano3">Trompettiste depuis 16 ans</p>
                <p className="text-piano4">Apprentissage du Piano en autodidacte</p>
                <p className="text-piano5">Apprentissage du Cor, Baryton, Trombone, Contrebasse depuis quelques années</p>
                </div>}
        </>
    );
}

export default Piano;

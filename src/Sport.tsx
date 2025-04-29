import { useState, useEffect } from "react";

interface SportProps {
    setIszoomedSport: (zoomedSport: boolean) => void;
    isOtherZoomed: boolean;
}

function Sport({ setIszoomedSport, isOtherZoomed }: SportProps) {
    const [iszoomedSport, setzoomedSport] = useState(false);
    const [imageIndex, setImageIndex] = useState(0);

    const images = ["feuilleSport", "feuilleSport2", "feuilleSport3"];

    useEffect(() => {
        if (iszoomedSport) {
            const interval = setInterval(() => {
                setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
            }, 5000); // Change toutes les 5 secondes

            return () => clearInterval(interval); // Nettoyage de l'intervalle quand on quitte
        }
    }, [iszoomedSport]);

    const handleClick = () => {
        const newZoomState = !iszoomedSport;
        setzoomedSport(newZoomState);
        setIszoomedSport(newZoomState);
    };

    if (isOtherZoomed) return null; // Cache totalement la div si un autre élément est zoomé

    return (
        <>
            <div className={`${iszoomedSport ? "sport-1" : "sport"}`} onClick={handleClick}></div>
            <div className={`${iszoomedSport ? "sport2-1" : "sport2"}`} onClick={handleClick}></div>
            {iszoomedSport && <div className={images[imageIndex]}></div>}
        </>
    );
}

export default Sport;

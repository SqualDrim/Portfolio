import { useState } from "react";

interface ConseillerProps {
    setIszoomedConseiller: (zoomedBde: boolean) => void;
    isOtherZoomed: boolean; // ⬅ Ajout
}

function Conseiller({ setIszoomedConseiller, isOtherZoomed }: ConseillerProps) {
    const [iszoomedConseiller, setzoomedConseiller] = useState(false);

    const handleClick = () => {
        const newZoomState = !iszoomedConseiller;
        setzoomedConseiller(newZoomState);
        setIszoomedConseiller(newZoomState);
    };

    if (isOtherZoomed) return null; // ⬅ Cache totalement la div si Langue est zoomé


    return (
        <>
            <div className={`${iszoomedConseiller ? "conseiller-1" : "conseiller"}`} onClick={handleClick}></div>
            {iszoomedConseiller && <div className="feuilleConseiller">
                <p className="text-Conseiller">Contrat à Durée Limitée</p>
                <p className="text-Conseiller2">Chez Decathlon France</p>
                <p className="text-Conseiller3">De août 2023 à janvier 2024</p>
                <p className="text-Conseiller4">
                    <li>Gérer les clients </li>
                    <li>Les conseiller</li>
                    <li>Gérer les imprévus</li>
                    <li>Gérer les </li>
                </p>
                <p className="text-Conseiller5">communications</p>
            </div>}
        </>
    );
}

export default Conseiller;

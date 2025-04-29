import { useState } from "react";
import Mac from "./Mac";

interface OrdiProps {
    setIszoomedOrdi: (zoomedOrdi: boolean) => void;
    isOtherZoomed: boolean;
}

function Ordi({ setIszoomedOrdi, isOtherZoomed }: OrdiProps) {
    const [iszoomedOrdi, setzoomedOrdi] = useState(false);
    const [showMac, setShowMac] = useState(false); // État pour afficher le composant Mac

    const handleClick = () => {
        const newZoomState = !iszoomedOrdi;
        setzoomedOrdi(newZoomState);
        setIszoomedOrdi(newZoomState);

        if (newZoomState) {
            setShowMac(true); // Affiche Mac lorsqu'on zoome sur Ordi
        } else {
            setShowMac(false); // Cache Mac lorsqu'on dézoome
        }
    };

    if (isOtherZoomed) return null;

    return (
        <>
            <div
                className={`${iszoomedOrdi ? "ordi-1" : "ordi"}`}
                onClick={handleClick}
            ></div>
            {iszoomedOrdi && <div className="feuilleordi"></div>}
            {showMac && <Mac />} {/* Affiche le composant Mac */}
        </>
    );
}

export default Ordi;

import { useState } from "react";

interface LangueProps {
    setIszoomedLangue: (zoomedLangue: boolean) => void;
    isOtherZoomed: boolean; // ⬅ Ajout
}

function Langue({ setIszoomedLangue, isOtherZoomed }: LangueProps) {
    const [iszoomedLangue, setzoomedLangue] = useState(false);

    const handleClick = () => {
        const newZoomState = !iszoomedLangue;
        setzoomedLangue(newZoomState);
        setIszoomedLangue(newZoomState);
    };

    if (isOtherZoomed) return null; // ⬅ Cache totalement la div si Langue est zoomé


    return (
        <>
            <div className={`${iszoomedLangue ? "langue-1" : "langue"}`} onClick={handleClick}>
            </div>
            {iszoomedLangue && <div className="feuillelangue">
                <p className="text-langue">Langue</p>
                <p className="text-langue2">Français : Langue Maternelle</p>
                <p className="text-langue3">Anglais : Intermédiaire</p>
                <p className="text-langue4">Espagnol : Intermédiaire</p>
                </div>}
        </>
    );
}

export default Langue;

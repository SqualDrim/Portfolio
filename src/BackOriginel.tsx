import { useState } from "react";
import Piano from './Piano.tsx';
import Langue from './Langue.tsx';
import Trompette from "./Trompette.tsx";
import Bde from "./Bde.tsx";
import Sport from "./Sport.tsx";
import Conseiller from "./Conseiller.tsx";
import Projet from "./Projet.tsx";
import Ordi from "./Ordi.tsx";

function BackOriginel() {
    const [isActiveLumiere, setIsActiveLumiere] = useState(false);
    const [isActiveProjet, setIsActiveProjet] = useState(false);
    const [iszoomedPiano, setIszoomedPiano] = useState(false);
    const [iszoomedLangue, setIszoomedLangue] = useState(false);
    const [iszoomedTrompette, setIszoomedTrompette] = useState(false);
    const [iszoomedBde, setIszoomedBde] = useState(false);
    const [iszoomedSport, setIszoomedSport] = useState(false);
    const [iszoomedConseiller, setIszoomedConseiller] = useState(false);
    const [iszoomedProjet, setIszoomedProjet] = useState(false);
    const [iszoomedOrdi, setIszoomedOrdi] = useState(false);
    const [lastZoom, setLastZoom] = useState<"piano" | "langue" | "trompette" | "bde" | "sport" | "conseiller" | "projet" | "ordi" | null>(null);

    const handlePianoClick = (zoomed: boolean) => {
        if (zoomed) {
            setIszoomedPiano(true);
            setIszoomedLangue(false);
            setIszoomedTrompette(false);
            setIszoomedBde(false);
            setIszoomedSport(false);
            setIszoomedConseiller(false);
            setIszoomedProjet(false);
            setIszoomedOrdi(false);
            setLastZoom("piano");
        } else {
            setIszoomedPiano(false);
        }
    };

    const handleLangueClick = (zoomed: boolean) => {
        if (zoomed) {
            setIszoomedLangue(true);
            setIszoomedPiano(false);
            setIszoomedTrompette(false);
            setIszoomedBde(false);
            setIszoomedSport(false);
            setIszoomedConseiller(false);
            setIszoomedProjet(false);
            setIszoomedOrdi(false);
            setLastZoom("langue");
        } else {
            setIszoomedLangue(false);
        }
    };

    const handleTrompetteClick = (zoomed: boolean) => {
        if (zoomed) {
            setIszoomedTrompette(true);
            setIszoomedLangue(false);
            setIszoomedPiano(false);
            setIszoomedBde(false);
            setIszoomedSport(false);
            setIszoomedConseiller(false);
            setIszoomedProjet(false);
            setIszoomedOrdi(false);
            setLastZoom("trompette");
        } else {
            setIszoomedTrompette(false);
        }
    };

    const handleBdeClick = (zoomed: boolean) => {
        if (zoomed) {
            setIszoomedBde(true);
            setIszoomedLangue(false);
            setIszoomedPiano(false);
            setIszoomedTrompette(false);
            setIszoomedSport(false);
            setIszoomedConseiller(false);
            setIszoomedProjet(false);
            setIszoomedOrdi(false);
            setLastZoom("bde");
        } else {
            setIszoomedBde(false);
        }
    };

    const handleSportClick = (zoomed: boolean) => {
        if (zoomed) {
            setIszoomedSport(true);
            setIszoomedLangue(false);
            setIszoomedPiano(false);
            setIszoomedTrompette(false);
            setIszoomedBde(false);
            setIszoomedConseiller(false);
            setIszoomedProjet(false);
            setIszoomedOrdi(false);
            setLastZoom("sport");
        } else {
            setIszoomedSport(false);
        }
    };

    const handleConseillerClick = (zoomed: boolean) => {
        if (zoomed) {
            setIszoomedConseiller(true);
            setIszoomedLangue(false);
            setIszoomedPiano(false);
            setIszoomedTrompette(false);
            setIszoomedBde(false);
            setIszoomedSport(false);
            setIszoomedProjet(false);
            setIszoomedOrdi(false);
            setLastZoom("conseiller");
        } else {
            setIszoomedConseiller(false);
        }
    };

    const handleProjetClick = (zoomed: boolean) => {
        if (zoomed) {
            setIszoomedProjet(true);
            setIszoomedLangue(false);
            setIszoomedPiano(false);
            setIszoomedTrompette(false);
            setIszoomedBde(false);
            setIszoomedSport(false);
            setIszoomedConseiller(false);
            setIszoomedOrdi(false);
            setLastZoom("projet");
        } else {
            setIszoomedProjet(false);
        }
    };

    const handleOrdiClick = (zoomed: boolean) => {
        if (zoomed) {
            setIszoomedOrdi(true);
            setIszoomedLangue(false);
            setIszoomedPiano(false);
            setIszoomedTrompette(false);
            setIszoomedBde(false);
            setIszoomedSport(false);
            setIszoomedConseiller(false);
            setIszoomedProjet(false);
            setLastZoom("ordi");
        } else {
            setIszoomedOrdi(false);
        }
    };

    let backgroundClass = "unzoomedBackground";

    if (iszoomedPiano) {
        backgroundClass = "zoomedBackgroundPiano";
    } else if (iszoomedLangue) {
        backgroundClass = "zoomedBackgroundLangue fixedZoomLangue";
    } else if (iszoomedTrompette) {
        backgroundClass = "zoomedBackgroundTrompette fixedZoomTrompette";
    } else if (iszoomedBde) {
        backgroundClass = "zoomedBackgroundBde fixedZoomBde";
    } else if (iszoomedSport) {
        backgroundClass = "zoomedBackgroundSport fixedZoomSport";
    } else if (iszoomedConseiller) {
        backgroundClass = "zoomedBackgroundConseiller fixedZoomConseiller";
    } else if (iszoomedProjet) {
        backgroundClass = "zoomedBackgroundProjet fixedZoomProjet";
    } else if (iszoomedOrdi) {
        backgroundClass = "zoomedBackgroundOrdi fixedZoomOrdi";
    } else {
        if (lastZoom === "piano") {
            backgroundClass = "unzoomedBackgroundPiano";
        } else if (lastZoom === "langue") {
            backgroundClass = "unzoomedBackgroundLangue";
        } else if (lastZoom === "trompette") {
            backgroundClass = "unzoomedBackgroundTrompette";
        } else if (lastZoom === "bde") {
            backgroundClass = "unzoomedBackgroundBde";
        } else if (lastZoom === "sport") {
            backgroundClass = "unzoomedBackgroundSport";
        } else if (lastZoom === "conseiller") {
            backgroundClass = "unzoomedBackgroundConseiller";
        } else if (lastZoom === "projet") {
            backgroundClass = "unzoomedBackgroundProjet";
        } else if (lastZoom === "ordi") {
            backgroundClass = "unzoomedBackgroundOrdi";
        }
    }


    return (
        <div
            className={`${isActiveProjet ? (isActiveLumiere ? "body4" : "body3") : isActiveLumiere ? "body2" : "body"} ${backgroundClass}`}
        >
            <div className="bouton" ></div>
            <div>
                <Piano setIszoomedPiano={handlePianoClick} isOtherZoomed={iszoomedLangue || iszoomedTrompette || iszoomedBde || iszoomedSport || iszoomedConseiller || iszoomedProjet || iszoomedOrdi} />
                <Langue setIszoomedLangue={handleLangueClick} isOtherZoomed={iszoomedPiano || iszoomedTrompette || iszoomedBde || iszoomedSport || iszoomedConseiller || iszoomedProjet || iszoomedOrdi} />
                <Trompette setIszoomedTrompette={handleTrompetteClick} isOtherZoomed={iszoomedLangue || iszoomedPiano || iszoomedBde || iszoomedSport || iszoomedConseiller || iszoomedProjet || iszoomedOrdi} />
                <Bde setIszoomedBde={handleBdeClick} isOtherZoomed={iszoomedLangue || iszoomedPiano || iszoomedTrompette || iszoomedSport || iszoomedConseiller || iszoomedProjet || iszoomedOrdi} />
                <Sport setIszoomedSport={handleSportClick} isOtherZoomed={iszoomedLangue || iszoomedPiano || iszoomedTrompette || iszoomedBde || iszoomedConseiller || iszoomedProjet || iszoomedOrdi} />
                <Conseiller setIszoomedConseiller={handleConseillerClick} isOtherZoomed={iszoomedLangue || iszoomedPiano || iszoomedTrompette || iszoomedBde || iszoomedSport || iszoomedProjet || iszoomedOrdi} />
                <Ordi
                    setIszoomedOrdi={handleOrdiClick}
                    isOtherZoomed={
                        iszoomedLangue || iszoomedPiano || iszoomedTrompette || iszoomedBde || iszoomedSport || iszoomedConseiller || iszoomedProjet
                    }
                />
                <Projet
                    setIszoomedProjet={handleProjetClick}
                    isOtherZoomed={iszoomedLangue || iszoomedPiano || iszoomedTrompette || iszoomedBde || iszoomedSport || iszoomedConseiller || iszoomedOrdi}
                    isActiveProjet={isActiveProjet}
                />
                {!iszoomedPiano && !iszoomedLangue && !iszoomedTrompette && !iszoomedBde && !iszoomedSport && !iszoomedConseiller && !iszoomedProjet && !iszoomedOrdi && (
                    <div className="Lumiere" onClick={() => setIsActiveLumiere(prev => !prev)}></div>
                )}
            </div>
            <div>
                {!iszoomedPiano && !iszoomedLangue && !iszoomedTrompette && !iszoomedBde && !iszoomedSport && !iszoomedConseiller && !iszoomedProjet && !iszoomedOrdi && (
                    <div className="Projet" onClick={() => setIsActiveProjet(prev => !prev)}></div>
                )}
            </div>
        </div>
    );



}

export default BackOriginel;

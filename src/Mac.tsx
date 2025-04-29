import { useEffect, useState } from "react";
import Formation from "./Formation";
import Skills from "./Skills";
import Popup from "./Popup";


function Mac() {
  const [showContent, setShowContent] = useState(false);
  const [dateTime, setDateTime] = useState("");
  const [selected] = useState<string | null>(null);
  const [isFormationVisible, setIsFormationVisible] = useState(false);
  const [isSkillsVisible, setIsSkillsVisible] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleCloseFormation = () => {
    setIsFormationVisible(false);
  };

  const handleCloseSkills = () => {
    setIsSkillsVisible(false);
  };

  useEffect(() => {
    const updateDateTime = () => {
      const jours = ["Dim.", "Lun.", "Mar.", "Mer.", "Jeu.", "Ven.", "Sam."];
      const mois = ["Janv.", "Févr.", "Mars", "Avril", "Mai", "Juin", "Juil.", "Août", "Sept.", "Oct.", "Nov.", "Déc."];

      const now = new Date();
      const jour = jours[now.getDay()];
      const numJour = now.getDate();
      const moisActuel = mois[now.getMonth()];

      const heure = now.getHours().toString().padStart(2, "0");
      const minute = now.getMinutes().toString().padStart(2, "0");

      setDateTime(`${jour} ${numJour} ${moisActuel} ${heure}:${minute}`);
    };

    updateDateTime();
    const interval = setInterval(updateDateTime, 60000); // Mise à jour chaque minute
    return () => clearInterval(interval);
  }, []);


  
  return (
    <>
      <div className={`barre ${showContent ? "visible" : ""}`}></div>
      <div className={`barreHaute ${showContent ? "visible" : ""}`}></div>
      <div className={`barreBlanche ${showContent ? "visible" : ""}`}></div>
      <div className={`dateHeure ${showContent ? "visible" : ""}`}>{dateTime}</div>
      <div className={`mac ${showContent ? "visible" : ""}`}></div>

      <div
        className="container container_pdf1"
        onDoubleClick={() => {
          setIsFormationVisible(true);
        }}
      >
        <div className={`pdf1 ${showContent ? "visible" : ""}`}></div>
        <p
          className={`p_pdf1 ${showContent ? "visible" : ""}`}
          style={{
            backgroundColor: selected === "pdf1" ? "blue" : "transparent",
          }}
        >
          Formation.pdf
        </p>
      </div>

      {isFormationVisible && <Formation onClose={handleCloseFormation} />}

      <div className="container container_pdf2"         
        onDoubleClick={() => {
        setIsFormationVisible(true);
        }}>
        <div
          className={`pdf2 ${showContent ? "visible" : ""}`}

        ></div>
        <p className={`p_pdf2 ${showContent ? "visible" : ""}`} style={{ backgroundColor: selected === "pdf2" ? "blue" : "transparent" }}>
          Expériences.pdf
        </p>
      </div>

      <div
  className="container container_linkedin"
  onDoubleClick={() => setShowPopup(true)}
>
  <div className={`linkedIn ${showContent ? "visible" : ""}`}></div>
  <p
    className={`p_linkedin ${showContent ? "visible" : ""}`}
    style={{
      backgroundColor: selected === "linkedin" ? "blue" : "transparent",
    }}
  >
    LinkedIn
  </p>
</div>
{showPopup && <Popup onClose={() => setShowPopup(false)} />}


<div className="container container_html" onDoubleClick={() => setIsSkillsVisible(true)}>
        <div className={`html ${showContent ? "visible" : ""}`}></div>
        <p className={`p_html ${showContent ? "visible" : ""}`} style={{ backgroundColor: selected === "html" ? "blue" : "transparent" }}>
          Compétences.html
        </p>
      </div>
      {isSkillsVisible && <Skills onClose={handleCloseSkills} />}

    </>
  );
}

export default Mac;

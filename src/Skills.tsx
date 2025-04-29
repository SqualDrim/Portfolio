import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faReact,
  faPython,
  faBootstrap,
  faJava,
  faPhp,
  faGit,
  faRaspberryPi,

} from "@fortawesome/free-brands-svg-icons";
import { faBolt, faCalculator, faChartBar, faCode, faCog, faCogs, faDatabase, faDownload, faExchangeAlt, faExclamationTriangle, faFileCode, faGamepad, faMicrochip, faNetworkWired, faProjectDiagram, faRobot, faRocket, faSatelliteDish, faServer, faShieldAlt, faWaveSquare } from "@fortawesome/free-solid-svg-icons";
import "./SkillsPage.css"; 
import { useState } from "react";


const skills = [
  {
    category: "LANGAGES EMBARQUÉS",
    items: [
      { name: "C/C++", icon: faCode },
      { name: "Python", icon: faPython },
      { name: "Assembleur", icon: faMicrochip },
      { name: "ROS1", icon: faRobot },
      { name: "Arduino", icon: faMicrochip },
      { name: "Raspberry Pi", icon: faRaspberryPi },
    ],
  },
  {
    category: "IoT",
    items: [
      { name: "MySQL", icon: faDatabase },
      { name: "Raspberry Pi", icon: faRaspberryPi },
      { name: "Arduino", icon: faMicrochip },
      { name: "Gestion des composants", icon: faCogs },
      { name: "LiDAR", icon: faSatelliteDish },
      { name: "Transfert d'informations", icon: faExchangeAlt },
      { name: "Réception d'informations", icon: faDownload },
    ],
  },
  {
    category: "SYSTÈMES INDUSTRIELS",
    items: [
      { name: "Automatisme", icon: faCog },
      { name: "Automatique", icon: faCogs },
      { name: "Ladder", icon: faProjectDiagram },
      { name: "ST", icon: faFileCode },
      { name: "Actionneurs / Modulateurs", icon: faBolt },
    ],
  },
  {
    category: "FULLSTACK",
    items: [
      { name: "React", icon: faReact },
      { name: "TypeScript", icon: faJs },
      { name: "PHP", icon: faPhp },
      { name: "SQL", icon: faDatabase },
      { name: "API REST", icon: faNetworkWired },
      { name: "HTML", icon: faHtml5 },
      { name: "CSS", icon: faCss3Alt },
      { name: "JavaScript", icon: faJs },
      { name: "jQuery", icon: faJs },
      { name: "Bootstrap", icon: faBootstrap },
    ],
  },
  {
    category: "PROGRAMMATION ORIENTÉE OBJET",
    items: [
      { name: "Java", icon: faJava },
      { name: "PHP", icon: faPhp },
    ],
  },
  {
    category: "CYBERSECURITÉ",
    items: [
      { name: "Buffer Overflow", icon: faExclamationTriangle },
      { name: "Stack Overflow", icon: faServer },
      { name: "Injection SQL", icon: faShieldAlt },
    ],
  },
  {
    category: "DATABASES",
    items: [
      { name: "MySQL", icon: faDatabase },
      { name: "MariaDB", icon: faDatabase },
    ],
  },
  {
    category: "CYCLE GÉNÉRAL",
    items: [
      { name: "Réduction Matricielle", icon: faCalculator },
      { name: "Signaux", icon: faWaveSquare },
      { name: "Gestion de projets", icon: faProjectDiagram },
      { name: "Mécanique", icon: faCog },
      { name: "Statistiques", icon: faChartBar },
    ],
  },
  {
    category: "TOOLS",
    items: [
      { name: "GitHub", icon: faGit },
      { name: "VSCode", icon: faCode },
      { name: "Matlab", icon: faCalculator },
      { name: "Simulink", icon: faProjectDiagram },
      { name: "Unity", icon: faGamepad },
      { name: "LTSpice", icon: faBolt },
      { name: "Scilab", icon: faCalculator },
      { name: "Vite", icon: faRocket }

    ],
  },
];
  

function Skills({ onClose }: { onClose: () => void }) {  
  const [isClosing, setIsClosing] = useState(false);

  const handleButtonClick = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose(); // Appelle la fonction onClose après l'animation
    }, 500); // Durée de l'animation
  };

  return (
    <div className={`skills-page ${isClosing ? "closing" : ""}`}>
      {skills.map((skill) => (
        <div key={skill.category} className="skills-section">
          <h2 className="skills-title">{skill.category}</h2>
          <div className="skills-items">
            {skill.items.map((item) => (
              <div key={item.name} className="skill-icon">
                <FontAwesomeIcon
                  icon={item.icon}
                  size="3x"
                  className="skill-image"
                />
                <p className="skill-text">{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
      <div
        className="boutonRouge"
        style={{
          cursor: "pointer",
        }}
        onClick={handleButtonClick}
      >

      </div>
      
    </div>
  );
}

export default Skills;

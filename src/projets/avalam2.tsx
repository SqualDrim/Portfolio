import React from 'react';
import '../App.css'; // même fichier de style ou un autre

const BackAvalam: React.FC = () => {
  return (
    <div className="content">
      <h1>- Bertrand</h1>
      <p className='descriptionprojet'>Dans le cadre d’un projet en langage C, nous avons développé une intelligence artificielle basée sur des conditions logiques pour le jeu Avalam, dans le cadre d’un tournoi interne. Ce projet nous a permis d’exploiter les structures de données et d’appliquer des stratégies de prise de décision.</p>
      <img className='photo2projet' src='../public/avalam2.png'></img>
    </div>

  );
};

export default BackAvalam;

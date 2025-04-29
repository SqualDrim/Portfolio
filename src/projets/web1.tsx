import React from 'react';
import '../App.css'; // même fichier de style ou un autre

const Web1: React.FC = () => {
  return (
    <div className="content">
      <h1>Projet Site -</h1>
      <img className='photo1SLprojet' src='../public/projetweb11.png'></img>
        <div className="tags">
      <p className="tag">C</p>
      <p className="tag">Gestion de projet</p>
      </div>
      <div className="tags">
      <p className="tag">Gestion de temps</p>
      <p className="tag">Algorithm</p>
    </div>
    </div>

  );
};

export default Web1;

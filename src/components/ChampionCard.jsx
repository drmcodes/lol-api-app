import React from "react";
import "./ChampionCard.css"; // Asegúrate de importar el archivo de estilos si lo tienes separado

const ChampionCard = ({ championName }) => {
  // Construye la URL de la imagen del campeón
  const imageUrl = `https://raw.githubusercontent.com/InFinity54/LoL_DDragon/master/img/champion/loading/${championName}_0.jpg`;

  return (
    <div className="card-content">
      <img src={imageUrl} alt={championName} />
      <p>{championName}</p>
    </div>
  );
};

export default ChampionCard;

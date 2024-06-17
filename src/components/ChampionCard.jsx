import React from "react";

const ChampionCard = ({ championName }) => {
  const imageUrl = `https://raw.githubusercontent.com/InFinity54/LoL_DDragon/master/img/champion/loading/${championName}_0.jpg`;

  return (
    <>
      <div className="card-content">
        <img src={imageUrl} alt={championName} />
        <p>{championName}</p>
      </div>
    </>
  );
};

export default ChampionCard;

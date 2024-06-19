import React, { useState, useEffect } from "react";
import "react-loading-skeleton/dist/skeleton.css";
import Skeleton from "react-loading-skeleton";

const ChampionImage = ({ championName }) => {
  const baseUrl = "https://ddragon.leagueoflegends.com/cdn/img/champion/tiles/";
  const [imageUrl, setImageUrl] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadChampionImage = async () => {
      try {
        const variations = [
          `${championName}_0.jpg`,
          `${championName.toLowerCase()}_0.jpg`,
          `${championName.charAt(0).toUpperCase()}${championName
            .slice(1)
            .toLowerCase()}_0.jpg`,
        ];

        for (let i = 0; i < variations.length; i++) {
          const response = await fetch(baseUrl + variations[i]);
          if (response.ok) {
            setTimeout(() => {
              setImageUrl(baseUrl + variations[i]);
              setLoading(false);
            }, 150);
            return;
          }
        }

        throw new Error(`Could not load image for ${championName}`);
      } catch (error) {
        console.error("Error loading champion image:", error);
        setLoading(false);
      }
    };

    loadChampionImage();
  }, [championName]);

  return (
    <div className="card-content">
      {loading ? (
        <Skeleton height={200} width={200} />
      ) : imageUrl ? (
        <img src={imageUrl} alt={championName} />
      ) : (
        <p>Image not available</p>
      )}
      <p className="name-p">{championName}</p>
    </div>
  );
};

export default ChampionImage;

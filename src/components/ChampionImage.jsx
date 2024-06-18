import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

const ChampionImage = ({ championName }) => {
  const baseUrl = "https://ddragon.leagueoflegends.com/cdn/img/champion/tiles/";
  const [imageUrl, setImageUrl] = useState(null);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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
            setImageUrl(baseUrl + variations[i]);
            return;
          }
        }

        throw new Error(`Could not load image for ${championName}`);
      } catch (error) {
        console.error("Error loading champion image:", error);
      }
    };

    if (inView) {
      loadChampionImage();
    }
  }, [inView, championName]);

  return (
    <div className="card-content" ref={ref}>
      {imageUrl ? <img src={imageUrl} alt={championName} /> : <p>Loading...</p>}
      <p>{championName}</p>
    </div>
  );
};

export default ChampionImage;

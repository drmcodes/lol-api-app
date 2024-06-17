import React, { useEffect, useState } from "react";
import "./App.css";
import logo from "./logo/logo.png";
import Header from "./components/Header";
import ChampionImage from "./components/ChampionImage"; // Importamos ChampionImage en lugar de ChampionCard


function App() {
  const [champions, setChampions] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://raw.githubusercontent.com/InFinity54/LoL_DDragon/master/latest/data/es_ES/champion.json"
        );
        if (!response.ok) {
          throw new Error("Network error");
        }
        const data = await response.json();
        // Obtener los nombres de los campeones
        const championNames = Object.keys(data.data);
        setChampions(championNames);
      } catch (error) {
        console.error("Error fetching champion data", error);
        setError(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      <Header logo={logo} />
     
      <div className="main">
        {champions.map((championName, index) => (
          <ChampionImage key={index} championName={championName} />
        ))}
      </div>
      
    </div>
  );
}

export default App;

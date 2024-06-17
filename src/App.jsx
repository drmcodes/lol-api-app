import React, { useEffect, useState } from "react";
import "./App.css";
import logo from "./logo/logo.png";
import Header from "./components/Header";
import ChampionImage from "./components/ChampionImage";

function App() {
  const [champions, setChampions] = useState([]);
  const [filteredChampions, setFilteredChampions] = useState([]);
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
        const championsData = Object.keys(data.data).map((key) => {
          return {
            name: key,
            title: data.data[key].title,
            tags: data.data[key].tags,
          };
        });
        setChampions(championsData);
        setFilteredChampions(championsData);
      } catch (error) {
        console.error("Error fetching champion data", error);
        setError(error);
      }
    };

    fetchData();
  }, []);

  const handleSearch = (searchTerm) => {
    if (searchTerm === "") {
      setFilteredChampions(champions);
    } else {
      const filtered = champions.filter((champion) =>
        champion.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredChampions(filtered);
    }
  };
  const handleSelected = (selectedTags) => {
    if (selectedTags.length === 0) {
      setFilteredChampions(champions);
    } else {
      const filtered = champions.filter((champion) =>
        selectedTags.every((tag) => champion.tags.includes(tag))
      );
      setFilteredChampions(filtered);
    }
  };

  return (
    <div className="container">
      <Header
        logo={logo}
        onSearch={handleSearch}
        handleSelected={handleSelected}
      />
      <div className="main">
        {filteredChampions.map((champion, index) => (
          <ChampionImage
            key={index}
            championName={champion.name}
            championTitle={champion.title}
          />
        ))}
      </div>
    </div>
  );
}

export default App;

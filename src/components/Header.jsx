import React, { useState } from "react";

const Header = ({ logo, onSearch, handleSelected, champions }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [tagsMarked, setTagsMarked] = useState({
    Fighter: false,
    Assassin: false,
    Mage: false,
    Marksman: false,
    Tank: false,
    Support: false,
  });

  const [champ, setChamp] = useState({ champions });

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  const handleTagClick = (tag) => {
    const newTagsMarked = { ...tagsMarked, [tag]: !tagsMarked[tag] };
    setTagsMarked(newTagsMarked);
    const selectedTags = Object.keys(newTagsMarked).filter(
      (key) => newTagsMarked[key]
    );
    handleSelected(selectedTags);
  };

  return (
    <>
      <div className="header">
        <div className="logo">
          <img className="logo-png" src={logo} alt="Logo" />
        </div>
        <div className="header-text">LOL TRACKER</div>
        <div className="header-buttons">
          <div className="input-header">
            <input
              placeholder="search"
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <button className="searchButton" onClick={handleSearch}>
              Search
            </button>
          </div>
        </div>
      </div>
      <div className="searchByType">
        <button
          className={`searchType ${tagsMarked.Fighter ? "marked" : ""}`}
          onClick={() => handleTagClick("Fighter")}
        >
          Luchador
        </button>
        <button
          className={`searchType ${tagsMarked.Assassin ? "marked" : ""}`}
          onClick={() => handleTagClick("Assassin")}
        >
          Asesino
        </button>
        <button
          className={`searchType ${tagsMarked.Mage ? "marked" : ""}`}
          onClick={() => handleTagClick("Mage")}
        >
          Mago
        </button>
        <button
          className={`searchType ${tagsMarked.Marksman ? "marked" : ""}`}
          onClick={() => handleTagClick("Marksman")}
        >
          Tirador
        </button>
        <button
          className={`searchType ${tagsMarked.Tank ? "marked" : ""}`}
          onClick={() => handleTagClick("Tank")}
        >
          Tanque
        </button>
        <button
          className={`searchType ${tagsMarked.Support ? "marked" : ""}`}
          onClick={() => handleTagClick("Support")}
        >
          Soporte
        </button>
      </div>
    </>
  );
};

export default Header;

import React, { useState } from "react";

const Header = ({ logo, onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
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
          <button onClick={handleSearch}>Search</button>
        </div>
      </div>
    </div>
  );
};

export default Header;

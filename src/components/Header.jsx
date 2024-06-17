import React, { useState } from "react";

const Header = ({ logo }) => {
  const [theme, setTheme] = useState("dark"); // Estado inicial, modo oscuro por defecto

  const handleThemeChange = (e) => {
    const selectedTheme = e.target.value;
    setTheme(selectedTheme);
    document.body.className = selectedTheme + "-mode"; // Cambia la clase del body para aplicar estilos globales
  };

  return (
    <div className={`header ${theme}-mode`}>
      <div className="logo">
        <img className="logo-png" src={logo} alt="Logo" />
      </div>
      <div className="header-text">LOL TRACKER</div>
      <div className="header-buttons">
        <div className="sign-in">
          <button>Log in</button>
        </div>
        <div className="register">
          <button>Sign in</button>
        </div>
        <div className="dark-mode">
          <select name="theme" id="theme" onChange={handleThemeChange} value={theme}>
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Header;

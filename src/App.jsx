import { useEffect, useState } from "react";
import "./App.css";
import logo from "./logo/logo.png";

import Karmaimage from "./latest/img/champion/Karma.png";

function App() {
  //conseguimos todo el objeto del json
  const [champion, setChampion] = useState(null);
  //useState para obtener el lore o datos que queramos
  const [lore, setLore] = useState(null);
  const [skins, setSkins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [image, setImage] = useState(null);

  //useEffect para que se ejecute el fetch de datos la primera vez que se renderiza la página
  useEffect(() => {
    const championData = async () => {
      //bloque try que setea los datos en response
      try {
        const response = await fetch(
          "https://raw.githubusercontent.com/InFinity54/LoL_DDragon/master/latest/data/es_ES/champion/Karma.json"
        );
        if (!response.ok) {
          throw new Error("Network XD");
        }
        //seteamos la respuesta en championData
        const championData = await response.json();
        //seteamos el useState para que sea el objeto completo
        setChampion(championData);
        //una vez ya también tenemos el objeto completo, modificamos lore
        setLore(championData.data.Karma.lore);
        //seteamos setSkins
        setSkins(championData.data.Karma.skins);

        //set img
        setImage(
          `https://raw.githubusercontent.com/InFinity54/LoL_DDragon/master/latest/img/champion/${championData.data.Karma.image.full}`
        );
      } catch (error) {
        //bloque catch maneja errores
        console.error("Error XD", error);
      } finally {
        setLoading(false);
      }
    };
    //llamamos a la función para que se ejecute una única vez al primer render de la página.

    championData();
  }, []);

  return (
    champion && (
      <>
        <div className="container">
          <div className="header">
            <div className="logo">
              <img className="logo-png" src={logo} alt="" />
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
                <select name="theme" id="theme">
                  <option value="Light">Light</option>
                  <option value="Dark">Dark</option>
                </select>
              </div>
            </div>
          </div>
          <div className="about-loltracker">
            <p>LoL Tracker: Tu App de Compañero Definitiva para League of Legends
            <br />
            <br />
            Accede a información detallada sobre cada campeón, incluyendo
            estadísticas, habilidades e historias.
            <br />
            <br /> Navega por una amplia colección de skins de campeones y
            visualiza sus imágenes en el juego. Actualizaciones en Tiempo Real
            <br />
            <br />
            Mantente al día con los últimos cambios y actualizaciones de datos
            de campeones, directamente desde el repositorio LoL_DDragon.</p>
          </div>
          <div className="categories">Categories</div>
          <div className="main">main content</div>
          <div className="image-slider">img slider random</div>
        </div>
      </>
    )
  );
}

export default App;

//codigo a parte para estilar primero

/*  
 <div className=" padre ">
          <div className="div1">
           
            <h1>{champion.data.Karma.lore}</h1>
          </div>
          <div className="div2">
            {skins.map((skin, index) => (
              <ul className="ul" key={index}>
                
                <li>{skin.name}</li>
              </ul>
            ))}
            <img src={image} alt="" />
          </div>
    </div>
*/

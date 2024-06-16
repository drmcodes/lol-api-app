const champions = [Aatrox, Ahri, Akali, Akshan, Alistar, Amumu, Anivia, Annie, Aphelios, Ashe, AurelionSol, Azir, Bard, Belveth, Blitzcrank, Brand, Braum, Briar, Caitlyn, Camille, Cassiopeia, Chogath, Corki, Darius, Diana, DrMundo, Draven, Ekko, Elise, Evelynn, Ezreal, FiddleSticks, Fiora, Fizz, Galio, Gangplank, Garen, Gnar, Gragas, Graves, Gwen, Hecarim, Heimerdinger, Hwei, Illaoi, Irelia, Ivern, Janna, JarvanIV, Jax, Jayce, Jhin, Jinx, KSante, Kaisa, Kalista, Karma, Karthus, Kassadin, Katarina, Kayle, Kayn, Kennen, Khazix, Kindred, Kled, KogMaw, Leblanc, LeeSin, Leona, Lillia, Lissandra, Lucian, Lulu, Lux, Malphite, Malzahar, Maokai, MasterYi, Milio, MissFortune, MonkeyKing, Mordekaiser, Morgana, Naafiri, Nami, Nasus, Nautilus, Neeko, Nidalee, Nilah, Nocturne, Nunu, Olaf, Orianna, Ornn, Pantheon, Poppy, Pyke, Qiyana, Quinn, Rakan, Rammus, RekSai, Rell, Renata, Renekton, Rengar, Riven, Rumble, Ryze, Samira, Sejuani, Senna, Seraphine, Sett, Shaco, Shen, Shyvana, Singed, Sion, Sivir, Skarner, Smolder, Sona, Soraka, Swain, Sylas, Syndra, TahmKench, Taliyah, Talon, Taric, Teemo, Thresh, Tristana, Trundle, Tryndamere, TwistedFate, Twitch, Udyr, Urgot, Varus, Vayne, Veigar, Velkoz, Vex, Vi, Viego, Viktor, Vladimir, Volibear, Warwick, Xayah, Xerath, XinZhao, Yasuo, Yone, Yorick, Yuumi, Zac, Zed, Zeri, Ziggs, Zilean, Zoe, Zyra
]

//url de todo https://github.com/InFinity54/LoL_DDragon/tree/master/latest/data/es_ES/champion
//concatenar todos y cada uno de los nombres https://github.com/InFinity54/LoL_DDragon/tree/master/latest/data/es_ES/champion + nombre mapeado + .json





import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [championData, setChampionData] = useState([]); // Estado para almacenar datos de todos los campeones

  const champions = [
    "Aatrox", "Ahri", "Akali", "Akshan", "Alistar", "Amumu", "Anivia", "Annie", "Aphelios", "Ashe", "AurelionSol", "Azir", "Bard", "Belveth", "Blitzcrank", "Brand", "Braum", "Briar", "Caitlyn", "Camille", "Cassiopeia", "Chogath", "Corki", "Darius", "Diana", "DrMundo", "Draven", "Ekko", "Elise", "Evelynn", "Ezreal", "FiddleSticks", "Fiora", "Fizz", "Galio", "Gangplank", "Garen", "Gnar", "Gragas", "Graves", "Gwen", "Hecarim", "Heimerdinger", "Hwei", "Illaoi", "Irelia", "Ivern", "Janna", "JarvanIV", "Jax", "Jayce", "Jhin", "Jinx", "KSante", "Kaisa", "Kalista", "Karma", "Karthus", "Kassadin", "Katarina", "Kayle", "Kayn", "Kennen", "Khazix", "Kindred", "Kled", "KogMaw", "Leblanc", "LeeSin", "Leona", "Lillia", "Lissandra", "Lucian", "Lulu", "Lux", "Malphite", "Malzahar", "Maokai", "MasterYi", "Milio", "MissFortune", "MonkeyKing", "Mordekaiser", "Morgana", "Naafiri", "Nami", "Nasus", "Nautilus", "Neeko", "Nidalee", "Nilah", "Nocturne", "Nunu", "Olaf", "Orianna", "Ornn", "Pantheon", "Poppy", "Pyke", "Qiyana", "Quinn", "Rakan", "Rammus", "RekSai", "Rell", "Renata", "Renekton", "Rengar", "Riven", "Rumble", "Ryze", "Samira", "Sejuani", "Senna", "Seraphine", "Sett", "Shaco", "Shen", "Shyvana", "Singed", "Sion", "Sivir", "Skarner", "Smolder", "Sona", "Soraka", "Swain", "Sylas", "Syndra", "TahmKench", "Taliyah", "Talon", "Taric", "Teemo", "Thresh", "Tristana", "Trundle", "Tryndamere", "TwistedFate", "Twitch", "Udyr", "Urgot", "Varus", "Vayne", "Veigar", "Velkoz", "Vex", "Vi", "Viego", "Viktor", "Vladimir", "Volibear", "Warwick", "Xayah", "Xerath", "XinZhao", "Yasuo", "Yone", "Yorick", "Yuumi", "Zac", "Zed", "Zeri", "Ziggs", "Zilean", "Zoe", "Zyra"
  ];

  const buildChampionURL = (name) => {
    const baseURL = "https://raw.githubusercontent.com/InFinity54/LoL_DDragon/master/latest/data/es_ES/champion/";
    return `${baseURL}${name}.json`;
  };

  useEffect(() => {
    const fetchChampionData = async () => {
      try {
        const promises = champions.map(async (champion) => {
          const response = await fetch(buildChampionURL(champion));
          if (!response.ok) {
            throw new Error(`Failed to fetch ${champion} data`);
          }
          const championData = await response.json();
          return { name: champion, data: championData }; // Objeto con nombre del campeón y datos
        });

        const championDataArray = await Promise.all(promises);
        setChampionData(championDataArray);
      } catch (error) {
        console.error("Error fetching champion data:", error);
        // Handle errors as needed
      }
    };

    fetchChampionData();
  }, []); // [] asegura que se ejecute solo una vez al montar el componente
  console.log(championData[1])
  return (
    <>
      <h1>List of Champions</h1>
      
    </>
  );
}

export default App;



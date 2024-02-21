import { useState } from "react";
import pokidexEntries from "./pokemon";
import PokemonDetails from "./components/PokemonDetails";
import "./App.css";
import pokemon from "./pokemon";
import PokemonCardCollection from "./components/PokemonCardCollection";

function App() {
  const [pokidex, setPokidex] = useState(pokidexEntries);
  let [chosen, setChosen] = useState(pokidex[0]);

  return (
    <main className="main-container">
      <h1 className="page-header">React Pokidex</h1>

      <PokemonDetails
        name={chosen.name}
        type={chosen.type}
        icon={chosen.icon}
        typeIcon={chosen.typeIcon}
        description={chosen.description}
      />

      <PokemonCardCollection pokidex={pokidex} onPokemonCardClick={setChosen} />
    </main>
  );
}

export default App;

import { useState } from "react";
import PokemonCard from "./PokemonCard";
import pokidexEntries from "./pokemon";
import PokemonDetails from "./PokemonDetails";

import "./App.css";
import pokemon from "./pokemon";

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
        description={chosen.description}
      />

      <div className="pokemon-cards-container">
        {pokidex &&
          pokidex.map((pokemon) => {
            return (
              <PokemonCard
                key={pokemon.name}
                name={pokemon.name}
                icon={pokemon.icon}
                typeIcon={pokemon.typeIcon}
                onClickHandler={() => {
                  console.log("click app");
                  setChosen(pokemon);
                }}
              />
            );
          })}
      </div>
    </main>
  );
}

export default App;

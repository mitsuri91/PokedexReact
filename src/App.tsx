import { useState } from "react";
import "./App.css";
import PokemonCard from "./components/PokemonCard";

const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "charmander",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    name: "squirtle",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    name: "pikachu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  {
    name: "mew",
  },
];

function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0);

  const selectedPokemon = pokemonList[pokemonIndex];

  const handleClickPrevious = () => {
    setPokemonIndex((prevIndex) =>
      prevIndex === 0 ? pokemonList.length - 1 : prevIndex - 1,
    );
  };
  const handleclicNext = () => {
    setPokemonIndex((prevIndex) =>
      prevIndex === pokemonList.length - 1 ? 0 : prevIndex + 1,
    );
  };

  return (
    <div>
      <PokemonCard pokemon={selectedPokemon} />
      <button type="button" onClick={handleClickPrevious}>
        Précédent
      </button>
      <button type="button" onClick={handleclicNext}>
        Suivant
      </button>
    </div>
  );
}

export default App;

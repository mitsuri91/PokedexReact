import { useEffect, useState } from "react";
import "./App.css";
import PokemonCard from "./components/PokemonCard";
import NavBar from "./components/NavBar";
function App() {
	const pokemonList = [
		{
			id: 1,
			name: "bulbasaur",
			imgSrc:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
		},
		{
			id: 2,
			name: "charmander",
			imgSrc:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
		},
		{
			id: 3,
			name: "squirtle",
			imgSrc:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
		},
		{
			id: 4,
			name: "pikachu",
			imgSrc:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
		},
		{
			id: 5,
			name: "mew",
		},
	];

	const [pokemonIndex, setPokemonIndex] = useState(0);
	useEffect(() => {
		alert("hello pokemon trainer :)");
	}, []);

	useEffect(() => {
		if (pokemonList[pokemonIndex].name === "pikachu") {
			alert("pika pikachu !!!");
		}
	}, [pokemonIndex]);

	return (
		<div>
			<NavBar setPokemonIndex={setPokemonIndex} pokemonList={pokemonList} />
			<PokemonCard pokemon={pokemonList[pokemonIndex]} />
		</div>
	);
}

export default App;

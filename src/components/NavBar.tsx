import { useEffect, useState } from "react";
interface Pokemon {
	name: string;
	imgSrc?: string;
	id: number;
}
interface NavBarProps {
	setPokemonIndex: (index: number) => void;
	pokemonList: Pokemon[];
}

function NavBar({ setPokemonIndex, pokemonList }: NavBarProps) {
	return (

		
		
		<nav>
			{pokemonList.map((pokemon, index) => (
				<button
					type="button"
					key={pokemon.id}
					onClick={() => setPokemonIndex(index)}
				>
					{pokemon.name}
				</button>
			))}
		</nav>
	);
}
export default NavBar;

import React from 'react';
import { useParams } from 'react-router-dom';

interface PokemonProps {
  pokemonList: Pokemon[];
}

interface Pokemon {
  name: string;
  height: number;
  id: number;
  img: string;
  types: string[];
}

const Pokemon: React.FC<PokemonProps> = ({ pokemonList }) => {
  const { name } = useParams<{ name: string }>();

  const selectedPokemon = pokemonList.find((pokemon) => pokemon.name === name);

  if (!selectedPokemon) {
    return <div>Pokemon not found!</div>;
  }
  
  return (
    <div>
      <h3>{selectedPokemon.name}</h3>
      <h4>{selectedPokemon.id}</h4>
      <img src={selectedPokemon.img} alt={selectedPokemon.name} />
      <ul>
        {selectedPokemon.types.map((type) => (
          <li key={type}>{type}</li>
        ))}
      </ul>
    </div>
  );
};

export default Pokemon;

import React from 'react';
import { Link } from 'react-router-dom'
import styles from './style.module.css'

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

const PokemonList: React.FC<PokemonProps> = ({ pokemonList }) => {
  return (
    <section className='main-container'>
        <ul className='ul'>
          {pokemonList.map((pokemon: any) => (
            <li
              className={`${styles.li} ${
                styles[`${pokemon.types[0].toLowerCase()}`]
              }`}
            >
              <Link to={`/pokemon/${pokemon.name}`}>
                <div className='texts'>
                  <h3 className='name'>{pokemon.name}</h3>
                  <h4 className='num'>{pokemon.id}</h4>
                </div>
                <div className='img-container'>
                  <img className='img' src={pokemon.img} alt={pokemon.name} />
                </div>
                <ul className='type-container'>
                  {pokemon.types.map((type: string) => (
                    <li>{type}</li>
                  ))}
                </ul>
              </Link>
            </li>
          ))}
        </ul>
      </section>
  );
};

export default PokemonList;

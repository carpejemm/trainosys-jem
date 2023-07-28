import { useState, useEffect } from 'react';
import axios from 'axios';
import RootPage from './components/RootPage/RootPage'
import HomePage from './components/Home/HomePage'
import AboutPage from './components/About/AboutPage'
import ProfilePage from './components/Profile/ProfilePage'
import PokemonList from './components/PokemonList/PokemonList'
import PokemonComponent from './components/Pokemon/Pokemon'
import { Route, Routes } from "react-router-dom";
import './App.css'

interface Pokemon {
  name: string;
  height: number;
  id: number;
  img: string;
  types: string[];
}

const App: React.FC = () => {

  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);

  useEffect(() => {
    async function fetchPokemonData() {
      try {
        const response = await axios.get( // axios.post axios.put axios.patch axios.delete - RESTapi
          "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=30"
        );

        const results = response.data.results; 
        
        const fetchedPokemonList: Pokemon[] = await Promise.all(
          results.map(async (pokemon: { url: string }) => {
            const pokemonDataResponse = await axios.get(pokemon.url);

            console.log(pokemonDataResponse);
            return {
              name: pokemonDataResponse.data.name,
              height: pokemonDataResponse.data.height,
              id: pokemonDataResponse.data.id,
              img: pokemonDataResponse.data.sprites.other.dream_world.front_default,
              types: pokemonDataResponse.data.types.map(
                (type: { type: { name: string } }) => type.type.name
              ),
            };
          })
        );
        setPokemonList(fetchedPokemonList);
      } catch (error) {
        console.error("Error fetching Pokemon data:", error);
      }
    }

    fetchPokemonData();
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<RootPage />}>
          <Route path="/all" element={<PokemonList pokemonList={pokemonList} />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/profile" element={<ProfilePage />} />

          {/* Route for the individual Pokemon's page */}
          <Route path="/pokemon/:name" element={<PokemonComponent pokemonList={pokemonList} />} />
        </Route>
      </Routes>

    </>
  )
}

export default App

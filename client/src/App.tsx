import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios'
import Searchbar from './components/Searchbar';
import PokemonLayout from './components/PokemonLayout';

const API_URL = 'https://pokeapi.co/api/v2/pokemon/'

type Pokemon ={
  name: string
  weigth: number
  height: number
  stats: {}
  sprites: {}
}

function App() {
  const [searchResult, setSearchResult] = useState<any>();

  const searchPokemon = async (pokemon: string, event: MouseEvent): Promise <Array <Pokemon> > => {
    event.preventDefault()
    const result = await axios.get(`${API_URL}${pokemon}`)
    setSearchResult(result.data);
    return []
  }

  return (
    <>
      <Searchbar searchPokemon={searchPokemon} />
      {searchResult && <PokemonLayout pokemonToShow={searchResult} />}
    </>
  );
}

export default App;

import React, { FormEvent, useEffect, useState } from 'react';
import './App.css';
import axios from 'axios'
import Searchbar from './components/Searchbar';
import PokemonLayout from './components/PokemonLayout';
import { Pokemon } from './types'
import "milligram";

const API_URL = 'https://pokeapi.co/api/v2/pokemon/'

function App() {
  const [searchResult, setSearchResult] = useState<Pokemon>();
  const [searchMessage, setSearchMessage] = useState ('')

  const searchPokemon = async (pokemon: string) => {
    try{
      const result = await axios.get(`${API_URL}${pokemon}`)
      setSearchResult(result.data);
      setSearchMessage(`Ecco i tuoi risultati per [${pokemon}]`)
    } catch(error){
      setSearchMessage(`Nessun pokemon trovato con questo nome: [${pokemon}]`)
    }
  }

  const addToPokedex = (pokemonImg: string): void =>{
    console.log("added");
  }

  return (
    <section className='container'>
      <Searchbar searchPokemon={searchPokemon} />
      {searchMessage !== '' && <PokemonLayout pokemonFound={searchResult!} searchMessage={searchMessage} addToPokedex={addToPokedex}/>}
    </section>
  );
}

export default App;

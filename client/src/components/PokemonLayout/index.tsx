import React, { useEffect, useState } from 'react'
import { Pokemon } from '../../types'

interface PokemonLayoutProps {
  pokemonFound: Pokemon;
  searchMessage?: string;
  addToPokedex: (params: string) => void;
}

function PokemonLayout(props:PokemonLayoutProps) {
  const {pokemonFound, searchMessage, addToPokedex} = props;
  const [pokemonImg, setPokemonImg] = useState<string>('');

  useEffect(() =>{
      setPokemonImg(pokemonFound.sprites.front_default)
  },[pokemonFound])
  
  return (
    <> 
      <h3>{searchMessage}</h3>
      {pokemonFound !== undefined &&
        <main className="container">
          <section className="row">
            <div className="column">Nome: <strong>{pokemonFound.name}</strong></div>
            <div className="column">Peso: <strong>{pokemonFound.weight}</strong></div>
            <div className="column">Altezza: <strong>{pokemonFound.height}</strong></div>
          </section>

          <section className="row">
            <div className="column">
              <div className="row">
                <img src={pokemonImg} alt="pokemon img"/>
                <button className="button button-outline" onClick={() => setPokemonImg(pokemonFound.sprites.front_default)}>DEFULT</button>
                <button className="button button-outline" onClick={() => setPokemonImg(pokemonFound.sprites.front_shiny)}>SHINY</button>
              </div>
              <button className="button" onClick={() => addToPokedex(pokemonFound.sprites.front_default)}>AGGIUNGI AL POKEDEX</button>
            </div>
            <div className="column">
              <h4>
                Statistiche
              </h4>
              <div className="column">
                <h6>hp:</h6>
                <progress max="100" value={pokemonFound.stats[0].base_stat}>
                  {pokemonFound.stats[0].base_stat}
                </progress>
              </div>
              <div className="column">
                <h6>attack:</h6>
                <progress max="100" value={pokemonFound.stats[1].base_stat}>{pokemonFound.stats[0].base_stat}</progress>
              </div>
              <div className="column">
                <h6>defence:</h6>
                <progress max="100" value={pokemonFound.stats[2].base_stat}>{pokemonFound.stats[0].base_stat}</progress>
              </div>
              <div className="column">
                <h6>special-attack:</h6>
                <progress max="100" value={pokemonFound.stats[3].base_stat}>{pokemonFound.stats[0].base_stat}</progress>
              </div>
              <div className="column">
                <h6>special-defence:</h6>
                <progress max="100" value={pokemonFound.stats[4].base_stat}>{pokemonFound.stats[0].base_stat}</progress>
              </div>
              <div className="column">
                <h6>speed:</h6>
                <progress max="100" value={pokemonFound.stats[5].base_stat}>{pokemonFound.stats[0].base_stat}</progress>
              </div>
              
            </div>
          </section>
        </main>
      }
    </>
  )
}

export default PokemonLayout
import React, {useState} from 'react'
import style from './style.module.css'

type Pokemon = {
  name: string
  weigth: number
  height: number
  stats: {}
  sprites: {}
}

type SearchProp = {
  searchPokemon: (pokemon: string, event: MouseEvent) => Promise <Array <Pokemon> >;
}

function Searchbar({ searchPokemon }: SearchProp) {
    const [searchParameter, setSearchParameter] = useState("")

    function handleSubmit(e: any){
        e.preventDefault();
        searchPokemon(searchParameter.toLocaleLowerCase(), e);
        setSearchParameter('')
    }
  return (
    <>
    <h1>Cerca un pokemon</h1>
    <form onSubmit={(e) => handleSubmit(e)}>
        <input
            type="text"
            name="name"
            placeholder='es. Bulbasaur'
            value={searchParameter}
            onChange={(e) => setSearchParameter(e.target.value)}
        />

        <button type="submit">CERCA</button>
    </form>
    </>
  )
}

export default Searchbar
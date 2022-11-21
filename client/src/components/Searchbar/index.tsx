import React, {FormEvent, useState} from 'react'


type Pokemon = {
  name: string
  weigth: number
  height: number
  stats: {}
  sprites: {}
}

type SearchProp = {
  searchPokemon: (pokemon: string) => void;
}

function Searchbar({ searchPokemon }: SearchProp) {
    const [searchParameter, setSearchParameter] = useState("")

    function handleSubmit(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault();
        searchPokemon(searchParameter.toLocaleLowerCase());
        setSearchParameter('')
    }
  return (
    <>
    <h2>Cerca un pokemon</h2>
    <form onSubmit={(e) => handleSubmit(e)}>
        <input
            type="text"
            name="name"
            placeholder='es. Bulbasaur'
            value={searchParameter}
            onChange={(e) => setSearchParameter(e.target.value)}
            required
        />

        <button className='button' type="submit">CERCA</button>
    </form>
    </>
  )
}

export default Searchbar
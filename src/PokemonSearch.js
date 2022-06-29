import { useEffect, useState } from 'react';
import PokemonList from './PokemonList';
import { getPokemon } from './services/fetch-utils';

export default function PokemonSearch() {

  const [pokemon, setPokemon] = useState([]);
  const [pokemonQuery, setPokemonQuery] = useState([]);
  
  async function goFetchPokemon() {
    const data = await getPokemon(pokemonQuery);
      
    setPokemon(data.results);
  }
  
  useEffect(() => {
      
    goFetchPokemon();
    }, []); //eslint-disable-line
  
  async function handleSubmit(e) {
    e.preventDefault();
  
    await goFetchPokemon();
    setPokemonQuery('');
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input value={pokemonQuery} onChange={(e) => setPokemonQuery(e.target.value)}/>
        <button>Search</button>
      </form>
      <PokemonList pokemon={pokemon}/>
    </div>
  );
}
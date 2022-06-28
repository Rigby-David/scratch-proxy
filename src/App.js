import { getPokemon } from './services/fetch-utils';

import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [pokemon, setPokemon] = useState([]);
  const [pokemonQuery, setPokemonQuery] = useState([]);

  async function goFetchPokemon() {
    const data = await getPokemon(pokemonQuery);
    
    setPokemon(data.results);
  }

  useEffect(() => {
    
    goFetchPokemon();
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();

    goFetchPokemon();
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input onChange={(e) => setPokemonQuery(e.target.value)}/>
        <button>Search</button>
      </form>
      {
        pokemon.map((poke, i) => <div
          key={poke.pokemon + i} className="pokemon-list">
          <p>{poke.pokemon}</p>
          <img src={poke.url_image}/>
        </div>)
      }
    </div>
  );
}

export default App;

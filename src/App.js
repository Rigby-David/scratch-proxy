import { getPokemon } from './services/fetch-utils';

import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    async function onLoad() {
      const data = await getPokemon();
      console.log(data);
      setPokemon(data.results);
    }
    onLoad();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {
          pokemon.map((poke, i) => <div
            key={poke.pokemon + i}>
            <p>{poke.pokemon}</p>
            <img src={poke.url_image}/>
          </div>)
        }
      </header>
    </div>
  );
}

export default App;

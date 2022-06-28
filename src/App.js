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
        
      </header>
    </div>
  );
}

export default App;

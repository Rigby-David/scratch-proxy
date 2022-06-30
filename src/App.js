
import './App.css';
import PokemonSearch from './PokemonSearch';
import WeatherSearch from './WeatherSearch';
import YelpSearch from './YelpSearch';

function App() {

  return (
    <div className="App">
      <PokemonSearch />
      <YelpSearch />
      <WeatherSearch />
    </div>
  );
}

export default App;

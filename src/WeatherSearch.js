import { useEffect, useState } from 'react';
import { getWeather } from './services/fetch-utils';
import WeatherList from './WeatherList';


export default function WeatherSearch() {

  const [weather, setWeather] = useState([]);
  const [weatherQuery, setWeatherQuery] = useState('Portland');

  async function goFetchWeather() {
    const data = await getWeather(weatherQuery);
    setWeather(data.list[0].main);
  }

  useEffect(() => {

    goFetchWeather();
  }, []); //eslint-disable-line

  async function handleSubmit(e) {
    e.preventDefault();

    await goFetchWeather();
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input value={weatherQuery} onChange={(e) => setWeatherQuery(e.target.value)} />
        <button>Search</button>
      </form>
      <WeatherList weather={weather}/>
    </div>
  );
}
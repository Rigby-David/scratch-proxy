
// this replaces await client.from('pokemon')...
export async function getPokemon(filter) {
  const rawData = await fetch(`/.netlify/functions/pokemon?pokeQuery=${filter}`);
  const data = await rawData.json();

  return data;
}

export async function getYelp(filter) {
  const rawData = await fetch(`/.netlify/functions/yelp?yelpQuery=${filter}`);
  const data = await rawData.json();
  return data;
}

export async function getWeather(filter) {
  const rawData = await fetch(`/.netlify/functions/weather?weatherQuery=${filter}`);
  const data = await rawData.json();
  return data;
}
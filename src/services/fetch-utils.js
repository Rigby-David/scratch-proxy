
// this replaces await client.from('pokemon')...
export async function getPokemon() {
  const rawData = await fetch('/.netlify/functions/pokemon');
  const data = await rawData.json();

  return data;
}
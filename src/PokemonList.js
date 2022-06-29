export default function PokemonList({ pokemon }) {
  return (
    <div>
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
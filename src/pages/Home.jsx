import { useContext, useEffect } from "react";
import Context from "../context/Context";
import PokemonCard from "../components/PokemonCard";

function Home() {
  const { pokemones, bringmePokemones } = useContext(Context);

  useEffect(() => {
    bringmePokemones();
  }, [bringmePokemones]);

  return (
    <>
      <div className="title">
        <h2>Conoces a todos los Pokemones?</h2>
        <p>Elegí los que mas te gusten y agregalos a tus favoritos!</p>
      </div>

      <div className="pokemon-list">
        {pokemones.map((pokemon) => (
          <PokemonCard key={pokemon.name} {...pokemon} />
        ))}
      </div>
    </>
  );
}

export default Home;

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
      <h2>Conoces a todos los Pokemones?</h2>
      <p>Elegi los que mas te gusten y agregalos a tus favoritos!</p>
      <div className="pokemon-list">
        {pokemones.map((pokemon) => (
          <PokemonCard key={pokemon.name} {...pokemon} />
        ))}
      </div>
    </>
  );
}

export default Home;

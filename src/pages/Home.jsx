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
      <div className="pokemon-list">
        {pokemones.map((pokemon) => (
          <PokemonCard key={pokemon.name} {...pokemon} />
        ))}
      </div>
    </>
  );
}

export default Home;

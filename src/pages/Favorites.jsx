import { useContext } from "react";
import Context from "../context/Context";
import PokemonCard from "../components/PokemonCard";

function Favorites() {
  const { favorites } = useContext(Context);

  return (
    <>
      <h2 className="title">Estos son tus Pokemones favoritos</h2>
      <div className="favorites">
        {favorites.length > 0 ? (
          favorites.map((pokemon) => (
            <PokemonCard key={pokemon.name} {...pokemon} />
          ))
        ) : (
          <p>No tienes favoritos aún.</p>
        )}
      </div>
    </>
  );
}

export default Favorites;

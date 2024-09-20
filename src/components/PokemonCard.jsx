import { useContext, useState } from "react";
import Context from "../context/Context";
import { FaHeart, FaRegHeart } from "react-icons/fa"; // Importa ambos íconos

function PokemonCard({ name, url }) {
  const { savePokemon, favorites } = useContext(Context);
  const isFavorite = favorites.some((fav) => fav.name === name); // Verifica si el Pokémon ya está en favoritos

  const handleFavorite = () => {
    savePokemon({ name, url });
  };

  const pokemonId = url.split("/").filter(Boolean).pop();
  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonId}.png`;

  return (
    <div className="card">
      <h3>{name}</h3>
      <img src={imageUrl} alt={name} />
      <button className="favorite-button" onClick={handleFavorite}>
        {isFavorite ? <FaHeart color="red" /> : <FaRegHeart />}
      </button>
    </div>
  );
}

export default PokemonCard;

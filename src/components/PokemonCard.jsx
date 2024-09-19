import { useContext } from "react";
import Context from "../context/Context";
import { FaHeart } from "react-icons/fa"; // Importa el ícono de corazón

function PokemonCard({ name, url }) {
  const { savePokemon } = useContext(Context);

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
        <FaHeart />
      </button>
    </div>
  );
}

export default PokemonCard;

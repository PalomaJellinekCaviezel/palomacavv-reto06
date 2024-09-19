import { useNavigate, useLocation } from "react-router-dom";
import "./Header.css"; // Importa el archivo CSS para el header

function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleFavoritesClick = () => {
    navigate("/favorites");
  };

  const handleBackClick = () => {
    navigate("/");
  };

  return (
    <div className="header">
      <div className="header-title">
        <h1>Pokedex</h1>
      </div>
      {location.pathname === "/favorites" ? (
        <button className="favorites-button" onClick={handleBackClick}>
          Volver a Pokemones
        </button>
      ) : (
        <button className="favorites-button" onClick={handleFavoritesClick}>
          Ir a Favoritos
        </button>
      )}
    </div>
  );
}

export default Header;

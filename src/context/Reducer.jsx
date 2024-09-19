const bringmePokemones = "listmePokemones";
const savePokemon = "savePokemon";

export default function Reducer(state, action) {
  const { payload, type } = action;
  switch (type) {
    case bringmePokemones:
      return { ...state, pokemones: payload };
    case savePokemon:
      // Verifica si el Pokémon ya está en la lista de favoritos
      const isAlreadyFavorite = state.favorites.some(
        (pokemon) => pokemon.name === payload.name
      );

      if (isAlreadyFavorite) {
        // Elimina el Pokémon de la lista de favoritos
        return {
          ...state,
          favorites: state.favorites.filter(
            (pokemon) => pokemon.name !== payload.name
          ),
        };
      } else {
        // Agrega el Pokémon a la lista de favoritos
        return {
          ...state,
          favorites: [...state.favorites, payload],
        };
      }
    default:
      return state;
  }
}

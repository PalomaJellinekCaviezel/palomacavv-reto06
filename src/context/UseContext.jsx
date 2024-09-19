import Context from "./Context";
import Reducer from "./Reducer";
import { useReducer } from "react";
import axios from "axios";

function UseContext(props) {
  const { children } = props;
  const initialState = {
    pokemones: [],
    favorites: [],
  };

  const [state, dispatch] = useReducer(Reducer, initialState);

  const bringmePokemones = async () => {
    const answer = await axios.get("https://pokeapi.co/api/v2/pokemon/");
    dispatch({
      type: "listmePokemones",
      payload: answer.data.results,
    });
  };

  const savePokemon = (item) => {
    dispatch({ type: "savePokemon", payload: item });
  };

  return (
    <Context.Provider
      value={{
        bringmePokemones,
        savePokemon,
        pokemones: state.pokemones,
        favorites: state.favorites,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export default UseContext;

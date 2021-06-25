import { combineReducers } from "redux";
import { PokemonReducer } from "./PokemonListReducer";
const RootReducer = combineReducers({
    PokemonList: PokemonReducer
});

export default RootReducer;
import { combineReducers } from "redux";
import { PokemonReducer } from "./PokemonListReducer";
import { dex, favorites } from "./pokedexReducer";
const RootReducer = combineReducers({
    PokemonList: PokemonReducer,
    dex: dex,
    favs : favorites,  
});

export default RootReducer;
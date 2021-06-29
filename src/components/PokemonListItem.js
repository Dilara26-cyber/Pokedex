import { Link } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux";
import { MdFavorite } from "react-icons/md"
import { addToFav, removeFromFavorites } from '../actions/pokedexActions';
const PokemonListItem = ({pokemon, text, func = null}) => {
  const dispatch = useDispatch();
  const dexList = useSelector((state) => state.dex.pokedex);
  const favList = useSelector((state) => state.favs);
const artWork = "official-artwork"
  const checkTheFavorite = favList.find(item => item.pokemon.id === pokemon.id)
  const isFavorite = checkTheFavorite !== undefined
console.log( pokemon.sprites.other["official-artwork"].front_default)
  const toFavorite = (items, data) => {
    dispatch(addToFav(items, data));
  };
  const removeFavorite = (items, data) => {
    dispatch(removeFromFavorites(items, data));
  };
    return (
        <section className="pokemon-list-section">
          {text === "Release Me" ? <h4 className="heading">{ text === "Release Me" && <Link to={`/${pokemon.name}`}>{pokemon.name}</Link>}</h4> :
          <h4 className="heading">{pokemon.name}</h4>}
        <img src={ pokemon.sprites.other.dream_world.front_default ? pokemon.sprites.other.dream_world.front_default : pokemon.sprites.other["official-artwork"].front_default} alt={pokemon.name}/> 
         <Link to={ text === "See Me To Catch Me" ? `/${pokemon.name}` : "#"} ><button type="button" className="button" onClick={() => func !== null && func(dexList, pokemon) } >{text}</button></Link> 
         {text === "Release Me" && <MdFavorite style={isFavorite?{color: "red"}:{color: "gray"}} onClick={() => isFavorite ? removeFavorite(favList, pokemon) : toFavorite(favList, pokemon)}/>}
        </section>
    )
}

export default PokemonListItem

import { useSelector, useDispatch } from 'react-redux';
import { MdFavorite } from "react-icons/md"
import { removeFromFavorites } from '../actions/pokedexActions';
import { Link } from 'react-router-dom';
const Favorites = () => {
    const dispatch = useDispatch()
    const favList = useSelector((state) => state.favs);
    const removeFavorite = (items, data) => {
        dispatch(removeFromFavorites(items, data));
      };
    return (
        <>
           {favList === undefined || favList.length === 0 ? <main className="pokedex-container container"><h1 className="heading positioned-heading">You Have No Favorite Pokemon.<br/>Fav 'em All!</h1><div className="cta">
                    <Link to="/pokedex"><button type="button" className="button positioned-button">See Your Dex</button></Link>    
                    </div>
                    </main> : <main className="pokedex-container container">{favList.map((item) =>{
               return(<section className="pokemon-list-section">
              <h4 className="heading">{item.pokemon.name}</h4>
              <img src={item.pokemon.sprites.other.dream_world.front_default} alt={item.pokemon.name}/>
              <MdFavorite style={{color: "red"}} onClick={() => removeFavorite(favList, item.pokemon)}/>
             </section>)
           })}</main>}
        </>
    )
}

export default Favorites

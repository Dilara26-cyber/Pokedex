import PokemonListItem from './PokemonListItem';
import { useSelector,  useDispatch } from 'react-redux';
import { removeFromDex} from '../actions/pokedexActions';


const Pokedex = () => {
    const dispatch = useDispatch();
    const dexList = useSelector((state) => state.dex.pokedex);

    const removePokemon = (items, data) => {
        dispatch(removeFromDex(items, data));
      };
    const text = "Release Me"

    return (
        <>

           {dexList === undefined || dexList.length === 0 ? <main className="pokedex-container container"><h1 className="heading positioned-heading">What Are You Waiting For?<br/>Catch 'em All!</h1><div className="cta">
                    <a href="/#explore"><button type="button" className="button positioned-button">Explore</button></a>    
                    </div>
                    </main> : <main className="pokedex-container container">{dexList.map((item) =>{
               return(<PokemonListItem pokemon={item.pokemon} key={item.pokemon.id} text={text} func={removePokemon}/>)
           })}</main>}
  
        </>
    )
}

export default Pokedex

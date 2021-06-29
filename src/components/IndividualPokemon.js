import { useSelector, useDispatch } from 'react-redux';
import { addToDex, removeFromDex } from '../actions/pokedexActions';
import ball from "../images/ball.png"
const IndividualPokemon = ({ pokemonDetails }) => {
  const dispatch = useDispatch();
  const dexList = useSelector((state) => state.dex.pokedex);
  const { abilities } = pokemonDetails;
  const { sprites } = pokemonDetails
  const addPokemon = (items, data) => {
    dispatch(addToDex(items, data));
  };
  const removePokemon = (items, data) => {
    dispatch(removeFromDex(items, data));
  };
  const checkTheCaught = dexList.find(item => item.pokemon.id === pokemonDetails.id)
  const isCaught = checkTheCaught !== undefined

  return (
    <>
    <main>
      <section className="pokemon-section">
<div className="container pokemon-sub-section">
   <h1 className="heading positioned-heading">{pokemonDetails.name}</h1>
        <p className="pokemon-id">#{pokemonDetails.id}</p>
      
      <section className="pokemon-img">
    {sprites && <img src={ sprites.other.dream_world.front_default ? sprites.other.dream_world.front_default : sprites.other["official-artwork"].front_default} alt={pokemonDetails.name}/>} 
      </section>
</div>
         
       <div className="pokemon-sub-section">
         <div className="abilities">
        <h3 className='heading'>Abilities</h3>
        <ul className="abilities-list">
        {abilities &&
          abilities.map((item, index) => {
            return <li key={index}><p>{item.ability.name}</p></li>;
          })}
      </ul>
      </div>
      <div>
        <h4 className="heading">Type: <span>{pokemonDetails.types && pokemonDetails.types[0].type.name}</span></h4> 
      </div>
      <div>
        <p>Weight: {pokemonDetails.weight}kg</p>
      </div>
      <div>
        <p>Height: {pokemonDetails.height}cm</p>
      </div>
     <p>Base Experience: {pokemonDetails.base_experience}</p> 
     <div className="btn-container">
         <button type="button" title = {isCaught ? "Release Me" : "Catch Me"} onClick={() => isCaught ? removePokemon(dexList, pokemonDetails) : addPokemon(dexList,pokemonDetails)}><img src={ball} alt={isCaught ? "Release Me" : "Catch Me"}/></button>
       </div>
       </div>
    
  <div className="popup">{isCaught ? <p>You have caught {pokemonDetails.name}</p> : <p>Catch {pokemonDetails.name}</p>}</div>
      </section>
    </main>

    </>
  );
};

export default IndividualPokemon;

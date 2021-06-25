import React from 'react'

const PokemonListItem = ({pokemon}) => {
    return (
        <main>
          <h1>{pokemon.name}</h1> 
          <img src={pokemon.sprites.other.dream_world.front_default} alt={pokemon.name}/>
          <p>{pokemon.types[0].type.name}</p>
        </main>
    )
}

export default PokemonListItem

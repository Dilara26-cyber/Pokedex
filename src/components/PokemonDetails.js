import { useParams } from 'react-router';
import axios from 'axios';
import { useEffect, useState } from 'react';
import IndividualPokemon from './IndividualPokemon';

const PokemonDetails = (props) => {
  const [pokemonDetails, setPokemonDetails] = useState([]);
  const { pokemon } = useParams();
  const fetchData = async () => {
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${pokemon}`
    );
    setPokemonDetails(response.data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <IndividualPokemon pokemonDetails={pokemonDetails} />
    </>
  );
};

export default PokemonDetails;

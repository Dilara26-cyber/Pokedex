import axios from 'axios';
import { FETCH_POKEMON } from '../types/actionTypes';



export const fetchPokemon = (page) => {
    const perPage = 10;
    const offset = (page * perPage) - perPage
    return async (dispatch) => {
    const response = await axios.get(
      ` https://pokeapi.co/api/v2/pokemon/?limit=${perPage}&offset=${offset}`
    );
    dispatch({ type: FETCH_POKEMON, payload:  response.data.results });
  };
};
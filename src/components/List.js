import { useEffect, useState } from 'react';
import {useDispatch, useSelector} from "react-redux"
import { fetchPokemon } from '../actions/apiActions';
import PokemonListItem from './PokemonListItem';
import axios from 'axios';
import ReactPaginate from 'react-paginate';

const List = () => {
    const [page, setPage] = useState(1)
    const perPage = 20;
    const offset = (page * perPage) - perPage;
    const [pokemons, setPokemons] = useState([])
    const [count, setCount] = useState(0)
    const fetchData = async (page) => {
        const response = await axios.get(
            `https://pokeapi.co/api/v2/pokemon/?limit=${perPage}&offset=${offset}`
          );
          setCount(response.data.count)
           info(response.data.results)
    }
    
    function info (result) {
        let arr = []
        result.map(async (pokemon) => {
           const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
            arr.push(res.data)
            setPokemons([...arr])
         })
       } 
    useEffect(() => {
        fetchData(page)
      }, [page])
      
    return (
        <div>
            {pokemons.map((pokemon) => {
             return (<PokemonListItem pokemon={pokemon} key={pokemon.id}/>) 
            })}
            <ReactPaginate
            pageCount={Math.ceil(count / perPage)}
            onPageChange={(data) => setPage(page => data.selected + 1)}
            ></ReactPaginate>
        </div>
    )
}

export default List

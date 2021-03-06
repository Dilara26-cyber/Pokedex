import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPokemon } from '../actions/apiActions';
import PokemonListItem from './PokemonListItem';
import axios from 'axios';
import ReactPaginate from 'react-paginate';

const List = () => {
  const [page, setPage] = useState(1);
  const perPage = 21;
  const offset = page * perPage - perPage;
  const [pokemons, setPokemons] = useState([]);
  const [count, setCount] = useState(0);
  const fetchData = async (page) => {
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/?limit=${perPage}&offset=${offset}`
    );
    setCount(response.data.count);
    info(response.data.results);
  };

  function info(result) {
    let arr = [];
    result.map(async (pokemon) => {
      const res = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
      );
      arr.push(res.data);
      setPokemons([...arr]);
    });
  }
  useEffect(() => {
    fetchData(page);
  }, [page]);
const text = "See Me To Catch Me"
  return (
    <>
    <main className="container" id="explore">
      {pokemons.map((pokemon) => {
        return <PokemonListItem pokemon={pokemon} key={pokemon.id} text={text}/>;
      })}
    </main>
    <ReactPaginate
        pageCount={Math.ceil(count / perPage)}
        onPageChange={(data) => setPage(data.selected + 1)}
        containerClassName={"container paginate"}
        pageClassName={"paginate-li"}
        activeClassName={"paginate-active"}
        disabledClassName={"disabled"}
      ></ReactPaginate>
    </>
  );
};

export default List;

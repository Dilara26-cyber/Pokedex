import { ADD_TO_DEX, ADD_TO_FAVORITES, REMOVE_FROM_DEX, REMOVE_FROM_FAVORITES } from "../types/actionTypes"

export const addToDex = (items, pokemon) => (dispatch) => {
    const dex = items.slice();
    let isInTheCart = false;
  dex.map((item) => {
    if (item.pokemon.id === pokemon.id) {
      isInTheCart = true;
    }
  });
  if (!isInTheCart) {
    dex.push({ pokemon });
  }
    dispatch({
      type: ADD_TO_DEX,
      payload: { dex },
    });
    localStorage.setItem('pokedex', JSON.stringify(dex));
  };
  
  export const removeFromDex = (items, pokemon) => (dispatch) => {
    const dex = items
      .slice()
      .filter((item) => item.pokemon.id !== pokemon.id);
    dispatch({
      type: REMOVE_FROM_DEX,
      payload: { dex },
    });
    localStorage.setItem('pokedex', JSON.stringify(dex));
  };

  export const addToFav = (items, pokemon) => (dispatch) => {
    const favs = items.slice();
    let isFavorites = false;
    favs.map((item) => {
    if (item.pokemon.id === pokemon.id) {
      isFavorites = true;
    }
  });
  if (!isFavorites) {
    favs.push({ pokemon });
  }
    dispatch({
      type: ADD_TO_FAVORITES,
      payload: { favs },
    });
    localStorage.setItem('favs', JSON.stringify(favs));
  };

  export const removeFromFavorites = (items, pokemon) => (dispatch) => {
    const favs = items
      .slice()
      .filter((item) => item.pokemon.id !== pokemon.id);
    dispatch({
      type: REMOVE_FROM_FAVORITES,
      payload: { favs },
    });
    localStorage.setItem('favs', JSON.stringify(favs));
  };
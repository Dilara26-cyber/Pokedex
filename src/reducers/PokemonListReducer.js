import { FETCH_POKEMON } from "../types/actionTypes";

const initialState = {
    data: ["Hahaha"],

}

export const PokemonReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_POKEMON:
        return {
          ...state,
          data: action.payload,
        };
      default:
        return state;
    }
  };
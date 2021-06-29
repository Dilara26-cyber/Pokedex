import { ADD_TO_DEX, ADD_TO_FAVORITES, REMOVE_FROM_DEX, REMOVE_FROM_FAVORITES } from "../types/actionTypes"

const initialState = {
    pokedex: JSON.parse(localStorage.getItem('pokedex') || '[]'),
}

export const dex = (state = initialState, action) => {
    switch(action.type){
        case ADD_TO_DEX:
            return { pokedex: action.payload.dex };
            case REMOVE_FROM_DEX:
                return { pokedex: action.payload.dex };
            default: 
            return state
    }
}

export const favorites = (state = JSON.parse(localStorage.getItem('favs') || '[]'), action) => {
    switch(action.type){
        case ADD_TO_FAVORITES:
            return action.payload.favs 
            case REMOVE_FROM_FAVORITES:
                return  action.payload.favs 
            default: 
            return state
    }
}
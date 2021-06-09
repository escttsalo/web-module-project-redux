import { TOGGLE_FAVORITES, ADD_FAVORITES, REMOVE_FAVORITE } from '../actions/favoriteActions';

const initialState = {
    favorites: [],
    displayFavorites: true
}

const reducer = (state = initialState, action ) => {
    switch(action.type){
        case TOGGLE_FAVORITES :
            return {
                ...state, 
                displayFavorites: !state.displayFavorites
            }
        case ADD_FAVORITES :
            return {
                ...state,
                favorites: [...state.favorites, action.payload]
            }
        case REMOVE_FAVORITE :
            return {
                ...state,
                favorites: state.favorites.filter(movie=>(action.payload !== movie.id))
            }
        default:
            return state;
    }
}

export default reducer;
import API from "../../API";
import { addFavoritesAction, deleteFavoritesAction, fetchFavoritesAction } from './Actions'


const api = new API()
const Favorites_Key = 'FAVORITES_KEY'

////********^
export const fetchFromLocalStorage = () => {
    return async dispatch => {
        let favoritesJSON = localStorage.getItem(Favorites_Key);
        let favorites = []
        if (favoritesJSON) {
            favorites = JSON.parse(favoritesJSON);

        }
        dispatch(fetchFavoritesAction(favorites))
    }
}

export const addFavorite = (image) => {
    return async (dispatch, getState) => {
        let prevFav = getState().favorites.list;
        const nextFav = [image, ...prevFav]
        setToLocalStorage(nextFav)
        dispatch(addFavoritesAction(nextFav))

    }
}

export const deleteFavorites = (id) => {
    return async (getState, dispatch) => {
        let prevFav = getState().favorites.list;
        const nextFav = prevFav.filter((image) => image.id !== id)
        setToLocalStorage(nextFav)
        dispatch(deleteFavoritesAction(nextFav))

    }
}

const setToLocalStorage = favorites => {
    localStorage.setItem(Favorites_Key, JSON.stringify(favorites))
}
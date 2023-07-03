import API from "../../API";
import { fetchMoviesAction } from "./actions";

const api = new API()
export const fetchMovies = () => {
    return async disptach => {
        return api
            .getMovies()
            .then(movies => {
                disptach(fetchMoviesAction(movies))
                console.log(movies)
            })
            .catch(error => {
                alert("failed to get movies")
            })
    }
}
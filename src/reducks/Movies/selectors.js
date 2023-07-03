import { createSelector } from "reselect";

const moviesSelector = state => state.movies;

export const getMovies = createSelector([moviesSelector], (state) => state)
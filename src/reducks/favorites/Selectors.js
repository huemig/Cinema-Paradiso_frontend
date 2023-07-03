import { createSelector } from "reselect";

const favSelector = state => state.favorites;
export const getFavorites = createSelector([favSelector], state => state.list)


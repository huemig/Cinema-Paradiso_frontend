import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as configureStore,
} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { logger } from 'redux-logger';
import thunk from 'redux-thunk';

import { PostsReducer } from '../posts/reducers';
import { MoviesReducer } from '../Movies/reducers';
import { favoritesReducer } from '../favorites/Reducers';

const rootReducer = combineReducers({
  posts: PostsReducer,
  movies: MoviesReducer,
  favourites: favoritesReducer,
});

export default function configureStores(preloadedState) {
  const middlewares = [logger, thunk];
  const middlewareEnhancer = applyMiddleware(...middlewares);

  const enhancers = [middlewareEnhancer];
  const composedEnhancers = composeWithDevTools(...enhancers);

  const store = configureStore(rootReducer, preloadedState, composedEnhancers);

  return store;
}

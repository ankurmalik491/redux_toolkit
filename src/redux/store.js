import movieListReducer from './slices/movieList';
import {configureStore} from "@reduxjs/toolkit"

const Store = configureStore({
  reducer: {
    movieListReducer,
  },
});

export default Store;

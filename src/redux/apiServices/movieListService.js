import {createAsyncThunk} from '@reduxjs/toolkit';
import {appConfig} from '../../configs';

export const fetchMovieList = createAsyncThunk('fetchMovieList', async e => {
  const response = await fetch(appConfig.movieListApiURL + e.page);
  return response.json();
});

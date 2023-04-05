import { fetchMovieList } from "../apiServices/movieListService";

const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  loading: false,
  list: [],
  isError: false,
};

const movieList = createSlice({
  name: "movieList",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchMovieList.pending, (state, action) => {
      state.loading = true;
      isError = false;
    });
    builder.addCase(fetchMovieList.fulfilled, (state, action) => {
      state.loading = false;
      list = action.payload;
      isError = false;
    });
    builder.addCase(fetchMovieList.rejected, (state, action) => {
      state.loading = false;
      isError = true;
    });
  },
});

export default movieList.reducer;

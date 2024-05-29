import { createSlice } from "@reduxjs/toolkit";

const movieDetailsSlice = createSlice({
    name: "details",
    initialState: {
        showMovieDetails: false,
    },
    reducers: {
        toggleImageClick: (state) => {
            state.showMovieDetails = !state.showMovieDetails;
        },
    },
});

export const { toggleImageClick } = movieDetailsSlice.actions;

export default movieDetailsSlice.reducer;
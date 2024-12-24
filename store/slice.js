import { createSlice } from "@reduxjs/toolkit";


export const favouriteSlice = createSlice({
    name: "favourites",
    initialState: {
        value: []
    }, 
    reducers: {
        addFavourite: (state, action) => {
            state.value.push(action.payload);
        },
        removeFavourite: (state, action) => {
            state.value = state.value.filter( id => id !== action.payload)
        }
    }
})

export const {addFavourite, removeFavourite} = favouriteSlice.actions;
// export const FavouriteIds = state => state.favourites.value;
export default favouriteSlice.reducer;
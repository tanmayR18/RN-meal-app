
import { configureStore } from '@reduxjs/toolkit';
import favouriteReducer from './slice';

export const store = configureStore({
    reducer: {
        favourite: favouriteReducer,
    }
})
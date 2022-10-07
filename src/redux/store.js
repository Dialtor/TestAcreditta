import {configureStore} from '@reduxjs/toolkit';
import marsSlice from '../features/mars/marsSlice';

export const store = configureStore({
    reducer: {
        mars: marsSlice,
    }
})
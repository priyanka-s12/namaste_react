import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import movieReducer from './movieSlice';

const appStore = configureStore({
  //write configuration
  reducer: {
    user: userReducer,
    movies: movieReducer,
  },
});

export default appStore;

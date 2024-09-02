import { configureStore } from '@reduxjs/toolkit';
import favouriteMealsReducer from './features/favouriteMealsSlice';

const store = configureStore({
  reducer: {
    favouriteMeals: favouriteMealsReducer,
  },
});

export default store;

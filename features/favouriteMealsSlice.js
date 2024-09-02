import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  favouriteMealsId: [],
};

const favouriteMealsSlice = createSlice({
  name: 'favouriteMeals',
  initialState,
  reducers: {
    addFavouriteMeal: (state, action) => {
      state.favouriteMealsId.push(action.payload.id);
    },
    removeFavouriteMeal: (state, action) => {
      state.favouriteMealsId.splice(
        state.favouriteMealsId.indexOf(action.payload.id),
        1
      );
    },
  },
});

export default favouriteMealsSlice.reducer;

export const { addFavouriteMeal, removeFavouriteMeal } =
  favouriteMealsSlice.actions;

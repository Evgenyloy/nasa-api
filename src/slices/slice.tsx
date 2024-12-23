import { createSlice } from '@reduxjs/toolkit';
import { IAsteroid } from '../api/apiSlice.type';

interface IInitialState {
  trackedAsteroids: IAsteroid[];
  showTrackedAsteroids: boolean;
}

const initialState: IInitialState = {
  trackedAsteroids: [],
  showTrackedAsteroids: false,
};

const slice = createSlice({
  name: 'asteroid',
  initialState,
  reducers: {
    addTrackedAsteroid: (state, action) => {
      state.trackedAsteroids.push(action.payload);
    },
    toggleShowTrackedAsteroids: (state) => {
      state.showTrackedAsteroids = !state.showTrackedAsteroids;
    },
  },
});

const { reducer, actions } = slice;
export default reducer;
export const { addTrackedAsteroid, toggleShowTrackedAsteroids } = actions;

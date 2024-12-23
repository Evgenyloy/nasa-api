import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IAsteroid } from '../api/types/types';

interface IInitialState {
  trackedAsteroids: IAsteroid[];
  showTrackedAsteroids: boolean;
  filter: string;
}

const initialState: IInitialState = {
  trackedAsteroids: [],
  showTrackedAsteroids: false,
  filter: 'date',
};

const slice = createSlice({
  name: 'asteroid',
  initialState,
  reducers: {
    addTrackedAsteroid: (state, action: PayloadAction<IAsteroid>) => {
      state.trackedAsteroids.push(action.payload);
    },
    removeTrackedAsteroid: (state, action: PayloadAction<string>) => {
      state.trackedAsteroids = state.trackedAsteroids.filter(
        (item) => item.id !== action.payload
      );
    },
    toggleShowTrackedAsteroids: (state) => {
      state.showTrackedAsteroids = !state.showTrackedAsteroids;
    },
    setFilter: (state, action: PayloadAction<string>) => {
      state.filter = action.payload;
    },
  },
});

const { reducer, actions } = slice;
export default reducer;
export const {
  addTrackedAsteroid,
  toggleShowTrackedAsteroids,
  removeTrackedAsteroid,
  setFilter,
} = actions;

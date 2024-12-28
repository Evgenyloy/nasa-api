import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IAsteroid } from '../api/types';

interface IInitialState {
  trackedAsteroids: IAsteroid[];
  showTrackedAsteroids: boolean;
  filter: string;
  id: string;
}

const initialState: IInitialState = {
  trackedAsteroids: localStorage.getItem('trackedAsteroids')
    ? JSON.parse(localStorage.getItem('trackedAsteroids') as string)
    : [],
  showTrackedAsteroids: false,
  filter: 'date',
  id: localStorage.getItem('asteroidId')
    ? JSON.parse(localStorage.getItem('asteroidId') as string)
    : '',
};

const slice = createSlice({
  name: 'asteroid',
  initialState,
  reducers: {
    addTrackedAsteroid: (state, action: PayloadAction<IAsteroid>) => {
      state.trackedAsteroids.push(action.payload);
      localStorage.setItem(
        'trackedAsteroids',
        JSON.stringify(state.trackedAsteroids)
      );
    },
    removeTrackedAsteroid: (state, action: PayloadAction<string>) => {
      state.trackedAsteroids = state.trackedAsteroids.filter((item) => {
        return item.id !== action.payload;
      });
      localStorage.setItem(
        'trackedAsteroids',
        JSON.stringify(state.trackedAsteroids)
      );
    },
    toggleShowTrackedAsteroids: (state) => {
      state.showTrackedAsteroids = !state.showTrackedAsteroids;
    },
    setFilter: (state, action: PayloadAction<string>) => {
      state.filter = action.payload;
    },
    setId: (state, action: PayloadAction<string>) => {
      state.id = action.payload;
      localStorage.setItem('asteroidId', JSON.stringify(action.payload));
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
  setId,
} = actions;

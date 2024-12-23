import { configureStore } from '@reduxjs/toolkit';
import { nasaApi } from '../api/apiSlice';
import asteroidsSlice from '../slices/slice';

const store = configureStore({
  reducer: { asteroidsSlice, [nasaApi.reducerPath]: nasaApi.reducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(nasaApi.middleware),
});

export default store;

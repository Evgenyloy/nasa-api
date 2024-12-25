import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { apiKey } from '../api-key';
import { IAsteroid } from './types/types';
import { transformData } from './utils/utils';

const date = new Date().getDate() + 1;
const year = new Date().getFullYear();
const month = new Date().getMonth() + 1;

export const nasaApi = createApi({
  reducerPath: 'nasaApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.nasa.gov/neo/rest/v1/',
    method: 'GET',
  }),
  endpoints: (builder) => ({
    getAsteroidsData: builder.query<IAsteroid[], unknown>({
      query: () => `feed?start_date=${year}-${month}-${date}&api_key=${apiKey}`,
      transformResponse: (response) => {
        const dataArray = transformData(response).flat(2);
        return dataArray;
      },
    }),
    getAsteroid: builder.query({
      query: (id) => `neo/${id}?api_key=${apiKey}`,
      // transformResponse: (response) => {
      //  return response
      // },
    }),
  }),
});

export const { useGetAsteroidsDataQuery, useGetAsteroidQuery } = nasaApi;

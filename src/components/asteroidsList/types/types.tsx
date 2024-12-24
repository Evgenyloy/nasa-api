import { IAsteroid } from '../../../api/types/types';

export interface IAsteroidsListProps {
  dataAr: {
    asteroids: IAsteroid[];
    isError: boolean;
    isFetching: boolean;
    isSuccess: boolean;
    isLoading: boolean;
  };
}

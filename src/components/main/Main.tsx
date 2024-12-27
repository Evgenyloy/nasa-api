import AsteroidsList from '../asteroidsList/AsteroidsList';
import earthImage from '../../image/earth.png';
import AsteroidsMenu from '../asteroidsMenu/AsteroidsMenu';
import { useGetAsteroidsDataQuery } from '../../api/apiSlice';

import './main.scss';
import MainInner from './MainInner';
import Spinner from '../spinner/Spinner';
import Error from '../error/Error';

function Main() {
  const {
    data: asteroids,
    isError,
    isFetching,
    isSuccess,
    isLoading,
  } = useGetAsteroidsDataQuery('');
  return (
    <div className="main">
      {(isFetching || isLoading) && <Spinner />}
      {isError && <Error />}
      {isSuccess && <MainInner asteroids={asteroids} />}
    </div>
  );
}

export default Main;

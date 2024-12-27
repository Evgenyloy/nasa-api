import { useGetAsteroidQuery } from '../../api/apiSlice';
import { useAppSelector } from '../../hooks/hooks';
import AsteroidInner from './AsteroidInner';
import Spinner from '../spinner/Spinner';
import Error from '../error/Error';
import './asteroid.scss';

function Asteroid() {
  const asteroidId = useAppSelector((state) => state.asteroidsSlice.id);
  const {
    data: asteroid,
    isError,
    isLoading,
    isSuccess,
    isFetching,
  } = useGetAsteroidQuery(asteroidId);

  return (
    <div className="asteroid">
      {(isFetching || isLoading) && <Spinner />}
      {isError && <Error />}
      {isSuccess && <AsteroidInner asteroid={asteroid} />}
    </div>
  );
}

export default Asteroid;

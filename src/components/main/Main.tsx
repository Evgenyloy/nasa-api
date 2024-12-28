import { useGetAsteroidsDataQuery } from '../../api/apiSlice';
import Spinner from '../spinner/Spinner';
import Error from '../error/Error';
import MainComposeComponent from './MainComposeComponent';
import './main.scss';

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
      {isSuccess && <MainComposeComponent asteroids={asteroids} />}
    </div>
  );
}

export default Main;

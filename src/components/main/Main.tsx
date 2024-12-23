import AsteroidsList from '../asteroidsList/AsteroidsList';
import earthImage from '../../image/earth.png';
import AsteroidsMenu from '../asteroidsMenu/AsteroidsMenu';
import './main.scss';
import { useGetAsteroidsDataQuery } from '../../api/apiSlice';

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
      <img src={earthImage} alt="Earth-planet" className="main-image" />
      <AsteroidsList
        dataAr={{ asteroids, isError, isFetching, isSuccess, isLoading }}
      />
      <AsteroidsMenu />
    </div>
  );
}

export default Main;

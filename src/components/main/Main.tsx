import AsteroidsList from '../asteroidsList/AsteroidsList';
import earthImage from '../../image/earth.png';
import AsteroidsMenu from '../asteroidsMenu/AsteroidsMenu';
import { useGetAsteroidsDataQuery } from '../../api/apiSlice';
import './main.scss';

function Main() {
  const {
    data: asteroids,
    isError,
    isFetching,
    isSuccess,
    isLoading,
  } = useGetAsteroidsDataQuery('');
  if (!asteroids) return;
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

import AsteroidsList from '../asteroidsList/AsteroidsList';
import AsteroidsMenu from '../asteroidsMenu/AsteroidsMenu';
import earthImage from '../../image/earth.png';
import { IAsteroid } from '../../api/types/types';

interface IMainInnerProps {
  asteroids: IAsteroid[];
}

function MainInner({ asteroids }: IMainInnerProps) {
  return (
    <>
      {' '}
      <div className="main-image-img-cont">
        <img src={earthImage} alt="Earth-planet" className="main-image" />
      </div>
      <div className="main__container">
        <AsteroidsList asteroids={asteroids} />
        <AsteroidsMenu />
      </div>
    </>
  );
}

export default MainInner;

import { IAsteroid } from '../../api/apiSlice.type';
import { useAppDispatch } from '../../hooks/hooks';
import asteroidImg from '../../image/asteroid.png';
import { addTrackedAsteroid } from '../../slices/slice';
import './asteroidsListItem.scss';

export interface IAsteroidListItemProps {
  asteroid: IAsteroid;
}

function AsteroidListItem({ asteroid }: IAsteroidListItemProps) {
  const {
    approachDate,
    diameter,
    distance,
    hazard,
    name,
    velocityKmS,
    asteroidNasaLink,
    id,
  } = asteroid;
  const dispatch = useAppDispatch();

  const date = new Date(approachDate.split('-').join()).toLocaleString('ru', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    timeZone: 'UTC',
  });

  return (
    <div className="asteroid-item">
      <div className="asteroid-item__oncoming-date">{date}</div>
      <div className="asteroid-item__characteristics">
        <div className="asteroid-item__characteristics-distance-inner">
          <div className="asteroid-item__characteristics-distance">
            {new Intl.NumberFormat('ru').format(
              +parseFloat(distance.distanceKilometers).toFixed()
            ) + ' км'}
          </div>
          <div className="asteroid-item__characteristics-distance-line"></div>
        </div>
        <div className="asteroid-item__characteristics-img-cont">
          <img
            src={asteroidImg}
            alt="asteroid"
            className="asteroid-item__characteristics-img"
            style={
              +diameter > 100
                ? { width: '36px', height: '40px' }
                : { width: '22px', height: '24px' }
            }
          />
        </div>
        <div className="asteroid-item__characteristics-inner">
          <div className="asteroid-item__characteristics-name"> {name}</div>
          <div className="asteroid-item__characteristics-diameter">
            Ø {diameter + ' м'}
          </div>
        </div>
      </div>
      <div className="asteroid-item__track-inner">
        <div
          className="asteroid-item__button"
          onClick={() => dispatch(addTrackedAsteroid(asteroid))}
        >
          Отслеживать
        </div>
        <div className="asteroid-item__danger">
          {hazard ? 'Опасный!' : null}
        </div>
      </div>
    </div>
  );
}

export default AsteroidListItem;

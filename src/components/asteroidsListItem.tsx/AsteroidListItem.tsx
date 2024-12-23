import { IAsteroid } from '../../api/types/types';
import asteroidImg from '../../image/asteroid.png';
import { addTrackedAsteroid, removeTrackedAsteroid } from '../../slices/slice';
import useRedux from '../../hooks/useRedux';
import { IAsteroidListItemProps } from './types/asteroidsListItemTypes';
import { dateFormatting, numberFormatting } from './utils/utils';
import { useCheckTrackedAsteroid } from './hooks/useCheckTrackedAsteroid';
import './asteroidsListItem.scss';

function AsteroidListItem({ asteroid }: IAsteroidListItemProps) {
  const { approachDate, diameter, distance, hazard, name, id } = asteroid;
  const date = dateFormatting(approachDate);
  const formattedDistance = numberFormatting(distance);

  const { dispatch, trackedAsteroids } = useRedux();
  const { trackedAsteroid } = useCheckTrackedAsteroid(asteroid);

  function handleClick(asteroid: IAsteroid, id: string) {
    if (!trackedAsteroids.includes(asteroid)) {
      dispatch(addTrackedAsteroid(asteroid));
    } else {
      dispatch(removeTrackedAsteroid(id));
    }
  }

  return (
    <div className="asteroid-item">
      <div className="asteroid-item__oncoming-date">{date}</div>
      <div className="asteroid-item__characteristics">
        <div className="asteroid-item__characteristics-distance-inner">
          <div className="asteroid-item__characteristics-distance">
            {formattedDistance} км
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
          <div className="asteroid-item__characteristics-name">{name}</div>
          <div className="asteroid-item__characteristics-diameter">
            Ø {diameter} м
          </div>
        </div>
      </div>
      <div className="asteroid-item__track-inner">
        <div
          className="asteroid-item__button"
          onClick={() => handleClick(asteroid, id)}
        >
          {trackedAsteroid ? 'удалить' : 'Отслеживать'}
        </div>
        <div className="asteroid-item__danger">
          {hazard ? 'Опасный!' : null}
        </div>
      </div>
    </div>
  );
}

export default AsteroidListItem;

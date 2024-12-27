import { IAsteroid } from '../../api/types/types';
import useRedux from '../../hooks/useRedux';
import { toggleShowTrackedAsteroids } from '../../slices/slice';
import { AppDispatch } from '../../types/types';
import './asteroidsMenu.scss';

function renderInnerView<
  S extends boolean,
  A extends IAsteroid[],
  D extends AppDispatch
>(showTrackedAsteroids: S, trackedAsteroids: A, dispatch: D) {
  const buttonName = showTrackedAsteroids ? 'вернуться' : 'просмотреть';
  const asteroidQuantity = trackedAsteroids.length
    ? trackedAsteroids.length
    : null;
  return (
    <>
      <div className="tracked-asteroids__number">{asteroidQuantity}</div>
      <a
        href="#"
        className="tracked-asteroids__link"
        onClick={() => dispatch(toggleShowTrackedAsteroids())}
      >
        {buttonName}
      </a>
    </>
  );
}

function TrackedAsteroids() {
  const { dispatch, showTrackedAsteroids, trackedAsteroids } = useRedux();
  const trackedAsteroidsClassName = trackedAsteroids.length
    ? 'tracked-asteroids'
    : 'tracked-asteroids tracked-asteroids--visible-none';
  const trackedAsteroidsTextClassName = trackedAsteroids.length
    ? 'отслеживается'
    : 'нет отслеживаемых астероидов';
  const innerView = renderInnerView(
    showTrackedAsteroids,
    trackedAsteroids,
    dispatch
  );

  return (
    <div className={trackedAsteroidsClassName}>
      <div className="tracked-asteroids__text">
        {trackedAsteroidsTextClassName}
      </div>

      {(!!trackedAsteroids.length || showTrackedAsteroids) && innerView}
    </div>
  );
}

export default TrackedAsteroids;

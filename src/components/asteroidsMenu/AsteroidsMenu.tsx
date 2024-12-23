import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { toggleShowTrackedAsteroids } from '../../slices/slice';
import './asteroidsMenu.scss';

function TrackedAsteroids() {
  const trackedAsteroids = useAppSelector(
    (state) => state.asteroidsSlice.trackedAsteroids
  );
  const showTrackedAsteroids = useAppSelector(
    (state) => state.asteroidsSlice.showTrackedAsteroids
  );
  const dispatch = useAppDispatch();
  return (
    <div className="tracked-asteroids__container">
      <div
        className={
          trackedAsteroids.length
            ? 'tracked-asteroids'
            : 'tracked-asteroids tracked-asteroids--visible-none'
        }
      >
        <div className="tracked-asteroids__text">
          {trackedAsteroids.length
            ? 'отслеживается'
            : 'нет отслеживаемых астероидов'}
        </div>

        {trackedAsteroids.length ? (
          <>
            <div className="tracked-asteroids__number">
              {trackedAsteroids.length}
            </div>
            <a
              href="#"
              className="tracked-asteroids__link"
              onClick={() => dispatch(toggleShowTrackedAsteroids())}
            >
              {showTrackedAsteroids ? 'вернуться' : 'просмотреть'}
            </a>
          </>
        ) : null}
      </div>
    </div>
  );
}

export default TrackedAsteroids;

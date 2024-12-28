import { IAsteroid } from '../../api/types';
import { addTrackedAsteroid, removeTrackedAsteroid } from '../../slices/slice';
import { AppDispatch } from '../../types/types';

export function dateFormatting(approachDate: string) {
  const date = new Date(approachDate.split('-').join()).toLocaleString('ru', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    timeZone: 'UTC',
  });
  return date;
}

export function numberFormatting(distance: string) {
  const formattedDistance = new Intl.NumberFormat('ru').format(
    +parseFloat(distance).toFixed()
  );

  return formattedDistance;
}

export function handleClick(
  trackedAsteroids: IAsteroid[],
  asteroid: IAsteroid,
  id: string,
  dispatch: AppDispatch
) {
  trackedAsteroids.some((el) => el.id === asteroid.id)
    ? dispatch(removeTrackedAsteroid(id))
    : dispatch(addTrackedAsteroid(asteroid));
}

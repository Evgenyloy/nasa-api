import { useLayoutEffect, useState } from 'react';
import useRedux from '../../../hooks/useRedux';
import { IAsteroid } from '../../../api/types';

export function useCheckTrackedAsteroid(asteroid: IAsteroid) {
  const { trackedAsteroids } = useRedux();
  const [trackedAsteroid, setTrackedAsteroid] = useState<boolean>();

  function checkTrackedAsteroid(
    trackedAsteroids: IAsteroid[],
    asteroid: IAsteroid
  ) {
    trackedAsteroids.some((el) => el.id === asteroid.id)
      ? setTrackedAsteroid(true)
      : setTrackedAsteroid(false);
  }

  useLayoutEffect(() => {
    checkTrackedAsteroid(trackedAsteroids, asteroid);
  }, [trackedAsteroids]);

  return { trackedAsteroid };
}

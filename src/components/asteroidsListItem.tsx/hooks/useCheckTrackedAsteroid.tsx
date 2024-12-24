import { useEffect, useState } from 'react';
import useRedux from '../../../hooks/useRedux';
import { IAsteroid } from '../../../api/types/types';

export function useCheckTrackedAsteroid(asteroid: IAsteroid) {
  const [trackedAsteroid, setTrackedAsteroid] = useState(false);
  const { trackedAsteroids } = useRedux();

  useEffect(() => {
    if (!trackedAsteroids.includes(asteroid)) {
      setTrackedAsteroid(false);
    } else {
      setTrackedAsteroid(true);
    }
  }, [trackedAsteroids, asteroid]);

  return { trackedAsteroid };
}

import React from 'react';
import AsteroidListItem from '../asteroidsListItem.tsx/AsteroidListItem';
import useRedux from '../../hooks/useRedux';
import { IAsteroidsListProps } from './types/types';
import { IAsteroid } from '../../api/types/types';
import Filter from '../filter/Filter';
import { sortFn } from './utils/utils';
import './asteroidsList.scss';

function renderAsteroidList(asteroids: IAsteroid[] | undefined) {
  if (!asteroids) return;
  return asteroids?.map((asteroid) => {
    return (
      <React.Fragment key={asteroid.id}>
        <AsteroidListItem asteroid={asteroid} />
      </React.Fragment>
    );
  });
}

function AsteroidsList({
  dataAr: { asteroids, isError, isFetching, isLoading, isSuccess },
}: IAsteroidsListProps) {
  const { showTrackedAsteroids, trackedAsteroids, filter } = useRedux();
  if (!asteroids) return;

  const allAsteroids = renderAsteroidList(sortFn(asteroids, filter));
  const trackedAsteroidsList = renderAsteroidList(
    sortFn(trackedAsteroids, filter)
  );

  return (
    <div className="asteroids-list">
      <div className="container">
        <h1 className="asteroids__title">
          {showTrackedAsteroids
            ? 'Отслеживаемые астероиды'
            : 'Ближайшие подлеты астероидов'}
        </h1>
        <Filter />
        <div className="asteroids-list__inner">
          {showTrackedAsteroids ? trackedAsteroidsList : allAsteroids}
        </div>
      </div>
    </div>
  );
}

export default AsteroidsList;

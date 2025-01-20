import { IAsteroidsListProps } from './types';
import AsteroidListItem from '../asteroidsListItem/AsteroidListItem';
import React from 'react';
import { sortFn } from './utils';
import useRedux from '../../hooks/useRedux';
import Filter from '../filter/Filter';
import { IAsteroid } from '../../api/types';
import './asteroidsList.scss';

function renderAsteroidList(asteroids: IAsteroid[] | undefined) {
  return asteroids?.map((asteroid) => {
    return (
      <React.Fragment key={asteroid.id}>
        <AsteroidListItem asteroid={asteroid} />
      </React.Fragment>
    );
  });
}

function AsteroidsList({ asteroids }: IAsteroidsListProps) {
  const { showTrackedAsteroids, trackedAsteroids, filter } = useRedux();

  const allAsteroids = renderAsteroidList(sortFn(asteroids, filter));

  const trackedAsteroidsList = renderAsteroidList(
    sortFn(trackedAsteroids, filter)
  );

  return (
    <div className="asteroids">
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
  );
}

export default AsteroidsList;

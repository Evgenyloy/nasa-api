import React from 'react';
import { IAsteroid } from '../../api/apiSlice.type';
import AsteroidListItem from '../asteroidsListItem.tsx/AsteroidListItem';
import './asteroidsList.scss';
import { useAppSelector } from '../../hooks/hooks';

export interface IAsteroidsListProps {
  dataAr: {
    asteroids: IAsteroid[] | undefined;
    isError: boolean;
    isFetching: boolean;
    isSuccess: boolean;
    isLoading: boolean;
  };
}

function AsteroidsList({
  dataAr: { asteroids, isError, isFetching, isLoading, isSuccess },
}: IAsteroidsListProps) {
  const trackedAsteroids = useAppSelector(
    (state) => state.asteroidsSlice.trackedAsteroids
  );
  const showTrackedAsteroids = useAppSelector(
    (state) => state.asteroidsSlice.showTrackedAsteroids
  );

  return (
    <div className="asteroids-list">
      <div className="container">
        <h1 className="asteroids__title">
          {showTrackedAsteroids
            ? 'Отслеживаемые астероиды'
            : 'Ближайшие подлеты астероидов'}
        </h1>
        <div className="asteroids-list__inner">
          {showTrackedAsteroids
            ? trackedAsteroids?.map((asteroid) => {
                return (
                  <React.Fragment key={asteroid.id}>
                    <AsteroidListItem asteroid={asteroid} />
                  </React.Fragment>
                );
              })
            : asteroids?.map((asteroid) => {
                return (
                  <React.Fragment key={asteroid.id}>
                    <AsteroidListItem asteroid={asteroid} />
                  </React.Fragment>
                );
              })}
          {/*  {asteroids?.map((asteroid) => {
            return (
              <React.Fragment key={asteroid.id}>
                <AsteroidListItem asteroid={asteroid} />
              </React.Fragment>
            );
          })} */}
          {/* {trackedAsteroids?.map((asteroid) => {
            return (
              <React.Fragment key={asteroid.id}>
                <AsteroidListItem asteroid={asteroid} />
              </React.Fragment>
            );
          })} */}
        </div>
      </div>
    </div>
  );
}

export default AsteroidsList;

import { it, describe, expect } from 'vitest';
import {
  asteroids,
  dateSortedAsteroids,
  dangerSortedAsteroids,
  distanceSortedAsteroids,
} from '../__mocks__/sort.mock';
import { sortFn } from '../utils';

describe('sort asteroid objects', () => {
  it('should sort by date', () => {
    const actualResult = sortFn(asteroids, 'date');

    const expectedResult = dateSortedAsteroids;

    expect(actualResult).toStrictEqual(expectedResult);
  });

  it('should sort by danger', () => {
    const actualResult = sortFn(asteroids, 'danger');

    const expectedResult = dangerSortedAsteroids;

    expect(actualResult).toStrictEqual(expectedResult);
  });

  it('should sort by distance', () => {
    const actualResult = sortFn(asteroids, 'distance');

    const expectedResult = distanceSortedAsteroids;

    expect(actualResult).toStrictEqual(expectedResult);
  });
});

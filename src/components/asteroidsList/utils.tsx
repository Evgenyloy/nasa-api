import { IAsteroid } from '../../api/types';

export function sortFn(asteroids: IAsteroid[], filter: string) {
  const newArray = asteroids?.slice();
  switch (filter) {
    case 'date':
      return newArray.sort((a, b) => {
        return (
          (new Date(a.approachDate) as unknown as number) -
          (new Date(b.approachDate) as unknown as number)
        );
      });

    case 'distance':
      return newArray.sort((a, b) => {
        return (
          (a.distance.distanceKilometers as unknown as number) -
          (b.distance.distanceKilometers as unknown as number)
        );
      });
    case 'danger':
      return newArray.sort((a, b) => {
        return (b.hazard as any) - (a.hazard as any);
      });
  }
}

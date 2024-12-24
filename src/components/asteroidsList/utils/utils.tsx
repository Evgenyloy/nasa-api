import { IAsteroid } from '../../../api/types/types';

export function sortFn(asteroids: IAsteroid[], filter: string) {
  const aaa = asteroids?.slice();
  switch (filter) {
    case 'date':
      return aaa.sort((a, b) => {
        return (
          (new Date(a.approachDate) as unknown as number) -
          (new Date(b.approachDate) as unknown as number)
        );
      });

    case 'distance':
      return aaa.sort((a, b) => {
        return (
          (a.distance.distanceKilometers as unknown as number) -
          (b.distance.distanceKilometers as unknown as number)
        );
      });
    case 'danger':
      return aaa.sort((a, b) => {
        return (b.hazard as any) - (a.hazard as any);
      });
  }
}

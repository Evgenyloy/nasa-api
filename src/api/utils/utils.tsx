import { IAsteroid } from '../types/types';

export function transformData(data: any) {
  const dataArray = Object.entries(data?.near_earth_objects).map(
    (item: any) => {
      const transformedArray = item[1].map((elem: any) => {
        const transformedData: IAsteroid = {
          name: elem.name.replace(/[^a-zA-Z0-9 ]/g, ''),
          id: elem.id,
          hazard: elem.is_potentially_hazardous_asteroid,

          distance: {
            distanceKilometers:
              elem.close_approach_data[0].miss_distance.kilometers,
            distanceLunar: elem.close_approach_data[0].miss_distance.lunar,
          },
          approachDate: elem.close_approach_data[0].close_approach_date,

          diameter:
            elem.estimated_diameter.meters.estimated_diameter_max.toFixed(),
        };

        return [{ ...transformedData }];
      });

      return [...transformedArray];
    }
  );

  return dataArray;
}

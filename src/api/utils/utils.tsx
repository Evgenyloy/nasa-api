import { IApproachData, IAsteroid, IAsteroidItem } from '../types/types';

export function transformAsteroidsData(data: any) {
  const dataArray = Object.entries(data?.near_earth_objects).map(
    (item: any) => {
      const transformedArray: IAsteroid[] = item[1].map((elem: any) => {
        const transformedData: IAsteroid = {
          name: elem.name.replace(/[^a-zA-Z0-9 ]/g, ''),
          id: elem.id,
          hazard: elem.is_potentially_hazardous_asteroid,
          approachDate: elem.close_approach_data[0].close_approach_date,
          tracked: false,
          distance: {
            distanceKilometers:
              elem.close_approach_data[0].miss_distance.kilometers,
            distanceLunar: elem.close_approach_data[0].miss_distance.lunar,
          },
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

export function transformSingleAsteroid(response: any) {
  const approach_data: IApproachData[] = response?.close_approach_data?.map(
    (item: any) => {
      return {
        close_approach_date: item.close_approach_date,
        distance_kilometers: item.miss_distance.kilometers,
        kilometers_per_hour: item.relative_velocity.kilometers_per_hour,
      };
    }
  );

  const data: IAsteroidItem = {
    name: response.name,
    absolute_magnitude_h: response.absolute_magnitude_h,
    designation: response.designation,
    is_potentially_hazardous_asteroid:
      response.is_potentially_hazardous_asteroid,
    equinox: response.orbital_data.equinox,
    first_observation_date: response.orbital_data.first_observation_date,
    last_observation_date: response.orbital_data.last_observation_date,
    observations_used: response.orbital_data.observations_used,
    orbit_class_description:
      response.orbital_data.orbit_class.orbit_class_description,
    orbit_class_range: response.orbital_data.orbit_class.orbit_class_range,
    orbit_class_type: response.orbital_data.orbit_class.orbit_class_type,
    orbit_determination_date: response.orbital_data.orbit_determination_date,
    nasa_jpl_url: response.nasa_jpl_url,
    id: response.id,
    approach_data,
  };

  return data;
}

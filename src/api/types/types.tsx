export interface IDistance {
  distanceKilometers: string;
  distanceLunar: string;
}

export interface IAsteroid {
  approachDate: string;
  tracked: boolean;
  diameter: string;
  distance: IDistance;
  hazard: boolean;
  id: string;
  name: string;
}

export interface IAsteroidItem {
  name: string;
  absolute_magnitude_h: number;
  designation: string;
  is_potentially_hazardous_asteroid: boolean;
  equinox: string;
  first_observation_date: string;
  last_observation_date: string;
  observations_used: number;
  orbit_class_description: string;
  orbit_class_range: string;
  orbit_class_type: string;
  orbit_determination_date: string;
  nasa_jpl_url: string;
  approach_data: IApproachData[];
  id: string;
}

export interface IApproachData {
  close_approach_date: string;
  distance_kilometers: string;
  kilometers_per_hour: string;
}

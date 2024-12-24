export interface IDistance {
  distanceKilometers: string;
  distanceLunar: string;
}

export interface IAsteroid {
  approachDate: string;

  diameter: string;
  distance: IDistance;
  hazard: boolean;
  id: string;
  name: string;
}

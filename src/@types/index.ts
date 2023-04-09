import { Current, Location } from "./current";
import { Forecast } from "./forecast";

export interface ForecastInterface {
  location: Location;
  current: Current;
  forecast: Forecast;
}

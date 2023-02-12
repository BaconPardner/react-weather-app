import { IResult } from "./geocode";

export type TTemperatureUnit = "celsius" | "fahrenheit";

export type TCityData = Pick<
  IResult,
  "id" | "name" | "admin1" | "latitude" | "longitude"
>;

export type UseWeatherDataProps = {
  temperatureUnit: "celsius" | "fahrenheit";
  cityData: TCityData;
};

export type UseGeocodeDataProps = {
  name: string;
};

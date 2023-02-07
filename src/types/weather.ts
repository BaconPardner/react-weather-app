export interface IWeather {
  latitude: number;
  longitude: number;
  generationtime_ms: number;
  utc_offset_seconds: number;
  timezone: string;
  timezone_abbreviation: string;
  elevation: number;
  hourly_units: IHourlyUnits;
  hourly: IHourly;
  daily_units: IDailyUnits;
  daily: IDaily;
}

export interface IDaily {
  time: Date[];
  weathercode: number[];
  temperature_2m_max: number[];
  temperature_2m_min: number[];
  precipitation_sum: number[];
}

export interface IDailyUnits {
  time: string;
  weathercode: string;
  temperature_2m_max: string;
  temperature_2m_min: string;
  precipitation_sum: string;
}

export interface IHourly {
  time: string[];
  temperature_2m: number[];
  precipitation: number[];
  weathercode: number[];
}

export interface IHourlyUnits {
  time: string;
  temperature_2m: string;
  precipitation: string;
  weathercode: string;
}

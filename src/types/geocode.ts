export interface IGeocode {
  results: IResult[];
  generationtime_ms: number;
}

export interface IResult {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
  elevation?: number;
  feature_code: string;
  country_code: string;
  admin1_id: number;
  admin2_id?: number;
  timezone: string;
  population?: number;
  country_id: number;
  country: string;
  admin1: string;
  admin2?: string;
  admin3_id?: number;
  postcodes?: string[];
  admin3?: string;
}

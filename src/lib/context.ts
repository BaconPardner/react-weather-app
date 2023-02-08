import { createContext } from "react";
import { ForecastProps } from "./useForecast";

export const WeatherContext = createContext<ForecastProps>({} as ForecastProps);

import { useQuery } from "@tanstack/react-query";
import { IWeather } from "../../types/weather";

const WEATHER_API =
  "https://api.open-meteo.com/v1/forecast?latitude=47.53&longitude=21.62&hourly=temperature_2m,precipitation,weathercode&models=best_match&daily=weathercode,temperature_2m_max,temperature_2m_min,precipitation_sum&timezone=Europe%2FBerlin";

const useWeatherData = () => {
  return useQuery(["weather-query"], async () => {
    const res = await fetch(WEATHER_API);
    return (await res.json()) as IWeather;
  });
};

export default useWeatherData;

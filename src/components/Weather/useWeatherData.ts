import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { WeatherContext } from "../../lib/context";
import { IWeather } from "../../types/weather";

const WEATHER_API =
  "https://api.open-meteo.com/v1/forecast?latitude=47.53&longitude=21.62&hourly=temperature_2m,precipitation,weathercode&models=best_match&daily=weathercode,sunrise,sunset,temperature_2m_max,temperature_2m_min,precipitation_sum&timezone=Europe%2FBerlin";

const useWeatherData = () => {
  const { setDayTime } = useContext(WeatherContext);

  return useQuery(["weather-query"], async () => {
    const res = await fetch(WEATHER_API);
    const data = (await res.json()) as IWeather;

    const { sunrise, sunset } = data.daily;
    setDayTime({ sunrise: sunrise[0], sunset: sunset[0] });

    return data;
  });
};

export default useWeatherData;

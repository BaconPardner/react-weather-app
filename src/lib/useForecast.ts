import { useState } from "react";
import { UseWeatherDataProps } from "../types/useWeatherProps";

const useForecast = () => {
  const [fetchOptions, setFetchOptions] = useState<UseWeatherDataProps>({
    temperatureUnit: "celsius",
  });
  const [selectedDay, setSelectedDay] = useState({
    dayOfTheWeek: 0,
    sunrise: "",
    sunset: "",
  });

  return { fetchOptions, setFetchOptions, selectedDay, setSelectedDay };
};

export default useForecast;
export type ForecastProps = ReturnType<typeof useForecast>;

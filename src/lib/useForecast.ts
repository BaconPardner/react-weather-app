import { useState } from "react";
import { TCityData, TTemperatureUnit } from "../types/hookProps";

const useForecast = () => {
  const [cityData, setCityData] = useState({} as TCityData);

  const [temperatureUnit, setTemperatureUnit] =
    useState<TTemperatureUnit>("celsius");

  const [selectedDay, setSelectedDay] = useState({
    dayOfTheWeek: 0,
    sunrise: "",
    sunset: "",
  });

  return {
    cityData,
    setCityData,
    temperatureUnit,
    setTemperatureUnit,
    selectedDay,
    setSelectedDay,
  };
};

export default useForecast;
export type ForecastProps = ReturnType<typeof useForecast>;

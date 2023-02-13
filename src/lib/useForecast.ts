import { useEffect, useState } from "react";

import { TCityData, TTemperatureUnit } from "../types/hookProps";

const useForecast = () => {
  const [cityData, setCityData] = useState(initialCityData());

  const [temperatureUnit, setTemperatureUnit] = useState<TTemperatureUnit>(
    initialTemperatureUnit()
  );

  const [selectedDay, setSelectedDay] = useState({
    dayOfTheWeek: 0,
    sunrise: "",
    sunset: "",
  });

  useEffect(() => {
    localStorage.setItem("city", JSON.stringify(cityData));
  }, [cityData]);

  useEffect(() => {
    localStorage.setItem("temperatureUnit", JSON.stringify(temperatureUnit));
  }, [temperatureUnit]);

  return {
    cityData,
    setCityData,
    temperatureUnit,
    setTemperatureUnit,
    selectedDay,
    setSelectedDay,
  };
};

const initialCityData = () => {
  const saved = localStorage.getItem("city");
  if (!saved) return {} as TCityData;

  return JSON.parse(saved) as TCityData;
};

const initialTemperatureUnit = () => {
  const saved = localStorage.getItem("temperatureUnit");
  if (!saved) return "celsius";

  return JSON.parse(saved) as TTemperatureUnit;
};

export type ForecastProps = ReturnType<typeof useForecast>;

export default useForecast;

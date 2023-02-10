import { useState } from "react";
import { IResult } from "../types/geocode";
import { UseWeatherDataProps } from "../types/hookProps";

const useForecast = () => {
  const [cityData, setCityData] = useState(
    {} as Pick<IResult, "id" | "name" | "admin1">
  );
  const [fetchOptions, setFetchOptions] = useState<UseWeatherDataProps>({
    temperatureUnit: "celsius",
  });
  const [selectedDay, setSelectedDay] = useState({
    dayOfTheWeek: 0,
    sunrise: "",
    sunset: "",
  });

  return {
    cityData,
    setCityData,
    fetchOptions,
    setFetchOptions,
    selectedDay,
    setSelectedDay,
  };
};

export default useForecast;
export type ForecastProps = ReturnType<typeof useForecast>;

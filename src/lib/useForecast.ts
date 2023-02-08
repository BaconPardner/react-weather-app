import { useState } from "react";

const useForecast = () => {
  const [selectedDay, setSelectedDay] = useState(0);
  const [daytime, setDayTime] = useState({
    sunrise: "",
    sunset: "",
  });

  return { selectedDay, setSelectedDay, daytime, setDayTime };
};

export default useForecast;
export type ForecastProps = ReturnType<typeof useForecast>;

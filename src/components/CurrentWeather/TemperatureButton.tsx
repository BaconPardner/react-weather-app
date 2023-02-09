import { useContext } from "react";
import { WeatherContext } from "../../lib/context";
import { UseWeatherDataProps } from "../../types/useWeatherProps";
import styles from "./currentWeather.module.css";

const TemperatureButton = ({
  temperatureUnit: name,
}: Pick<UseWeatherDataProps, "temperatureUnit">) => {
  const { fetchOptions, setFetchOptions } = useContext(WeatherContext);

  return (
    <button
      className={
        fetchOptions.temperatureUnit === name
          ? styles.temperatureButtonSelected
          : styles.temperatureButton
      }
      onClick={() => setFetchOptions({ temperatureUnit: name })}
    >
      {name === "celsius" ? "C" : "F"}
    </button>
  );
};

export default TemperatureButton;

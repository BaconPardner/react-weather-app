import { useContext } from "react";
import { WeatherContext } from "../../lib/context";
import { TTemperatureUnit } from "../../types/hookProps";
import styles from "./currentWeather.module.css";

const TemperatureButton = ({ unit }: { unit: TTemperatureUnit }) => {
  const { temperatureUnit, setTemperatureUnit } = useContext(WeatherContext);

  return (
    <button
      className={
        temperatureUnit === unit
          ? styles.temperatureButtonSelected
          : styles.temperatureButton
      }
      onClick={() => setTemperatureUnit(unit)}
    >
      {unit === "celsius" ? "C" : "F"}
    </button>
  );
};

export default TemperatureButton;

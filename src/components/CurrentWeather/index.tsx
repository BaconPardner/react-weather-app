import { useContext } from "react";

import styles from "./currentWeather.module.css";
import TemperatureButton from "./TemperatureButton";
import { WeatherContext } from "../../lib/context";
import weatherInformation from "../../lib/weatherInformation";
import { IHourly } from "../../types/weather";
import WeatherIcon from "../WeatherIcon";

type CurrentWeatherProps = {
  data: IHourly;
};

const CurrentWeather = ({ data }: CurrentWeatherProps) => {
  const { cityData } = useContext(WeatherContext);
  const { temperature_2m, weathercode } = data;
  const id = new Date(Date.now()).getHours();

  return (
    <section className={styles.currentWeather}>
      <h1>
        {cityData.name}, {cityData.admin1}
      </h1>
      <main>
        <div className={styles.icon}>
          <WeatherIcon weatherCode={weathercode[id]} timeOfDay="Day" />
        </div>
        <p className={styles.minimum}>
          {temperature_2m[id].toFixed().replace("-0", "0")}&#176;
        </p>
        <div className={styles.temperatureUnit}>
          <TemperatureButton unit="celsius" />
          <TemperatureButton unit="fahrenheit" />
        </div>
      </main>
      <p>{weatherInformation(weathercode[id])}</p>
    </section>
  );
};

export default CurrentWeather;

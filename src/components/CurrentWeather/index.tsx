import { IHourly } from "../../types/weather";
import WeatherIcon from "../WeatherIcon";
import styles from "./currentWeather.module.css";
import weatherInformation from "../../lib/weatherInformation";
import TemperatureButton from "./TemperatureButton";

type CurrentWeatherProps = {
  city: string;
  state: string;
  data: IHourly;
};

const CurrentWeather = ({ city, state, data }: CurrentWeatherProps) => {
  const { temperature_2m, weathercode } = data;
  const id = new Date(Date.now()).getHours();

  return (
    <section className={styles.currentWeather}>
      <h1>
        {city}, {state}
      </h1>
      <main>
        <div className={styles.icon}>
          <WeatherIcon weatherCode={weathercode[id]} timeOfDay="Day" />
        </div>
        <p className={styles.minimum}>
          {temperature_2m[id].toFixed().replace("-0", "0")}&#176;
        </p>
        <div className={styles.temperatureUnit}>
          <TemperatureButton temperatureUnit="celsius" />
          <TemperatureButton temperatureUnit="fahrenheit" />
        </div>
      </main>
      <p>{weatherInformation(weathercode[id])}</p>
    </section>
  );
};

export default CurrentWeather;

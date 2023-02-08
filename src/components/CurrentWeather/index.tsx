import { IHourly } from "../../types/weather";
import WeatherIcon from "../WeatherIcon";
import styles from "./currentWeather.module.css";

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
        <p className={styles.minimum}>{temperature_2m[id].toFixed()}&#176;</p>
      </main>
    </section>
  );
};

export default CurrentWeather;

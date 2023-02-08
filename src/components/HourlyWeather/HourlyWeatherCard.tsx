import { IHourly } from "../../types/weather";
import WeatherIcon from "../WeatherIcon";
import styles from "../card.module.css";

type HourlyWeatherCardProps = {
  data: IHourly;
  id: number;
};

const HourlyWeatherCard = ({ data, id }: HourlyWeatherCardProps) => {
  const { temperature_2m, time, weathercode } = data;

  const dateTime = new Date(time[id]);
  const dayTime = dateTime.toLocaleString("hu-HU", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <article className={styles.card}>
      <header>{dayTime}</header>
      <main>
        <WeatherIcon weatherCode={weathercode[id]} timeOfDay="Day" />
      </main>
      <footer>
        <p className={styles.minimum}>{temperature_2m[id].toFixed()}&#176;</p>
      </footer>
    </article>
  );
};

export default HourlyWeatherCard;

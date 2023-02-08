import { IDaily } from "../../types/weather";
import WeatherIcon from "../WeatherIcon";
import styles from "../card.module.css";

type DailyWeatherCardProps = {
  data: IDaily;
  id: number;
};

const DailyWeatherCard = ({ data, id }: DailyWeatherCardProps) => {
  const { time, weathercode, temperature_2m_max, temperature_2m_min } = data;

  const dateTime = new Date(time[id]);
  const dayName = new Intl.DateTimeFormat("en-US", { weekday: "short" }).format(
    dateTime
  );
  const dayDate = dateTime.getDate();

  return (
    <article className={styles.card}>
      <header>
        {dayName} {dayDate}
      </header>
      <main>
        <WeatherIcon weatherCode={weathercode[id]} timeOfDay="Day" />
      </main>
      <footer>
        <p className={styles.maximum}>
          {temperature_2m_max[id].toFixed()}&#176;
        </p>
        <p className={styles.minimum}>
          {temperature_2m_min[id].toFixed()}&#176;
        </p>
        {/* <p>{precipitation_sum[id]}</p> */}
      </footer>
    </article>
  );
};

export default DailyWeatherCard;

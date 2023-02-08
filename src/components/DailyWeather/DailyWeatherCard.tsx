import { IDaily } from "../../types/weather";
import WeatherIcon from "../WeatherIcon";
import styles from "../card.module.css";
import { WeatherContext } from "../../lib/context";
import { useContext } from "react";

type DailyWeatherCardProps = {
  data: IDaily;
  id: number;
};

const DailyWeatherCard = ({ data, id }: DailyWeatherCardProps) => {
  const { daytime, setDayTime, setSelectedDay } = useContext(WeatherContext);
  const {
    time,
    weathercode,
    sunrise,
    sunset,
    temperature_2m_max,
    temperature_2m_min,
  } = data;

  const dateTime = new Date(time[id]);
  const dayName = new Intl.DateTimeFormat("en-US", { weekday: "short" }).format(
    dateTime
  );
  const dayDate = dateTime.getDate();

  return (
    <article
      className={styles.dailyCard}
      onClick={() => {
        setDayTime({ sunrise: sunrise[id], sunset: sunset[id] });
        setSelectedDay(id);
      }}
    >
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

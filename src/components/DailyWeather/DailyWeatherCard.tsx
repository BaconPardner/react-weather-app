import { useContext } from "react";

import { WeatherContext } from "../../lib/context";
import weatherInformation from "../../lib/weatherInformation";
import { IDaily } from "../../types/weather";
import styles from "../card.module.css";
import WeatherIcon from "../WeatherIcon";

type DailyWeatherCardProps = {
  data: IDaily;
  id: number;
};

const DailyWeatherCard = ({ data, id }: DailyWeatherCardProps) => {
  const { setSelectedDay } = useContext(WeatherContext);
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
        setSelectedDay({
          dayOfTheWeek: id,
          sunrise: sunrise[id],
          sunset: sunset[id],
        });
      }}
    >
      <header>
        {dayName} {dayDate}
      </header>
      <main>
        <WeatherIcon weatherCode={weathercode[id]} timeOfDay="Day" />
      </main>
      <div className={styles.temperature}>
        <p className={styles.maximum}>
          {temperature_2m_max[id].toFixed().replace("-0", "0")}&#176;
        </p>
        <p className={styles.minimum}>
          {temperature_2m_min[id].toFixed().replace("-0", "0")}&#176;
        </p>
      </div>
      <p className={styles.weatherInfo}>
        {weatherInformation(weathercode[id])}
      </p>
    </article>
  );
};

export default DailyWeatherCard;

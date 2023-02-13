import { useContext } from "react";

import { WeatherContext } from "../../lib/context";
import weatherInformation from "../../lib/weatherInformation";
import { IHourly } from "../../types/weather";
import styles from "../card.module.css";
import WeatherIcon from "../WeatherIcon";

type HourlyWeatherCardProps = {
  data: IHourly;
  id: number;
};

const HourlyWeatherCard = ({ data, id }: HourlyWeatherCardProps) => {
  const { temperature_2m, time, weathercode } = data;

  const { selectedDay } = useContext(WeatherContext);

  const dateTime = new Date(time[id]);
  const parsedTime = dateTime.toLocaleString("hu-HU", {
    hour: "2-digit",
    minute: "2-digit",
  });

  const currentWeatherHour = dateTime.getHours();
  const sunrise = new Date(selectedDay.sunrise).getHours();
  const sunset = new Date(selectedDay.sunset).getHours();

  const timeOfDay = () => {
    if (currentWeatherHour > sunrise && currentWeatherHour < sunset)
      return "Day";

    return "Night";
  };

  return (
    <article className={styles.hourlyCard}>
      <header>{parsedTime}</header>
      <main>
        <WeatherIcon weatherCode={weathercode[id]} timeOfDay={timeOfDay()} />
      </main>
      <div className={styles.temperature}>
        <p>{temperature_2m[id]}&#176;</p>
      </div>
      <p className={styles.weatherInfo}>
        {weatherInformation(weathercode[id])}
      </p>
    </article>
  );
};

export default HourlyWeatherCard;

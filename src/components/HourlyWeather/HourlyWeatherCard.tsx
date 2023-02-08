import { IHourly } from "../../types/weather";
import WeatherIcon from "../WeatherIcon";
import styles from "../card.module.css";
import { useContext } from "react";
import { WeatherContext } from "../../lib/context";

type HourlyWeatherCardProps = {
  data: IHourly;
  id: number;
};

const HourlyWeatherCard = ({ data, id }: HourlyWeatherCardProps) => {
  const { temperature_2m, time, weathercode } = data;

  const { daytime } = useContext(WeatherContext);

  const dateTime = new Date(time[id]);
  const parsedTime = dateTime.toLocaleString("hu-HU", {
    hour: "2-digit",
    minute: "2-digit",
  });

  const currentHour = dateTime.getHours();
  const sunrise = new Date(daytime.sunrise).getHours();
  const sunset = new Date(daytime.sunset).getHours();

  const timeOfDay = () => {
    if (currentHour > sunrise && currentHour < sunset) return "Day";

    return "Night";
  };

  return (
    <article className={styles.card}>
      <header>{parsedTime}</header>
      <main>
        <WeatherIcon weatherCode={weathercode[id]} timeOfDay={timeOfDay()} />
      </main>
      <footer>
        <p className={styles.minimum}>{temperature_2m[id].toFixed()}&#176;</p>
      </footer>
    </article>
  );
};

export default HourlyWeatherCard;

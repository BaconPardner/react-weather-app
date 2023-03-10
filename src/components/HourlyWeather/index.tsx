import { useContext } from "react";

import HourlyWeatherCard from "./HourlyWeatherCard";
import { WeatherContext } from "../../lib/context";
import { IHourly } from "../../types/weather";
import styles from "../card.module.css";

type HourlyWeatherProps = {
  data: IHourly;
};

const HourlyWeather = ({ data }: HourlyWeatherProps) => {
  const { selectedDay } = useContext(WeatherContext);
  const { dayOfTheWeek } = selectedDay;

  const time = new Date(Date.now()).getHours();

  return (
    <>
      <h2 className={styles.cardsHeading}>Hourly</h2>
      <section className={styles.cardSection}>
        <div className={styles.hourlyCards}>
          {[
            ...Array(dayOfTheWeek >= 1 ? 24 * (dayOfTheWeek + 1) : 24 + time),
          ].map(
            (n, idx) =>
              idx >= (dayOfTheWeek >= 1 ? 24 * dayOfTheWeek : time) && (
                <HourlyWeatherCard data={data} id={idx} key={idx} />
              )
          )}
        </div>
      </section>
    </>
  );
};

export default HourlyWeather;

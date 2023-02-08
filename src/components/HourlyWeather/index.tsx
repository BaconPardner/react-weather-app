import { useContext } from "react";
import { WeatherContext } from "../../lib/context";
import { IHourly } from "../../types/weather";
import styles from "../card.module.css";
import HourlyWeatherCard from "./HourlyWeatherCard";

type HourlyWeatherProps = {
  data: IHourly;
};

const HourlyWeather = ({ data }: HourlyWeatherProps) => {
  const { selectedDay } = useContext(WeatherContext);

  const time = new Date(Date.now()).getHours();

  return (
    <>
      <h2 className={styles.cardsHeading}>Hourly</h2>
      <section className={styles.cardSection}>
        <div className={styles.hourlyCards}>
          {[
            ...Array(selectedDay >= 1 ? 24 * (selectedDay + 1) : 24 + time),
          ].map(
            (n, idx) =>
              idx >= (selectedDay >= 1 ? 24 * selectedDay : time) && (
                <HourlyWeatherCard data={data} id={idx} key={idx} />
              )
          )}
        </div>
      </section>
    </>
  );
};

export default HourlyWeather;

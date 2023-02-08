import { IHourly } from "../../types/weather";
import styles from "../card.module.css";
import HourlyWeatherCard from "./HourlyWeatherCard";

type HourlyWeatherProps = {
  data: IHourly;
};

const HourlyWeather = ({ data }: HourlyWeatherProps) => {
  return (
    <>
      <h2 className={styles.cardsHeading}>Hourly</h2>
      <section className={styles.cardSection}>
        <div className={styles.hourlyCards}>
          {[...Array(24)].map((n, idx) => (
            <HourlyWeatherCard data={data} id={idx} key={idx} />
          ))}
        </div>
      </section>
    </>
  );
};

export default HourlyWeather;

import { IHourly } from "../../types/weather";
import styles from "../card.module.css";
import HourlyWeatherCard from "./HourlyWeatherCard";

type HourlyWeatherProps = {
  data: IHourly;
};

const HourlyWeather = ({ data }: HourlyWeatherProps) => {
  return (
    <section className={styles.cardSection}>
      <h1>Hourly</h1>
      <div className={styles.cardRow}>
        {[...Array(24)].map((n, idx) => (
          <HourlyWeatherCard data={data} id={idx} key={idx} />
        ))}
      </div>
    </section>
  );
};

export default HourlyWeather;

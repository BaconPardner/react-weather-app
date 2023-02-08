import { IDaily } from "../../types/weather";
import styles from "../card.module.css";
import DailyWeatherCard from "./DailyWeatherCard";

type DailyWeatherProps = {
  data: IDaily;
};

const DailyWeather = ({ data }: DailyWeatherProps) => {
  return (
    <section className={styles.cardSection}>
      <h1>Daily</h1>
      <div className={styles.cardRow}>
        {data.weathercode.map((temp, idx) => (
          <DailyWeatherCard data={data} id={idx} key={idx} />
        ))}
      </div>
    </section>
  );
};

export default DailyWeather;

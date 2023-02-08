import { IDaily } from "../../types/weather";
import styles from "../card.module.css";
import DailyWeatherCard from "./DailyWeatherCard";

type DailyWeatherProps = {
  data: IDaily;
};

const DailyWeather = ({ data }: DailyWeatherProps) => {
  return (
    <>
      <h2 className={styles.cardsHeading}>Daily</h2>
      <section className={styles.dailyCards}>
        <div className={styles.cardRow}>
          {data.weathercode.map((temp, idx) => (
            <DailyWeatherCard data={data} id={idx} key={idx} />
          ))}
        </div>
      </section>
    </>
  );
};

export default DailyWeather;

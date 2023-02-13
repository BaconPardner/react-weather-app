import { useContext } from "react";

import Spinner from "assets/spinner.svg";

import IndexPointingFinger from "./IndexPointingFinger";
import useWeatherData from "./useWeatherData";
import styles from "./weather.module.css";
import { WeatherContext } from "../../lib/context";
import CurrentWeather from "../CurrentWeather";
import DailyWeather from "../DailyWeather";
import HourlyWeather from "../HourlyWeather";

const Weather = () => {
  const { temperatureUnit, cityData } = useContext(WeatherContext);

  const { isLoading, error, data } = useWeatherData(temperatureUnit, cityData);

  if (!cityData.name)
    return (
      <div className={styles.container}>
        <div className={styles.info}>
          <IndexPointingFinger />
          <h1 className={styles.infoHeading}>Search for a city</h1>
        </div>
      </div>
    );

  if (isLoading)
    return (
      <div className={styles.container}>
        <div className={styles.centered}>
          <Spinner />
        </div>
      </div>
    );

  if (!data)
    return (
      <div className={styles.container}>
        <div className={styles.centered}>
          <h1>No Data</h1>
        </div>
      </div>
    );

  if (error)
    return (
      <div>
        <p>An error has occurred</p>
        <span>{JSON.stringify(error)}</span>
      </div>
    );

  return (
    <div className={styles.container}>
      <CurrentWeather data={data.hourly} />
      <DailyWeather data={data.daily} />
      <HourlyWeather data={data.hourly} />
      <footer>
        <div>
          <p>Weather icons by </p>
          <a
            className={styles.weatherIcons}
            href="https://bas.dev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Bas Milius
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Weather;

import { useContext } from "react";
import { WeatherContext } from "../../lib/context";
import CurrentWeather from "../CurrentWeather";
import DailyWeather from "../DailyWeather";
import HourlyWeather from "../HourlyWeather";
import useWeatherData from "./useWeatherData";
import styles from "./weather.module.css";

const Weather = () => {
  const { temperatureUnit, cityData } = useContext(WeatherContext);

  const { isLoading, error, data } = useWeatherData(temperatureUnit, cityData);
  if (!cityData.name) return <div>Search for a city</div>;

  if (isLoading) return <div>Loading...</div>;
  if (!data) return <div>No data</div>;

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

import CurrentWeather from "../CurrentWeather";
import DailyWeather from "../DailyWeather";
import HourlyWeather from "../HourlyWeather";
import useWeatherData from "./useWeatherData";
import styles from "./weather.module.css";

const Weather = () => {
  const { isLoading, error, data } = useWeatherData();

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
      <h1>Weather App</h1>
      <CurrentWeather />
      <DailyWeather data={data.daily} />
      <HourlyWeather data={data.hourly} />
      <footer>
        <p>
          Weather icons by{" "}
          <a href="https://bas.dev/" target="_blank" rel="noopener noreferrer">
            Bas Milius
          </a>
        </p>
      </footer>
    </div>
  );
};

export default Weather;

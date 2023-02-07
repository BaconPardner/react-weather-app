import CurrentWeather from "../currentWeather";
import Card from "../card";
import useWeatherData from "./useWeatherData";
import "./weather.modules.css";

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
    <>
      <h1>Weather App</h1>
      <CurrentWeather />
      <section className="card-row">
        {data.hourly.precipitation.map((temp, idx) => (
          <Card hourlyData={data.hourly} id={idx} key={idx} />
        ))}
      </section>
      <footer>
        Weather icons by{" "}
        <a href="https://bas.dev/" target="_blank" rel="noopener noreferrer">
          Bas Milius
        </a>
      </footer>
    </>
  );
};

export default Weather;

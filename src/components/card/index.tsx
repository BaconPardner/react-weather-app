import { IHourly } from "../../types/weather";
import "./card.modules.css";
import WeatherIcon from "./WeatherIcon";

type CardProps = {
  hourlyData: IHourly;
  id: number;
};

const Card = ({ hourlyData, id }: CardProps) => {
  const { precipitation, temperature_2m, time, weathercode } = hourlyData;

  return (
    <article className="card">
      <p>{time[id]}</p>
      <WeatherIcon weatherCode={weathercode[id]} timeOfDay="Day" />
      <p>{precipitation[id]}</p>
      <p>{temperature_2m[id]}</p>
    </article>
  );
};

export default Card;

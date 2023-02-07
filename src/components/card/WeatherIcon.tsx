import ClearDay from "@weather-icons/clear-day.svg";
import ClearNight from "@weather-icons/clear-night.svg";
import Cloudy from "@weather-icons/cloudy.svg";
import Drizzle from "@weather-icons/drizzle.svg";
import Fog from "@weather-icons/fog.svg";
import Hail from "@weather-icons/hail.svg";
import PartlyCloudyDayRain from "@weather-icons/partly-cloudy-day-rain.svg";
import PartlyCloudyDay from "@weather-icons/partly-cloudy-day.svg";
import PartlyCloudyNightRain from "@weather-icons/partly-cloudy-night-rain.svg";
import PartlyCloudyNight from "@weather-icons/partly-cloudy-night.svg";
import Rain from "@weather-icons/rain.svg";
import Sleet from "@weather-icons/sleet.svg";
import Snow from "@weather-icons/snow.svg";
import Thunderstorm from "@weather-icons/thunderstorm.svg";

type IconsProps = {
  weatherCode: number;
  timeOfDay: "Day" | "Night";
};

const WeatherIcon = ({ weatherCode, timeOfDay }: IconsProps) => {
  if (timeOfDay === "Day")
    for (const item of DayWeatherIcons)
      if (item.key === weatherCode) return item.value;

  for (const item of NightWeatherIcons)
    if (item.key === weatherCode) return item.value;

  return <div>No icon</div>;
};

const DayWeatherIcons = [
  { key: 0, value: <ClearDay /> },

  { key: 1, value: <PartlyCloudyDay /> },
  { key: 2, value: <PartlyCloudyDay /> },
  { key: 3, value: <Cloudy /> },

  { key: 45, value: <Fog /> },
  { key: 48, value: <Fog /> },

  { key: 51, value: <Drizzle /> },
  { key: 53, value: <Drizzle /> },
  { key: 55, value: <Drizzle /> },

  { key: 56, value: <Drizzle /> },
  { key: 57, value: <Drizzle /> },

  { key: 61, value: <Rain /> },
  { key: 63, value: <Rain /> },
  { key: 65, value: <Rain /> },

  { key: 66, value: <Sleet /> },
  { key: 67, value: <Sleet /> },

  { key: 71, value: <Snow /> },
  { key: 73, value: <Snow /> },
  { key: 75, value: <Snow /> },

  { key: 77, value: <Snow /> },

  { key: 80, value: <PartlyCloudyDayRain /> },
  { key: 81, value: <PartlyCloudyDayRain /> },
  { key: 82, value: <PartlyCloudyDayRain /> },

  { key: 85, value: <Snow /> },
  { key: 86, value: <Snow /> },

  { key: 95, value: <Hail /> },

  { key: 96, value: <Thunderstorm /> },
  { key: 97, value: <Thunderstorm /> },
];

const NightWeatherIcons = [
  { key: 0, value: <ClearNight /> },

  { key: 1, value: <PartlyCloudyNight /> },
  { key: 2, value: <PartlyCloudyNight /> },
  { key: 3, value: <Cloudy /> },

  { key: 45, value: <Fog /> },
  { key: 48, value: <Fog /> },

  { key: 51, value: <Drizzle /> },
  { key: 53, value: <Drizzle /> },
  { key: 55, value: <Drizzle /> },

  { key: 56, value: <Drizzle /> },
  { key: 57, value: <Drizzle /> },

  { key: 61, value: <Rain /> },
  { key: 63, value: <Rain /> },
  { key: 65, value: <Rain /> },

  { key: 66, value: <Sleet /> },
  { key: 67, value: <Sleet /> },

  { key: 71, value: <Snow /> },
  { key: 73, value: <Snow /> },
  { key: 75, value: <Snow /> },

  { key: 77, value: <Snow /> },

  { key: 80, value: <PartlyCloudyNightRain /> },
  { key: 81, value: <PartlyCloudyNightRain /> },
  { key: 82, value: <PartlyCloudyNightRain /> },

  { key: 85, value: <Snow /> },
  { key: 86, value: <Snow /> },

  { key: 95, value: <Hail /> },

  { key: 96, value: <Thunderstorm /> },
  { key: 97, value: <Thunderstorm /> },
];

export default WeatherIcon;

const WMOCodes = [
  { key: 0, value: "Clear sky" },

  { key: 1, value: "Partly cloudy" },
  { key: 2, value: "Cloudy" },
  { key: 3, value: "Overcast" },

  { key: 45, value: "Fog" },
  { key: 48, value: "Rime fog" },

  { key: 51, value: "Light drizzle" },
  { key: 53, value: "Drizzle" },
  { key: 55, value: "Heavy drizzle" },

  { key: 56, value: "Freezing drizzle" },
  { key: 57, value: "Freezing heavy drizzle" },

  { key: 61, value: "Light rain" },
  { key: 63, value: "Rain" },
  { key: 65, value: "Heavy rain" },

  { key: 66, value: "Freezing rain" },
  { key: 67, value: "Freezing heavy rain" },

  { key: 71, value: "Light snow" },
  { key: 73, value: "Snow" },
  { key: 75, value: "Heavy snow" },

  { key: 77, value: "Snow grains" },

  { key: 80, value: "Light rain showers" },
  { key: 81, value: "Rain showers" },
  { key: 82, value: "Heavy rain showers" },

  { key: 85, value: "Snow showers" },
  { key: 86, value: "Heavy snow showers" },

  { key: 95, value: "Thunderstorm" },

  { key: 96, value: "Hail" },
  { key: 99, value: "Heavy hail" },
];

const weatherInformation = (weatherCode: number) => {
  for (const { key, value } of WMOCodes) {
    if (key === weatherCode) return value;
  }

  return "N/A";
};

export default weatherInformation;

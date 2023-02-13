import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Navbar from "./components/Navbar";
import Weather from "./components/Weather";
import "./global.css";
import { WeatherContext } from "./lib/context";
import useForecast from "./lib/useForecast";

const App = () => {
  const queryClient = new QueryClient();
  const providerValue = useForecast();

  return (
    <WeatherContext.Provider value={providerValue}>
      <QueryClientProvider client={queryClient}>
        <Navbar />
        <Weather />
        <footer id="credit">
          <p>Weather icons by </p>
          <a
            // className={styles.weatherIcons}
            href="https://bas.dev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Bas Milius
          </a>
        </footer>
      </QueryClientProvider>
    </WeatherContext.Provider>
  );
};

export default App;

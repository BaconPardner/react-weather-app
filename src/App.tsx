import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
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
        <Weather />
      </QueryClientProvider>
    </WeatherContext.Provider>
  );
};

export default App;

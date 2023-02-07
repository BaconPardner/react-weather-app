import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Weather from "./components/Weather";
import "./global.css";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Weather />
    </QueryClientProvider>
  );
};

export default App;

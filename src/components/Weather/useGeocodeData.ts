import { useQuery } from "@tanstack/react-query";

import { IGeocode } from "../../types/geocode";

const useGeocodeData = (name: string) => {
  const GEOCODING_API = `https://geocoding-api.open-meteo.com/v1/search?name=${name}`;

  return useQuery(["geocode-query", name], async () => {
    const res = await fetch(GEOCODING_API);
    const data = (await res.json()) as IGeocode;

    return data;
  });
};

export default useGeocodeData;

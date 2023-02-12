import { useContext, useState } from "react";
import { Combobox } from "@headlessui/react";
import { WeatherContext } from "../../lib/context";
import useGeocodeData from "../Weather/useGeocodeData";
import styles from "./navbar.module.css";
import SearchIcon from "./SearchIcon";

const index = () => {
  const { cityData, setCityData } = useContext(WeatherContext);
  const [query, setQuery] = useState("");
  const { isLoading, data } = useGeocodeData(query);

  return (
    <nav className={styles.navbar}>
      <div className={styles.searchBar}>
        <Combobox value={cityData} onChange={setCityData}>
          <div className={styles.wrapper}>
            <div className={styles.searchInput}>
              <SearchIcon />
              <Combobox.Input
                onChange={(e) => setQuery(e.target.value)}
                value={query}
              />
            </div>
            {query.length > 2 && (
              <Combobox.Options className={styles.results}>
                {(!data || !data.results) && (
                  <Combobox.Option className={styles.rowDefault} value={{}}>
                    No result for &quot;<strong>{query}</strong>&quot;
                  </Combobox.Option>
                )}
                {isLoading && (
                  <Combobox.Option className={styles.rowDefault} value={{}}>
                    Loading
                  </Combobox.Option>
                )}
                {data &&
                  data.results &&
                  data.results.map(
                    ({
                      id,
                      name,
                      admin1,
                      country_code,
                      latitude,
                      longitude,
                    }) => (
                      <Combobox.Option
                        key={id}
                        value={{ id, name, admin1, latitude, longitude }}
                      >
                        {({ active }) => (
                          <div
                            className={active ? styles.rowSelected : styles.row}
                          >
                            <p className={styles.countryCode}>
                              {country_code && country_code}
                            </p>
                            <p className={styles.city}>
                              {name}
                              {admin1 && <>, {admin1}</>}
                            </p>
                          </div>
                        )}
                      </Combobox.Option>
                    )
                  )}
              </Combobox.Options>
            )}
          </div>
        </Combobox>
      </div>
    </nav>
  );
};
export default index;

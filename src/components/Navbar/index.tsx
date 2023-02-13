import { useContext, useState } from "react";
import { Combobox } from "@headlessui/react";
import { WeatherContext } from "../../lib/context";
import styles from "./navbar.module.css";
import SearchIcon from "./SearchIcon";
import Results from "./Results";

const index = () => {
  const { cityData, setCityData } = useContext(WeatherContext);

  const initialQuery = cityData.name ? cityData.name : "";
  const [query, setQuery] = useState(initialQuery);

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

            <Combobox.Options className={styles.results}>
              <Results query={query} />
            </Combobox.Options>
          </div>
        </Combobox>
      </div>
    </nav>
  );
};
export default index;

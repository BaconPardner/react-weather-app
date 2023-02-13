import { Combobox } from "@headlessui/react";
import useGeocodeData from "../Weather/useGeocodeData";
import styles from "./navbar.module.css";

type ResultsProps = {
  query: string;
};

const Results = ({ query }: ResultsProps) => {
  const { isLoading, data } = useGeocodeData(query);

  if (query.length < 2)
    return (
      <Combobox.Option className={styles.rowDefault} value={{}}>
        Minimum word length is 2
      </Combobox.Option>
    );

  if (!data || !data.results)
    return (
      <Combobox.Option className={styles.rowDefault} value={{}}>
        No result for &quot;<strong>{query}</strong>&quot;
      </Combobox.Option>
    );

  if (isLoading)
    return (
      <Combobox.Option className={styles.rowDefault} value={{}}>
        Loading
      </Combobox.Option>
    );

  return (
    <>
      {data &&
        data.results &&
        data.results.map(
          ({ id, name, admin1, country_code, latitude, longitude }) => (
            <Combobox.Option
              key={id}
              value={{ id, name, admin1, latitude, longitude }}
            >
              {({ active }) => (
                <div className={active ? styles.rowSelected : styles.row}>
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
    </>
  );
};

export default Results;

import { useState, useEffect } from "react";

const useFetch = (url, cacheTime = 300000) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const cachedData = localStorage.getItem(url);
    const cacheExpiry = localStorage.getItem(`${url}:expiry`);

    if (cachedData && cacheExpiry && Date.now() < cacheExpiry) {
      setData(JSON.parse(cachedData));
      setIsLoading(false);
    } else {
      fetch(url)
        .then((response) => {
          if (!response.ok) {
            throw Error(
              "Désolé, une erreur est survenue pendant le chargement ..."
            );
          }
          return response.json();
        })
        .then((data) => {
          setData(data);
          setIsLoading(false);
          setError(null);
          localStorage.setItem(url, JSON.stringify(data));
          localStorage.setItem(
            `${url}:expiry`,
            Date.now() + cacheTime
          );
        })
        .catch((err) => {
          console.log(err.message);
          setError(err.message);
          setIsLoading(false);
        });
    }
  }, [url, cacheTime]);

  return { data, isLoading, error };
};

export default useFetch;


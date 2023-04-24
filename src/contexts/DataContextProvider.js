import React, { useState, useEffect } from "react";
import DataContext from "./DataContext";
import useFetch from "./useFetch"; // import du hook personnalisé

const DataContextProvider = ({ children }) => {
  const [data, setData] = useState({});

  // utilisation du hook useFetch
  const { loading, error, result } = useFetch("https://raw.githubusercontent.com/Nanosor57GIT-HUB/my-portfolio/main/public/myportfolioInline.json");

  useEffect(() => {
    if (!loading && !error) {
      setData(result);
    }
  }, [loading, error, result]);

  return (
    // Fournisseur (provider) qui fournit les données via le contexte
    <DataContext.Provider value={data}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContextProvider;



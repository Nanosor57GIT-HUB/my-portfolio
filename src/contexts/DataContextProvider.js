import React, { useState, useEffect } from "react";
import DataContext from "./DataContext";

const DataContextProvider = ({ children }) => {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://raw.githubusercontent.com/Nanosor57GIT-HUB/my-portfolio/main/public/myportfolioInline.json`);
      const data = await response.json();
      setData(data);
    };
    fetchData();
  }, []);

  return (
    // Fournisseur (provider) qui fournit les données via le contexte
    <DataContext.Provider value={data}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContextProvider;

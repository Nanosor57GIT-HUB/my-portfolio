import "./App.css";
import "./main.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Accueil from "./pages/Accueil";




//import DataContextProvider from "./contexts/DataContextProvider";

function App() {
  return (
    <div className="App">
      {/* <DataContextProvider> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Accueil />} />
        </Routes>
      </BrowserRouter>
      {/* </DataContextProvider> */}
    </div>
  );
}

export default App;

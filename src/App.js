import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Accueil from "./pages/Accueil";
import AOS from "aos";

AOS.init({
  animatedClassName: "animated",
  duration: 400,
  easing: "linear",
  anchor: "#CurriculumVitae",
  anchorPlacement: "top-center",
});

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

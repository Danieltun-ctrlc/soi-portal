import "./App.css";
import HOME from "./components/home.js";
import DIP from "./components/diplomas.js";
import DIPO from "./components/diploma.js";
import MO from "./components/module.js";
import FavPage from "./components/favorite.js";
import Register from "./components/register.js";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  let [fav, setFav] = useState(["DTECH"]);
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<HOME />} />
        <Route path="/diplomas" element={<DIP />}>
          <Route
            path=":diplomaId"
            element={<DIPO fav={fav} setting={setFav} />}
          >
            <Route path=":moduleId" element={<MO />} />
          </Route>
        </Route>
        <Route path="/fav" element={<FavPage fav={fav} setting={setFav} />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;

import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import PokeInfoCard from "./components/pokedex/PokeInfoCard";
import "./App.css";
import HomeScreen from "./components/home/HomeScreen";
import Home from "./components/home/Home";
import PokedexScreen from "./components/pokedex/PokedexScreen";
import ProtectedRoutes from "./components/ProtectedRoutes";
function App() {
  console.log("hola");
  const [isLogged, setIsLogged] = useState(false);

  return (
    <div className="App">
      <Home />

      <div className="content">
        <Routes>
          <Route path="/" element={<HomeScreen setIsLogged={setIsLogged} />} />

          <Route element={<ProtectedRoutes isLogged={isLogged} />}>
            <Route path="/pokedex" element={<PokedexScreen />} />
            <Route path="/pokedex/:id" element={<PokeInfoCard />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;

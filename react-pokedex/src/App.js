import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

import "./App.css";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Contact from "./pages/Contact";

const App = () => {
  const [pokemonArray, setPokemonArray] = useState([]);

  const getPokemonArray = async () => {
    const arr = [];

    for (let id = 1; id <= 151; id++) {
      arr.push(await getPokemon(`pokemon/${id}`));
    }
    setPokemonArray(arr);
  };

  const getPokemon = async (endpoint) => {
    const req = axios.get(`https://pokeapi.co/api/v2/${endpoint}`);
    let res = await req;
    return res.data;
  };

  useEffect(() => {
    getPokemonArray();
  }, []);

  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <Home pokemonDataArray={pokemonArray} />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;

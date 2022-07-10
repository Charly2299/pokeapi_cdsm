import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import PokeCard from "./PokeCard";

import Form from "./Form";
const PokedexScreen = () => {
  const nameUser = useSelector((state) => state.nameUser);

  const [pokemons, setPokemons] = useState();
  const [pokeSearch, setPokeSearch] = useState();
  const [filterPokemon, setFilterPokemon] = useState();
  const [typeList, setTypeList] = useState();
  const [filterType, setFilterType] = useState("All Pokemons");

  useEffect(() => {
    if (filterType === "All Pokemons") {
      const URL_POKEMONS =
        "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1174";
      axios
        .get(URL_POKEMONS)
        .then((res) => setPokemons(res.data.results))
        .catch((err) => console.log(err));
    } else {
      const URL = `https://pokeapi.co/api/v2/type/${filterType}`;
      axios
        .get(URL)
        .then((res) => {
          const array = res.data.pokemon.map((e) => e.pokemon);
          setPokemons(array);
        })
        .catch((err) => console.log(err));
    }
  }, [filterType]);

  useEffect(() => {
    const URL_LIST = "https://pokeapi.co/api/v2/type/";
    axios
      .get(URL_LIST)
      .then((res) => setTypeList(res.data.results))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    setFilterPokemon(
      pokemons?.filter((e) => e.name.includes(pokeSearch.toLowerCase()))
    );
  }, [pokeSearch]);

  return (
    <div className="pokedex-screen__container">
     
     <div className="pokedex-sc-tittle">
      <h1>
        Hola {nameUser}, bienvenido a la pokedex, podras encontrar tu pokemon
      </h1>
      </div>
<div className="pokedex-sc-form">
      <Form
        setPokeSearch={setPokeSearch}
        typeList={typeList}
        setFilterType={setFilterType}
      />
      </div>
<div className="pokedex-sc-cards">
      {filterPokemon
        ? filterPokemon?.map((pokemon) => (
            <PokeCard key={pokemon.url} url={pokemon.url} />
          ))
        : pokemons?.map((pokemon) => (
            <PokeCard key={pokemon.url} url={pokemon.url} />
          ))}
          </div>
    </div>
  );
};

export default PokedexScreen;

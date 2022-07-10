import React from "react";
import { useForm } from "react-hook-form";
const Form = ({ setPokeSearch, typeList, setFilterType }) => {
  const changeInputText = (e) => {
    setPokeSearch(e.target.value);
  };

  const changeSelect = (e) => {
    setFilterType(e.target.value);
  };

  return (
    <form className="form-form__container">
      <input
        className="form-input"
        type="text"
        placeholder="Busca tu pokemon favorito"
        onChange={changeInputText}
      />

      <select onChange={changeSelect}>
        <option value="All pokemons">All pokemons</option>
        {typeList?.map((type) => (
          <option key={type.name} value={type.name}>
            {type.name}
          </option>
        ))}
      </select>
    </form>
  );
};

export default Form;

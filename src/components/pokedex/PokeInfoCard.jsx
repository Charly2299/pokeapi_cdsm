import React, { useEffect, useState } from "react";
import axios from "axios";
import { Navigate, useNavigate, useParams } from "react-router-dom";

const PokeInfoCard = () => {
  const [individualPokemon, setIndividualPokemon] = useState();

  const { id } = useParams();

  useEffect(() => {
    const URL = `https://pokeapi.co/api/v2/pokemon/${id}/`;
    axios
      .get(URL)
      .then((res) => setIndividualPokemon(res.data))
      .catch((err) => console.log(err));
  }, []);

  console.log(individualPokemon);
  const navigate = useNavigate();
  const backPage = () => {
    navigate("/pokedex");
  };


  return (
      
    <div className="pokeinfo__container">
      
      <div className={id&& 'pokeinfo-bt-back' }>
       
       <button onClick={backPage}>
        <i class="fa-solid fa-arrow-rotate-left"></i>
        </button>
        </div>
        <div className="pokeinfo-img">
      <img
        src={individualPokemon?.sprites.other["official-artwork"].front_default}
        alt=""
      />
      </div>
      <div className="pokeinfo-tittles">
      <h2>#{id}</h2>
      <h2>{individualPokemon?.name}</h2>
      </div>
      <p>Peso:{individualPokemon?.weight}</p>
      <p>Altura:{individualPokemon?.height}</p>

      <h3>Tipo</h3>
      <div className="pokeinfo-types">
      {individualPokemon?.types.map((type) => (
        <b
        key={`t${individualPokemon?.id}${type.type.name}`}> {type.type.name}
        </b>
      ))}
      </div>

      <h3>Habilidades</h3>
      <div className="pokeinfo-habilities">
      {individualPokemon?.abilities.map((hability) => (
        <strong
        key={`h${individualPokemon?.id}${hability.ability.name}`}> {hability.ability.name}
        </strong>
      ))}
      </div>
     

      <h3>Stats</h3>
      <div className="pokeinfo-stats">
      <p>HP:{individualPokemon?.stats[0].base_stat}/150</p>
      <progress max="150" value={individualPokemon?.stats[0].base_stat} />
      <p>Ataque:{individualPokemon?.stats[1].base_stat}/150</p>
      <progress max="150" value={individualPokemon?.stats[1].base_stat} />
      <p>Defensa:{individualPokemon?.stats[2].base_stat}/150</p>
      <progress max="150" value={individualPokemon?.stats[2].base_stat} />
      <p>HP:{individualPokemon?.stats[5].base_stat}/150</p>
      <progress max="150" value={individualPokemon?.stats[5].base_stat} />
      </div>

      
        <h3>Movements</h3>
        <div className="pokeinfo-movements">
        {individualPokemon?.moves.map((moves) => (
          <p key={`m${individualPokemon?.id}${moves.move.name}`}>
            {moves.move.name}
          </p>
        ))}
        </div>
   
    </div>
  );
};

export default PokeInfoCard;

import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, Link,NavLink} from 'react-router-dom'

const PokeCard = ({url}) => {
    const [pokemon, setPokemon] = useState()
   

    const navigate = useNavigate()

useEffect(() => {
    
      axios.get(url)
      .then(res=>setPokemon(res.data))
      .catch(err=>console.log(err))
}, [])




const goToPokeInfoCard = ()=>{
navigate(`/pokedex/${pokemon?.id}`)
}

console.log(pokemon);


  return (
   <article 
   className='article__container'
   onClick={goToPokeInfoCard}>
     <div className='article-img'>
      <img 
      src={pokemon?.sprites.other['official-artwork'].front_default} 
      alt="" />
      </div>
      <div className='article-tittle'>
      <h2>{pokemon?.name}</h2>
      </div>

    <div className='article-types'>
     {
     /* {pokemon?.types[0].type.name} / */
     pokemon?.types.map(type=>(

 <strong 
 key={`t${pokemon?.id}${type.type.name}`}> {type.type.name}</strong>
   

 ))
 
     }
     </div>

<div className='article-stats'>
      <p>HP:{pokemon?.stats[0].base_stat}</p>
      <p>ATTACK:{pokemon?.stats[1].base_stat}</p>
      <p>DEFENSE:{pokemon?.stats[2].base_stat}</p>
      <p>SPEED:{pokemon?.stats[5].base_stat}</p>
      </div>
   </article>
 
  )
}

export default PokeCard
import React from 'react'
import InputHome from './InputHome'
import entrenador from '../../assets/img/entrenador.png'

const HomeScreen = ({setIsLogged}) => {


  return (
    <div className='home__container'>
        <div className='home__content'>
            <div className='home-tittles'>
        <h1>Pokedex</h1>
        <h2>Hola Entrenador!!</h2>
        </div>
        <div className='home-img'>
        <img src={entrenador} alt="" />
        </div>
        <div className='home-input'>
        <InputHome setIsLogged={setIsLogged}/>
        </div>
        </div>
    </div>
  )
}

export default HomeScreen
import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setNameGlobal } from '../../store/slices/nameUser.slice'
const InputHome = ({setIsLogged}) => {

    const { handleSubmit, reset, register } = useForm()

    const dispatch = useDispatch()

    const navigate = useNavigate()

    const submit = data => {
        
        console.log(data);
      
        dispatch(setNameGlobal(data.nameUser))
 if(data.nameUser!==''){
     setIsLogged(true)
 }
        reset({
            nameUser: ''
        })
        navigate('/pokedex')
    }

  
    return (
        <form className='form__home' onSubmit={handleSubmit(submit)}>
         
            <input 
            type="text"
                placeholder='Ingresa tu nombre de entrenador'
                {...register('nameUser')}
            />
            
           
            <button>Go!</button>
         
        </form>
    )
}

export default InputHome
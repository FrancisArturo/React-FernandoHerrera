import React from 'react'
import { useForm } from '../Hooks/useForm'

export const TodoAdd = ({onNewTodo}) => {

    const { formState, onInputChange, description, onResetForm} = useForm({
        description: "",
    });

    const onFormSubmit = (event) => {
        event.preventDefault();
        if (description.length <= 1) return;

        const newTodo = {
            id: new Date().getTime(),
            description,
            done: false,
        }
        onNewTodo(newTodo);
        onResetForm();
        // console.log(newTodo)
    }

  return (
    <form onSubmit={onFormSubmit}>
        <input type="text" placeholder='que hay que hacer' className='form-control' value={description} onChange={onInputChange} name='description'/>
        <button className='btn btn-primary mt-2' type='submit'>Agregar</button>
    </form>
  )
}


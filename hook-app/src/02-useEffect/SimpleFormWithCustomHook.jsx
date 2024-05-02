//import { useEffect, useState } from "react"
import { useForm } from "../Hooks/useForm";



export const SimpleFormWithCustomHook = () => {


    const { onResetForm, onInputChange, username, email, password } = useForm({
        username: "",
        email: "",
        password: "",
    });

    //const {username, email, password} = formState;

    
  return (
    <>
        <h2>Formulario simple con Custom Hook</h2>
        <hr />

        <input 
            type="text" 
            className="form-control" 
            placeholder="Username" 
            name="username" 
            value={username} 
            onChange={onInputChange}/>

        <input 
            type="email" 
            className="form-control mt-2" 
            placeholder="francis@gmail.com" 
            name="email" 
            value={email}
            onChange={onInputChange}/>
        <input 
            type="password" 
            className="form-control mt-2" 
            placeholder="password" 
            name="password" 
            value={password}
            onChange={onInputChange}/>
        
        <button className="btn btn-primary mt-2" onClick={onResetForm}>Borrar</button>
    </>
  )
}


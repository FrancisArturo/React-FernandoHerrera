import { useEffect, useState } from "react"
import { Message } from "./Message";



export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: "may",
        email: "francis@gmail.com"
    })

    const {username, email} = formState;

    const onInputChange = ({target}) => {
        const {name, value} = target;
        setFormState({
            ...formState,
            [name]: value
        })
    }

    useEffect(() => {
      console.log("form changed")
    }, [formState])
    
  return (
    <>
        <h2>Formulario simple</h2>
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
        
        {
            (username === "may2")&& <Message />
        }
    </>
  )
}


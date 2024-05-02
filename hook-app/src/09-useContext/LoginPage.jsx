import React from 'react'
import { useContext } from 'react'
import { UserContext } from './context/userContext'



export const LoginPage = () => {

  const { user, setUser} = useContext(UserContext);

  return (
    <>
      <h1>LoginPage</h1>
      <hr /> 

      <pre aria-label='preLogin'>
        { JSON.stringify( user, null, 3 ) }
      </pre>

      <button className='btn btn-primary' onClick={ () => setUser({ id: 123, name: "juan", email: "juan@gmail.com"})}>
        Establecer Usuario
      </button>
    </>
  )
}


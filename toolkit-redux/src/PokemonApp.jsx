import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { getPokemons } from './store/slices/pokemon/thunks';

export const PokemonApp = () => {

  const dispatch = useDispatch();

  

  useEffect(() => {
    dispatch( getPokemons());

  }, [])


  const { pokemons, isLoading, page } = useSelector( state => state.pokemons);


  return (
    <>
        <h1>PokemonApp</h1>
        <hr />
        
        {<span>Loading: {isLoading? "true": "false"}</span>}

        <ul>
            {
              pokemons.map( pokemon => (
                <li key={pokemon.name}>{pokemon.name}</li>
              ) )
            }
        </ul>
        <button onClick={() => dispatch( getPokemons( page ))} disabled={isLoading}>Next</button>
    </>
  )
}

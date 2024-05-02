import { useFetch } from "../Hooks/useFetch";
import { useCounter } from "../Hooks/useCounter";
import Loadingmessage from "./Loadingmessage";
import PokemonCard from "./PokemonCard";




export const MultipleCustomHooks = () => {

    const { counter, decrement, increment} = useCounter()
    const {data, isLoading, hasError} = useFetch(`https://pokeapi.co/api/v2/pokemon/${counter}`);
    

  return (
    <>
        <h1>Pokémon hook</h1>   
        <hr />
        
        {
            (isLoading)? 
                (
                    <Loadingmessage />
                )
                : (
                    <PokemonCard  
                    name = {data.name} 
                    id = {data.id} 
                    // sprites={[
                    //     data.sprites.front_default,
                    //     data.sprites.front_shiny,
                    //     data.sprites.back_default,
                    //     data.sprites.back_shiny,
                    // ]}
                    />
                )
        }

        <br />
        <hr />
        <button className="btn btn-primary" onClick={() => counter > 1 ? decrement(1): null}>Anterior</button>
        <button className="btn btn-primary" onClick={() => increment(1)}>Siguiente</button>
        
        
        
    </>
    
  )
}


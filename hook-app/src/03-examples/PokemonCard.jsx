
import React, { useLayoutEffect, useRef } from 'react'
import { useState } from 'react';


export const PokemonCard = ({id, name, sprites = []}) => {

  const sectionRef = useRef();
  const [boxSize, setBoxSize] = useState({width: 0, height: 0})

  useLayoutEffect(() => {
    const {height, width} = (sectionRef.current.getBoundingClientRect());
    setBoxSize({height, width});
  }, [name])

  
  return (
    <>
        <section  ref={sectionRef}>
          {/* <h2 className='text-capitalize'>{id}  -  {name}</h2> */}
          <h2 className='text-capitalize'>
            {name}
          </h2>
          <h2 className='text-capitalize'>
            {id}
          </h2>
          <div>
            {
                sprites.map( sprite => (
                    <img src={sprite} alt={name} key={sprite}/>
                ))
                
            }
          </div>
        </section>
        <h4>{JSON.stringify(boxSize)}</h4>
    </>

    
  )
}

export default PokemonCard
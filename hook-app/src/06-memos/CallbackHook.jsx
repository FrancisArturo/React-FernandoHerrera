
import React, { useCallback, useState } from 'react'
import ShowIncrement from './ShowIncrement';
import { useEffect } from 'react';

const CallbackHook = () => {

    const [counter, setCounter] = useState(10);

    const incrementFather = useCallback(
      (value = 0) => {
        setCounter((c) => c + value);
      },
      [],
    )
    
    //otro uso
    useEffect(() => {
     incrementFather();
    }, [incrementFather])
    

  return (
    <>
        <h1>useCallback Hook : {counter}</h1>
        <hr />
        <ShowIncrement incrementFather={incrementFather}/>
    </>
  )
}

export default CallbackHook
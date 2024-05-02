import React from 'react'
import { memo } from 'react'

const ShowIncrement = memo(({incrementFather}) => {
    console.log("se volvió a dibujar")
  return (
    <button className='btn btn-primary' onClick={() => incrementFather(5)}>Incrementar</button>
  )
})

export default ShowIncrement
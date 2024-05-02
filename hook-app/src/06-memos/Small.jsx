import { memo } from 'react';

export const Small = memo(({value}) => {
    console.log("se volvio a dibujar");

  return (
    <small>{value}</small>
  )
})


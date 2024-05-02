
import PropTypes from "prop-types"
import { useState } from "react"


const CounterApp = ({value}) => {

    const [counter, setCounter] = useState(value);

    const incrementarValor = () => {
        setCounter(counter + 1);
    } 
    const decrementarValor = () => {
        setCounter(counter - 1);
    }
    const resetValor = () => {
        setCounter(value);
    }
  return (
    <>
        <h1>CounterApp</h1>
        <h2>{ counter }</h2>
        <button onClick={incrementarValor}>+1</button>
        <button onClick={decrementarValor}>-1</button>
        <button aria-label="btn-reset" onClick={resetValor}>Reset</button>
    </>
  )
}

CounterApp.propTypes = {
    value : PropTypes.number.isRequired
}
export default CounterApp
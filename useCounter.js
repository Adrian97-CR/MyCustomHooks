import React, {useState} from 'react'

const useCounter = (props=-1) => {
    const [counter,setCounter] = useState(props);
    const increment = () => {
        setCounter(counter + 1)
    };
    const decrement = () => {
        setCounter(counter - 1)
    }
    const reset = () => {
        setCounter(props);
    }
    return { counter, increment, decrement, reset}
}

useCounter.propTypes = {

}

export default useCounter

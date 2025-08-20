import  {useState} from 'react'

function useCounter(initial,value=1) {
   const [count, setCount] = useState(initial)
    const increment=() => {
        setCount(prev => prev + value)
    }
     const decrement=() => {
        setCount(prev => prev - value)
    }
     const reset=() => {
        setCount(0)
    }
    return {increment,decrement,reset,count}
}

export default useCounter

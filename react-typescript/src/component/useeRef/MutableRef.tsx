import React, { useEffect, useRef, useState } from 'react'

const MutableRef = () => {
    const [time, setTimer] = useState(0)
    const timerRef = useRef<number | null>(null)
    // const timerRef = useRef<number | undefined>(undefined)

    const stopTimer = () => {
        if (timerRef.current) {
            window.clearInterval(timerRef.current)
        }
        // window.clearInterval(timerRef.current) //change it to undefined or make a check inside useeffect
    }
    useEffect(() => {
        timerRef.current = window.setInterval(() => { //setIntervel returns a number as intervel id specify that while creating useRef
            setTimer(prev => prev + 1)
        }, 1000)
        return stopTimer
    }, [])
    return (
        <div>
            <div>{time}</div>
            <button onClick={stopTimer}>Stop timer</button>
        </div>
    )
}

export default MutableRef

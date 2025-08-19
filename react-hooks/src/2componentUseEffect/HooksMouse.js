import React, { useEffect, useState } from 'react'

function HooksMouse() {
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const logPosition = (e) => {
            console.log('mouse move')
            setX(e.clientX)
            setY(e.clientY)
        }
    useEffect(() => {
        console.log('updating')
        window.addEventListener('mousemove', logPosition )
        return () => {
            console.log('unmounting')
            window.removeEventListener('mousemove',logPosition)
        }
    }, [])

    return (
        <div>
            x - {x},
            y- {y}
        </div>
    )
}

export default HooksMouse

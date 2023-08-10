import { useState, useEffect } from 'react'
import './followMouse.css'

export function FollowMouse() {

    const [enable, setEnable] = useState(false)
    const [position, setPosition] = useState({ x: 0, y: 0 })

    useEffect(() => {
        const handleMove = (event) => {
            const { clientX, clientY } = event
            console.log({ clientX, clientY })
            setPosition({ x: clientX, y: clientY })
        }

        if (enable) {
            window.addEventListener('pointermove', handleMove)
        }

        return () => {
            window.removeEventListener('pointermove', handleMove)
        }
    }, [enable])

    return (
    <>
        <div className='mouse-over' 
            style={{
            transform:`translate(${position.x}px, ${position.y}px)`
            }}>
        </div>
        <button onClick={() => { setEnable(!enable) }}>
        {enable ? 'Desactivar' : 'Activar'} Efecto
        </button>
    </>
    )
}
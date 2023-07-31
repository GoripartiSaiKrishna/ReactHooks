import React, {useState, useEffect} from 'react'
// here window.innerWidth is our system window size
export default function Example4(){
    const [windowWidth, setwindowWidth] = useState(window.innerWidth)
   
    const handleResize = () => {
        setwindowWidth(window.innerWidth)
    }

    useEffect( () => {
        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return(
        <>
           <div>{windowWidth} </div>
        </>
    )
}

import React, {useState, useRef, useEffect} from "react";

function Example8(){
    const[name, setName] = useState('')
    const prevName = useRef('')

    useEffect( () => {
        prevName.current = name
    }, [name])

    

    return(
        <>
            <input value={name} onChange={e => setName(e.target.value)}></input>
            <div>My name is {name} and it used to be {prevName.current} </div>
        </>
    )
}

export default Example8;
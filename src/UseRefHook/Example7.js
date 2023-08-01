import React, {useState, useRef} from "react";

function Example7(){
    const[name, setName] = useState('')
    const inputRef = useRef()

    function focus(){
        inputRef.current.focus()
        inputRef.current.value = 'some value'
    }

    return(
        <>
            <input ref={inputRef} value={name} onChange={e => setName(e.target.value)}></input>
            <div>My name is {name}</div>
            <button onClick={focus} >Focus</button>
        </>
    )
}

export default Example7;
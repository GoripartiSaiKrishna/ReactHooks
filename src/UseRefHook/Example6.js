import React, {useState, useEffect, useRef} from "react";

// In this example i maintained the count of rendering
function Example6(){
    const[name, setName] = useState('')
    const renderCount = useRef(0)

    useEffect( () => {
        renderCount.current = renderCount.current + 1
    })

    return(
        <>
            <input value={name} onChange={e => setName(e.target.value)}></input>
            <div>My name is {name}</div>
            <div>I rendered {renderCount.current} times </div>
        </>
    )
}

export default Example6;

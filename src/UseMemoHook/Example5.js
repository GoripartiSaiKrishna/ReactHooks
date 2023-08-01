import React, {useState, useMemo, useEffect} from "react";

function Example5(){
    const[number, setNumber] = useState(0)
    const[dark, setDark] = useState(false)
    //const doubleNumber = slowFunction(number)
    //by using useMemo we are implementing slowFunction where there is change in value only
    // In useMemo Memo means memorization, we store this values in memory
    const doubleNumber = useMemo( () => {
        return slowFunction(number)
    }, [number])
    

    const themeStyles = useMemo(() => {
        return{
            backgroundColor: dark? 'black' : 'white',
            color: dark? 'white' : 'black'
        }
    }, [dark])
        
    useEffect(() => {
        console.log('Theme changed')
    }, [themeStyles])

    return(
        <>
            <input type="number" value={number} onChange={e => setNumber(parseInt(e.target.value))}/>
            <button onClick={() => setDark(prevDark => !prevDark)}>Change Theme</button>
            <div style={themeStyles}>{doubleNumber} </div>
        </>
    );
}

function slowFunction(num){
    console.log('calling slow function')
    for(let i = 0; i <= 1000; i++){}
    return num * 2
}

export default Example5

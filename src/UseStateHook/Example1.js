import React, {useState} from "react";

function countInitial(){
    console.log('run function')
    return 4
  }
  
  function Example1() {
    const[count, setCount] = useState(() => countInitial());
  
    function decrementCount(){
      setCount(prevCount => prevCount - 1)
    }
  
    function incrementCount(){
      setCount(prevCount => prevCount + 1)
    }
  
    return (
      <>
        <button onClick={decrementCount}>-</button>
        <span>{count}</span>
        <button onClick={incrementCount} >+</button>
      </>
    );
  }

  export default Example1
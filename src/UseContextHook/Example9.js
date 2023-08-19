import React, {useState} from "react";
import ClassContextComponent from "./ClassContextComponent";
import FunctionContextComponent from "./FunctionContextComponent";

export const ThemeContext = React.createContext()

export default function Example9(){
    const [darkTheme, setDarkTheme] = useState(true)

    function toggleTheme(){
        setDarkTheme(prevDarkTheme => !prevDarkTheme)
    }

    return(
        <>
            <ThemeContext.Provider value={darkTheme}>
                <button onClick={toggleTheme} >Toggle Theme</button>
                <FunctionContextComponent/>
                <ClassContextComponent />
            </ThemeContext.Provider>
        </>
    )





}
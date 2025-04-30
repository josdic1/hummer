import { useState } from "react"
import LoadModeContext from "../contexts/LoadModeContext"


function LoadModeProvider({ children }) {
    const [ isLoading, setIsLoading ] = useState(true)
    const [ inEditMode, setInEditMode,  ] = useState(false)
   

    return (
    <>
    <LoadModeContext.Provider
    value={{ isLoading, setIsLoading, inEditMode, setInEditMode }}>
        {children}
    </LoadModeContext.Provider>
    </>
    )}

    export default LoadModeProvider

import { useState } from "react"
import LoadModeContext from "../contexts/LoadModeContext"


function LoadModeProvider({ children }) {
    const [ isLoading, setIsLoading ] = useState(true)

   

    return (
    <>
    <LoadModeContext.Provider
    value={{ isLoading, setIsLoading }}>
        {children}
    </LoadModeContext.Provider>
    </>
    )}

    export default LoadModeProvider

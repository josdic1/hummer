import { useState, useEffect, useContext } from "react"
import IdeasContext from "../contexts/IdeasContext"
import LoadModeContext from "../contexts/LoadModeContext"

function IdeasProvider({ children }) {
 const { setIsLoading } = useContext(LoadModeContext)
 
  const [ ideas, setIdeas ] = useState([])

  useEffect(() => {
    async function fetchIdeas() {
      try {
        setIsLoading(true) 
        const r = await fetch(`http://localhost:3000/ideas`)
        if (!r.ok) throw new Error("💥 Error")
        const data = await r.json()
        setIdeas(data)
        setIsLoading(false) 
      } catch (error) {
        console.error("❌ Caught error:", error)
        setIsLoading(false) 
      }
    }
  
    fetchIdeas()
  }, [])

    

return (
<>
<IdeasContext.Provider
value={{ ideas }}>
    { children }
</IdeasContext.Provider>
</>
)}

export default IdeasProvider

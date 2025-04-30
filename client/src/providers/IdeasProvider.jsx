import { useState, useEffect, useContext } from "react"
import IdeasContext from "../contexts/IdeasContext"
import LoadModeContext from "../contexts/LoadModeContext"

function IdeasProvider({ children }) {
 const { setIsLoading } = useContext(LoadModeContext)
 
  const [ ideas, setIdeas ] = useState([])
  const [ selectedIdea, setSelectedIdea ] = useState(null)

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

  async function handleCreate(obj) {
    try {
      const r = await fetch(`http://localhost:3000/ideas`, {
        method: 'POST',
        header: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj)
      })
      if (!r.ok) throw new Error("💥 Error")
        const data = await r.json()
      const added = [...ideas, data]
      setIdeas(added)
    }catch (error) {console.error("❌ Caught error:", error);}
  }

  async function handleUpdate(obj) {
    try {
      const r = await fetch(`http://localhost:3000/ideas/${obj.id}`, {
        method: 'PATCH',
        header: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj)
      })
      if (!r.ok) throw new Error("💥 Error")
        const data = await r.json()
      const updated = ideas.map(i => (
        i.id === data.id ? data : i 
      ))
      setIdeas(updated)
    }catch (error) {console.error("❌ Caught error:", error);}
  }

    async function handleDelete(id) {
      try {
        const r = await fetch(`http://localhost:3000/ideas/${id}`, {
          method: 'DELETE'
        })
        if (!r.ok) throw new Error("💥 Error")
        const filtered = ideas.filter(i => i.id !== id)
        setIdeas(filtered)
      }catch (error) {console.error("❌ Caught error:", error);}
    }

return (
<>
<IdeasContext.Provider
value={{ ideas, selectedIdea, setSelectedIdea, handleCreate, handleUpdate, handleDelete }}>
    { children }
</IdeasContext.Provider>
</>
)}

export default IdeasProvider

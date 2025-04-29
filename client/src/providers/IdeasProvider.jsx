import IdeasContext from "../contexts/IdeasContext"

function IdeasProvider({ children }) {
 const [ ideas, setIdeas ] = useState([])

    useEffect(() => {
        fetchIdeas()
    },[])

    async function fetchIdeas() {
        try {
          const r = await fetch(`http://localhost:3000/ideas`)
          if(!r.ok) {
            throw new Error("💥 Error");
          }
          const data = await r.json()
          setIdeas(data)
        }catch (error) {console.error("❌ Caught error:", error);}  
    }


return (
<>
<IdeasContext.Provider
value={{ ideas }}>
    { children }
</IdeasContext.Provider>
</>
)}

export default IdeasProvider

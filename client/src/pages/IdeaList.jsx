import { useState, useEffect, useContext } from "react"
import { useNavigate } from "react-router-dom"
import IdeasContext from "../contexts/IdeasContext"
import IdeaCard from "../components/IdeaCard"
import Filter from "./Filter"
import { toast } from "react-hot-toast"

function IdeaList() {
    const { ideas, handleDelete } = useContext(IdeasContext)

    const [displayList, setDisplayList] = useState(ideas)
    const [ filterValues, setFilterValues] = useState({
        lyrics: "",
        bpm: "",
        status: "all"
    })

    useEffect(() => {
        if (ideas?.length > 0) {
            setDisplayList(ideas)
        }
    }, [ideas])

    const navigate = useNavigate()

    const handleClick = (click, idea) => {
        switch (click) {
            case 'view':
                navigate(`idea/${idea.id}`)
                break;
            case 'edit':
                navigate(`edit/${idea.id}`)
                break;
            case 'delete':
                const confirmed = window.confirm("Are you sure you want to delete this idea?")
                if (confirmed) {
                    handleDelete(idea.id)
                    toast.success("Idea deleted")
                }
                break;
            case 'listen':
                toast("Listening is under construction 🏗")
                break;
            case 'archive':
                toast("Archiving is under construction 🏗")
                break;
            default:
                break;
        }
    }

    const handleFilter = () => {
       const filtered = ideas.reduce((acc, idea) => {
        const matches = {
            lyrics: filterValues.lyrics === "" || idea.lyrics.toLowerCase().includes(filterValues.lyrics.toLowerCase()),

            bpm: filterValues.bpm === "" || idea.bpm.includes(filterValues.bpm),

            status: filterValues.status === "all" || idea.status.toLowerCase() === filterValues.status.toLowerCase()
        }

        return Object.values(matches).every(Boolean) ? [...acc, idea] : acc
       },[])
       setDisplayList(filtered)
    }


    const ideasList = displayList.map(idea => (
        <IdeaCard key={idea.id} idea={idea} onClick={handleClick} />
    ))

    return (
        <>
        <Filter filterValues={filterValues} setFilterValues={setFilterValues} onFilter={handleFilter} />
            <table>
                <thead>
                    <tr>
                        <th> Title </th>
                        <th> Tempo </th>
                        <th> Status </th>
                        <th> Updated </th>
                        <th> View </th>
                        <th> Listen </th>
                        <th> Actions </th>
                    </tr>
                </thead>
                <tbody>
                    {ideasList}
                </tbody>
            </table>
        </>
    )
}

export default IdeaList

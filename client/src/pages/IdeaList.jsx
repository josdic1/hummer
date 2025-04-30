import { useState, useEffect, useContext } from "react"
import { useNavigate } from "react-router-dom"
import LoadModeContext from "../contexts/LoadModeContext"
import IdeasContext from "../contexts/IdeasContext"
import IdeaCard from "../components/IdeaCard"
import { toast } from "react-hot-toast"

function IdeaList({ setIsHidden }) {
    const { ideas, setSelectedIdea, handleDelete } = useContext(IdeasContext)
    const { setInEditMode } = useContext(LoadModeContext)
    const [ displayList, setDisplayList ] = useState(ideas)


    
    useEffect(() => {
        setDisplayList(ideas || [])
    },[ideas])

    const navigate = useNavigate()

    const onButtonAction = (click, idea) => {
        switch(click) {
            case 'view':
                toast('Viewing')
                navigate(`idea/${idea.id}`) 
                break;
            case 'edit':
                toast('Editing')
                setInEditMode(true)
                setSelectedIdea(idea)
                setIsHidden(false)
                break;
                case 'delete':
  const confirmed = window.confirm("Are you sure you want to delete this idea?")
  if (confirmed) {
    handleDelete(idea.id)
    toast.success("Idea deleted")
  }
  break
            case 'archive':
                toast("Archive not yet implemented");
                break;
            case 'listen':
                toast("Listen not yet implemented");
                break;
            default: 
                break;
        }   
        }
    


    const ideasList = ideas.map(idea => (
         <IdeaCard key={idea.id} idea={idea} onButtonAction={onButtonAction}/>
    ))




return (
<>
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
)}

export default IdeaList

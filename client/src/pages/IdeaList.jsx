import { useState, useEffect, useContext } from "react"
import { useNavigate } from "react-router-dom"
import LoadModeContext from "../contexts/LoadModeContext"
import IdeasContext from "../contexts/IdeasContext"
import IdeaCard from "../components/IdeaCard"

function IdeaList() {
    const { ideas } = useContext(IdeasContext)

    const [ displayList, setDisplayList ] = useState(ideas)

    useEffect(() => {
        setDisplayList(ideas || [])
    },[ideas])

    const navigate = useNavigate()

    const onButtonAction = (click) => {
        navigate(`idea/${click}`)
    }


    const ideasList = displayList.map(idea => (
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

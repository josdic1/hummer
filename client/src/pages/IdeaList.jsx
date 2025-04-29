import { useState, useEffect, useContext } from "react"
import LoadModeContext from "../contexts/LoadModeContext"
import IdeaCard from "../components/IdeaCard"

function IdeaList() {
    const { ideas } = useContext(LoadModeContext)

    const [ displayList, setDisplayList ] = useState(ideas)

    useEffect(() => {
        setDisplayList(ideas || [])
    },[ideas])

    const ideasList = displayList.map(idea => (
         <IdeaCard key={idea.id} idea={idea} />
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
                <th> Lyrics </th>
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

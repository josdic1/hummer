import { useState, useEffect, useContext } from "react"
import { useParams } from "react-router-dom"
import IdeasContext from "../contexts/IdeasContext"

function Idea() {
    const { id } = useParams()

    const { ideas } = useContext(IdeasContext)

    const [viewedIdea, setViewedIdea] = useState({
        title: '',
        bpm: '',
        lyrics: '',
        status: '',
        link: ''
    })

    useEffect(() => {
        const found = ideas.find(i => i.id === id)
        if (found) {
          setViewedIdea({
            title: found.title,
            bpm: found.bpm,
            lyrics: found.lyrics,
            status: found.status,
            link: found.link,
          })
        }
      }, [ideas, id])

    return (
    <>
    <p>{viewedIdea.title}</p>
    <p>{viewedIdea.bpm}</p>
    <p>{viewedIdea.status}</p>
    <p>{viewedIdea.lyrics}</p>
    <a href={viewedIdea.link}>Listen</a>
    <p>Created {viewedIdea?.created_on || "n/a"}</p>
    <p>Updated {viewedIdea?.modified_on || "n/a"}</p>
    </>
    )}

    export default Idea


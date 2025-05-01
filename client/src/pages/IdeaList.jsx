import React from 'react'
import { useState, useEffect, useContext } from "react"
import { useNavigate } from "react-router-dom"
import IdeasContext from "../contexts/IdeasContext"
import IdeaCard from "../components/IdeaCard"
import Filter from "./Filter"
import { toast } from "react-hot-toast"

function IdeaList() {
    const { ideas, handleDelete, handleFavorite, isFavorite, fetchIdeas} = useContext(IdeasContext)


    const [ filterValues, setFilterValues] = useState({
        lyrics: "",
        bpm: "",
        status: "all",
        favorite: false
    })
    const [showArchived, setShowArchived] = useState(false)





    const navigate = useNavigate()



    const handleClick = (click, idea) => {
        switch (click) {
            case 'favorite':
                handleFavorite(idea)
                break;
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


    const filteredIdeas = ideas.filter(idea => {
        const matches = {
          lyrics: filterValues.lyrics === "" || idea.lyrics.toLowerCase().includes(filterValues.lyrics.toLowerCase()),
          bpm: filterValues.bpm === "" || idea.bpm.includes(filterValues.bpm),
          status: filterValues.status === "all" || idea.status === filterValues.status,
          favorite: !filterValues.favorite || idea.favorite,
          archived: showArchived || idea.status !== "archived"
        }
        return Object.values(matches).every(Boolean)
      })

    const handleClearFilter = () => {
        setFilterValues({
            lyrics: "",
            bpm: "",
            status: "all",
            favorite: false
        })
    }

    const ideasList = filteredIdeas.map(idea => (
        <IdeaCard key={idea.id} idea={idea} onClick={handleClick} isFavorite={isFavorite} />
      ))

    return (
        <>
        <Filter
  filterValues={filterValues}
  setFilterValues={setFilterValues}
  onClearFilter={handleClearFilter}
/>

<button className="form__button form__button--toggle" onClick={() => setShowArchived(prev => !prev)}>
  {showArchived ? "Hide Archived" : "Show Archived"}
</button>
            <table>
                <thead>
                    <tr>
                        <th> ★ </th>
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

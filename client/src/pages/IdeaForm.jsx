import { useState, useEffect, useContext } from "react"
import IdeasContext from "../contexts/IdeasContext"
import LoadModeContext from "../contexts/LoadModeContext"

function IdeaForm({ setIsHidden }) {
 
    const { selectedIdea, setSelectedIdea, handleCreate, handleUpdate } = useContext(IdeasContext)

    const { inEditMode, setInEditMode  } = useContext(LoadModeContext)

    const [formData, setFormData] = useState({
        title: '',
        bpm: '',
        status: '',
        lyrics: '',
        link: ''
    })
    

    useEffect(() => {
       if(selectedIdea?.id) setFormData(selectedIdea)
        
    },[inEditMode, selectedIdea])

    const onChange = (e) => {
        const { id, value } = e.currentTarget
        setFormData(prev => ({
            ...prev,
            [id]: value
        }))
    }


    const onSubmit = (e) => {
        e.preventDefault()
        if(inEditMode) {
            const obj = {
                ...formData,
                id: selectedIdea?.id || "",
            }
            handleUpdate(obj)
        }
        if(!inEditMode) {
            const obj = {
            ...formData, 
        }
        handleCreate(obj)
    }
    onClear()
    setIsHidden(prev => !prev)
    setInEditMode(false)
    }

    const onClear = () => {
        setFormData({
            title: '',
            bpm: '',
            status: '',
            lyrics: '',
            link: ''
    })
    setSelectedIdea(null)
}


    const onClick = (e) => {
        const { name } = e.currentTarget
        if(name === "cancel") {
            setIsHidden(prev => !prev)
            setInEditMode(false)
            setSelectedIdea(null)
            return 
        }
            if (name === "clear") {
                onClear()
            }
    }


    return (
    <>
      <form onSubmit={onSubmit}>
        <label htmlFor="title">Title:  </label>
        <input type="text" id="title" onChange={onChange} value={formData.title} placeholder="Idea Title..." /><br></br>
        <label htmlFor="bpm">Tempo:  </label>
        <input type="text" id="bpm" onChange={onChange} value={formData.bpm} placeholder="Idea Tempo..." /><br></br>
        <label htmlFor="status">Status:  </label>
        <input type="text" id="status" onChange={onChange} value={formData.status} placeholder="Status..." /><br></br>
        <label htmlFor="lyrics">Lyrics:  </label>
        <input type="text" id="lyrics" onChange={onChange} value={formData.lyrics} placeholder="Lyrics..." /><br></br>
        <label htmlFor="link">Audio:  </label>
        <input type="url" id="link" onChange={onChange} value={formData.link} placeholder="Link to Audio..." /><br></br>
        <div>
            <button type='submit' name='submit'> {inEditMode ? 'Update' : 'Create'} </button>
            <button type='button' onClick={onClick} name='clear'> Clear </button>
            <button type='button' onClick={onClick} name='cancel'> Cancel </button>
        </div>
      </form>
    </>
    )}

    export default IdeaForm


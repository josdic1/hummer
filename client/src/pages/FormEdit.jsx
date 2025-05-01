
import { useState, useEffect, useContext } from "react"
import IdeasContext from "../contexts/IdeasContext"
import Form from "../components/Form"
import { useNavigate, useParams } from "react-router-dom"

function FormEdit() {
    const {ideas } = useContext(IdeasContext)

    const { id } = useParams()

    const [formData, setFormData] = useState({
         id: '',
        title: '',
         bpm: '',
         status: '',
         lyrics: '',
         link: ''
     })

     const navigate = useNavigate()

     useEffect(() => {
        const found = ideas.find(i => i.id === id)
        setFormData(found)
     },[id, ideas])

     const handleChange = (e) => {

     }

     const onClear = () => {
        setFormData({
        id: '',
       title: '',
        bpm: '',
        status: '',
        lyrics: '',
        link: ''
    })
    }

     const onSubmit = (e) => {
         e.preventDefault()

     }

     const onClick = (e) => {
        const { name } = e.currentTarget
        if(name === "cancel") {
        navigate('/')
        onClear()
     }

     if(name === "clear") {
        onClear()
     }}



return (
<>
<Form buttonText={"Update Idea"} onClick={onClick} onChange={handleChange} onSubmit={onSubmit} formData={formData}/>
</>
)}

export default FormEdit

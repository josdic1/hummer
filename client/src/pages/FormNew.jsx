
import { useState, useEffect, useContext } from "react"
import IdeasContext from "../contexts/IdeasContext"
import Form from "../components/Form"

function FormNew() {
    const { } = useContext(IdeasContext)

       const [formData, setFormData] = useState({
            title: '',
            bpm: '',
            status: '',
            lyrics: '',
            link: ''
        })

        const handleChange = (e) => {
            
        }

        const onClick = (e) => {

        }

        const onSubmit = (e) => {
            e.preventDefault()
        }

return (
<>
<Form buttonText={"Add Idea"} onClick={onClick} onChange={handleChange} onSubmit={onSubmit} formData={formData}/>
</>
)}

export default FormNew

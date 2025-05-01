import React from 'react'
import { useNavigate } from "react-router-dom"
import { useState, useEffect, useContext } from "react"
import IdeasContext from "../contexts/IdeasContext"
import Form from "../components/Form"

function FormNew() {
    const { handleCreate } = useContext(IdeasContext)

    const navigate = useNavigate()

       const [formData, setFormData] = useState({
            title: '',
            bpm: '',
            status: '',
            lyrics: '',
            link: ''
        })
        const [selectedFile, setSelectedFile] = useState(null)

        const onFileChange = (e) => {
          const file = e.target.files[0]
          if (file) {
            setSelectedFile(file)
          }
        }
        
        const onClear = () => {
            setFormData({
                title: '',
            bpm: '',
            status: '',
            lyrics: '',
            link: ''
            })
        }

        const onCancel = () => {
            onClear()
            navigate('/')
        }

        const handleChange = (e) => {
            const { id, value} = e.currentTarget  
            setFormData(prev => ({
                ...prev,
                [id]: value
            })) 
        }

        const onClick = (e) => {
            const { name } = e.currentTarget
            if(name === 'clear') {
                onClear()
            } else {
            if(name === 'cancel') {
                onCancel()
            }
            }
        }

        const onSubmit = (e) => {
            e.preventDefault()
            const newIdea = formData
            handleCreate(newIdea)
            onCancel()
        }

return (
<>
<Form buttonText={"Add Idea"} onClick={onClick} onChange={handleChange} onSubmit={onSubmit} formData={formData} onFileChange={onFileChange}/>
</>
)}

export default FormNew

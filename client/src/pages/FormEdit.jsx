import React from 'react'
import { useState, useEffect, useContext } from "react"
import IdeasContext from "../contexts/IdeasContext"
import Form from "../components/Form"
import { useNavigate, useParams } from "react-router-dom"

function FormEdit() {
    const {ideas, handleUpdate } = useContext(IdeasContext)

    const { id } = useParams()

    const [formData, setFormData] = useState({
         id: '',
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
        {selectedFile && (
            <audio controls className="audio-player">
              <source src={URL.createObjectURL(selectedFile)} type={selectedFile.type} />
            </audio>
          )}
     const navigate = useNavigate()

     useEffect(() => {
        const found = ideas.find(i => i.id === id)
        setFormData(found)
     },[id, ideas])

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

  const onCancel = () => {
      onClear()
      navigate('/')
  }

  const handleChange = (e) => {
      const { id, value} = e.currentTarget  
      setFormData(prev => ({
          ...prev,
          [id]: value,
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
      const updatedIdea = formData
      handleUpdate(updatedIdea)
      onCancel()
  }



return (
<>
<Form buttonText={"Update Idea"} onClick={onClick} onChange={handleChange} onSubmit={onSubmit} formData={formData} onFileChange={onFileChange}/>
</>
)}

export default FormEdit

import React from 'react'
import { useState, useEffect, useContext } from "react"
import { useParams } from "react-router-dom"
import IdeasContext from "../contexts/IdeasContext"
import { formatDate } from '../utils/formatDate'

function Idea() {
    const { id } = useParams()

    const { ideas } = useContext(IdeasContext)

    const [viewedIdea, setViewedIdea] = useState({
        title: '',
        bpm: '',
        lyrics: '',
        status: '',
        link: '',
        created_on: '',
        modified_on: ''
    })

    useEffect(() => {
        const found = ideas.find(i => i.id === id)
        if (found) {
          setViewedIdea({
            ...found
          })
        }
      }, [ideas, id])

    return (
    <>

  <section className="idea-view">
    <p className="form__label">Title: <span className="form__input">{viewedIdea.title}</span></p>
    <p className="form__label">Tempo: <span className="form__input">{viewedIdea.bpm}</span></p>
    <p className="form__label">Status: <span className="form__input">{viewedIdea.status}</span></p>
    <p className="form__label">Lyrics: <span className="form__input">{viewedIdea.lyrics}</span></p>
    <p className="form__label">Audio: <a className="form__input" href={viewedIdea.link}>Listen</a></p>
    <p className="form__label">Created: <span className="form__input">{formatDate(viewedIdea.created_on)}</span></p>
    <p className="form__label">Updated: <span className="form__input">{formatDate(viewedIdea.modified_on)}</span></p>
  </section>

    </>
    )}

    export default Idea


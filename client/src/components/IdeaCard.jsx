import React from 'react'
import { useState } from "react"
import { formatDate } from '../utils/formatDate'

function IdeaCard({ idea, onClick }) {
  const [selectValue, setSelectValue] = useState("")

  const onAction = (e) => {
    const { name, value } = e.currentTarget
    const clickValue = value || name
    onClick(clickValue, idea)
    setSelectValue("")
  }

  return (
    <>
      <tr className="idea-row">
        <td className="idea-row__cell">
          <button
            className="idea-row__button idea-row__button--favorite"
            type="button"
            id={idea.id}
            name="favorite"
            onClick={onAction}
          >
            {idea.favorite ? "★" : "☆"}
          </button>
        </td>
        <td className="idea-row__cell">{idea.title}</td>
        <td className="idea-row__cell">{idea.bpm}</td>
        <td className="idea-row__cell">{idea.status}</td>
        <td className="idea-row__cell">{formatDate(idea.modified_on)}</td>
        <td className="idea-row__cell">
          <button
            className="idea-row__button idea-row__button--view"
            type="button"
            name="view"
            onClick={onAction}
          >
          📄
          </button>
        </td>
        <td className="idea-row__cell">
          <button
            className="idea-row__button idea-row__button--listen"
            type="button"
            name="listen"
            onClick={onAction}
          >
            🔈
          </button>
        </td>
        <td className="idea-row__cell">
          <select
            className="idea-row__select"
            name="actions"
            onChange={onAction}
            value={selectValue}
          >
            <option value="" disabled>Actions</option>
            <option value="edit">Edit</option>
            <option value="delete">Delete</option>
            <option value="archive">Archive</option>
          </select>
        </td>
      </tr>
    </>
  )
}

export default IdeaCard

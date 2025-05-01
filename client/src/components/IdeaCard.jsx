import { useState } from "react"

function IdeaCard({ idea, onClick }) {
  const [ selectValue, setSelectValue ] = useState("")

  const onAction = (e) => {
    const { name, value } = e.currentTarget
    const clickValue = value || name
    onClick(clickValue, idea)
    setSelectValue("")
  }
 


  return (
        <>
      <tr>
        <td> {idea.title} </td>
        <td> {idea.bpm} </td>
        <td> {idea.status} </td>
        <td> {idea.modified_on} </td>
        <td>
          <button type='button' name='view' onClick={onAction}> 🖻 </button>
        </td>
          <td>
            <button type='button' name='listen' onClick={onAction}> 🔈
            </button>
        </td>
        <td>
          <select name="actions" onChange={onAction} value={selectValue}>
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


import { useState } from "react"
import IdeaForm from "./IdeaForm"
import IdeaList from "./IdeaList"

function DashBoard() {
    const [ isHidden, setIsHidden ] = useState(true)

    const onClick = () => {
      setIsHidden(prev => !prev)
    }

  return (
    <>
    {isHidden ? <button type="button" onClick={onClick}>Show Form</button>: ""}
      { isHidden ? "" : <IdeaForm isHidden={isHidden} setIsHidden={setIsHidden}/> }
      <IdeaList isHidden={isHidden} setIsHidden={setIsHidden}/>
      
    </>
  )
}

export default DashBoard
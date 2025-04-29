import { useContext } from "react"
import hummerLogo from "../assets/hummerLogo.svg"
import Loader from "./Loader"
import LoadModeContext from "../contexts/LoadModeContext"

import DashBoard from "../pages/Dashboard"

function AppContent() {
    const { isLoading } = useContext(LoadModeContext)

  return (
    <>

  <img src={hummerLogo} className='logo'/>

{isLoading ? <Loader /> : <DashBoard /> }

    </>
  )
}

export default AppContent
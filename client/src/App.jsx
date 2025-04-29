import LoadModeProvider from "./providers/LoadModeProvider"
import NavBar from "./components/NavBar"
import { Outlet } from "react-router-dom"


function App() {

  return (
    <>
      <header>
    <NavBar />
          </header>
      <main>
      <LoadModeProvider>
        <Outlet />
      </LoadModeProvider>
      </main>
    </>
  )
}

export default App

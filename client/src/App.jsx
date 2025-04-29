import NavBar from "./components/NavBar"
import LoadModeProvider from "./providers/LoadModeProvider"
import IdeasProvider from "./providers/IdeasProvider"
import { Outlet } from "react-router-dom"


function App() {
  return (
    <>
    <header>
<NavBar />
    </header>
    <main>
        <LoadModeProvider>
          <IdeasProvider>
          <Outlet />
          </IdeasProvider>
        </LoadModeProvider>
        </main>
    </>
  )
}

export default App

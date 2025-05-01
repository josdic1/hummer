import React from 'react'
import NavBar from "./components/NavBar"
import LoadModeProvider from "./providers/LoadModeProvider"
import IdeasProvider from "./providers/IdeasProvider"
import { Outlet } from "react-router-dom"
import { Toaster } from "react-hot-toast"

function App() {
  return (
    <>
       <Toaster position="top-center" reverseOrder={false} />
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

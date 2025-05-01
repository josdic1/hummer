import React from 'react'
import { useRouteError } from "react-router-dom"
import NavBar from "../components/NavBar"

function Error() {
const error = useRouteError()

return (
<>
<header>
<NavBar />
</header>
<main className='error-page'>
   
<p className='error-text'>{error?.status || ''} [status]</p>
<p className='error-text'>{error?.statusText || ''} [statusText]</p>
<p className='error-text'>{error?.message|| ''} [message]</p>
</main>
</>
)}

export default Error

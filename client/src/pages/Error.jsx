import { useRouteError } from "react-router-dom"
import NavBar from "../components/NavBar"

function Error() {
const error = useRouteError()

return (
<>
<header>
<NavBar />
</header>
<main>
   
<p>{error?.status || ''} [status]</p>
<p>{error?.statusText || ''} [statusText]</p>
<p><b> {error?.message|| ''}</b> [message]</p>
</main>
</>
)}

export default Error

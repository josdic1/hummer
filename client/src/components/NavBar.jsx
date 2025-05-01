import { NavLink } from "react-router-dom"

function NavBar() {

return (
<>
<nav>
<NavLink to='/'> Home </NavLink>
<NavLink to='new'> New </NavLink>
<NavLink to='loader'> ↻ </NavLink>
</nav>
</>
)}

export default NavBar

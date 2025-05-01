
import React from 'react'
import { NavLink } from 'react-router-dom'

function NavBar() {
   
return (
<>
<nav>
<NavLink className="nav-link" to='/'> Home </NavLink>
<NavLink className="nav-link" to='new'> New </NavLink>
<NavLink className="nav-link" to='loader'> ↻ </NavLink>

</nav>
</>
)}

export default NavBar

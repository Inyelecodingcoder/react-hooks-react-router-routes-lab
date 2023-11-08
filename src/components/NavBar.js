import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
  <div>{/*{code here}*/}
  <NavLink to={'/'}>
  <h1>Home Page</h1>
  </NavLink>
  <NavLink to={'/movies'}><h1>Movies Page</h1></NavLink>
  <NavLink to={'/directors'}><h1>Directors Page</h1></NavLink>
  <NavLink to={'actors'}><h1>Actors Page</h1></NavLink>
  </div>
  )
}

export default NavBar;

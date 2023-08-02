import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  // return <div>
  return <div className="navbar">
    <NavLink to = "/" exact > Home </NavLink>
    <NavLink to = "/movies" exact > movies </NavLink>
    <NavLink to = "/directors" exact > directors </NavLink>
    <NavLink to = "/actors" exact > actors </NavLink>
    <NavLink to = "/movies" exact > Movies </NavLink>
    <NavLink to = "/directors" exact > Directors </NavLink>
    <NavLink to = "/actors" exact > Actors </NavLink>
  </div>;
}

export default NavBar;
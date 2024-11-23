import routes from "@/router/constants/routes";
import React from "react";
import { NavLink } from "react-router-dom";
import "./NavLinks.css";
const NavLinks = (props) => {
  return (
    <ul className="nav-links">
      <li>
        <NavLink to={routes.users}>All users</NavLink>
      </li>
      <li>
        <NavLink to={routes.userPlace}>My places </NavLink>
      </li>
      <li>
        <NavLink to={routes.newPlaces}> ADD Place </NavLink>
      </li>
      <li>
        <NavLink to={routes.newPlaces}> LOG IN </NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;

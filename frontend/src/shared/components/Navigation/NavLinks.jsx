import React, { useContext } from "react";
import routes from "@/router/constants/routes";
import { NavLink } from "react-router-dom";
import "./NavLinks.css";
import { AuthContext } from "@/shared/context/authContext";

const NavLinks = (props) => {
  const auth = useContext(AuthContext);

  return (
    <ul className="nav-links">
      <li>
        <NavLink to={routes.users}>All users</NavLink>
      </li>
      {auth.isLoggedIn && (
        <>
          <li>
            <NavLink to={routes.userPlace}>My places </NavLink>
          </li>

          <li>
            <NavLink to={routes.newPlaces}> ADD Place </NavLink>
          </li>
        </>
      )}
      {!auth.isLoggedIn && (
        <li>
          <NavLink to={routes.auth}> AUTHENTICATE </NavLink>
        </li>
      )}
    </ul>
  );
};

export default NavLinks;

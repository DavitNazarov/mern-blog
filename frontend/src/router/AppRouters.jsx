import React from "react";
import { Route, Routes } from "react-router-dom";
import { appRoutes } from "./config/routes";
import UserPlaces from "@/places/pages/UserPlaces";
import routes from "./constants/routes";
import NewPlace from "@/places/pages/NewPlace";

const AppRouters = () => {
  return (
    // Creating App routers
    <Routes>
      {/* // Dynamic Routes */}
      <Route path={routes.userPlace}>
        <Route path=":id" element={<UserPlaces />} />
      </Route>
      {/* // Mapping  Route */}
      {appRoutes.map((route) => (
        <Route key={route.path} path={route.path} Component={route.Element} />
      ))}
    </Routes>
  );
};

export default AppRouters;

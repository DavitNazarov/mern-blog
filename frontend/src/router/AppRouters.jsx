import React from "react";
import { Route, Routes } from "react-router-dom";
import { appRoutes } from "./config/routes";

const AppRouters = () => {
  console.log(appRoutes);

  return (
    // Creating App routers
    <Routes>
      {/* // Mapping  Route */}
      {appRoutes.map((route) => (
        <Route key={route.path} path={route.path} Component={route.Element} />
      ))}
    </Routes>
  );
};

export default AppRouters;

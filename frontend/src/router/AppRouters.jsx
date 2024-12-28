import React from "react";
import { Route, Routes } from "react-router-dom";
import { appRoutes, privateRoutes } from "./config/routes";

const AppRouters = (props) => {
  const privetRoute = (
    <>
      {privateRoutes.map((route) => (
        <Route key={route.path} path={route.path} Component={route.Element} />
      ))}
    </>
  );
  const publicRoute = (
    <>
      {appRoutes.map((route) => (
        <Route key={route.path} path={route.path} Component={route.Element} />
      ))}
    </>
  );
  if (props.checkValidity) {
    return <Routes>{privetRoute}</Routes>;
  } else {
    return <Routes>{publicRoute}</Routes>;
  }
};

export default AppRouters;

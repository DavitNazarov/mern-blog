import routes from "@/router/constants/routes";
import Card from "@/shared/components/UI/Card";
import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="not_found--box">
      <Card style={{ padding: "20px" }}>
        <h1 className="not_found--title">Oops! Page not Found </h1>
        <p className="not_found--redirect">
          Click {"->"}
          <Link className="not_found--redirect" to={routes.users}>
            {""} Home Page
          </Link>
        </p>
      </Card>
    </div>
  );
};

export default NotFound;

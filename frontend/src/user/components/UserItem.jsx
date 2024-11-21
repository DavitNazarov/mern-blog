import React from "react";
import { Link } from "react-router-dom";
import "./userItem.css";
import Avatar from "@/shared/components/UI/Avatar";
import Card from "@/shared/components/UI/Card";
import routes from "@/router/constants/routes";
//* UserItem function gets props from UsersList.jsx Page
const UserItem = (props) => {
  // return user list that contains name, image and placeCount (how many places user has posted)
  return (
    <li className="user-item">
      <Card className="user-item__content">
        <Link to={`${routes.userPlace.replace(":id", props.id)}`}>
          <div className="user-item__image">
            <Avatar image={props.image} alt={props.image} />
          </div>
          <div className="user-item__info">
            <h2>{props.name}</h2>
            <h3>
              {props.placeCount} {props.placeCount === 1 ? "Place" : "Places"}
            </h3>
          </div>
        </Link>
      </Card>
    </li>
  );
};

export default UserItem;

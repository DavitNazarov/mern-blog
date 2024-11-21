import React from "react";
import "./userList.css";
import UserItem from "./UserItem";
import Card from "@/shared/components/UI/Card";

//* usersList function gets prop from Users.jsx Page
const UsersList = (props) => {
  //* if user data is 0, user will see NoT Found
  if (props.items.length === 0) {
    return (
      <div className="center">
        <Card>
          <h2>Oops! Can not find any user! </h2>
        </Card>
      </div>
    );
  }
  //* if items is not equal 0, it will return ul, that mapping list of user items
  return (
    <ul className="users-list">
      {props.items.map((user) => (
        <UserItem
          key={user.id}
          id={user.id}
          image={user.image}
          name={user.name}
          placeCount={user.places}
        />
      ))}
    </ul>
  );
};

export default UsersList;

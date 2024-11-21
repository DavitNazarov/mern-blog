import React from "react";
import "./userList.css";
import UserItem from "./UserItem";

//* usersList function gets prop from Users.jsx Page
const UsersList = (props) => {
  //* if user data is 0, user will see NoT Found
  if (props.items.length === 0) {
    return (
      <div className="center">
        <h2>Users are not Found! </h2>
      </div>
    );
  }
  //* if items is not equal 0, it will return ul, that mapping list of user items
  return (
    <ul className="user-item">
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

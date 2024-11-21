import React from "react";
import UsersList from "../components/UsersList";

//* User page on '/'(main) Page is returning UsersList that has prop named as items
//* prop items gets data of users
const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "David",
      image:
        "https://images.unsplash.com/photo-1730125477357-03a906bde005?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D",
      places: 3,
    },
  ];
  return <UsersList items={USERS} />;
};

export default Users;

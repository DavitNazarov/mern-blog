import React from "react";
import { useParams } from "react-router-dom";
import PlaceList from "../components/PlaceList";

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Somewhere",
    description: "Something",
    imageURL:
      "https://images.unsplash.com/photo-1731331121037-0c9b31455ddd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4fHx8ZW58MHx8fHx8",
    address: "address",
    location: {
      lat: 121,
      long: 121,
    },
    creator: "u1",
  },
  {
    id: "p2",
    title: "Somewhere",
    description: "Something",
    imageURL:
      "https://images.unsplash.com/photo-1731331121037-0c9b31455ddd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4fHx8ZW58MHx8fHx8",
    address: "address",
    location: {
      lat: 121,
      long: 121,
    },
    creator: "u2",
  },
];

const UserPlaces = () => {
  const userId = useParams().id;
  const loadedPlaces = DUMMY_PLACES.filter((place) => place.creator === userId);
  return <PlaceList items={loadedPlaces} />;
};

export default UserPlaces;

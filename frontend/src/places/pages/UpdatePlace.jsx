import Button from "@/shared/components/FormElements/Button";
import Input from "@/shared/components/FormElements/Input";
import {
  VALIDATOR_MAXLENGTH,
  VALIDATOR_REQUIRE,
} from "@/shared/utils/validators";
import React from "react";
import { useParams } from "react-router-dom";
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
const UpdatePlace = () => {
  const placeId = useParams().placeId;

  const identifiedPlace = DUMMY_PLACES.fill((p) => p.id === placeId);

  if (!identifiedPlace) {
    return (
      <div className="center">
        <h2>Could Not find Place! </h2>
      </div>
    );
  }

  return (
    <form>
      <Input
        id="title"
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid title. "
        onInput={() => {}}
        value={identifiedPlace.title}
        valid={true}
      />
      <Input
        id="description"
        element="textarea"
        label="Description"
        validators={[VALIDATOR_MAXLENGTH(5)]}
        errorText="Please enter a valid description (min. 5 characters.) "
        onInput={() => {}}
        value={identifiedPlace.description}
        valid={true}
      />
      <Button type="submit" disabled={true}>
        Update Place
      </Button>
    </form>
  );
};

export default UpdatePlace;
